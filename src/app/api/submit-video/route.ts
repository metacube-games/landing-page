import { NextResponse } from 'next/server';

// Validates a YouTube URL
function validateYouTubeUrl(url: string) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11;
}

// Function to send message to Telegram
async function sendToTelegram(message: string) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Telegram bot token or chat ID is missing from environment variables.');
        return false;
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML' // Using HTML for bold tags and links
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to send Telegram notification:', errorData);
            return false;
        }
        return true;
    } catch (error) {
        console.error('Telegram notification error:', error);
        return false;
    }
}

// In-memory storage for submissions (for development GET request)
let submissions: any[] = [];

// GET handler to retrieve submissions (for development)
export async function GET() {
    return NextResponse.json({
        success: true,
        submissions
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, videoLink, videoId, comment } = body;

        // --- Input Validation ---
        if (!videoLink) {
            return NextResponse.json(
                { success: false, message: 'YouTube video link is required' },
                { status: 400 }
            );
        }
        if (!validateYouTubeUrl(videoLink)) {
            return NextResponse.json(
                { success: false, message: 'Invalid YouTube URL' },
                { status: 400 }
            );
        }
        // Email is optional, but if provided, validate it
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email format (if provided)' },
                { status: 400 }
            );
        }

        // --- Prepare submission data ---
        const submissionData = {
            email: email || 'Not provided', // Handle empty email for Telegram
            videoLink,
            videoId,
            comment: comment || 'No description provided',
            submittedAt: new Date().toISOString()
        };

        // Store in-memory for GET /api/submit-video (development)
        submissions.push(submissionData);
        console.log('Video submission received:', submissionData);

        // --- Send to Telegram ---
        const telegramMessage = `
<b>🎬 New Video Submission 🎬</b>

<b>Email:</b> ${submissionData.email}
<b>Video Link:</b> <a href="${videoLink}">${videoLink}</a>
<b>Video ID:</b> ${videoId}
<b>Description:</b> ${submissionData.comment}
<b>Submitted:</b> ${new Date(submissionData.submittedAt).toLocaleString()}
`;

        const telegramSent = await sendToTelegram(telegramMessage);
        if (telegramSent) {
            console.log('Submission successfully sent to Telegram.');
        } else {
            console.warn('Submission was processed, but failed to send to Telegram.');
        }

        // --- Return success response ---
        return NextResponse.json({
            success: true,
            message: 'Video submission received successfully' + (telegramSent ? ' and sent to Telegram.' : '. Failed to send to Telegram.'),
            notificationSent: telegramSent
        });

    } catch (error) {
        console.error('Error processing video submission:', error);
        // Ensure error is an instance of Error for consistent message access
        const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
        return NextResponse.json(
            { success: false, message: `Server error processing submission: ${errorMessage}` },
            { status: 500 }
        );
    }
} 
import { NextResponse } from 'next/server';

/**
 * Validates a video URL based on the platform
 * @param url - The video URL to validate
 * @param platform - The platform type (youtube, twitch, kick, or other)
 * @returns boolean indicating if the URL is valid for the given platform
 */
function validateVideoUrl(url: string, platform: string = 'youtube'): boolean {
    if (platform === 'youtube') {
        // YouTube URL validation
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return Boolean(match && match[7] && match[7].length === 11);
    } else if (platform === 'twitch') {
        // Basic Twitch URL validation
        const regExp = /(?:www\.)?twitch\.tv\/(?:videos\/(\d+)|(\w+))/;
        return regExp.test(url);
    } else if (platform === 'kick') {
        // Basic Kick URL validation
        const regExp = /(?:www\.)?kick\.com\/(\w+)/;
        return regExp.test(url);
    } else {
        // Generic URL validation for other platforms
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    }
}

/**
 * Sends a notification message to Telegram
 * @param message - The formatted message to send
 * @returns Promise<boolean> indicating success or failure
 */
async function sendToTelegram(message: string): Promise<boolean> {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        // Missing credentials - log to server error logs, not console
        if (process.env.NODE_ENV === 'development') {
            console.warn('[Telegram] Bot token or chat ID is missing from environment variables.');
        }
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
            if (process.env.NODE_ENV === 'development') {
                console.error('[Telegram] Failed to send notification:', errorData);
            }
            return false;
        }
        return true;
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('[Telegram] Notification error:', error);
        }
        return false;
    }
}

/**
 * Type definition for video submission data
 */
interface VideoSubmission {
    email: string;
    videoLink: string;
    videoId: string | false;
    platform: string;
    comment: string;
    submittedAt: string;
}

// In-memory storage for submissions (for development GET request)
const submissions: VideoSubmission[] = [];

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
        const { email, videoLink, videoId, platform = 'youtube', comment } = body;

        // --- Input Validation ---
        if (!videoLink) {
            return NextResponse.json(
                { success: false, message: 'Video link is required' },
                { status: 400 }
            );
        }

        if (!validateVideoUrl(videoLink, platform)) {
            return NextResponse.json(
                { success: false, message: `Invalid ${platform} URL` },
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
            platform,
            comment: comment || 'No description provided',
            submittedAt: new Date().toISOString()
        };

        // Store in-memory for GET /api/submit-video (development)
        submissions.push(submissionData);
        if (process.env.NODE_ENV === 'development') {
            console.log('[API] Video submission received:', submissionData);
        }

        // --- Send to Telegram ---
        const telegramMessage = `
<b>🎬 New Video Submission 🎬</b>

<b>Platform:</b> ${platform.toUpperCase()}
<b>Email:</b> ${submissionData.email}
<b>Video Link:</b> <a href="${videoLink}">${videoLink}</a>
<b>Video ID:</b> ${videoId}
<b>Description:</b> ${submissionData.comment}
<b>Submitted:</b> ${new Date(submissionData.submittedAt).toLocaleString()}
`;

        const telegramSent = await sendToTelegram(telegramMessage);
        if (process.env.NODE_ENV === 'development') {
            if (telegramSent) {
                console.log('[API] Submission successfully sent to Telegram.');
            } else {
                console.warn('[API] Submission was processed, but failed to send to Telegram.');
            }
        }

        // --- Return success response ---
        return NextResponse.json({
            success: true,
            message: 'Video submission received successfully' + (telegramSent ? ' and sent to Telegram.' : '. Failed to send to Telegram.'),
            notificationSent: telegramSent
        });

    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('[API] Error processing video submission:', error);
        }
        // Ensure error is an instance of Error for consistent message access
        const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
        return NextResponse.json(
            { success: false, message: `Server error processing submission: ${errorMessage}` },
            { status: 500 }
        );
    }
} 
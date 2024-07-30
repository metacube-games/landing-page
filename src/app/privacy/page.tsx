import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-8 text-green-400">
            Metacube Privacy Policy
          </h1>

          <div className="space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Metacube, a platform revolutionizing the gaming
                industry with blockchain technology. This privacy policy
                explains how we collect, use, store, and protect your personal
                information when you use Metacube's services. By using our
                services, you agree to the terms outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                1. Information Collection
              </h2>
              <p className="text-gray-300 leading-relaxed">
                When you use Metacube, we collect necessary information to
                provide and improve our services. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Your name and email address (obtained through Google login)
                </li>
                <li>Blockchain wallet address</li>
                <li>
                  Data related to your in-game activities and transactions
                </li>
                <li>
                  Technical information such as IP address and device
                  information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                2. Information Use
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Operate and improve Metacube</li>
                <li>Process transactions</li>
                <li>Provide customer support</li>
                <li>Personalize your gaming experience</li>
                <li>Develop new features</li>
                <li>Communicate important updates and announcements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                3. Data Storage and Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your personal information is stored on secure servers with
                restricted access. We implement industry-standard security
                measures to protect your data from unauthorized access or
                breaches. However, no method of transmission over the Internet
                or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                4. Blockchain Transactions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Please note that blockchain transactions are public by nature.
                While we protect your personal information, transaction details
                on the blockchain are visible to all participants. Exercise
                caution when conducting blockchain transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                5. Google Login
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use Google login for authentication. When you log in with
                Google, we only access your basic profile information (name and
                email address). We do not access or store your Google password
                or other sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                6. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as your account
                is active or as needed to provide you services. If you wish to
                cancel your account or request that we no longer use your
                information, please contact us at support@metacube.com. We will
                retain and use your information as necessary to comply with our
                legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                7. User Rights and Choices
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccuracies in your personal data</li>
                <li>Delete your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Request a copy of your personal data</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                To exercise these rights or for any privacy-related inquiries,
                please contact our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                8. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Metacube is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If you are under 13, please do not use or provide any
                information on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any significant changes by posting the new privacy
                policy on this page and updating the "Last Updated" date at the
                top of this page. You are advised to review this privacy policy
                periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                10. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions or concerns about this privacy policy
                or our data handling practices, please contact our support team
                at{" "}
                <a
                  href="mailto:support@metacube.com"
                  className="text-green-400 hover:underline"
                >
                  support@metacube.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

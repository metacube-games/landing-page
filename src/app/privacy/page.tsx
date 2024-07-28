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
                information when you use Metacube's services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                1. Information Collection
              </h2>
              <p className="text-gray-300 leading-relaxed">
                When you use Metacube, we collect necessary information to
                provide and improve our services. This may include your name,
                email address, and blockchain wallet address. We also collect
                data related to your in-game activities and transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                2. Information Use
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use your information to operate and improve Metacube, process
                transactions, and provide customer support. Your data helps us
                personalize your gaming experience and develop new features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                3. Data Storage and Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your personal information is stored on secure servers with
                restricted access. We implement industry-standard security
                measures to protect your data from unauthorized access or
                breaches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                4. Blockchain Transactions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Please note that blockchain transactions are public by nature.
                While we protect your personal information, transaction details
                on the blockchain are visible to all participants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                5. User Rights and Choices
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, correct, or delete your personal
                data. To exercise these rights or for any privacy-related
                inquiries, please contact our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any significant changes and encourage you to
                review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                7. Contact Us
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

import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-8 text-green-400">
            Metacube Terms of Service
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Metacube. By using our platform, you agree to these
                Terms of Service. If you do not agree with any part of these
                Terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                2. Use of Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Metacube provides blockchain-based gaming services. You agree to
                use these services only for lawful purposes and in accordance
                with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                3. User Accounts
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for maintaining the security of your account
                and wallet. Metacube is not responsible for any losses resulting
                from compromised user accounts or wallets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All content and technology provided by Metacube are protected by
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                5. Blockchain Transactions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You understand that blockchain transactions are irreversible.
                Metacube is not responsible for any losses due to user error or
                blockchain network issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Metacube is not liable for any indirect, incidental, or
                consequential damages arising from your use of our services or
                any connected third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                7. Modifications to Service
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify or discontinue our services at
                any time without notice. We are not liable to you or any third
                party for any modification, suspension, or discontinuance of the
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                8. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                9. Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. We will notify you
                of any significant changes and encourage you to review these
                Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                10. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:legal@metacube.com"
                  className="text-green-400 hover:underline"
                >
                  legal@metacube.com
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

export default TermsOfService;

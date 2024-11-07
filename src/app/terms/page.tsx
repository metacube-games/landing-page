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
                Welcome to Metacube. These Terms of Service (Terms) govern your
                access to and use of Metacube&apos;s website, services, and
                blockchain-based gaming platform (collectively, the Service). By
                using our Service, you agree to be bound by these Terms. If you
                disagree with any part of the Terms, you may not use our
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                2. Use of Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Metacube provides blockchain-based gaming services. You agree to
                use these services only for lawful purposes and in accordance
                with these Terms. Prohibited uses include, but are not limited
                to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Using the Service for any illegal activities</li>
                <li>Attempting to interfere with or disrupt the Service</li>
                <li>Impersonating other users or entities</li>
                <li>Transmitting any malicious code or software</li>
                <li>
                  Engaging in any form of automated data collection without our
                  consent
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                3. User Accounts and Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To access certain features of the Service, you must create an
                account. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Maintaining the confidentiality of your account and password
                </li>
                <li>Restricting access to your account</li>
                <li>All activities that occur under your account</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                Metacube is not responsible for any losses resulting from
                unauthorized use of your account. You must immediately notify us
                of any unauthorized use of your account or any other breach of
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                4. Intellectual Property Rights
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Service and its original content, features, and
                functionality are owned by Metacube and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws. You may not reproduce,
                distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store, or
                transmit any of the material on our Service, except as
                incidental to normal web browsing or as expressly permitted in
                writing by Metacube.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                5. Blockchain Transactions and NFTs
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You understand and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Blockchain transactions are irreversible</li>
                <li>
                  You are solely responsible for the security of your wallet and
                  private keys
                </li>
                <li>
                  Metacube is not responsible for any losses due to user error,
                  blockchain network issues, or wallet vulnerabilities
                </li>
                <li>
                  The value of NFTs can be highly volatile, and Metacube makes
                  no guarantees regarding the value of any NFTs
                </li>
                <li>
                  You are responsible for understanding and complying with any
                  applicable taxes related to your blockchain transactions and
                  NFT ownership
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by applicable law, Metacube
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses, resulting
                from:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Your access to or use of or inability to access or use the
                  Service
                </li>
                <li>
                  Any conduct or content of any third party on the Service
                </li>
                <li>Any content obtained from the Service</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                7. Modifications to Service
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify or discontinue, temporarily or
                permanently, the Service (or any part thereof) with or without
                notice. We shall not be liable to you or to any third party for
                any modification, price change, suspension, or discontinuance of
                the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                8. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of Switzerland, without regard to its conflict of law
                provisions. Any disputes arising out of or relating to these
                Terms or the Service will be resolved through binding
                arbitration in accordance with the rules of Swiss Chambers&apos;
                Arbitration Institution (SCAI). The arbitration shall be
                conducted in Lausanne, Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                9. Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                significant changes by posting the new Terms on this page and
                updating the Last Updated date. Your continued use of the
                Service after any such changes constitutes your acceptance of
                the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                10. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever, including but
                not limited to a breach of the Terms. Upon termination, your
                right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-300">
                11. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us
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

export default TermsOfService;

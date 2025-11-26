import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-black mb-6">Privacy Policy</h1>

        <p className="text-gray-700 mb-6">
          This is the privacy policy for CommarkAI. Replace this placeholder with the full policy text copied
          from your commarkai-lead-magnet-flow project or your legal source.
        </p>

        <section className="prose max-w-none text-gray-700 mb-8">
          <h2>Information we collect</h2>
          <p>
            We may collect information you provide directly when you use our services or contact us. This may include
            name, email address, phone number, and any content you submit.
          </p>

          <h2>How we use information</h2>
          <p>
            We use collected information to provide, maintain, and improve our services, to communicate with you, and
            to comply with legal obligations.
          </p>

          <h2>Sharing and third parties</h2>
          <p>
            We may share information with service providers who perform services on our behalf, or when required by
            law. We do not sell personal information.
          </p>

          <h2>Security</h2>
          <p>We take reasonable measures to protect your information, but no system is completely secure.</p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information. Contact us at
            legal@commarkai.com.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this privacy policy, contact legal@commarkai.com.
          </p>
        </section>

        <p className="text-sm text-gray-600">
          Back to <Link to="/">home</Link>.
        </p>
      </main>

      {/* Footer included on the privacy page */}
      <Footer />
    </div>
  );
}

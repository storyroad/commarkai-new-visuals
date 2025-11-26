import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-black mb-6">Terms of Service</h1>

        <p className="text-gray-700 mb-6">
          This is the Terms of Service for CommarkAI. Replace this placeholder with the full Terms of Service
          content copied from your commarkai-lead-magnet-flow project or your legal source.
        </p>

        <section className="prose max-w-none text-gray-700 mb-8">
          <h2>Acceptance of terms</h2>
          <p>
            By using our services, you agree to these terms. If you do not agree, do not use the services.
          </p>

          <h2>Service description</h2>
          <p>A description of services, availability, and any restrictions or obligations.</p>

          <h2>Intellectual property</h2>
          <p>All content provided by CommarkAI is protected by intellectual property laws.</p>

          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, CommarkAI limits its liability as described in these terms.</p>

          <h2>Contact</h2>
          <p>For legal questions, contact legal@commarkai.com.</p>
        </section>

        <p className="text-sm text-gray-600">
          Back to <Link to="/">home</Link>.
        </p>
      </main>

      {/* Footer included on the terms page */}
      <Footer />
    </div>
  );
}

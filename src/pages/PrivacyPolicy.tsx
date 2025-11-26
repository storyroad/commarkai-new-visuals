import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#f5f3f0]">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-200">
        <Link to="/" className="flex items-center gap-3">
          <Bot className="w-10 h-10 text-gray-900" />
          <span className="text-3xl font-black text-gray-900">COMMARKAI</span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
              <p>
                Welcome to CommarkAI ("we," "our," or "us"). We are committed to protecting your personal information 
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website or use our AI-powered marketing services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, and other contact information 
                  you provide when filling out our contact forms or subscribing to our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, including pages 
                  visited, time spent on pages, and navigation patterns.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our services, updates, and promotional offers</li>
                <li>Process transactions and send related information</li>
                <li>Analyze usage patterns to improve our website and services</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information. However, no method of transmission over the Internet or electronic storage is 100% 
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our website 
                contact form or reach out via our social media channels.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} CommarkAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

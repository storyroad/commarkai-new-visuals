import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-xl text-gray-600">
              Last updated: December 4, 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              <p>
                By accessing or using CommarkAI's website and services, you agree to be bound by these Terms of 
                Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Description of Services</h2>
              <p>
                CommarkAI provides AI-powered marketing automation services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 automated lead generation</li>
                <li>Intelligent follow-up sequences</li>
                <li>Conversion optimization solutions</li>
                <li>Multi-platform workflow integration</li>
                <li>AI agent deployment and management</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not interfere with or disrupt the services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our website and services, including but not limited 
                to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property 
                of CommarkAI and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, CommarkAI shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss 
                of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of (or inability to access or use) our services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless CommarkAI and its officers, directors, 
                employees, and agents from and against any claims, liabilities, damages, judgments, awards, 
                losses, costs, or expenses arising out of or relating to your violation of these Terms of 
                Service or your use of the services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">7. Service Modifications</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                without prior notice. We shall not be liable to you or any third party for any modification, 
                suspension, or discontinuation of the services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">8. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach these Terms 
                of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the 
                jurisdiction in which CommarkAI operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">10. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time. We will notify 
                you of any changes by posting the new Terms of Service on this page and updating the "Last 
                updated" date. Your continued use of our services after any such changes constitutes your 
                acceptance of the new Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us via email at{' '}
                <a href="mailto:support@commarkai.info" className="text-indigo-600 hover:underline">
                  support@commarkai.info
                </a>
                , or through our website contact form.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      
    </div>
  );
}

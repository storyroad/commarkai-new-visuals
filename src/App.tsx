import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, TrendingUp, Facebook, MessageCircle, Send, Calendar } from 'lucide-react';

const FloatingText = ({ text, delay = 0, duration = 20, direction = 'left' }: {
  text: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right';
}) => {
  const startX = direction === 'left' ? '100%' : '-100%';
  const endX = direction === 'left' ? '-100%' : '100%';
  return (
    <motion.div
      className="absolute whitespace-nowrap text-black/5 text-6xl md:text-8xl font-black pointer-events-none select-none"
      initial={{ x: startX }}
      animate={{ x: endX }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay
      }}
    >
      {text}
    </motion.div>
  );
};

export function App() {
  return (
    <div className="w-full min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Floating Background Text */}
      <div className="fixed top-0 left-0 w-full z-0 flex flex-col pointer-events-none">
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText text="AI AGENTS • AUTOMATION • SCALING •" delay={0} duration={25} direction="left" />
        </div>
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText text="LEAD GENERATION • CONVERSIONS •" delay={2} duration={30} direction="right" />
        </div>
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText text="24/7 WORKFLOW • INTELLIGENT •" delay={4} duration={28} direction="left" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Bot className="w-10 h-10 text-gray-900" />
            <span className="text-3xl font-black text-gray-900">COMMARKAI</span>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="font-black text-gray-900 mb-6 leading-tight"
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 4rem)'
              }}
            >
              Scaling Your Business with{' '}
              <span className="inline-block bg-gradient-to-r from-blue-300 to-purple-300 rounded-3xl px-8 py-2">AI AGENTS</span>
            </h1>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Lead Generation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AI agents continuously identify and engage potential customers across all channels, ensuring no opportunity is missed.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section (Custom Form) */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-700">Ready to transform your business with AI? Let's talk.</p>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              action="https://your-backend-url/api/contact" // Replace with valid endpoint
              method="POST"
              className="bg-white rounded-3xl shadow-md px-8 py-12"
            >
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name *</label>
                <input type="text" id="name" name="name" required className="border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email *</label>
                <input type="email" id="email" name="email" required className="border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Message *</label>
                <textarea id="message" name="message" rows={5} required className="border border-gray-300 rounded-lg px-4 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">Submit</button>
            </motion.form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Zap,
  TrendingUp,
  Facebook,
  MessageCircle,
  Send,
  Calendar
} from 'lucide-react';

const FloatingText = ({
  text,
  delay = 0,
  duration = 20,
  direction = 'left'
}: {
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

const PlatformIcon = ({
  icon: Icon,
  name,
  delay
}: {
  icon: React.ElementType;
  name: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
        <Icon className="w-8 h-8 text-gray-800" />
      </div>
      <span className="text-gray-600 text-sm">{name}</span>
    </motion.div>
  );
};

export function App() {
  return (
    <div className="w-full min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Floating Background Text */}
      <div className="fixed top-0 left-0 w-full z-0 flex flex-col pointer-events-none">
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText
            text="AI AGENTS • AUTOMATION • SCALING •"
            delay={0}
            duration={25}
            direction="left"
          />
        </div>
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText
            text="LEAD GENERATION • CONVERSIONS •"
            delay={2}
            duration={30}
            direction="right"
          />
        </div>
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText
            text="24/7 WORKFLOW • INTELLIGENT •"
            delay={4}
            duration={28}
            direction="left"
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Contact Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-700">
                Ready to transform your business with AI? Let's talk.
              </p>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              action="https://your-backend-url/api/contact" // Replace with endpoint used in blog-hub
              method="POST"
              className="bg-white rounded-3xl shadow-md px-8 py-12"
            >
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </motion.form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

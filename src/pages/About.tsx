import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const ValueCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
  >
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
      <Icon className="w-7 h-7 text-gray-800" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#f5f3f0]">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-200">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-11 h-11" />
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

      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-900 text-xl font-bold mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Making AI automation accessible, not exclusive
          </h1>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-16">
            <p>
              CommarkAI was established in 2025 to bring access to information and expertise to a
              broader audience. AI-powered automation had largely been the domain of large
              companies with dedicated engineering teams and big budgets — everyone else was left
              working harder, not smarter, to keep up.
            </p>
            <p>
              We started CommarkAI to close that gap: to take the same kind of AI agents and
              automated workflows that power enterprise operations and make them practical, and
              affordable, for growing businesses and independent professionals who don&apos;t have
              an in-house AI team of their own.
            </p>
            <p>
              That mission shapes how we work. We don&apos;t just hand over technology — we take
              the time to understand what&apos;s actually slowing a business down, and build
              something that fits how that business really operates.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8">What guides us</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <ValueCard
            icon={Users}
            title="Access over exclusivity"
            description="Expertise and tools that used to be out of reach for smaller teams should be available to anyone ready to grow."
          />
          <ValueCard
            icon={Compass}
            title="Built around your business"
            description="An AI agent is only useful if it fits how you actually work — we design around your process, not a template."
          />
          <ValueCard
            icon={Sparkles}
            title="Clarity, not hype"
            description="We're direct about what AI can and can't do for your business, so you invest in what will actually move the needle."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-3xl border border-gray-200 shadow-sm p-12"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-3">Curious what this looks like in practice?</h2>
          <p className="text-lg text-gray-700 mb-6">
            See the kinds of problems we build AI agents to solve.
          </p>
          <Link
            to="/services"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

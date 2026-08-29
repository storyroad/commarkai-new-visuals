import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowLeft, Zap, TrendingUp, MessageSquare, Workflow, PhoneCall, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const ServiceCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-gray-800" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
  </motion.div>
);

const PossibilityCard = ({ industry, example }: { industry: string; example: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
  >
    <h4 className="text-lg font-bold text-gray-900 mb-2">{industry}</h4>
    <p className="text-gray-600 leading-relaxed">{example}</p>
  </motion.div>
);

export default function Services() {
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

      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-gray-900 text-xl font-bold mb-4">WHAT WE BUILD</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Services</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We design and build AI agents that handle the repetitive, always-on parts of growing a
            business — so your team spends time on the conversations and decisions that actually
            need a person.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <ServiceCard
            icon={Bot}
            title="24/7 Lead Generation"
            description="AI agents that engage every inbound inquiry the moment it arrives, across your website, social channels, and messaging apps — day or night."
          />
          <ServiceCard
            icon={Zap}
            title="Automated Follow-ups"
            description="Personalized, well-timed follow-up sequences that keep prospects warm without a person having to remember to send them."
          />
          <ServiceCard
            icon={TrendingUp}
            title="Conversion Optimization"
            description="Data-driven refinement of your funnel — messaging, timing, and routing tuned to turn more conversations into booked calls and closed deals."
          />
          <ServiceCard
            icon={Workflow}
            title="Workflow & CRM Integration"
            description="AI agents wired directly into the tools you already use, so leads, bookings, and updates flow automatically instead of living in someone's inbox."
          />
          <ServiceCard
            icon={MessageSquare}
            title="AI Chat & Voice Concierge"
            description="A conversational front door for your business that qualifies, answers common questions, and books appointments without waiting on a human reply."
          />
          <ServiceCard
            icon={PenTool}
            title="Content & Marketing Automation"
            description="AI-assisted content and campaign workflows that keep your marketing consistent without demanding constant manual output."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Where this shows up</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Every business is different, but here&apos;s a sense of what these building blocks look
            like once they&apos;re put to work in a few different industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <PossibilityCard
            industry="Real Estate"
            example="An AI concierge that answers listing questions instantly, qualifies buyer and seller leads, and books showings directly onto an agent's calendar."
          />
          <PossibilityCard
            industry="Professional Services"
            example="Automated intake that captures a new client's situation up front, routes them to the right person, and follows up until a consultation is booked."
          />
          <PossibilityCard
            industry="E-commerce & Retail"
            example="Abandoned-cart and post-purchase follow-up sequences that recover lost sales and turn one-time buyers into repeat customers."
          />
          <PossibilityCard
            industry="Hospitality & Local Business"
            example="A booking assistant that handles reservation questions and availability around the clock, without tying up staff on the phone."
          />
          <PossibilityCard
            industry="Health & Wellness"
            example="Appointment-focused intake and reminder workflows that reduce no-shows and keep a practice's schedule full."
          />
          <PossibilityCard
            industry="Financial & Insurance Services"
            example="Lead qualification that separates ready-to-talk prospects from early-stage browsers, so advisors spend time where it counts."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-3xl border border-gray-200 shadow-sm p-12"
        >
          <PhoneCall className="w-10 h-10 text-gray-900 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-3">Not sure what fits your business?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Tell us where the bottleneck is and we&apos;ll tell you what an AI agent could take off
            your plate.
          </p>
          <Link
            to="/"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

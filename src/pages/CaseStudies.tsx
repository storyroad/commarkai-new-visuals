import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Wrench, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const CaseStudy = ({
  eyebrow,
  title,
  need,
  deliverables,
  outcome
}: {
  eyebrow: string;
  title: string;
  need: string;
  deliverables: string[];
  outcome: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12"
  >
    <p className="text-gray-500 font-bold tracking-wide uppercase text-sm mb-2">{eyebrow}</p>
    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">{title}</h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-gray-700" />
          <h3 className="font-bold text-gray-900">The Need</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{need}</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-5 h-5 text-gray-700" />
          <h3 className="font-bold text-gray-900">What We Built</h3>
        </div>
        <ul className="space-y-1.5 text-gray-600">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gray-400">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-gray-700" />
          <h3 className="font-bold text-gray-900">The Outcome</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{outcome}</p>
      </div>
    </div>
  </motion.article>
);

export default function CaseStudies() {
  return (
    <div className="w-full min-h-screen bg-[#f5f3f0]">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-200">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
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

      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-gray-900 text-xl font-bold mb-4">CASE STUDIES</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Real problems, purpose-built solutions
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A look at the kind of engagements we take on — the situation a client walked in with,
            what we built, and what changed. Details here are representative rather than
            client-identifying.
          </p>
        </motion.div>

        <div className="space-y-8 mb-20">
          <CaseStudy
            eyebrow="Real Estate Brokerage"
            title="Never missing a lead outside business hours"
            need="A growing residential brokerage was generating steady inbound interest through its
              website and social ads, but inquiries that came in evenings or weekends often sat
              unanswered until the next business day — by which point many prospects had already
              moved on to another agent."
            deliverables={[
              'A 24/7 AI chat concierge to answer common listing and process questions instantly',
              'Automated lead qualification to flag serious buyers and sellers for immediate agent follow-up',
              'Direct calendar integration so qualified leads could book a showing without waiting on a callback'
            ]}
            outcome="Inquiries now get an immediate, useful response no matter when they come in, and
              agents spend their time on leads that are already qualified and ready to move
              forward — instead of chasing down cold ones the next morning."
          />

          <CaseStudy
            eyebrow="Professional Services Firm"
            title="Scaling client intake without scaling headcount"
            need="A regional professional services firm was fielding a growing volume of inbound
              consultation requests through a manual intake process — phone tag and back-and-forth
              email were slowing down how quickly new clients could get scheduled, and staff time
              was going into logistics instead of client work."
            deliverables={[
              'An AI-powered intake flow that gathers the key details up front and routes each request to the right team member',
              'Automated follow-up sequences that keep prospective clients engaged until a consultation is booked',
              'CRM integration so every new inquiry appears in the system automatically, with nothing re-entered by hand'
            ]}
            outcome="New clients get scheduled faster and more consistently, and the team reclaimed
              hours each week that used to go into manual coordination — time now spent on billable
              client work instead."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-3xl border border-gray-200 shadow-sm p-12"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-3">Have a similar bottleneck?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let&apos;s talk about what a solution could look like for your business.
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

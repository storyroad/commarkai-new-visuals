import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, TrendingUp, Facebook, MessageCircle, Send, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';

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

const FloatingShape = ({
  delay = 0,
  size = 'md',
  position
}: {
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };
  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl opacity-40`}
      style={position}
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [0.95, 1.05, 0.95]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    />
  );
};

const ServiceCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
      }}
      transition={{
        duration: 0.3
      }}
    >
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-gray-800" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
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
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay,
        duration: 0.5
      }}
    >
      <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
        <Icon className="w-8 h-8 text-gray-800" />
      </div>
      <span className="text-gray-600 text-sm">{name}</span>
    </motion.div>
  );
};

export function App() {
  const [submitting, setSubmitting] = useState(false);

  // Opened as /#contact (e.g. from the footer): scroll to the form once the page has rendered.
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const body = new FormData(form);
      // POST to the site root so Netlify captures the form.
      await fetch(form.action || '/', { method: 'POST', body });
      window.location.href = '/thank-you.html';
    } catch (err) {
      // On failure, still send the user to the thank-you page and log for debugging.
      console.error('Contact form submit failed', err);
      window.location.href = '/thank-you.html';
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingShape delay={0} size="lg" position={{ top: '10%', left: '5%' }} />
        <FloatingShape delay={2} size="md" position={{ top: '30%', right: '10%' }} />
        <FloatingShape delay={4} size="sm" position={{ bottom: '20%', left: '15%' }} />
        <FloatingShape delay={1} size="md" position={{ bottom: '10%', right: '20%' }} />

        {/* Burgundy accent shape */}
        <motion.div
          className="absolute w-56 h-56 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full opacity-30 blur-2xl"
          style={{
            top: '50%',
            right: '5%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

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

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8 flex justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="flex items-center gap-3"
          >
            <Logo className="w-[72px] h-[72px]" />
            <span className="text-3xl font-black text-gray-900">COMMARKAI</span>
          </motion.div>

          <div className="flex items-center gap-6">
            <a
              href="https://commarkai.net"
              className="hidden md:inline text-gray-900 font-bold text-lg hover:underline decoration-[#FFE500] decoration-4 transition-colors"
            >
              Incident Simulator
            </a>
            <motion.a
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6
              }}
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
              href="https://www.linkedin.com/company/commarkai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on LinkedIn
            </motion.a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 md:py-32 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full px-8 py-3">
                <span className="text-gray-900 font-bold text-lg">COMMUNICATIONS</span>
              </div>
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full px-8 py-3">
                <span className="text-gray-900 font-bold text-lg">MARKETING</span>
              </div>
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full px-8 py-3">
                <span className="text-gray-900 font-bold text-lg">ARTIFICIAL INTELLIGENCE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
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

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.7
            }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              <Bot className="w-6 h-6 text-blue-500" />
              <span className="text-gray-900 font-semibold">24/7 Lead Generation</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              <Zap className="w-6 h-6 text-purple-500" />
              <span className="text-gray-900 font-semibold">Automated Follow-ups</span>
            </div>
          </motion.div>
        </section>

        {/* Incident Simulator: links to the SaaS on commarkai.net */}
        <section className="container mx-auto px-6 pb-12">
          <motion.a
            href="https://commarkai.net"
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.9
            }}
            whileHover={{
              y: -4
            }}
            className="block max-w-5xl mx-auto bg-[#17151E] text-[#F8F6F2] rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <p className="text-[#FFE500] font-bold text-sm tracking-wide mb-4">NEW · COMMARKAI INCIDENT SIMULATOR</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">What happens when your AI service fails, and how you can fix it.</h2>
                <p className="text-lg text-[#CFCAD8]">
                  Pick a service and a failure, and see where it lands: on your customers and on the people who catch what the AI drops. Nothing to connect.
                </p>
              </div>
              <span className="inline-block self-start md:self-auto bg-[#FFE500] text-[#17151E] px-8 py-4 rounded-full font-bold text-lg whitespace-nowrap">
                Try the simulator →
              </span>
            </div>
          </motion.a>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="mb-16"
          >
            <div className="text-left max-w-2xl">
              <p className="text-gray-900 text-2xl font-bold mb-4">MARKETING</p>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Artificial
                <br />
                Intelligence
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
            >
              <ServiceCard
                icon={Bot}
                title="24/7 Lead Generation"
                description="AI agents respond to incoming enquiries on your channels, day and night, and capture the details your team needs to follow up."
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
            >
              <ServiceCard
                icon={Zap}
                title="Automated Follow-ups"
                description="Intelligent agents nurture leads with personalized follow-ups, keeping prospects engaged throughout their journey."
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
            >
              <ServiceCard
                icon={TrendingUp}
                title="Conversion Optimization"
                description="Test and refine your messaging, timing and follow-up to improve how many enquiries become customers."
              />
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">AI-Powered Workflow Integration</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Seamlessly integrate across all your platforms for maximum reach and efficiency
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            <PlatformIcon icon={Facebook} name="Facebook" delay={0.1} />
            <PlatformIcon icon={MessageCircle} name="Messenger" delay={0.2} />
            <PlatformIcon icon={Send} name="WhatsApp" delay={0.3} />
            <PlatformIcon icon={Calendar} name="Calendar" delay={0.4} />
            <PlatformIcon icon={Bot} name="AI Agent" delay={0.5} />
            <PlatformIcon icon={Zap} name="Salesforce" delay={0.6} />
          </div>

          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            className="text-center text-gray-700 text-lg mt-12 font-semibold"
          >
            And Much More
          </motion.p>
        </section>

        
        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-20 scroll-mt-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
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
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleContactSubmit}
              className="bg-white rounded-3xl shadow-md px-8 py-12"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out if human: <input name="bot-field" /></label>
              </p>
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
              <label htmlFor="consent" className="flex items-start gap-3 mb-6 text-sm text-gray-700 leading-relaxed cursor-pointer">
                <input type="checkbox" id="consent" name="consent" value="yes" required className="mt-1 w-4 h-4 flex-none accent-gray-900" />
                <span>
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="underline text-gray-900">Terms of Service</Link> and{' '}
                  <Link to="/privacy-policy" className="underline text-gray-900">Privacy Policy</Link>, and consent to COMMARKAI contacting me about this request.
                </span>
              </label>
              <button type="submit" disabled={submitting} className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors disabled:opacity-60">
                {submitting ? 'Sending…' : 'Submit'}
              </button>
            </motion.form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

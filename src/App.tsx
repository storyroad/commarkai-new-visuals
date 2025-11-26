import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, TrendingUp, Facebook, MessageCircle, Send, Calendar, Mail, Phone, MapPin } from 'lucide-react';

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

      {/* Floating Background Text - UPDATED: each FloatingText is stacked on its own line */}
      <div className="fixed top-0 left-0 w-full z-0 flex flex-col pointer-events-none">
        <div className="relative w-full h-[88px] md:h-[96px]">
          <FloatingText
            text="AI AGENTS • AUTOMATION • SCALE •"
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

      {/* Content */}
      <div className="relative z-10">
        {/* ...the rest of your file remains unchanged... */}
        {/* [No changes below this line] */}

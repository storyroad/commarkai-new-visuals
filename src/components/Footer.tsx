import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Facebook, MessageCircle, Send } from 'lucide-react';

/**
 * Reusable Footer component used across pages.
 * Mirrors the footer previously inline in App.tsx so it can be reused in /privacy-policy and /terms-of-service pages.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-gray-900" />
              <span className="text-2xl font-black text-gray-900">COMMARKAI</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Scaling businesses with intelligent AI agents that work 24/7 to generate leads, nurture prospects,
              and close deals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Lead Generation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Automated Follow-ups</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Conversion Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Workflow Integration</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with links */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm flex items-center gap-4">
            <span>© {new Date().getFullYear()} CommarkAI. All rights reserved.</span>

            {/* Small inline links included so footer is identical across pages */}
            <span className="hidden sm:inline-flex items-center gap-2">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <span className="text-gray-400">|</span>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Messenger">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Send">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


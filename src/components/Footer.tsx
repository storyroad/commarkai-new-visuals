import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Facebook, MessageCircle, Share2, Send, Copy, Mail } from 'lucide-react';

/**
 * Footer with anchors for robust behavior:
 * - external anchors for facebook / messenger
 * - share anchors (facebook sharer, telegram, mailto) computed on mount
 * - copy link uses Clipboard API
 *
 * Note: Share-to-Facebook uses a Share2 icon so the Facebook page icon isn't duplicated.
 */
export default function Footer() {
  const location = useLocation();
  const [pageUrl, setPageUrl] = useState('');
  const pageTitle = typeof document !== 'undefined' ? document.title || 'CommarkAI' : 'CommarkAI';

  useEffect(() => {
    // compute only on client
    if (typeof window !== 'undefined' && window.location) {
      setPageUrl(window.location.origin + (location?.pathname ?? '/'));
    }
  }, [location.pathname]);

  const facebookPageHref = 'https://www.facebook.com/commarkai/';
  const messengerHref = 'https://m.me/commarkai';
  const facebookShareHref = pageUrl ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` : '#';
  const telegramShareHref = pageUrl ? `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}` : '#';
  const mailtoHref = pageUrl ? `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(`${pageTitle}\n\n${pageUrl}`)}` : '#';

  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl || window.location.href);
      alert('Link copied to clipboard');
    } catch (err) {
      console.warn('Copy failed', err);
      window.open(pageUrl || window.location.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-12 z-20" style={{ zIndex: 20 }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-gray-900" />
              <span className="text-2xl font-black text-gray-900">COMMARKAI</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Scaling businesses with intelligent AI agents that work 24/7 to generate leads, nurture prospects, and close deals.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Lead Generation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Automated Follow-ups</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Conversion Optimization</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Workflow Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm flex items-center gap-4">
            <span>© {new Date().getFullYear()} CommarkAI. All rights reserved.</span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <span className="text-gray-400">|</span>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={facebookPageHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Follow on Facebook" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </a>

            <a href={messengerHref} target="_blank" rel="noopener noreferrer" aria-label="Messenger" title="Message on Messenger" className="text-gray-600 hover:text-gray-900">
              <MessageCircle className="w-5 h-5" />
            </a>

            <a href={facebookShareHref} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook" className="text-gray-600 hover:text-gray-900">
              <Share2 className="w-5 h-5" />
            </a>

            <a href={telegramShareHref} target="_blank" rel="noopener noreferrer" aria-label="Share on Telegram" title="Share on Telegram" className="text-gray-600 hover:text-gray-900">
              <Send className="w-5 h-5" />
            </a>

            <a href={mailtoHref} aria-label="Share by Email" title="Share by Email" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>

            <button onClick={onCopyLink} aria-label="Copy link" title="Copy link" type="button" className="text-gray-600 hover:text-gray-900">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

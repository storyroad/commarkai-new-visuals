import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Facebook, MessageCircle, Send, Copy, Mail } from 'lucide-react';

/**
 * Footer with robust share links:
 * - External anchors for Facebook page and Messenger
 * - Share anchors for Facebook/Telegram/Email that include the current page URL
 * - Copy link button uses the Clipboard API with a simple alert fallback
 */
export default function Footer() {
  const location = useLocation();

  // Build absolute page URL (safe on client)
  const origin =
    typeof window !== 'undefined' && window.location && window.location.origin
      ? window.location.origin
      : '';
  const currentPath = location?.pathname ?? '/';
  const pageUrl = `${origin}${currentPath}`;
  const pageTitle = (typeof document !== 'undefined' && document.title) || 'CommarkAI';

  // Precompute share hrefs so anchors are usable without relying on JS-only handlers
  const { facebookShareHref, telegramShareHref, mailtoHref } = useMemo(() => {
    const facebookShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    const telegramShareHref = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(
      pageTitle
    )}`;
    const mailtoHref = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(
      `${pageTitle}\n\n${pageUrl}`
    )}`;
    return { facebookShareHref, telegramShareHref, mailtoHref };
  }, [pageUrl, pageTitle]);

  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      // lightweight feedback — replace with a toast if you have one
      alert('Link copied to clipboard');
    } catch (err) {
      console.warn('Copy failed, opening page instead', err);
      // fallback: open page in new tab
      window.open(pageUrl, '_blank', 'noopener,noreferrer');
    }
  };

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

        {/* Bottom Bar with links and share actions */}
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
            {/* Official Facebook page (external anchor) */}
            <a
              href="https://www.facebook.com/commarkai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="CommarkAI Facebook page"
              title="Follow on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* Messenger to the page (external anchor) */}
            <a
              href="https://m.me/commarkai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Message us on Facebook Messenger"
              title="Message on Messenger"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Share to Facebook (href contains absolute page URL) */}
            <a
              href={facebookShareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Share on Facebook"
              title="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* Share to Telegram */}
            <a
              href={telegramShareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Share on Telegram"
              title="Share on Telegram"
            >
              <Send className="w-5 h-5" />
            </a>

            {/* Share by Email (mailto link) */}
            <a
              href={mailtoHref}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Share by Email"
              title="Share by Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Copy link (still a button) */}
            <button
              onClick={onCopyLink}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Copy link"
              title="Copy link"
              type="button"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

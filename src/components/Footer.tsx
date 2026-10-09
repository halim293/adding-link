import React from 'react';
import { Github, MapPin, ArrowUp, MessageCircle, Instagram } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-white">
              <span>HALIM</span>
              <span className="text-purple-500">.DEV</span>
            </div>
            
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {SITE_DATA.brand.positioning}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{SITE_DATA.footer.location}</span>
            </div>

            <div className="pt-2 text-xs text-neutral-400 font-mono italic">
              "{SITE_DATA.taglines[0]}"
            </div>
          </div>

          {/* Navigation Links (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SITE_DATA.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Connect & GitHub (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>Email: <a href={`mailto:${SITE_DATA.contact.email}`} className="text-purple-400 hover:underline">{SITE_DATA.contact.email}</a></p>
              <p>WhatsApp: <a href={SITE_DATA.contact.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{SITE_DATA.contact.whatsapp.number}</a></p>
              
              <div className="pt-3 flex items-center gap-3">
                <a
                  href={SITE_DATA.social_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {SITE_DATA.social_links.instagram && (
                  <a
                    href={SITE_DATA.social_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-pink-400 hover:border-neutral-700 transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={SITE_DATA.contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 hover:text-emerald-300 hover:border-neutral-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>{SITE_DATA.footer.text}</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">{SITE_DATA.footer.subtext}</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

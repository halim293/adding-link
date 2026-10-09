import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-neutral-900/95 border border-neutral-800 text-xs text-neutral-200 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Halim on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-neutral-500 hover:text-neutral-300 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={SITE_DATA.contact.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

export const FloatingInstagram: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5">
      {/* Interactive Anchor */}
      <a
        href="https://instagram.com/thehalim.dev"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full text-white shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        style={{
          background: 'linear-gradient(45deg, #feda75 0%, #d62976 50%, #4f5bd5 100%)',
        }}
        aria-label="Follow on Instagram"
      >
        {/* Subtle breathing ambient glow */}
        <span
          className="absolute -inset-1 rounded-full opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: 'linear-gradient(45deg, #feda75 0%, #d62976 50%, #4f5bd5 100%)',
          }}
          aria-hidden="true"
        />

        {/* Instagram Icon */}
        <Instagram className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
      </a>

      {/* Tooltip on hover */}
      <div
        role="tooltip"
        className={`pointer-events-none transition-all duration-200 ease-out flex items-center gap-1.5 bg-neutral-900/95 border border-neutral-800 text-xs font-medium text-neutral-200 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md whitespace-nowrap ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
        <span>Follow on Instagram</span>
      </div>
    </div>
  );
};

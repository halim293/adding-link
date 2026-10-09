import React, { useState } from 'react';
import { ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const BrandHeroVisual: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-[460px] mx-auto group">
      {/* Outer ambient glow layers (Blue + Purple) */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 via-purple-600/25 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />
      <div className="absolute -inset-4 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Main Container: solid black #0A0A0A with subtle border and rounded corners */}
      <div className="relative rounded-3xl bg-[#0A0A0A] border border-blue-500/25 p-5 sm:p-7 shadow-[0_0_60px_-15px_rgba(0,149,255,0.35),0_0_90px_-25px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all duration-300">
        
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800/80 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-blue-400 font-semibold uppercase tracking-wider">Official Brand Mark</span>
          </div>
          <span className="text-neutral-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-purple-400" />
            Kotri, PK
          </span>
        </div>

        {/* Center Logo Visual Area */}
        <div className="relative my-3 flex items-center justify-center rounded-2xl bg-[#0A0A0A] overflow-hidden aspect-square border border-neutral-800/50">
          
          {/* Subtle electric blue radial glow in background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,149,255,0.18)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />

          {!imageError ? (
            <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
              <img
                src="/src/assets/images/halim_dev_logo_visual_1791095045894.jpg"
                alt="HALIM.DEV Official Brand Logo - Web Developer & Digital Creator"
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,163,255,0.45)] transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            /* High-fidelity Vector Fallback matching the exact emblem & typography */
            <div className="relative w-full h-full p-6 flex flex-col items-center justify-center select-none">
              <svg
                viewBox="0 0 360 360"
                className="w-full h-full max-w-[320px] max-h-[320px] filter drop-shadow-[0_0_35px_rgba(0,163,255,0.7)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Glow Filter */}
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c8ff" />
                    <stop offset="50%" stopColor="#0080ff" />
                    <stop offset="100%" stopColor="#0055ff" />
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Left Bracket < */}
                <path
                  d="M130 92L72 176L130 260H98L40 176L98 92H130Z"
                  fill="url(#blueGrad)"
                  filter="url(#neonGlow)"
                />

                {/* Center H */}
                {/* Left stem */}
                <path
                  d="M142 92H174V260H142V92Z"
                  fill="url(#blueGrad)"
                  filter="url(#neonGlow)"
                />
                {/* Right stem */}
                <path
                  d="M186 92H218V260H186V92Z"
                  fill="url(#blueGrad)"
                  filter="url(#neonGlow)"
                />
                {/* Crossbar */}
                <path
                  d="M174 158H186V194H174V158Z"
                  fill="url(#blueGrad)"
                  filter="url(#neonGlow)"
                />

                {/* Right Bracket > */}
                <path
                  d="M230 92L288 176L230 260H262L320 176L262 92H230Z"
                  fill="url(#blueGrad)"
                  filter="url(#neonGlow)"
                />

                {/* Text: HALIM.DEV */}
                <g transform="translate(180, 310)" textAnchor="middle">
                  <text
                    x="0"
                    y="0"
                    fontFamily="'Space Grotesk', -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize="34"
                    letterSpacing="3"
                  >
                    <tspan fill="#FFFFFF">HALIM</tspan>
                    <tspan fill="#00A3FF">.DEV</tspan>
                  </text>
                </g>
              </svg>
            </div>
          )}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-3.5 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="font-medium text-white">Brand Trust & Identity</span>
          </div>

          <span className="font-mono text-[11px] text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2 py-0.5 rounded">
            Clean Code
          </span>
        </div>

      </div>
    </div>
  );
};

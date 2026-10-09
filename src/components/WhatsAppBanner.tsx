import React from 'react';
import { MessageSquare, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const WhatsAppBanner: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-emerald-900/60 bg-gradient-to-r from-emerald-950/40 via-neutral-900/90 to-purple-950/40 shadow-2xl">
          
          {/* Subtle glow effect */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Instant Pakistani Chat Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {SITE_DATA.whatsapp_cta.heading}
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                {SITE_DATA.whatsapp_cta.text}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Direct developer conversation
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  Quick voice note or text replies
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <a
                href={SITE_DATA.whatsapp_cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-2xl shadow-xl shadow-emerald-950/40 hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{SITE_DATA.whatsapp_cta.button_text}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/60 rounded-2xl transition-colors"
              >
                <span>Use Contact Form</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

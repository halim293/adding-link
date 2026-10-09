import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import { BrandHeroVisual } from './BrandHeroVisual';

export const Hero: React.FC = () => {

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle developer grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional Status Strip */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-800/40 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Kotri, Jamshoro · Serving Businesses Across Pakistan</span>
            </div>

            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
              {SITE_DATA.hero.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.1]">
              Professional Websites That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
                Build Trust
              </span>{' '}
              and Grow Your Business.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed text-balance">
              {SITE_DATA.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_DATA.hero.primary_cta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5"
              >
                <span>{SITE_DATA.hero.primary_cta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.hero.secondary_cta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{SITE_DATA.hero.secondary_cta.text}</span>
              </a>
            </div>

            {/* Tagline Strip */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Clean Code & Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Modern Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Tailored for Pakistani Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Logo Visual Carrier */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <BrandHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

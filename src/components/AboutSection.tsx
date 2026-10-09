import React from 'react';
import { Target, Compass, Sparkles, Feather, Shield, Lightbulb, TrendingUp, MapPin } from 'lucide-react';
import { SITE_DATA, CoreValue } from '../data/content';

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Quality: <Sparkles className="w-5 h-5 text-purple-400" />,
  Simplicity: <Feather className="w-5 h-5 text-purple-400" />,
  Integrity: <Shield className="w-5 h-5 text-purple-400" />,
  Innovation: <Lightbulb className="w-5 h-5 text-purple-400" />,
  Growth: <TrendingUp className="w-5 h-5 text-purple-400" />
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Origin & Craft
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {SITE_DATA.about.title}
          </h2>
          <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
            <span>Kotri</span>
            <span aria-hidden="true">·</span>
            <span>Jamshoro</span>
            <span aria-hidden="true">·</span>
            <span>Sindh</span>
            <span aria-hidden="true">·</span>
            <span>Pakistan</span>
          </div>
        </div>

        {/* Narrative & Regional Presence */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Building Websites That Are More Than Just Pages
            </h3>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-normal">
              {SITE_DATA.about.content}
            </p>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 border border-neutral-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 uppercase font-mono tracking-wider">Base of Operations</p>
                <p className="text-sm font-semibold text-white">Kotri, Jamshoro District</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-xs text-neutral-300">
              <p className="font-semibold text-purple-300">Tailored for Pakistani Businesses</p>
              <p className="text-neutral-400 leading-relaxed">
                Direct communication in Urdu or English, local WhatsApp order funnels, transparent pricing in PKR with zero hidden platform charges.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                Discuss a localized solution &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Mission & Vision Twin Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-900/30 text-purple-400 border border-purple-800/40">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {SITE_DATA.about.mission.title}
              </h3>
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {SITE_DATA.about.mission.content}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 relative overflow-hidden group hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 border border-indigo-800/40">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {SITE_DATA.about.vision.title}
              </h3>
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {SITE_DATA.about.vision.content}
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono">Foundations</p>
            <h3 className="text-2xl font-bold text-white mt-1">Core Values</h3>
            <p className="text-sm text-neutral-400 mt-1">
              The foundational principles guiding every line of code and customer interaction at HALIM.DEV.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SITE_DATA.about.core_values.map((val: CoreValue, index: number) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-purple-800/50 hover:bg-neutral-900/70 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                      {VALUE_ICONS[val.title] || <Sparkles className="w-4 h-4 text-purple-400" />}
                    </div>
                    <span className="font-mono text-xs text-neutral-400 tabular-nums">0{index + 1}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

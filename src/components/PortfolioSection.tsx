import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_DATA, PortfolioItem } from '../data/content';
import { PortfolioPreviewModal } from './PortfolioPreviewModal';

export const PortfolioSection: React.FC = () => {
  const [previewProject, setPreviewProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
              Selected Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="mt-3 text-neutral-300 text-base sm:text-lg">
              Real digital solutions engineered for educational institutes and growing enterprises in Pakistan.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Production Verified</span>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: The Talent Master Institute (Marquee col-span-7) */}
          {SITE_DATA.portfolio[0] && (
            <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden flex flex-col justify-between group hover:border-purple-800/60 transition-all duration-300">
              
              {/* Image Container with measured overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={SITE_DATA.portfolio[0].image}
                  alt={SITE_DATA.portfolio[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Floating pill-free status label */}
                <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 px-3 py-1.5 rounded-lg text-xs font-mono text-purple-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{SITE_DATA.portfolio[0].status}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <span>{SITE_DATA.portfolio[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Jamshoro District, Sindh</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {SITE_DATA.portfolio[0].title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {SITE_DATA.portfolio[0].description}
                </p>

                {/* Key Deliverables highlights */}
                <div className="pt-2 text-xs text-neutral-400 space-y-1">
                  <p>✓ Course Catalog, Admissions Portal & Direct WhatsApp Integration</p>
                  <p>✓ Ultra-fast mobile loading for 3G/4G Pakistani cell networks</p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPreviewProject(SITE_DATA.portfolio[0])}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Interactive Preview</span>
                  </button>

                  <a
                    href={SITE_DATA.portfolio[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/60 rounded-lg transition-colors"
                  >
                    <span>{SITE_DATA.portfolio[0].cta}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* Card 2: Coming Soon (col-span-5) */}
          {SITE_DATA.portfolio[1] && (
            <div className="lg:col-span-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300">
              
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={SITE_DATA.portfolio[1].image}
                  alt={SITE_DATA.portfolio[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>{SITE_DATA.portfolio[1].status}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs text-neutral-400 font-mono">
                  {SITE_DATA.portfolio[1].category}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {SITE_DATA.portfolio[1].title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {SITE_DATA.portfolio[1].description}
                </p>

                <div className="pt-2 text-xs text-neutral-400">
                  <p>Currently in private staging and client acceptance testing.</p>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Have a project to add here? Get in touch &rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Live Preview Modal */}
      <PortfolioPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
};

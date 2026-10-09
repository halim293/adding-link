import React from 'react';
import { SITE_DATA, ProcessStep } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simple, Transparent Development Process
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            A structured three-phase roadmap designed to take your idea from initial consultation to a high-performing live website.
          </p>
        </div>

        {/* 3 Major Steps Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_DATA.process.map((p: ProcessStep) => (
            <div
              key={p.step}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-purple-800/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/60 border border-purple-800/50 px-2.5 py-1 rounded">
                    PHASE 0{p.step}
                  </span>
                  <span className="text-2xl font-mono font-bold text-neutral-700 group-hover:text-neutral-500 transition-colors">
                    0{p.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 text-xs text-neutral-400 flex items-center gap-1.5">
                <span>Phase deliverables guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Work Process Instructions Guide */}
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-neutral-900/80 border border-neutral-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Work Process & Collaboration Guidelines
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Here is exactly what to expect from the moment you submit an inquiry to the day your website is published:
            </p>
          </div>

          <div className="space-y-4">
            {SITE_DATA.work_process_instructions.map((instruction: string, idx: number) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="text-sm text-neutral-200 leading-relaxed">
                  {instruction}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Ready to start at Step 1? Inquiries are replied to within 24 hours.
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Quote, Star, CheckCircle2, Building } from 'lucide-react';
import { SITE_DATA, TestimonialItem } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Client Verification
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Clients Say
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Direct feedback from business leadership on project delivery, communication, and business impact.
          </p>
        </div>

        {/* Testimonials Grid / Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          {SITE_DATA.testimonials.map((t: TestimonialItem, idx: number) => (
            <div
              key={idx}
              className="relative p-8 sm:p-12 rounded-3xl bg-neutral-900/50 border border-neutral-800 shadow-2xl backdrop-blur-sm"
            >
              {/* Subtle quote watermark/icon */}
              <Quote className="w-10 h-10 text-purple-500/20 absolute top-8 right-8" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-mono text-neutral-400">5.0 Star Feedback</span>
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl text-neutral-200 font-medium leading-relaxed">
                "{t.review}"
              </blockquote>

              {/* Client Info Attribution */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 font-bold">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-base">{t.business}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Client
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {t.role} · Educational Institute Platform
                    </p>
                  </div>
                </div>

                <a
                  href="https://charming-zabaione-b9ad21.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  View live client site &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

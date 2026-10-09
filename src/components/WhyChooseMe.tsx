import React from 'react';
import { 
  Palette, 
  TrendingUp, 
  Smartphone, 
  Code2, 
  MessageCircle, 
  MapPin 
} from 'lucide-react';
import { SITE_DATA, WhyChooseItem } from '../data/content';

const WHY_ICONS: Record<string, React.ReactNode> = {
  'Professional Design': <Palette className="w-5 h-5 text-purple-400" />,
  'Business-Focused Approach': <TrendingUp className="w-5 h-5 text-purple-400" />,
  'Mobile Responsive': <Smartphone className="w-5 h-5 text-purple-400" />,
  'Clean Development': <Code2 className="w-5 h-5 text-purple-400" />,
  'Clear Communication': <MessageCircle className="w-5 h-5 text-purple-400" />,
  'Made for Pakistan': <MapPin className="w-5 h-5 text-purple-400" />
};

export const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Value Proposition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why Work With HALIM.DEV
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Engineering standards and design principles that ensure your investment delivers practical business value.
          </p>
        </div>

        {/* 6 Key Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.why_choose_me.map((item: WhyChooseItem, idx: number) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-purple-800/50 hover:bg-neutral-900/70 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    {WHY_ICONS[item.title] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <span className="font-mono text-xs text-neutral-400 tabular-nums">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, MessageSquare, Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface InteractiveCalculatorProps {
  onApplyEstimate: (serviceName: string, estimatedBudget: string) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onApplyEstimate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('business-website');
  const [pageRange, setPageRange] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo']);

  const currentService = SITE_DATA.services.find(s => s.id === selectedServiceId) || SITE_DATA.services[0];

  const addonsList = [
    { id: 'seo', name: 'Search Engine Indexing & On-Page SEO', price: 4000, days: 1 },
    { id: 'catalog', name: 'Course Catalog / Multi-Program Directory', price: 5000, days: 2 },
    { id: 'lead_form', name: 'Custom Inquiry & WhatsApp Lead Capture', price: 3000, days: 1 },
    { id: 'fast_delivery', name: 'Express Priority Delivery (48h push)', price: 6000, days: -2 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Base calculation
  const basePrice = currentService.starting_price_pkr;
  const extraPages = Math.max(0, pageRange - 3);
  const pagesCost = extraPages * 2000;
  const addonsCost = selectedAddons.reduce((acc, id) => {
    const addon = addonsList.find(a => a.id === id);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const totalEstimate = basePrice + pagesCost + addonsCost;

  const getBudgetString = (val: number) => {
    if (val < 15000) return 'Under PKR 15,000';
    if (val <= 30000) return 'PKR 15,000 – 30,000';
    if (val <= 50000) return 'PKR 30,000 – 50,000';
    if (val <= 100000) return 'PKR 50,000 – 100,000';
    return 'PKR 100,000+';
  };

  const handleSendToWhatsApp = () => {
    const summary = `Hi Halim, I calculated an estimate on HALIM.DEV:
• Service: ${currentService.name}
• Pages: ~${pageRange} pages
• Addons: ${selectedAddons.length > 0 ? selectedAddons.map(id => addonsList.find(a => a.id === id)?.name).join(', ') : 'None'}
• Total Estimated Starting Price: PKR ${totalEstimate.toLocaleString()}

Could we discuss this project?`;

    window.open(`https://wa.me/923253045617?text=${encodeURIComponent(summary)}`, '_blank');
  };

  return (
    <section className="py-20 border-t border-neutral-800/80 bg-neutral-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>TRANSPARENT PKR ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Estimate Your Website Investment
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            No guessing or opaque pricing. Customize your requirements to see instant ballpark pricing and timeline for your business in Pakistan.
          </p>
        </div>

        {/* Estimator Box */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Website Type */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-300">
                1. Select Website Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SITE_DATA.services.map(s => {
                  const active = s.id === selectedServiceId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                        active
                          ? 'bg-purple-950/40 border-purple-500/80 text-white'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{s.name}</div>
                      <div className="text-purple-400 font-mono">{s.price}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Estimated Pages */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-purple-300">
                  2. Number of Custom Pages
                </label>
                <span className="font-mono text-sm text-purple-400 font-bold">
                  {pageRange} {pageRange === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={pageRange}
                onChange={e => setPageRange(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                <span>1 (Single Page)</span>
                <span>5 (Standard Site)</span>
                <span>12+ (Complex Directory)</span>
              </div>
            </div>

            {/* Step 3: Optional Features */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-300">
                3. Optional Enhancements
              </label>
              <div className="space-y-2">
                {addonsList.map(addon => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-colors ${
                        checked
                          ? 'bg-purple-950/30 border-purple-600/60 text-white'
                          : 'bg-neutral-950/40 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          checked ? 'bg-purple-600 border-purple-500 text-white' : 'border-neutral-700'
                        }`}>
                          {checked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-purple-300 font-medium">
                        +PKR {addon.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-900/90 border border-neutral-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Estimated Investment
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  <Shield className="w-3 h-3" />
                  Verified Pakistani Rates
                </span>
              </div>

              <div>
                <p className="text-xs text-neutral-400">Estimated Total</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums">
                    PKR {totalEstimate.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">starting</span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">
                  Includes full design, responsive mobile coding, WhatsApp routing, and basic speed optimization.
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 pt-4 border-t border-neutral-800 text-xs">
                <div className="flex justify-between text-neutral-300">
                  <span>Base Package ({currentService.name})</span>
                  <span className="font-mono tabular-nums">PKR {basePrice.toLocaleString()}</span>
                </div>
                {extraPages > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>{extraPages} Extra Pages</span>
                    <span className="font-mono tabular-nums">+PKR {pagesCost.toLocaleString()}</span>
                  </div>
                )}
                {addonsCost > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Selected Addons ({selectedAddons.length})</span>
                    <span className="font-mono tabular-nums">+PKR {addonsCost.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-purple-300 font-semibold pt-2 border-t border-neutral-800/60">
                  <span>Estimated Delivery</span>
                  <span>{currentService.delivery_time}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Lock in This Estimate on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onApplyEstimate(currentService.name, getBudgetString(totalEstimate))}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-purple-600 hover:text-white rounded-xl transition-colors"
                >
                  <span>Apply Estimate to Contact Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-neutral-400 text-center">
                {SITE_DATA.pricing_note}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  UserRound, 
  MousePointerClick, 
  Clock, 
  Check, 
  ArrowRight,
  Info
} from 'lucide-react';
import { SITE_DATA, ServiceItem } from '../data/content';
import { ServiceDetailModal } from './ServiceDetailModal';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-purple-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-indigo-400" />,
  UserRound: <UserRound className="w-6 h-6 text-violet-400" />,
  MousePointerClick: <MousePointerClick className="w-6 h-6 text-fuchsia-400" />
};

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Core Offerings
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Web Development Services
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            High-performing digital solutions designed specifically for Pakistani enterprises, educational bodies, and independent professionals.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-purple-800/60 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with icon & editorial number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-purple-800/40 transition-colors">
                    {SERVICE_ICONS[service.icon_suggestion] || <Building2 className="w-6 h-6 text-purple-400" />}
                  </div>
                  <span className="font-mono text-xs text-neutral-400 tabular-nums">0{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>

                {/* Pricing & Timeline unboxed metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                  <span className="font-semibold text-purple-400 font-mono text-sm">
                    {service.price}
                  </span>
                  <span className="text-neutral-500" aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-neutral-300">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{service.delivery_time}</span>
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.short_description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-4 border-t border-neutral-800/80">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Key Deliverables:
                  </p>
                  {service.client_gets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-purple-400" />
                  <span>View Details & Scope</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-purple-600 rounded-lg transition-colors group-hover:bg-purple-600"
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/60 flex items-start sm:items-center gap-3 text-xs text-neutral-400">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>{SITE_DATA.pricing_note}</p>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForBooking={onSelectService}
      />
    </section>
  );
};

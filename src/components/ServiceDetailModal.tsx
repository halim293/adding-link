import React from 'react';
import { X, CheckCircle2, Clock, Banknote, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem, SITE_DATA } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForBooking
}) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Halim, I am interested in your "${service.name}" (${service.price}). Please share how we can get started.`
    );
    window.open(`https://wa.me/923253045617?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <span>SERVICE SPECIFICATION</span>
            <span aria-hidden="true">·</span>
            <span>HALIM.DEV</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {service.name}
          </h3>
        </div>

        {/* Meta badges */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-neutral-300 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700/60">
            <Banknote className="w-4 h-4 text-purple-400" />
            <span className="font-semibold text-white">{service.price}</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-300 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700/60">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Timeline: {service.delivery_time}</span>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Scope & Overview
          </h4>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {service.long_description}
          </p>
        </div>

        {/* What Client Gets */}
        <div className="mt-6 pt-6 border-t border-neutral-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3">
            What You Get in This Package
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.client_gets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Note */}
        <p className="mt-6 text-xs text-neutral-400 bg-neutral-950/60 p-3 rounded-lg border border-neutral-800">
          {service.pricing_note}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-3 justify-end">
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectForBooking(service.name);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

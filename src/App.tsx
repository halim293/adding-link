import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingInstagram } from './components/FloatingInstagram';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [selectedBudgetForContact, setSelectedBudgetForContact] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (serviceName: string, estimatedBudget: string) => {
    setSelectedServiceForContact(serviceName);
    setSelectedBudgetForContact(estimatedBudget);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section (Content, Mission, Vision, Core Values) */}
        <AboutSection />

        {/* Services Section (4 Services with Scope, Deliverables & Pricing) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive PKR Cost & Timeline Estimator */}
        <InteractiveCalculator onApplyEstimate={handleApplyEstimate} />

        {/* Process Section (3-Phase Methodology + 5 Work Process Guidelines) */}
        <ProcessSection />

        {/* Why Choose Me Section (6 Pillars) */}
        <WhyChooseMe />

        {/* Portfolio Section (The Talent Master Institute + Upcoming Project + Live Preview Modal) */}
        <PortfolioSection />

        {/* Testimonials Section (The Talent Master Institute Management Review) */}
        <TestimonialsSection />

        {/* High-Intent WhatsApp Callout Banner */}
        <WhatsAppBanner />

        {/* Contact Section (Validated Form + Direct WhatsApp Bridge + Contact Details) */}
        <ContactSection
          initialService={selectedServiceForContact}
          initialBudget={selectedBudgetForContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Floating Instagram Button (Bottom Left) */}
      <FloatingInstagram />
    </div>
  );
}

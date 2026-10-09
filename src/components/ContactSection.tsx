import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  Github,
  AlertCircle
} from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialBudget
}) => {
  const [formData, setFormData] = useState({
    full_name: '',
    business_name: '',
    whatsapp_number: '',
    email: '',
    website_type: initialService || 'Business Website Development',
    budget: initialBudget || 'PKR 15,000 – 30,000',
    project_details: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, website_type: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBudget) {
      setFormData(prev => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.full_name.trim() || !formData.whatsapp_number.trim() || !formData.email.trim() || !formData.project_details.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDirectWhatsAppOrder = () => {
    const message = `Hello Halim, I want to start a project with HALIM.DEV:
• Name: ${formData.full_name || 'Prospective Client'}
• Business: ${formData.business_name || 'N/A'}
• Phone: ${formData.whatsapp_number || 'N/A'}
• Email: ${formData.email || 'N/A'}
• Website Type: ${formData.website_type}
• Budget: ${formData.budget}
• Details: ${formData.project_details || 'Looking forward to discussing.'}`;

    window.open(`https://wa.me/923253045617?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 font-mono">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {SITE_DATA.contact.title}
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            {SITE_DATA.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Direct WhatsApp</h3>
                  <p className="text-xs text-neutral-400">Fastest response for inquiries</p>
                </div>
              </div>

              <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-200">{SITE_DATA.contact.whatsapp.number}</span>
                <span className="text-emerald-400 font-sans">Available 9am - 10pm</span>
              </div>

              <a
                href={SITE_DATA.contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors"
              >
                <span>{SITE_DATA.contact.whatsapp.display_text}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Email Address</h3>
                  <p className="text-xs text-neutral-400">Official project communications</p>
                </div>
              </div>

              <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-200 truncate pr-2">{SITE_DATA.contact.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-purple-400 hover:text-purple-300 font-sans shrink-0"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${SITE_DATA.contact.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors"
              >
                <span>Compose Email</span>
              </a>
            </div>

            {/* Location & Social Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Location</h3>
                  <p className="text-xs text-neutral-400">{SITE_DATA.contact.location}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">GitHub Profile:</span>
                <a
                  href={SITE_DATA.social_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/halim293</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-neutral-900/50 border border-neutral-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  {SITE_DATA.contact_form.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {SITE_DATA.contact_form.subtitle}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-purple-950/40 border border-purple-800/60 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-purple-900/80 border border-purple-600/60 flex items-center justify-center mx-auto text-purple-300">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Request Received</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
                    {SITE_DATA.contact_form.success_message}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleDirectWhatsAppOrder}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send This Inquiry on WhatsApp Too</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/60 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="full_name" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="business_name" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Business Name <span className="text-neutral-500">(Optional)</span>
                      </label>
                      <input
                        id="business_name"
                        name="business_name"
                        type="text"
                        value={formData.business_name}
                        onChange={handleChange}
                        placeholder="e.g. Talent Master Institute"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Number */}
                    <div>
                      <label htmlFor="whatsapp_number" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        WhatsApp Number <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="whatsapp_number"
                        name="whatsapp_number"
                        type="tel"
                        required
                        value={formData.whatsapp_number}
                        onChange={handleChange}
                        placeholder="03XX XXXXXXX"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-mono"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Website Type */}
                    <div>
                      <label htmlFor="website_type" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Website Type <span className="text-purple-400">*</span>
                      </label>
                      <select
                        id="website_type"
                        name="website_type"
                        required
                        value={formData.website_type}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      >
                        <option value="Business Website Development">Business Website Development</option>
                        <option value="Institute & Coaching Center Website">Institute & Coaching Center Website</option>
                        <option value="Personal Portfolio Website">Personal Portfolio Website</option>
                        <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Estimated Budget <span className="text-purple-400">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      >
                        <option value="Under PKR 15,000">Under PKR 15,000</option>
                        <option value="PKR 15,000 – 30,000">PKR 15,000 – 30,000</option>
                        <option value="PKR 30,000 – 50,000">PKR 30,000 – 50,000</option>
                        <option value="PKR 50,000 – 100,000">PKR 50,000 – 100,000</option>
                        <option value="PKR 100,000+">PKR 100,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="project_details" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Details & Requirements <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="project_details"
                      name="project_details"
                      rows={4}
                      required
                      value={formData.project_details}
                      onChange={handleChange}
                      placeholder="Tell me about your business, website requirements, pages, features and goals..."
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl shadow-lg shadow-purple-600/20 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>{SITE_DATA.contact_form.submit_button}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsAppOrder}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium text-emerald-400 bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-800/60 rounded-xl transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

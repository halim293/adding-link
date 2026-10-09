import React, { useState } from 'react';
import { X, ExternalLink, Globe, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { PortfolioItem } from '../data/content';

interface PortfolioPreviewModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioPreviewModal: React.FC<PortfolioPreviewModalProps> = ({
  project,
  onClose
}) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[88vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-neutral-800 text-xs font-mono text-neutral-400">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>{project.url}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.url !== '#' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Meta Bar */}
        <div className="px-6 py-3 bg-neutral-900/60 border-b border-neutral-800/80 flex flex-wrap items-center justify-between text-xs gap-2">
          <div>
            <span className="font-bold text-white text-sm">{project.title}</span>
            <span className="mx-2 text-neutral-600">·</span>
            <span className="text-neutral-400">{project.category}</span>
          </div>
          <span className="text-emerald-400 font-mono flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Modal Body / Iframe or Fallback */}
        <div className="relative flex-1 bg-neutral-950 overflow-hidden">
          {project.url !== '#' ? (
            <>
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-neutral-400 gap-2">
                  <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  <span>Loading live site preview...</span>
                </div>
              )}
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-full border-0 bg-white"
                onLoad={() => setIframeLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4 animate-pulse" />
              <h4 className="text-xl font-bold text-white mb-2">Project Under Active Preparation</h4>
              <p className="text-sm text-neutral-400 max-w-md">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

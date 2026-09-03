import React from 'react';
import { Edit3, DownloadCloud, KeyRound, Award, ExternalLink } from 'lucide-react';

export const QuickLinks: React.FC = () => {
  const links = [
    {
      title: 'Apply',
      description: 'Online Applications',
      icon: Edit3,
      color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
      badge: 'Active',
    },
    {
      title: 'Admit Card',
      description: 'Hall Tickets',
      icon: DownloadCloud,
      color: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
      badge: 'Tier-I/II',
    },
    {
      title: 'Answer Key',
      description: 'Challenge Window',
      icon: KeyRound,
      color: 'bg-amber-50 text-amber-800 hover:bg-amber-100 border-amber-200',
      badge: 'Tentative',
    },
    {
      title: 'Result',
      description: 'Cut-Off & Lists',
      icon: Award,
      color: 'bg-maroon-50 text-maroon-800 hover:bg-maroon-100 border-maroon-200',
      badge: 'Updated',
    },
  ];

  const handleClick = (title: string) => {
    alert(`Navigating to official SSC portal for: ${title}`);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-5 shadow-gov">
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-1.5 rounded-full bg-maroon-800" />
          <h3 className="text-base font-bold text-slate-900">Quick Links</h3>
        </div>
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Direct Services
        </span>
      </div>

      {/* 2x2 Grid of Pill-Shaped Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.title}
              type="button"
              onClick={() => handleClick(link.title)}
              className="group relative flex flex-col items-center justify-center rounded-full border border-slate-200 bg-slate-50/60 p-3.5 sm:p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-maroon-300 hover:bg-white hover:shadow-md active:translate-y-0"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xs group-hover:bg-maroon-800 group-hover:text-white transition-colors text-maroon-800 border border-slate-100">
                <Icon className="h-5 w-5" />
              </div>

              <span className="text-sm font-bold text-slate-800 group-hover:text-maroon-800 transition-colors">
                {link.title}
              </span>

              <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                {link.description}
              </span>

              <ExternalLink className="h-3 w-3 text-slate-400 absolute top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default QuickLinks;

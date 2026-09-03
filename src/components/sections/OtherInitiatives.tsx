import React from 'react';
import { ShieldCheck, Cpu, Users, Award, ExternalLink, Globe } from 'lucide-react';

interface Initiative {
  name: string;
  tagline: string;
  url: string;
  icon: React.ElementType;
  accent: string;
}

const initiatives: Initiative[] = [
  {
    name: 'Digital India',
    tagline: 'Power to Empower',
    url: 'https://www.digitalindia.gov.in',
    icon: Cpu,
    accent: 'border-orange-200 text-orange-600 bg-orange-50',
  },
  {
    name: 'India.gov.in',
    tagline: 'National Portal of India',
    url: 'https://www.india.gov.in',
    icon: Globe,
    accent: 'border-blue-200 text-blue-600 bg-blue-50',
  },
  {
    name: 'MyGov',
    tagline: 'Meri Sarkar Portal',
    url: 'https://www.mygov.in',
    icon: Users,
    accent: 'border-emerald-200 text-emerald-600 bg-emerald-50',
  },
  {
    name: 'Skill India',
    tagline: 'Kaushal Bharat, Kushal Bharat',
    url: 'https://www.skillindia.gov.in',
    icon: Award,
    accent: 'border-purple-200 text-purple-600 bg-purple-50',
  },
  {
    name: 'National Career Service',
    tagline: 'Right Skills, Right Jobs',
    url: 'https://www.ncs.gov.in',
    icon: ShieldCheck,
    accent: 'border-amber-200 text-amber-700 bg-amber-50',
  },
];

export const OtherInitiatives: React.FC = () => {
  return (
    <section className="w-full py-8 bg-white border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-1.5 rounded-full bg-maroon-800" />
            <h3 className="text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider">
              Other Government Initiatives & Portals
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Government of India Networks
          </span>
        </div>

        {/* Scrolling carousel / row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {initiatives.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg border border-slate-200 bg-slate-50/40 text-center hover:bg-white hover:border-maroon-300 hover:shadow-sm transition-all"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 border ${item.accent} group-hover:scale-105 transition-transform`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-maroon-800 flex items-center gap-1 transition-colors">
                  <span>{item.name}</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {item.tagline}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OtherInitiatives;

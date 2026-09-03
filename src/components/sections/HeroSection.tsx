import React from 'react';
import { Bell, ArrowRight, Anchor, Volume2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white select-none">
      {/* Visual: SSC Building / Headquarters representation */}
      <div className="relative h-64 sm:h-80 md:h-[380px] lg:h-[420px] w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        {/* Architectural / Institutional Building Graphic Backdrop */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CGO Complex Architecture lines */}
            <rect x="150" y="80" width="900" height="320" fill="#1e293b" />
            <g stroke="#475569" strokeWidth="1.5">
              {/* Columns */}
              {Array.from({ length: 24 }).map((_, i) => (
                <rect key={i} x={180 + i * 36} y={100} width="20" height="280" fill="#334155" opacity="0.6" />
              ))}
              {/* Windows Grid */}
              {Array.from({ length: 7 }).map((_, row) => (
                <line key={row} x1="160" y1={120 + row * 38} x2="1040" y2={120 + row * 38} stroke="#64748b" />
              ))}
            </g>
            {/* Central Pediment */}
            <polygon points="150,80 600,10 1050,80" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
            {/* Flagpole and tricolor accent */}
            <line x1="600" y1="10" x2="600" y2="-40" stroke="#94a3b8" strokeWidth="3" />
          </svg>
        </div>

        {/* Ambient lighting overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Central Hero Typography */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left py-6">
          <div className="inline-flex items-center gap-2 rounded bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md mb-3">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>कर्मचारी चयन आयोग • भारत सरकार</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Staff Selection Commission
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-base text-slate-300 drop-shadow">
            Headquarters: Block No-12, CGO Complex, Lodhi Road, New Delhi-110003
          </p>
          <p className="text-xs sm:text-sm text-amber-400 font-medium mt-1">
            Facilitating merit-based recruitment to Group 'B' (Non-Gazetted) & Group 'C' posts across Ministries & Departments.
          </p>
        </div>

        {/* Tricolor decorative ribbon at the very top of image */}
        <div className="absolute top-0 inset-x-0 h-1 flex">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-[#FFFFFF]" />
          <div className="flex-1 bg-[#138808]" />
        </div>
      </div>

      {/* Overlay/Bottom Strip: Dark Maroon Semi-Transparent */}
      <div className="relative z-20 w-full bg-maroon-950/95 border-t border-maroon-800/80 backdrop-blur-md py-2.5 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            {/* Announcement Ticker Label */}
            <div className="flex items-center gap-2 shrink-0 text-amber-400 font-bold uppercase tracking-wider text-xs">
              <Volume2 className="h-4 w-4 animate-bounce" />
              <span>Latest Updates:</span>
            </div>

            {/* Strip Announcements */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left flex-1">
              {/* Strip Text 1 */}
              <a
                href="https://x.com/SSC_GoI"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <span className="font-semibold text-white group-hover:underline">
                  Follow on X (Twitter):
                </span>
                <span className="text-amber-300 font-medium">@SSC_GoI</span>
              </a>

              <span className="hidden md:inline text-maroon-700">|</span>

              {/* Strip Text 2 */}
              <a
                href="#otr-registration"
                className="group flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              >
                <Bell className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>One Time Registration (OTR) for Scribe is live.</span>
                <span className="underline font-semibold text-amber-300 group-hover:text-amber-200">
                  Please click here to register.
                </span>
              </a>

              <span className="hidden md:inline text-maroon-700">|</span>

              {/* Strip Text 3 */}
              <a
                href="https://www.joinindiannavy.gov.in"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white transition-colors"
              >
                <Anchor className="h-3.5 w-3.5" />
                <span className="group-hover:underline">Join Indian Navy</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { IndiaEmblem, SscSeal } from '@/components/common/Emblem';
import { Link } from 'react-router-dom';

interface MainHeaderProps {
  onOpenLogin?: () => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ onOpenLogin }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching SSC Portal for: "${searchQuery}"`);
    }
  };

  return (
    <div className="w-full bg-white border-b border-slate-200 py-3 sm:py-3.5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left: Brand / GoI Emblem + Staff Selection Commission */}
          <Link to="/" className="flex items-center gap-3 sm:gap-3.5 shrink-0 hover:opacity-95 transition-opacity">
            <div className="flex items-center gap-2">
              <SscSeal size={48} className="shrink-0" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide">
                Government of India
              </p>
              <h1 className="text-base sm:text-lg font-bold leading-tight text-slate-900 tracking-tight">
                Staff Selection Commission
              </h1>
            </div>
          </Link>

          {/* Center: Search Bar with Magnifying Glass */}
          <div className="w-full md:max-w-md lg:max-w-lg">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full rounded-md border border-slate-300 bg-slate-50/50 py-2 pl-4 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8b2332] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-all"
              />
              <button
                type="submit"
                title="Search"
                aria-label="Submit Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-[#8b2332] transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right: "Login or Register" Outlined Button + GoI Ashoka Lion Emblem */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenLogin}
              className="rounded-full border border-[#8b2332] text-[#8b2332] hover:bg-[#8b2332]/5 active:bg-[#8b2332]/10 px-5 py-2 text-sm font-medium transition-all shadow-xs"
            >
              Login or Register
            </button>

            {/* Emblem of India on far right as seen in SSC official portal screenshot */}
            <div className="hidden sm:block pl-1">
              <IndiaEmblem size={42} className="text-slate-800 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;

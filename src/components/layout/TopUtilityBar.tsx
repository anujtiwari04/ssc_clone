import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, ChevronDown, Check } from 'lucide-react';

interface TopUtilityBarProps {
  onFontSizeChange?: (size: 'sm' | 'md' | 'lg') => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onFontSizeChange }) => {
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [currentLang, setCurrentLang] = useState<'English' | 'हिन्दी'>('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setCurrentSize(size);
    if (onFontSizeChange) {
      onFontSizeChange(size);
    }
    // Update root document element class for font scaling
    const root = document.documentElement;
    root.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
    root.classList.add(`font-scale-${size}`);
  };

  useEffect(() => {
    // default scale
    document.documentElement.classList.add('font-scale-md');
  }, []);

  return (
    <aside aria-label="Accessibility & Top Utility" className="w-full bg-[#f1f5f9] border-b border-slate-200 text-xs text-slate-700 select-none">
      <div className="container mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Elements */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="#feedback"
            className="hover:text-maroon-800 transition-colors flex items-center gap-1 font-medium"
          >
            Feedback
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="https://ssc.nic.in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-maroon-800 transition-colors flex items-center gap-1 font-medium"
          >
            <span>SSC Old Website</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </div>

        {/* Right Elements */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="#main-content"
            className="hidden sm:inline-block text-slate-600 hover:text-maroon-800 transition-colors underline-offset-2 hover:underline focus:bg-amber-100 focus:p-1 focus:outline-none"
          >
            Skip to Main Content
          </a>

          <span className="hidden sm:inline text-slate-300">|</span>

          {/* Font Size Adjustments (+A A -A) */}
          <div className="flex items-center space-x-1 font-semibold text-[11px]" aria-label="Font Size Adjuster">
            <button
              type="button"
              onClick={() => handleSizeChange('sm')}
              title="Decrease Font Size"
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currentSize === 'sm'
                  ? 'bg-maroon-800 text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              -A
            </button>
            <button
              type="button"
              onClick={() => handleSizeChange('md')}
              title="Normal Font Size"
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currentSize === 'md'
                  ? 'bg-maroon-800 text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => handleSizeChange('lg')}
              title="Increase Font Size"
              className={`px-1.5 py-0.5 rounded transition-colors ${
                currentSize === 'lg'
                  ? 'bg-maroon-800 text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              +A
            </button>
          </div>

          <span className="text-slate-300">|</span>

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded px-2 py-0.5 bg-white border border-slate-200 hover:bg-slate-50 transition-colors font-medium text-slate-700"
              aria-expanded={langDropdownOpen}
              aria-label="Language selector"
            >
              <Globe className="h-3 w-3 text-slate-500" />
              <span>{currentLang}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-28 bg-white border border-slate-200 rounded shadow-md z-50 py-1">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentLang('English');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-slate-100 flex items-center justify-between text-xs"
                >
                  <span>English</span>
                  {currentLang === 'English' && <Check className="h-3 w-3 text-maroon-800" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentLang('हिन्दी');
                    setLangDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-slate-100 flex items-center justify-between text-xs font-hindi"
                >
                  <span>हिन्दी</span>
                  {currentLang === 'हिन्दी' && <Check className="h-3 w-3 text-maroon-800" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
export default TopUtilityBar;

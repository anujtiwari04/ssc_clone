import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home as HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const PrimaryNavigation: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Home', href: '/', icon: true },
    { label: 'Chairman’s Message', href: '#chairmans-message' },
    {
      label: 'For Candidates',
      href: '#candidates',
      hasDropdown: true,
      children: [
        { label: 'Syllabus & Scheme', href: '#syllabus' },
        { label: 'Tentative Vacancy', href: '#vacancies' },
        { label: 'Model Question Papers', href: '#model-papers' },
        { label: 'Manual of Instructions', href: '#instructions' },
        { label: 'Normalisation Formula', href: '#normalization' },
      ],
    },
    { label: 'Tender', href: '#tender' },
    {
      label: 'RTI',
      href: '#rti',
      hasDropdown: true,
      children: [
        { label: 'RTI Act Guidelines', href: '#rti-guidelines' },
        { label: 'First Appellate Authority', href: '#appellate-authority' },
        { label: 'Proactive Disclosures', href: '#disclosures' },
      ],
    },
    {
      label: 'About Us',
      href: '#about-us',
      hasDropdown: true,
      children: [
        { label: 'Introduction & History', href: '#intro' },
        { label: 'Functions of the Commission', href: '#functions' },
        { label: 'Organizational Structure', href: '#org-structure' },
        { label: 'Regional / Sub-Regional Offices', href: '#regional-offices' },
      ],
    },
  ];

  return (
    <nav className="w-full bg-white border-b-2 border-maroon-800 shadow-sm relative z-40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {navItems.map((item) => {
              const isHome = item.href === '/';
              const isActive = isHome && location.pathname === '/';

              if (item.hasDropdown) {
                return (
                  <li
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-maroon-800 rounded transition-colors group-hover:bg-slate-50 font-semibold"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-maroon-800 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 top-full w-60 rounded-b-md border border-t-2 border-slate-200 border-t-maroon-800 bg-white py-1.5 shadow-lg transition-all duration-150 ${
                        activeDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-maroon-50 hover:text-maroon-900 transition-colors border-b border-slate-100 last:border-b-0"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="py-2">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded transition-colors ${
                      isActive
                        ? 'bg-maroon-800 text-white font-semibold shadow-sm'
                        : 'text-slate-700 hover:text-maroon-800 hover:bg-slate-50'
                    }`}
                  >
                    {item.icon && <HomeIcon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden py-2.5 w-full justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-maroon-800">
              Staff Selection Commission
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-700 hover:text-maroon-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown List */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-3 bg-white space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-1">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-maroon-800"
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-6 pr-2 py-1 space-y-1 bg-slate-50 rounded">
                    {item.children?.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-slate-600 hover:text-maroon-800"
                      >
                        • {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default PrimaryNavigation;

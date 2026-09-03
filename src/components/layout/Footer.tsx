import React from 'react';
import { IndiaEmblem, SscSeal } from '@/components/common/Emblem';
import { MapPin, Phone, Mail, Clock, Eye, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t-4 border-maroon-800">
      {/* Upper Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand / Emblem & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <IndiaEmblem size={44} className="text-amber-400 shrink-0" />
              <div className="h-8 w-px bg-slate-700" />
              <SscSeal size={40} className="shrink-0 text-amber-300" />
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  कर्मचारी चयन आयोग
                </h3>
                <h4 className="text-xs font-semibold text-slate-300">
                  Staff Selection Commission
                </h4>
                <p className="text-[10px] text-amber-400 font-medium">
                  Government of India
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Staff Selection Commission is an attached office of the Department of Personnel and Training (DoPT), Government of India, entrusted with conducting recruitments to non-technical Group 'B' and Group 'C' posts.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Beware of fake websites and fraudulent touts.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2 mb-3">
              Important Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#public-disclosure" className="hover:text-amber-300 transition-colors">
                  • Public Disclosure
                </a>
              </li>
              <li>
                <a href="#archives" className="hover:text-amber-300 transition-colors">
                  • Archives & Past Notices
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-amber-300 transition-colors">
                  • Disclaimer & Terms
                </a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-amber-300 transition-colors">
                  • Sitemap
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-amber-300 transition-colors">
                  • Candidate Help & Support
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:text-amber-300 transition-colors">
                  • Privacy Policy & Hyperlinking
                </a>
              </li>
              <li>
                <a href="#copyright-policy" className="hover:text-amber-300 transition-colors">
                  • Copyright Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us Address Block */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2 mb-3">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Staff Selection Commission</strong>
                  <br />
                  Block No-12, CGO Complex, Lodhi Road,
                  <br />
                  New Delhi - 110003
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Helpline: 1800-309-3063 (Toll Free)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>enquiry-ssc@nic.in</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Working Hours: 09:30 AM to 06:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 4: Visitor Count & Portal Metadata */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2 mb-3">
              Portal Analytics
            </h4>
            <div className="rounded border border-slate-800 bg-slate-900/90 p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-amber-400" />
                  <span>Total Visitors:</span>
                </span>
                <span className="font-mono font-bold text-amber-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  48,291,402
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Visitors Today:</span>
                <span className="font-mono text-slate-200">124,800</span>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800 text-slate-400">
                <span>Last Updated:</span>
                <span className="font-mono text-slate-300">03-Sep-2026</span>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-slate-400">
              <p>Certified accessible portal following GIGW (Guidelines for Indian Government Websites) standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Full Width Copyright */}
      <div className="border-t border-slate-900 bg-black/80 py-4 text-center text-xs text-slate-400">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 SSC. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-500">
            Website Content Managed by Staff Selection Commission, Govt. of India.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

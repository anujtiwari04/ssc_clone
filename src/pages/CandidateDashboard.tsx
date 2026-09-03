import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IndiaEmblem, SscSeal } from '@/components/common/Emblem';
import {
  ArrowLeft,
  Pencil,
  FileCheck,
  BarChart3,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  List,
  LogOut,
  User,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const CandidateDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'live' | 'my-applications' | 'history'>('live');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfafb] text-slate-800 font-sans selection:bg-[#8b2332] selection:text-white">
      {/* 1. Top Utility Line */}
      <div className="w-full bg-white border-b border-slate-200 text-xs text-slate-600 py-1 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-3 text-[11px]">
            <a href="#feedback" className="hover:text-[#8b2332] transition-colors">
              Feedback
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://ssc.nic.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b2332] transition-colors"
            >
              SSC Old Website
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header (Logged In View) */}
      <header className="w-full bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          {/* Left: Brand Logo & Typography */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-95 transition-opacity">
            <SscSeal size={46} className="shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">
                Government of India
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                Staff Selection Commission
              </span>
            </div>
          </Link>

          {/* Right: User Profile Avatar & National Emblem */}
          <div className="flex items-center gap-3 sm:gap-4 relative">
            {/* User Avatar Circle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="h-10 w-10 rounded-full bg-[#8b2332] text-white flex items-center justify-center border-2 border-slate-100 shadow-sm hover:ring-2 hover:ring-[#8b2332]/30 transition-all cursor-pointer"
                title="Candidate Profile Menu"
              >
                <User className="h-5 w-5 text-white" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-800">ABHISHEK MEENA</p>
                    <p className="text-[11px] text-slate-500 font-mono">10023499537</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      alert('Edit Registration Details');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <Pencil className="h-3.5 w-3.5 text-slate-500" />
                    <span>Edit Profile Details</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileMenu(false);
                      handleLogout();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-slate-100"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* National Emblem */}
            <div className="hidden sm:block pl-1">
              <IndiaEmblem size={42} className="text-slate-800" />
            </div>
          </div>
        </div>
      </header>

      {/* 3. Security Warning Note */}
      <div className="w-full bg-[#fff5f5] border-b border-red-100 px-4 py-2 sm:px-8 text-center sm:text-left">
        <div className="container mx-auto max-w-7xl">
          <p className="text-xs text-[#d32f2f] font-medium leading-relaxed">
            <strong>Note:</strong> For your account's safety, we recommend updating your password periodically. Please keep your credentials confidential and do not share them with others.
          </p>
        </div>
      </div>

      {/* 4. Main Body */}
      <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-5">
        {/* Navigation Breadcrumbs & Top Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Breadcrumb: ← Homepage > Candidate Dashboard */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
            <Link
              to="/"
              className="flex items-center gap-1 text-slate-700 hover:text-[#8b2332] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Homepage</span>
            </Link>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-900 font-bold">Candidate Dashboard</span>
          </div>

          {/* Right Action Links */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-600">
              Click{' '}
              <a
                href="#feedback"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Feedback submission form');
                }}
                className="font-semibold text-blue-600 underline hover:text-blue-800"
              >
                Here
              </a>{' '}
              to share Feedback
            </span>

            {/* Edit Registration Details Button */}
            <button
              type="button"
              onClick={() => alert('Opening Candidate Registration Modification Window')}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8b2332] hover:bg-[#741c27] text-white px-4 py-1.5 font-medium shadow-xs transition-colors"
            >
              <Pencil className="h-3 w-3" />
              <span>Edit Registration Details</span>
            </button>
          </div>
        </div>

        {/* 5. Candidate Profile Summary Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Avatar + Name + Reg No */}
            <div className="flex items-center gap-4 shrink-0 min-w-[220px]">
              {/* Initials Circle with Pencil Badge */}
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center font-bold text-xl tracking-tight shadow-xs">
                  AM
                </div>
                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 shadow-xs">
                  <Pencil className="h-2.5 w-2.5 text-[#8b2332]" />
                </div>
              </div>

              <div>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide">
                  ABHISHEK MEENA
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Reg. No : <span className="text-slate-700 font-semibold">10023499537</span>
                </p>
              </div>
            </div>

            {/* Middle Columns: Father's Name, Mother's Name, Email, Address, Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-xs flex-1 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6">
              {/* Col 1 */}
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-slate-900 uppercase">RAMCHAND MEENA</div>
                  <div className="text-[11px] text-slate-500 font-medium">Father's Name</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 break-all">abhishekmeenakv05@gmail.com</div>
                  <div className="text-[11px] text-slate-500 font-medium">Email ID</div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-slate-900 uppercase">RAJANI MEENA</div>
                  <div className="text-[11px] text-slate-500 font-medium">Mother's Name</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-snug">
                    161/183 SECTOR 16 PRATAP NAGAR SANGANER Jaipur 302033 Rajasthan
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Address</div>
                </div>
              </div>

              {/* Col 3 */}
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-slate-900">7734904598</div>
                  <div className="text-[11px] text-slate-500 font-medium">Mobile Number</div>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    <ShieldCheck className="h-3 w-3" />
                    <span>OTR Verified</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Quick Action / Status Cards (2 Cards Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Admission Certificate (Clickable redirect to status page) */}
          <Link
            to="/candidate/admission-certificate-status"
            className="block group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-[#8b2332]/40 transition-all cursor-pointer"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                  <FileCheck className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#8b2332] transition-colors">
                  Admission Certificate
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#8b2332] transition-all" />
            </div>
            {/* Green Notification Strip */}
            <div className="bg-[#00a82d] text-white text-xs font-semibold py-2 px-4 text-center">
              CHT 2026 &amp; Stenographer Grade 'C' and 'D' 2026 Admission Certificate(Know Your City) is live!
            </div>
          </Link>

          {/* Card 2: Result (Clickable redirect to result status page) */}
          <Link
            to="/candidate/result-status"
            className="block group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-[#8b2332]/40 transition-all cursor-pointer"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-105 transition-transform">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#8b2332] transition-colors">
                  Result
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#8b2332] transition-all" />
            </div>
            {/* Green Notification Strip */}
            <div className="bg-[#00a82d] text-white text-xs font-semibold py-2 px-4 text-center">
              Result is available!
            </div>
          </Link>
        </div>

        {/* 7. Tabs & Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Left: Tab Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('live')}
              className={`rounded-md px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'live'
                  ? 'bg-[#74262b] text-white shadow-xs'
                  : 'bg-[#f4e6e7] text-slate-700 hover:bg-[#ebd3d5]'
              }`}
            >
              Live Examinations
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('my-applications')}
              className={`rounded-md px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'my-applications'
                  ? 'bg-[#74262b] text-white shadow-xs'
                  : 'bg-[#f4e6e7] text-slate-700 hover:bg-[#ebd3d5]'
              }`}
            >
              My Applications
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('history')}
              className={`rounded-md px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'history'
                  ? 'bg-[#74262b] text-white shadow-xs'
                  : 'bg-[#f4e6e7] text-slate-700 hover:bg-[#ebd3d5]'
              }`}
            >
              Applications History
            </button>
          </div>

          {/* Right: Sort & View Switcher */}
          <div className="flex items-center gap-3 text-xs text-slate-600 self-end sm:self-center">
            <button
              type="button"
              onClick={() => alert('Sorting options')}
              className="flex items-center gap-1 font-medium hover:text-[#8b2332]"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Sort</span>
            </button>

            <div className="flex items-center border border-slate-200 rounded p-0.5 bg-white">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1 rounded ${viewMode === 'list' ? 'bg-slate-100 text-[#8b2332]' : 'text-slate-400'}`}
                title="List View"
              >
                <List className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-[#f4e6e7] text-[#8b2332]' : 'text-slate-400'}`}
                title="Grid View"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 8. Tab Content: Live Examinations */}
        {activeTab === 'live' && (
          <div className="space-y-4">
            {/* Exam Card: Junior Engineer Examination, 2026 */}
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[#8b2332]/40 transition-colors">
              {/* Card Header (Soft Pink/Beige Banner) */}
              <div className="bg-[#faeded] border-b border-[#f0d6d8] px-5 py-4">
                <h3 className="text-base font-bold text-slate-900">
                  Junior Engineer Examination, 2026
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Junior Engineer Examination, 2026
                </p>
              </div>

              {/* Card Body with Key Dates */}
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs">
                  {/* Row 1 */}
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Application Start Date</div>
                    <div className="font-bold text-slate-900 mt-0.5">02/09/2026</div>
                  </div>

                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Application End Date</div>
                    <div className="font-bold text-slate-900 mt-0.5">22/09/2026 (up to 11:00 PM)</div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Last Date for Online Fee payment</div>
                    <div className="font-bold text-slate-900 mt-0.5">23/09/2026 (up to 11:00 PM)</div>
                  </div>

                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Window for Application Form Correction and Online Payment of Correction Charges
                    </div>
                    <div className="font-bold text-slate-900 mt-0.5">
                      28/09/2026 - 30/09/2026 (up to 11:00 PM)
                    </div>
                  </div>
                </div>

                {/* Card Action Button: Apply */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => alert('Starting Application Form for Junior Engineer Examination, 2026')}
                    className="rounded-md bg-[#8b2332] hover:bg-[#741c27] text-white px-5 py-2 text-xs font-bold shadow-xs transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: My Applications */}
        {activeTab === 'my-applications' && (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-600">
            <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800 text-sm">No pending application forms requiring payment.</p>
            <p className="text-slate-500 mt-1">Your submitted applications for CHSL &amp; CGL 2025 are processed.</p>
          </div>
        )}

        {/* Tab Content: Applications History */}
        {activeTab === 'history' && (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-600">
            <p className="font-semibold text-slate-800 text-sm">Application History Archive</p>
            <p className="text-slate-500 mt-1">Previous year records for candidate 10023499537 are synced.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-3 text-center text-xs text-slate-500">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Staff Selection Commission, Govt. of India.</span>
          <span>Logged in as: ABHISHEK MEENA (10023499537)</span>
        </div>
      </footer>
    </div>
  );
};
export default CandidateDashboard;

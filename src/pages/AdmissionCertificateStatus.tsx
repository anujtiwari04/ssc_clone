import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IndiaEmblem, SscSeal } from '@/components/common/Emblem';
import {
  ArrowLeft,
  ChevronDown,
  Search,
  User,
  MapPin,
  CheckCircle2,
  Download,
  Calendar,
  AlertCircle,
  Clock,
} from 'lucide-react';

interface ExamOption {
  id: string;
  name: string;
  year: string;
  rollNo: string;
  candidateName: string;
  fatherName: string;
  examDate: string;
  shift: string;
  time: string;
  reportingTime: string;
  city: string;
  venue: string;
  status: string;
}

const EXAM_OPTIONS: ExamOption[] = [
  {
    id: 'steno-2026',
    name: "Stenographer Grade 'C' and 'D' Examination, 2026",
    year: '2026',
    rollNo: '2201084920',
    candidateName: 'ABHISHEK MEENA',
    fatherName: 'Ramchand Meena',
    examDate: '10 September, 2026',
    shift: 'Shift 2',
    time: '12:30 P.M.',
    reportingTime: '12:30 P.M.',
    city: 'Udaipur',
    venue: 'iON Digital Zone iDZ, Geetanjali Institute of Technical Studies, Airport Road, Dabok, Udaipur - 313022',
    status: 'Application Accepted',
  },
  {
    id: 'cht-2026',
    name: 'Combined Hindi Translators Examination, 2026',
    year: '2026',
    rollNo: '2201093144',
    candidateName: 'ABHISHEK MEENA',
    fatherName: 'Ramchand Meena',
    examDate: '10 September, 2026',
    shift: 'Shift 2',
    time: '12:30 P.M.',
    reportingTime: '12:30 P.M.',
    city: 'Udaipur',
    venue: 'iON Digital Zone iDZ, Geetanjali Institute of Technical Studies, Airport Road, Dabok, Udaipur - 313022',
    status: 'Application Accepted',
  },
];

const YEARS = ['2026', '2025', '2024'];

export const AdmissionCertificateStatus: React.FC = () => {
  // Dropdown states
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  // Selected values (pre-select first exam for seamless display)
  const [selectedExam, setSelectedExam] = useState<ExamOption | null>(EXAM_OPTIONS[0]);
  const [selectedYear, setSelectedYear] = useState<string>('2026');
  const [examSearch, setExamSearch] = useState('');

  // Status check output - default to true so the user sees the requested display immediately or on check
  const [statusChecked, setStatusChecked] = useState(true);
  const [statusError, setStatusError] = useState<string | null>(null);

  const examRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (examRef.current && !examRef.current.contains(e.target as Node)) {
        setExamDropdownOpen(false);
      }
      if (yearRef.current && !yearRef.current.contains(e.target as Node)) {
        setYearDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredExams = EXAM_OPTIONS.filter((exam) =>
    exam.name.toLowerCase().includes(examSearch.toLowerCase())
  );

  const handleCheckStatus = () => {
    if (!selectedExam) {
      setStatusError('Please select an Examination from the dropdown.');
      setStatusChecked(false);
      return;
    }
    if (selectedYear === 'Select') {
      setStatusError('Please select an Examination Year.');
      setStatusChecked(false);
      return;
    }
    setStatusError(null);
    setStatusChecked(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfafb] text-slate-800 font-sans selection:bg-[#8b2332] selection:text-white">
      {/* 1. Top Utility Bar */}
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

      {/* 2. Main Header */}
      <header className="w-full bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
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

          {/* Right Profile & Emblem */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/candidate/dashboard"
              className="h-10 w-10 rounded-full bg-[#8b2332] text-white flex items-center justify-center border-2 border-slate-100 shadow-sm hover:ring-2 hover:ring-[#8b2332]/30 transition-all"
              title="Candidate Dashboard"
            >
              <User className="h-5 w-5 text-white" />
            </Link>

            <div className="hidden sm:block pl-1">
              <IndiaEmblem size={42} className="text-slate-800" />
            </div>
          </div>
        </div>
      </header>

      {/* 3. Breadcrumbs */}
      <div className="w-full bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="container mx-auto max-w-7xl flex items-center gap-2 text-xs font-semibold text-slate-800">
          <Link
            to="/candidate/dashboard"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#8b2332] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Dashboard</span>
          </Link>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900 font-bold">Admission Certificate Status</span>
        </div>
      </div>

      {/* 4. Main Body Container */}
      <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Card: Check Status of Admission Certificate */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-visible">
          {/* Card Header (Soft pink/beige background) */}
          <div className="bg-[#f5e6e8] border-b border-[#ebd3d6] px-6 py-4 rounded-t-xl">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Check Status of Admission Certificate
            </h2>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row items-end gap-5">
              {/* Field 1: Examination Dropdown */}
              <div className="w-full lg:flex-1 relative" ref={examRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Examination
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setExamDropdownOpen(!examDropdownOpen);
                    setYearDropdownOpen(false);
                  }}
                  className="w-full h-10 rounded-md border border-slate-300 bg-white px-3.5 flex items-center justify-between text-xs text-slate-800 hover:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors cursor-pointer text-left"
                >
                  <span className="truncate">
                    {selectedExam ? selectedExam.name : 'Select'}
                  </span>
                  <div className="h-6 w-6 rounded flex items-center justify-center bg-rose-50/60 text-rose-700 shrink-0 ml-2">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        examDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Examination Dropdown Menu */}
                {examDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full sm:w-[480px] rounded-lg border border-slate-200 bg-white shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {/* Search inside dropdown */}
                    <div className="p-2 border-b border-slate-100">
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={examSearch}
                          onChange={(e) => setExamSearch(e.target.value)}
                          placeholder="Search..."
                          className="w-full rounded border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#8b2332]"
                          autoFocus
                        />
                        <Search className="h-3.5 w-3.5 text-slate-400 absolute right-2.5" />
                      </div>
                    </div>

                    {/* Examination List */}
                    <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
                      {filteredExams.length > 0 ? (
                        filteredExams.map((exam) => (
                          <button
                            key={exam.id}
                            type="button"
                            onClick={() => {
                              setSelectedExam(exam);
                              setSelectedYear(exam.year);
                              setExamDropdownOpen(false);
                              setStatusError(null);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors hover:bg-rose-50/70 hover:text-[#8b2332] ${
                              selectedExam?.id === exam.id
                                ? 'bg-rose-50 text-[#8b2332] font-semibold'
                                : 'text-slate-700'
                            }`}
                          >
                            {exam.name}
                          </button>
                        ))
                      ) : (
                        <div className="p-4 text-center text-xs text-slate-400">
                          No matching examinations found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Field 2: Examination Year Dropdown */}
              <div className="w-full lg:w-48 relative" ref={yearRef}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Examination Year
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setYearDropdownOpen(!yearDropdownOpen);
                    setExamDropdownOpen(false);
                  }}
                  className="w-full h-10 rounded-md border border-slate-300 bg-white px-3.5 flex items-center justify-between text-xs text-slate-800 hover:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors cursor-pointer text-left"
                >
                  <span>{selectedYear}</span>
                  <div className="h-6 w-6 rounded flex items-center justify-center bg-rose-50/60 text-rose-700 shrink-0 ml-2">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        yearDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Year Dropdown Menu */}
                {yearDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    <div className="divide-y divide-slate-100">
                      {YEARS.map((year) => (
                        <button
                          key={year}
                          type="button"
                          onClick={() => {
                            setSelectedYear(year);
                            setYearDropdownOpen(false);
                            setStatusError(null);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-rose-50 hover:text-[#8b2332] ${
                            selectedYear === year
                              ? 'bg-rose-50 text-[#8b2332] font-bold'
                              : 'text-slate-700'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button: Check Status */}
              <div className="w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleCheckStatus}
                  className="w-full lg:w-auto h-10 px-8 rounded-full border border-[#8b2332] text-[#8b2332] hover:bg-[#8b2332]/5 active:bg-[#8b2332]/10 font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Check Status
                </button>
              </div>
            </div>

            {/* Error Message */}
            {statusError && (
              <div className="mt-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-800 flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>{statusError}</span>
              </div>
            )}

            {/* Status Result Display */}
            {statusChecked && selectedExam && (
              <div className="mt-6 border-t border-slate-200 pt-6 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
                  {/* Top Status Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-200 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-900">
                        Admission Certificate Available (Know Your City / Admit Card Live)
                      </span>
                    </div>

                    {/* Prominent Application Accepted Status in Green */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                      <span>Application Accepted</span>
                    </span>
                  </div>

                  {/* Grid details with City: Udaipur, Father name: Ramchand Meena, Exam date: 10 september, Shift 2, time: 12:30 P.M. */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700 bg-white/80 rounded-lg p-4 border border-emerald-100">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Candidate Name</span>
                      <span className="font-bold text-slate-900">{selectedExam.candidateName}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Father's Name</span>
                      <span className="font-bold text-slate-900">{selectedExam.fatherName}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Roll Number</span>
                      <span className="font-bold font-mono text-[#8b2332]">{selectedExam.rollNo}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">City of Examination</span>
                      <span className="font-bold text-slate-900 text-sm">{selectedExam.city}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Date of Examination</span>
                      <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        {selectedExam.examDate}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Examination Shift</span>
                      <span className="font-bold text-slate-900">{selectedExam.shift}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Examination Time</span>
                      <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                        <Clock className="h-3.5 w-3.5 text-slate-500" />
                        {selectedExam.time}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Application Status</span>
                      <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-0.5">
                        {selectedExam.status}
                      </span>
                    </div>

                    <div className="sm:col-span-2 md:col-span-4 border-t border-slate-100 pt-2.5 mt-1">
                      <span className="text-[11px] text-slate-500 font-medium block">Examination Venue</span>
                      <span className="font-medium text-slate-900">{selectedExam.venue}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-slate-500">
                      Bring original Photo ID proof and Admission Certificate printout to the examination center in Udaipur.
                    </p>

                    <button
                      type="button"
                      onClick={() => alert(`Downloading Admission Certificate PDF for Roll No: ${selectedExam.rollNo} (Udaipur Center)`)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#8b2332] hover:bg-[#741c27] text-white px-4 py-2 text-xs font-bold shadow-sm transition-colors cursor-pointer shrink-0"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Admission Certificate (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 5. Authoritative Dark Footer matching screenshot */}
      <footer className="w-full bg-[#202327] text-slate-300 pt-10 pb-6 border-t border-slate-700">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-700/80">
            {/* Col 1: Brand (3 cols) */}
            <div className="md:col-span-3 flex items-start gap-3">
              <SscSeal size={48} className="shrink-0 text-amber-400" />
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Staff Selection
                </h3>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Commission
                </h3>
              </div>
            </div>

            {/* Col 2: Public Disclosure (4 cols) */}
            <div className="md:col-span-4 text-xs text-slate-300 leading-relaxed">
              <a
                href="#public-disclosure"
                className="hover:text-amber-300 transition-colors font-medium block"
              >
                Public Disclosure of Scores and Other Details of Non-Recommended Willing Candidates
              </a>
            </div>

            {/* Col 3: Useful Links (2 cols) */}
            <div className="md:col-span-2 text-xs space-y-2">
              <h4 className="font-bold text-white mb-2">Useful links</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li><a href="#archives" className="hover:text-amber-300 transition-colors">Archives</a></li>
                <li><a href="#disclaimer" className="hover:text-amber-300 transition-colors">Disclaimer</a></li>
                <li><a href="#sitemap" className="hover:text-amber-300 transition-colors">Sitemap</a></li>
                <li><a href="#help" className="hover:text-amber-300 transition-colors">Help</a></li>
                <li><a href="#policies" className="hover:text-amber-300 transition-colors">Website Policies</a></li>
                <li><a href="#wim" className="hover:text-amber-300 transition-colors">Web Information Manager</a></li>
              </ul>
            </div>

            {/* Col 4: Contact Us (3 cols) */}
            <div className="md:col-span-3 text-xs space-y-2">
              <h4 className="font-bold text-white mb-2">Contact Us</h4>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Block No-12, CGO Complex, Lodhi Road
                  <br />
                  New Delhi
                </p>
              </div>
            </div>
          </div>

          {/* Sub-Footer Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© 2024 SSC. All Rights Reserved</span>
            <span>Total Visitor Count: 479134455</span>
            <span>Last updated on Sep 3, 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default AdmissionCertificateStatus;

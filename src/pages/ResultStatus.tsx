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
  AlertCircle,
  Award,
  BarChart2,
} from 'lucide-react';

interface ResultOption {
  id: string;
  name: string;
  year: string;
  rollNo: string;
  regNo: string;
  category: string;
  postName: string;
  rawScore: string;
  normalizedScore: string;
  cutoffMarks: string;
  qualificationStatus: 'QUALIFIED' | 'NOT QUALIFIED';
  qualifiedFor: string;
  sectionalScores: {
    section: string;
    marks: string;
    maxMarks: string;
  }[];
}

const RESULT_OPTIONS: ResultOption[] = [
  {
    id: 'cgl-2025',
    name: 'Combined Graduate Level Examination (Tier-I), 2025',
    year: '2025',
    rollNo: '2201029482',
    regNo: '10023499537',
    category: 'OBC',
    postName: 'Assistant Section Officer / Inspector (CGST & PO)',
    rawScore: '170.50',
    normalizedScore: '176.82',
    cutoffMarks: '150.25',
    qualificationStatus: 'QUALIFIED',
    qualifiedFor: 'Qualified for Tier-II (Paper-I & Paper-II)',
    sectionalScores: [
      { section: 'General Intelligence and Reasoning', marks: '46.50', maxMarks: '50' },
      { section: 'General Awareness', marks: '36.00', maxMarks: '50' },
      { section: 'Quantitative Aptitude', marks: '48.00', maxMarks: '50' },
      { section: 'English Comprehension', marks: '40.00', maxMarks: '50' },
    ],
  },
  {
    id: 'je-2025',
    name: 'Junior Engineer (Civil, Mechanical & Electrical) Examination, 2025',
    year: '2025',
    rollNo: '2201084920',
    regNo: '10023499537',
    category: 'OBC',
    postName: 'Junior Engineer (Civil) - CPWD / MES',
    rawScore: '134.00',
    normalizedScore: '141.25',
    cutoffMarks: '128.50',
    qualificationStatus: 'QUALIFIED',
    qualifiedFor: 'Qualified for Paper-II (CBE Descriptive)',
    sectionalScores: [
      { section: 'General Intelligence & Reasoning', marks: '42.50', maxMarks: '50' },
      { section: 'General Awareness', marks: '28.00', maxMarks: '50' },
      { section: 'Part-A General Engineering (Civil)', marks: '70.75', maxMarks: '100' },
    ],
  },
  {
    id: 'chsl-2025',
    name: 'Combined Higher Secondary (10+2) Level Examination (Tier-I), 2025',
    year: '2025',
    rollNo: '2201053198',
    regNo: '10023499537',
    category: 'OBC',
    postName: 'Data Entry Operator / Lower Division Clerk',
    rawScore: '158.00',
    normalizedScore: '164.75',
    cutoffMarks: '149.00',
    qualificationStatus: 'QUALIFIED',
    qualifiedFor: 'Qualified for Tier-II (Skill Test & Typing)',
    sectionalScores: [
      { section: 'English Language (Basic Knowledge)', marks: '41.00', maxMarks: '50' },
      { section: 'General Intelligence', marks: '45.50', maxMarks: '50' },
      { section: 'Quantitative Aptitude (Basic Arithmetic)', marks: '44.50', maxMarks: '50' },
      { section: 'General Awareness', marks: '33.75', maxMarks: '50' },
    ],
  },
];

const YEARS = ['2026', '2025', '2024'];

export const ResultStatus: React.FC = () => {
  // Dropdown states
  const [examDropdownOpen, setExamDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  // Selected values
  const [selectedResult, setSelectedResult] = useState<ResultOption | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('Select');
  const [examSearch, setExamSearch] = useState('');

  // Status check output
  const [statusChecked, setStatusChecked] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);

  const examRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

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

  const filteredExams = RESULT_OPTIONS.filter((exam) =>
    exam.name.toLowerCase().includes(examSearch.toLowerCase())
  );

  const handleCheckResult = () => {
    if (!selectedResult) {
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
          <span className="text-slate-900 font-bold">Candidate Result / Marks Status</span>
        </div>
      </div>

      {/* 4. Main Body Container */}
      <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Card: Check Result & Marks */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-visible">
          {/* Card Header (Soft pink/beige background) */}
          <div className="bg-[#f5e6e8] border-b border-[#ebd3d6] px-6 py-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-[#8b2332]" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Check Result and Marks of Examination
              </h2>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 border border-emerald-200 rounded px-2.5 py-0.5 hidden sm:inline-block">
              Results Published
            </span>
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
                    {selectedResult ? selectedResult.name : 'Select'}
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
                  <div className="absolute left-0 top-full mt-1 w-full sm:w-[500px] rounded-lg border border-slate-200 bg-white shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
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
                              setSelectedResult(exam);
                              setSelectedYear(exam.year);
                              setExamDropdownOpen(false);
                              setStatusError(null);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors hover:bg-rose-50/70 hover:text-[#8b2332] ${
                              selectedResult?.id === exam.id
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

              {/* Action Button: Check Result */}
              <div className="w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleCheckResult}
                  className="w-full lg:w-auto h-10 px-8 rounded-full border border-[#8b2332] text-[#8b2332] hover:bg-[#8b2332]/5 active:bg-[#8b2332]/10 font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Check Result
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

            {/* Result Scorecard Output */}
            {statusChecked && selectedResult && (
              <div className="mt-6 border-t border-slate-200 pt-6 animate-in fade-in slide-in-from-top-2 duration-200 space-y-6">
                {/* Result Status Banner */}
                <div className="rounded-xl border border-emerald-300 bg-gradient-to-r from-emerald-50 to-white p-5 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                          Official Result Status
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          {selectedResult.qualificationStatus}: {selectedResult.qualifiedFor}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Shortlisted</span>
                      </span>
                    </div>
                  </div>

                  {/* Candidate Identification Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700 bg-white/80 rounded-lg p-4 border border-emerald-100">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Candidate Name</span>
                      <span className="font-bold text-slate-900">ABHISHEK MEENA</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Roll Number</span>
                      <span className="font-bold font-mono text-[#8b2332]">{selectedResult.rollNo}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Registration Number</span>
                      <span className="font-bold font-mono text-slate-900">{selectedResult.regNo}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Social Category</span>
                      <span className="font-bold text-slate-900">{selectedResult.category}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Raw Score</span>
                      <span className="font-bold text-slate-900 font-mono text-sm">{selectedResult.rawScore}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Normalized Final Score</span>
                      <span className="font-bold text-[#8b2332] font-mono text-base">{selectedResult.normalizedScore}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Category Cut-off</span>
                      <span className="font-bold text-slate-700 font-mono text-sm">{selectedResult.cutoffMarks}</span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Merit Margin</span>
                      <span className="font-bold text-emerald-700 font-mono text-sm">
                        +{(parseFloat(selectedResult.normalizedScore) - parseFloat(selectedResult.cutoffMarks)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Sectional Marks Table */}
                  <div className="mt-5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                      Subject-wise Marks Breakdown
                    </h4>
                    <div className="rounded-lg border border-slate-200 overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                          <tr>
                            <th className="px-4 py-2.5 font-bold">Subject / Section</th>
                            <th className="px-4 py-2.5 font-bold text-right">Maximum Marks</th>
                            <th className="px-4 py-2.5 font-bold text-right">Marks Obtained</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {selectedResult.sectionalScores.map((sec, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/70">
                              <td className="px-4 py-2.5 font-medium text-slate-800">{sec.section}</td>
                              <td className="px-4 py-2.5 text-right font-mono text-slate-500">{sec.maxMarks}</td>
                              <td className="px-4 py-2.5 text-right font-mono font-bold text-slate-900">{sec.marks}</td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50/80 font-bold border-t border-slate-200">
                            <td className="px-4 py-2.5 text-slate-900">Total Normalized Score</td>
                            <td className="px-4 py-2.5 text-right font-mono text-slate-600">200.00</td>
                            <td className="px-4 py-2.5 text-right font-mono text-[#8b2332] text-sm">
                              {selectedResult.normalizedScore}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Download Action Footer */}
                  <div className="mt-5 pt-4 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-slate-500">
                      Scorecard generated from official SSC evaluation database. Retain a printed copy for certificate verification.
                    </p>

                    <button
                      type="button"
                      onClick={() => alert(`Downloading Official Scorecard & Marks PDF for Roll No: ${selectedResult.rollNo}`)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#8b2332] hover:bg-[#741c27] text-white px-4 py-2 text-xs font-bold shadow-sm transition-colors cursor-pointer shrink-0"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Scorecard (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 5. Authoritative Dark Footer matching official portal */}
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
export default ResultStatus;

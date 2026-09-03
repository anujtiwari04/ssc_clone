import React, { useState } from 'react';
import { FileText, Eye, Download, ChevronRight, Bell, Sparkles } from 'lucide-react';

interface NoticeItem {
  id: string;
  title: string;
  date: string;
  isNew: boolean;
  fileSize: string;
  category: 'notices' | 'results' | 'admit-cards';
}

const noticesData: NoticeItem[] = [
  {
    id: 'n1',
    title: 'Head Constable (Executive) Male and Female in Delhi Police Examination, 2024 - Corrigendum regarding revised category-wise vacancies',
    date: 'Sep 3, 2026',
    isNew: true,
    fileSize: '289.73 KB',
    category: 'notices',
  },
  {
    id: 'n2',
    title: 'Combined Graduate Level Examination (Tier-I), 2026 - Schedule and Guidelines of Computer Based Examination',
    date: 'Sep 2, 2026',
    isNew: true,
    fileSize: '412.50 KB',
    category: 'notices',
  },
  {
    id: 'n3',
    title: 'Junior Engineer (Civil, Mechanical & Electrical) Examination, 2025 - Declaration of Final Result and Post Allocation',
    date: 'Sep 1, 2026',
    isNew: true,
    fileSize: '620.15 KB',
    category: 'results',
  },
  {
    id: 'n4',
    title: 'Sub-Inspector in Delhi Police and Central Armed Police Forces Examination, 2026 - Uploading of Final Answer Key(s) along with Question Paper',
    date: 'Aug 30, 2026',
    isNew: false,
    fileSize: '310.88 KB',
    category: 'notices',
  },
  {
    id: 'n5',
    title: 'Combined Higher Secondary (10+2) Level Examination, 2025 (Tier-II) - Important Notice regarding Submission of Option-cum-Preference',
    date: 'Aug 28, 2026',
    isNew: false,
    fileSize: '198.42 KB',
    category: 'notices',
  },
  {
    id: 'n6',
    title: 'Multi Tasking (Non-Technical) Staff, and Havaldar (CBIC & CBN) Examination, 2025 - Download Admission Certificate (Admit Card)',
    date: 'Aug 25, 2026',
    isNew: false,
    fileSize: '350.12 KB',
    category: 'admit-cards',
  },
  {
    id: 'n7',
    title: 'Constable (GD) in Central Armed Police Forces (CAPFs), SSF and Rifleman (GD) in Assam Rifles Examination, 2025 - Notice of Examination',
    date: 'Aug 22, 2026',
    isNew: false,
    fileSize: '1.45 MB',
    category: 'notices',
  },
  {
    id: 'n8',
    title: 'Phase-XII/2024 Selection Posts Examination - Scrutiny Status and Provisional Acceptance / Rejection Lists for various Post Categories',
    date: 'Aug 19, 2026',
    isNew: false,
    fileSize: '512.60 KB',
    category: 'results',
  },
];

export const NoticeBoard: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'notices' | 'results' | 'admit-cards'>('all');

  const filteredNotices = noticesData.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const handleDownload = (title: string) => {
    alert(`Downloading PDF document for:\n"${title}"`);
  };

  const handlePreview = (title: string) => {
    alert(`Opening official document viewer for:\n"${title}"`);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-gov overflow-hidden flex flex-col h-full">
      {/* Notice Board Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-5 w-1.5 rounded-full bg-maroon-800" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>Notice Board</span>
            <Bell className="h-4 w-4 text-maroon-800" />
          </h2>
        </div>

        <a
          href="#all-notices"
          className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-800 hover:text-maroon-950 transition-colors hover:underline"
        >
          <span>View All</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-600 px-4 pt-2 gap-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`pb-2 px-2.5 border-b-2 transition-colors whitespace-nowrap ${
            filter === 'all'
              ? 'border-maroon-800 text-maroon-800 font-bold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          All Updates
        </button>
        <button
          type="button"
          onClick={() => setFilter('notices')}
          className={`pb-2 px-2.5 border-b-2 transition-colors whitespace-nowrap ${
            filter === 'notices'
              ? 'border-maroon-800 text-maroon-800 font-bold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Notices & Corrigendums
        </button>
        <button
          type="button"
          onClick={() => setFilter('results')}
          className={`pb-2 px-2.5 border-b-2 transition-colors whitespace-nowrap ${
            filter === 'results'
              ? 'border-maroon-800 text-maroon-800 font-bold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Results
        </button>
        <button
          type="button"
          onClick={() => setFilter('admit-cards')}
          className={`pb-2 px-2.5 border-b-2 transition-colors whitespace-nowrap ${
            filter === 'admit-cards'
              ? 'border-maroon-800 text-maroon-800 font-bold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Admit Cards
        </button>
      </div>

      {/* Notice List Area: Vertically scrollable */}
      <div className="divide-y divide-slate-100 max-h-[520px] overflow-y-auto custom-scrollbar p-2 sm:p-3">
        {filteredNotices.map((notice) => (
          <article
            key={notice.id}
            className="group p-3 sm:p-3.5 hover:bg-slate-50/90 rounded-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            {/* Left: Date Badge + Title */}
            <div className="flex items-start gap-3 flex-1">
              {/* Date Badge */}
              <div className="shrink-0 flex flex-col items-center justify-center rounded border border-slate-200 bg-white px-2.5 py-1 text-center shadow-xs">
                {notice.isNew ? (
                  <span className="inline-flex items-center gap-0.5 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white animate-pulse mb-0.5">
                    <Sparkles className="h-2 w-2" />
                    NEW
                  </span>
                ) : (
                  <span className="text-[9px] font-semibold text-slate-400 uppercase">
                    POSTED
                  </span>
                )}
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {notice.date}
                </span>
              </div>

              {/* Title & metadata */}
              <div className="flex-1">
                <a
                  href={`#notice-${notice.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePreview(notice.title);
                  }}
                  className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-maroon-800 transition-colors leading-snug line-clamp-2"
                >
                  {notice.title}
                </a>

                <div className="mt-1.5 flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                    {notice.fileSize}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="capitalize">{notice.category.replace('-', ' ')}</span>
                </div>
              </div>
            </div>

            {/* Right: Actions (PDF Icon & Eye Icon) */}
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={() => handlePreview(notice.title)}
                title="Preview Notice"
                aria-label="Preview Notice"
                className="inline-flex items-center justify-center h-8 w-8 rounded text-slate-600 hover:text-maroon-800 hover:bg-maroon-50 border border-slate-200 hover:border-maroon-300 transition-colors"
              >
                <Eye className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => handleDownload(notice.title)}
                title="Download PDF"
                aria-label="Download Notice PDF"
                className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded bg-maroon-50 text-maroon-800 hover:bg-maroon-800 hover:text-white border border-maroon-200 transition-colors text-xs font-semibold"
              >
                <FileText className="h-3.5 w-3.5" />
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Notice Board Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs text-slate-500">
        Showing latest {filteredNotices.length} updates • Archived notices available in Archives section
      </div>
    </div>
  );
};
export default NoticeBoard;

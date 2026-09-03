import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowRight, Clock } from 'lucide-react';

interface CalendarEvent {
  id: string;
  day: string;
  month: string;
  examName: string;
  shift: string;
  mode: string;
}

const calendarData: Record<string, CalendarEvent[]> = {
  'Sep, 2026': [
    {
      id: 'c1',
      day: '14',
      month: 'MAR',
      examName: 'Indian Navy Entrance Test (INET)',
      shift: 'Morning & Afternoon',
      mode: 'CBE',
    },
    {
      id: 'c2',
      day: '18',
      month: 'SEP',
      examName: 'Combined Graduate Level Examination (Tier-I)',
      shift: 'Multi-shift',
      mode: 'Computer Based Test',
    },
    {
      id: 'c3',
      day: '25',
      month: 'SEP',
      examName: 'Junior Engineer (Civil & Mech) Paper-I',
      shift: 'Shift 1 & 2',
      mode: 'CBE',
    },
    {
      id: 'c4',
      day: '30',
      month: 'SEP',
      examName: 'Stenographer Grade ‘C’ & ‘D’ Examination',
      shift: 'Computer Based',
      mode: 'Skill Test & CBE',
    },
  ],
  'Oct, 2026': [
    {
      id: 'c5',
      day: '08',
      month: 'OCT',
      examName: 'Combined Higher Secondary (10+2) Tier-II',
      shift: 'Single Shift',
      mode: 'Descriptive & Typing',
    },
    {
      id: 'c6',
      day: '22',
      month: 'OCT',
      examName: 'Sub-Inspector in Delhi Police (Paper-II)',
      shift: 'Morning Shift',
      mode: 'CBE English Language',
    },
  ],
  'Aug, 2026': [
    {
      id: 'c7',
      day: '12',
      month: 'AUG',
      examName: 'Multi Tasking Staff (MTS) Examination',
      shift: 'Phase Completed',
      mode: 'CBE',
    },
    {
      id: 'c8',
      day: '27',
      month: 'AUG',
      examName: 'Selection Posts Phase-XII Examination',
      shift: 'Completed',
      mode: 'CBE',
    },
  ],
};

export const SscCalendar: React.FC = () => {
  const months = ['Aug, 2026', 'Sep, 2026', 'Oct, 2026'];
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // 'Sep, 2026'

  const currentMonth = months[currentMonthIndex];
  const events = calendarData[currentMonth] || calendarData['Sep, 2026'];

  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-5 shadow-gov">
      {/* Calendar Header with Month Selector */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-1.5 rounded-full bg-maroon-800" />
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
            <span>SSC Calendar</span>
            <CalendarIcon className="h-4 w-4 text-maroon-800" />
          </h3>
        </div>

        {/* Month Selector: < Sep, 2026 > */}
        <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md text-xs font-bold text-slate-700 select-none">
          <button
            type="button"
            onClick={handlePrevMonth}
            disabled={currentMonthIndex === 0}
            className="p-0.5 hover:text-maroon-800 disabled:opacity-30 disabled:hover:text-slate-700 cursor-pointer"
            title="Previous Month"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <span className="min-w-[76px] text-center">{currentMonth}</span>
          <button
            type="button"
            onClick={handleNextMonth}
            disabled={currentMonthIndex === months.length - 1}
            className="p-0.5 hover:text-maroon-800 disabled:opacity-30 disabled:hover:text-slate-700 cursor-pointer"
            title="Next Month"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-2.5">
        {events.map((event) => (
          <div
            key={event.id}
            className="group flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
          >
            {/* Date + Month Badge */}
            <div className="flex flex-col items-center justify-center h-12 w-12 rounded bg-maroon-50 text-maroon-800 border border-maroon-200 shrink-0 group-hover:bg-maroon-800 group-hover:text-white transition-colors">
              <span className="text-xs font-black leading-none">{event.day}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
                {event.month}
              </span>
            </div>

            {/* Exam Name and Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug truncate group-hover:text-maroon-800 transition-colors">
                {event.examName}
              </h4>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-slate-400" />
                  {event.shift}
                </span>
                <span>•</span>
                <span className="text-amber-700 font-medium">{event.mode}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <a
          href="#tentative-calendar"
          className="inline-flex items-center gap-1 text-xs font-bold text-maroon-800 hover:text-maroon-950 hover:underline"
        >
          <span>View All Annual Examination Calendar</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};
export default SscCalendar;

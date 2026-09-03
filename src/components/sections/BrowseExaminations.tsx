import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Shield,
  FileCheck,
  Award,
  ChevronRight,
} from 'lucide-react';

interface ExamCard {
  title: string;
  shortCode: string;
  description: string;
  eligibility: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const exams: ExamCard[] = [
  {
    title: 'Combined Graduate Level Examination',
    shortCode: 'CGL',
    description: 'Recruitment to Group ‘B’ and ‘C’ posts in various Ministries, Departments, and Attached Offices.',
    eligibility: 'Bachelor’s Degree',
    icon: GraduationCap,
    iconBg: 'bg-maroon-50',
    iconColor: 'text-maroon-800',
  },
  {
    title: 'Combined Higher Secondary (10+2) Level',
    shortCode: 'CHSL',
    description: 'Recruitment for Lower Divisional Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator.',
    eligibility: '12th Standard (10+2)',
    icon: Briefcase,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
  },
  {
    title: 'Junior Engineer (Civil, Mech, Electrical)',
    shortCode: 'JE',
    description: 'Engineering positions in CPWD, Central Water Commission, MES, and Border Roads Organization.',
    eligibility: 'Degree / Diploma in Engg.',
    icon: Wrench,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
  },
  {
    title: 'Sub-Inspector in Delhi Police & CAPFs',
    shortCode: 'CPO',
    description: 'Executive Sub-Inspector posts in Delhi Police, BSF, CISF, CRPF, ITBP, and SSB paramilitary forces.',
    eligibility: 'Bachelor’s Degree + Physical',
    icon: Shield,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
  },
  {
    title: 'Multi Tasking (Non-Technical) Staff & Havaldar',
    shortCode: 'MTS',
    description: 'General central service Group ‘C’ non-gazetted, non-ministerial posts across GoI offices.',
    eligibility: '10th (Matriculation)',
    icon: FileCheck,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-700',
  },
  {
    title: 'Constable (GD) in Central Armed Police Forces',
    shortCode: 'GD',
    description: 'Recruitment of Constables in BSF, CISF, CRPF, ITBP, SSB, SSF, and Rifleman in Assam Rifles.',
    eligibility: '10th Pass + PST/PET',
    icon: Award,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-700',
  },
];

export const BrowseExaminations: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="h-5 w-1.5 rounded-full bg-maroon-800" />
              <span className="text-xs font-bold uppercase tracking-wider text-maroon-800">
                Examination Portal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Browse by Examinations
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Explore exam-related details, eligibility criteria, syllabi, and relevant preparation resources.
            </p>
          </div>

          <a
            href="#all-exams"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1 text-xs font-bold text-maroon-800 hover:text-maroon-950 hover:underline"
          >
            <span>View All Schemes & Syllabi</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* CSS Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => {
            const Icon = exam.icon;
            return (
              <div
                key={exam.shortCode}
                className="group relative flex items-start justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-maroon-300 hover:shadow-gov-hover"
              >
                {/* Left Side: Details */}
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase">
                      {exam.shortCode}
                    </span>
                    <span className="text-[11px] font-medium text-amber-700">
                      • {exam.eligibility}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-maroon-800 transition-colors leading-snug">
                    {exam.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {exam.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-maroon-800 group-hover:text-maroon-950">
                    <span>Scheme & Syllabus</span>
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Right Side: Representative Icon / Image */}
                <div
                  className={`shrink-0 flex h-14 w-14 items-center justify-center rounded-xl ${exam.iconBg} ${exam.iconColor} border border-slate-100 shadow-xs group-hover:scale-105 transition-transform`}
                >
                  <Icon className="h-7 w-7" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BrowseExaminations;

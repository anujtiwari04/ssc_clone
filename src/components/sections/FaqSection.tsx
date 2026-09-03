import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is One Time Registration (OTR) and is it mandatory for applying to SSC examinations?',
    answer:
      'Yes, One Time Registration (OTR) is strictly mandatory for all candidates intending to apply for any examination conducted by the Staff Selection Commission. OTR creates a permanent profile and Registration ID that auto-populates your basic personal and educational credentials for all future exam applications.',
  },
  {
    id: 'faq2',
    question: 'How can I make corrections in my submitted online application form?',
    answer:
      'The Commission provides a dedicated "Window for Application Form Correction" for 2 to 3 days after the closing date of application submission. Candidates can log in using their OTR credentials, pay the prescribed correction charge, and update erroneous details. No modifications are permitted after this window closes.',
  },
  {
    id: 'faq3',
    question: 'How are examination centers allocated, and can I request a change of examination city?',
    answer:
      'Examination centers are allocated on a first-cum-first-served basis based on the preferences indicated in the application form and seat capacity constraints. The Commission does not entertain requests for change of examination center or shift under any circumstances.',
  },
  {
    id: 'faq4',
    question: 'What is the normalisation formula used for multi-shift computer-based examinations?',
    answer:
      'Marks scored by candidates in Computer Based Examinations held in multiple shifts are normalized using the standard formula published in Notice No. 1-1/2018-P&P-I dated 07-02-2019, which accounts for slight variations in difficulty levels across exam question paper sets.',
  },
  {
    id: 'faq5',
    question: 'What valid Photo Identity proofs are permitted inside the examination hall?',
    answer:
      'Candidates must bring an original valid Photo Identity Card having the same Date of Birth as printed on the Admission Certificate. Acceptable IDs include: Aadhaar Card / Printout of E-Aadhaar, Voter ID Card, Driving License, PAN Card, Passport, or Employer ID / College ID.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-5 w-1.5 rounded-full bg-maroon-800" />
          <span className="text-xs font-bold uppercase tracking-wider text-maroon-800">
            MOST POPULAR FAQS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
            <span>Frequently Asked Questions</span>
            <HelpCircle className="h-6 w-6 text-maroon-800" />
          </h2>
          <p className="text-xs text-slate-500 mt-1 sm:mt-0">
            Got queries? Find answers to the most common application & exam inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 flex items-center gap-2.5">
                    <CheckCircle className={`h-4 w-4 shrink-0 ${isOpen ? 'text-maroon-800' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ml-3 ${
                      isOpen ? 'rotate-180 text-maroon-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 px-5 py-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;

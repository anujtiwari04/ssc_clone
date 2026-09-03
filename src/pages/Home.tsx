import React, { useState } from 'react';
import { TopUtilityBar } from '@/components/layout/TopUtilityBar';
import { MainHeader } from '@/components/layout/MainHeader';
import { PrimaryNavigation } from '@/components/layout/PrimaryNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { NoticeBoard } from '@/components/sections/NoticeBoard';
import { QuickLinks } from '@/components/sections/QuickLinks';
import { SscCalendar } from '@/components/sections/SscCalendar';
import { BrowseExaminations } from '@/components/sections/BrowseExaminations';
import { FaqSection } from '@/components/sections/FaqSection';
import { OtherInitiatives } from '@/components/sections/OtherInitiatives';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/auth/AuthModal';

export const Home: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-maroon-800 selection:text-white">
      {/* A. Top Utility Bar (Full Width) */}
      <TopUtilityBar />

      {/* B. Main Header (Container Width) with Login Trigger */}
      <MainHeader onOpenLogin={() => setIsAuthModalOpen(true)} />

      {/* C. Primary Navigation (Container Width) */}
      <PrimaryNavigation />

      {/* Main Content Body */}
      <main id="main-content" className="flex-1">
        {/* D. Hero Section (Full Width Image with Dark Maroon Overlay/Bottom Strip) */}
        <HeroSection />

        {/* E. Main Content Area (Container Width, 2-Column Split: ~65% Left / ~35% Right) */}
        <section className="w-full py-8 sm:py-10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* Left Column (Notice Board Component: ~65% width) */}
              <div className="w-full lg:w-[65%] shrink-0">
                <NoticeBoard />
              </div>

              {/* Right Column (Widgets: ~35% width) */}
              <div className="w-full lg:w-[35%] flex flex-col gap-6">
                {/* Widget 1: Quick Links (2x2 Grid pill buttons) */}
                <QuickLinks />

                {/* Widget 2: SSC Calendar (< Sep, 2026 >) */}
                <SscCalendar />
              </div>
            </div>
          </div>
        </section>

        {/* F. Browse by Examinations (Container Width) */}
        <BrowseExaminations />

        {/* G. Bottom Sections (Container Width) */}
        {/* FAQs Component */}
        <FaqSection />

        {/* Other Initiatives Carousel */}
        <OtherInitiatives />
      </main>

      {/* H. Footer (Full Width, Dark Background) */}
      <Footer />

      {/* Authentication Modal (Candidate & Admin Tabs) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};
export default Home;

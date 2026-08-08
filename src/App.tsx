import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Organization } from './components/Organization';
import { BusinessAreas } from './components/BusinessAreas';
import { StudioRental } from './components/StudioRental';
import { StudioGallery } from './components/StudioGallery';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  const [selectedStudio, setSelectedStudio] = useState<string>('');
  const mainRef = useRef<HTMLDivElement>(null);

  const handleStudioSelect = (title: string) => {
    setSelectedStudio(title);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content Layout matching video sequence */}
      <main ref={mainRef} className="h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth w-full">
        {/* 0. Hero (회사소개) */}
        <Hero />

        {/* 1. Organization (핵심역량 / CORE EXPERTISE & COMPETENCY) */}
        <Organization />

        {/* 2. Business Areas (사업영역 / 디지털 통합 미디어 비즈니스 허브) */}
        <BusinessAreas />

        {/* 3. Studio Rental (스튜디오 임대) */}
        <StudioRental onSelectStudio={handleStudioSelect} />

        {/* 4. Studio Gallery (스튜디오 갤러리) */}
        <StudioGallery />

        {/* 5. Portfolio (포트폴리오) */}
        <Portfolio />

        {/* 6. Clients & Partners (주요 파트너사) */}
        <Clients />

        {/* 7. FAQ (자주 묻는 질문 - AEO & GEO) */}
        <Faq />

        {/* 8. Contact & Estimate (제작 문의 및 견적) */}
        <Contact initialStudioSelect={selectedStudio} />
      </main>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop scrollContainerRef={mainRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

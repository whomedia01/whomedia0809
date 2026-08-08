import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  lang?: 'KO' | 'EN';
  onLanguageChange?: (lang: 'KO' | 'EN') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, lang: externalLang = 'KO', onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'KO' | 'EN'>(externalLang);

  useEffect(() => {
    setLang(externalLang);
  }, [externalLang]);

  const handleLangChange = (newLang: 'KO' | 'EN') => {
    setLang(newLang);
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  useEffect(() => {
    const mainElem = document.querySelector('main');
    const handleScroll = () => {
      if (mainElem) {
        setIsScrolled(mainElem.scrollTop > 20);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    if (mainElem) {
      mainElem.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      if (mainElem) mainElem.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = lang === 'KO' ? [
    { label: '회사소개', id: 'about' },
    { label: '핵심역량', id: 'organization' },
    { label: '사업영역', id: 'business' },
    { label: '스튜디오 임대', id: 'studio' },
    { label: '포트폴리오', id: 'portfolio' },
    { label: '클라이언트', id: 'clients' },
    { label: 'FAQ', id: 'faq' },
    { label: '문의하기', id: 'contact', isAction: true },
  ] : [
    { label: 'About Us', id: 'about' },
    { label: 'Core Competency', id: 'organization' },
    { label: 'Business', id: 'business' },
    { label: 'Studio Rental', id: 'studio' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Clients', id: 'clients' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact Us', id: 'contact', isAction: true },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
        : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            id="nav-logo"
            onClick={() => scrollTo('about')} 
            className="flex items-center space-x-2 text-left group"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight font-sans">
              <span className={isScrolled ? 'text-slate-900' : 'text-white'}>HOO</span>
              <span className="text-red-600">MEDIA</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => 
              item.isAction ? (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors py-1 flex items-center space-x-1"
                >
                  <span>{item.label}</span>
                  <span className="text-blue-600 font-bold">&rarr;</span>
                </button>
              ) : (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-semibold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all ${
                    isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-200 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Contact Header CTA & Language Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher Pill */}
            <div className={`flex items-center rounded-full p-0.5 border text-xs font-bold transition-colors ${
              isScrolled ? 'border-slate-200 bg-slate-100' : 'border-slate-800 bg-slate-900/90'
            }`}>
              <button
                id="lang-toggle-ko"
                onClick={() => handleLangChange('KO')}
                className={`px-2.5 py-1 rounded-full transition-all text-xs font-bold ${
                  lang === 'KO' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                KO
              </button>
              <button
                id="lang-toggle-en"
                onClick={() => handleLangChange('EN')}
                className={`px-2.5 py-1 rounded-full transition-all text-xs font-bold ${
                  lang === 'EN' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className={`text-xs font-bold flex items-center space-x-1 px-3 py-1.5 rounded-full ${
                isScrolled ? 'text-slate-600 hover:text-slate-900 bg-slate-100' : 'text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              id="header-cta-btn"
              onClick={() => scrollTo('contact')}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center space-x-1 shadow-sm"
            >
              <span>{lang === 'KO' ? '견적 및 대여 문의' : 'Inquiry & Booking'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Controls (Language Switcher + Mobile Menu Toggle) */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className={`flex items-center rounded-full p-0.5 border text-xs font-bold ${
              isScrolled ? 'border-slate-200 bg-slate-100' : 'border-slate-800 bg-slate-900'
            }`}>
              <button
                onClick={() => handleLangChange('KO')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'KO' ? 'bg-blue-600 text-white' : isScrolled ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                KO
              </button>
              <button
                onClick={() => handleLangChange('EN')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'EN' ? 'bg-blue-600 text-white' : isScrolled ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600 rounded-md"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center space-x-2 bg-slate-100 py-2.5 rounded-md font-bold text-slate-700 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-md font-bold text-sm text-center"
            >
              {lang === 'KO' ? '견적 및 대여 문의하기' : 'Inquire & Book Studio'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


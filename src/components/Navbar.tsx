import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { Menu, X, Phone, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, lang, setLang, isAr } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'doctors', href: '#doctors' },
    { key: 'clinics', href: '#clinics' },
    { key: 'specialties', href: '#specialties' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ] as const;

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5' 
        : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+966920000000" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <Phone size={13} />
              <span className="font-medium">920-000-000</span>
            </a>
            <span className="text-blue-300">|</span>
            <span className="text-blue-100 text-xs">
              {isAr ? 'خدمة متاحة 24/7 طوال أيام الأسبوع' : 'Service available 24/7 all week'}
            </span>
          </div>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full text-xs font-semibold transition-all"
          >
            <Globe size={13} />
            {t('switchLang')}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('#home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-black text-blue-900">{isAr ? 'طبيبك' : 'Tabeebak'}</span>
              <div className="text-xs text-teal-600 font-medium -mt-1">
                {isAr ? 'منصة طبية موثوقة' : 'Trusted Medical Platform'}
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace('#','')
                    ? 'text-blue-700 bg-blue-50'
                    : scrolled ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50' : 'text-gray-800 hover:text-blue-700 hover:bg-white/70'
                }`}
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors px-3 py-2">
              {t('login')}
            </button>
            <button
              onClick={() => scrollTo('#booking')}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              {t('bookNow')}
            </button>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="w-full text-start px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-700">
                {t('login')}
              </button>
              <button
                onClick={() => scrollTo('#booking')}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
              >
                {t('bookNow')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

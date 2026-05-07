import { useState } from 'react';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t, isAr } = useLang();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const year = new Date().getFullYear();

  const navLinks = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '#home' },
    { label: isAr ? 'الأطباء' : 'Doctors', href: '#doctors' },
    { label: isAr ? 'العيادات' : 'Clinics', href: '#clinics' },
    { label: isAr ? 'التخصصات' : 'Specialties', href: '#specialties' },
    { label: isAr ? 'من نحن' : 'About Us', href: '#about' },
    { label: isAr ? 'تواصل معنا' : 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">
                {isAr ? 'ابدأ رحلتك الصحية اليوم' : 'Start Your Health Journey Today'}
              </h3>
              <p className="text-blue-100 text-sm">
                {isAr ? 'انضم إلى أكثر من 50,000 مريض يثقون بنا' : 'Join over 50,000 patients who trust us'}
              </p>
            </div>
            <button
              onClick={() => scrollTo('#booking')}
              className="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-black text-xl">{isAr ? 'طبيبك' : 'Tabeebak'}</div>
                <div className="text-teal-400 text-xs">{isAr ? 'منصة طبية موثوقة' : 'Trusted Medical Platform'}</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{t('footerDesc')}</p>
            <div className="flex gap-2">
              {['𝕏', '📸', '📘', '📺'].map((icon, i) => (
                <button key={i} className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">{t('quickLinks')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-teal-600 text-xs">{isAr ? '←' : '→'}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">{isAr ? 'معلومات التواصل' : 'Contact Info'}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <span className="text-teal-500 mt-0.5">📍</span>
                <span>{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-green-500">📞</span>
                <span dir="ltr">+966 920 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-blue-500">✉️</span>
                <span dir="ltr">info@tabeebak.sa</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-yellow-500">⏰</span>
                <span>{isAr ? 'متاح على مدار الساعة' : 'Available 24/7'}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">{t('newsletter')}</h4>
            <p className="text-gray-500 text-xs mb-4">
              {isAr ? 'اشترك للحصول على أحدث الأخبار والعروض الطبية' : 'Subscribe for the latest medical news and offers'}
            </p>
            {subscribed ? (
              <div className="bg-green-900/30 border border-green-700/30 rounded-xl p-4 text-center">
                <div className="text-green-400 text-sm font-medium">✅ {isAr ? 'تم الاشتراك بنجاح!' : 'Successfully subscribed!'}</div>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('newsletterPlaceholder')}
                  dir="ltr"
                  className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all whitespace-nowrap"
                >
                  {t('subscribe')}
                </button>
              </div>
            )}

            {/* App store badges */}
            <div className="mt-6">
              <div className="text-xs text-gray-500 mb-3">{isAr ? 'حمّل التطبيق' : 'Download the App'}</div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl px-3 py-2 transition-colors">
                  <span className="text-lg">🍎</span>
                  <div className="text-start">
                    <div className="text-gray-400 text-[10px]">{isAr ? 'حمل من' : 'Download on'}</div>
                    <div className="text-white text-xs font-bold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl px-3 py-2 transition-colors">
                  <span className="text-lg">🤖</span>
                  <div className="text-start">
                    <div className="text-gray-400 text-[10px]">{isAr ? 'حمل من' : 'Get it on'}</div>
                    <div className="text-white text-xs font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              © {year} {isAr ? 'طبيبك' : 'Tabeebak'}. {t('allRights')}
            </p>
            <div className="flex items-center gap-4">
              <button className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{t('privacyPolicy')}</button>
              <span className="text-gray-700">·</span>
              <button className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{t('terms')}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Search, MapPin, Star, Shield } from 'lucide-react';

const HERO_IMG = 'https://images.pexels.com/photos/6627926/pexels-photo-6627926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';

export default function Hero() {
  const { t, isAr } = useLang();
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { value: '+500', label: t('stats1'), icon: '👨‍⚕️' },
    { value: '+120', label: t('stats2'), icon: '🏥' },
    { value: '+50K', label: t('stats3'), icon: '😊' },
    { value: '+15', label: t('stats4'), icon: '⭐' },
  ];

  const quickSpecialties = isAr
    ? ['أمراض القلب', 'الأطفال', 'العظام', 'العيون', 'الجلدية', 'الأسنان']
    : ['Cardiology', 'Pediatrics', 'Orthopedics', 'Ophthalmology', 'Dermatology', 'Dentistry'];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Medical Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-teal-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield size={14} className="text-teal-300" />
            <span className="text-white/90 text-sm font-medium">
              {isAr ? 'منصة طبية معتمدة وموثوقة' : 'Certified & Trusted Medical Platform'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {t('heroTitle')}
            <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent mt-2">
              {isAr ? 'وراحتك اهتمامنا' : 'Your Comfort Matters'}
            </span>
          </h1>

          <p className="text-lg text-white/80 mb-3 font-medium">
            {t('heroSubtitle')}
          </p>
          <p className="text-base text-white/60 mb-8 max-w-2xl">
            {t('heroDescription')}
          </p>

          {/* Search box */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/30 p-2 flex gap-2 mb-4 max-w-2xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-2">
              <Search size={20} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full text-gray-800 placeholder-gray-400 text-sm outline-none bg-transparent"
                dir={isAr ? 'rtl' : 'ltr'}
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 border-x border-gray-100">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {isAr ? 'الرياض' : 'Riyadh'}
              </span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all text-sm whitespace-nowrap shadow-lg shadow-blue-500/30">
              {t('searchBtn')}
            </button>
          </div>

          {/* Quick search tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-white/50 text-xs pt-1">{t('quickSearch')}:</span>
            {quickSpecialties.map((s, i) => (
              <button
                key={i}
                className="text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-3 py-1 transition-all hover:scale-105"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {[
                'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
                'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
                'https://images.pexels.com/photos/18252410/pexels-photo-18252410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-white/70 text-xs">
                {isAr ? 'تقييم 4.9 من أكثر من 50,000 مريض' : '4.9 rating from 50,000+ patients'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all group">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-white group-hover:text-teal-300 transition-colors">{stat.value}</div>
              <div className="text-xs text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

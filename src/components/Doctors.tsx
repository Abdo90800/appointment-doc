import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Star, MapPin, CheckCircle, Calendar } from 'lucide-react';
import { TranslationKey } from '../i18n/translations';

const doctors = [
  {
    nameKey: 'dr1Name' as TranslationKey,
    specKey: 'dr1Spec' as TranslationKey,
    hospitalKey: 'dr1Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.9,
    reviews: 1243,
    experience: 15,
    available: true,
    price: (ar: boolean) => ar ? '250 ريال' : '250 SAR',
    tags: { ar: ['قلب', 'أوعية دموية'], en: ['Heart', 'Vascular'] },
  },
  {
    nameKey: 'dr2Name' as TranslationKey,
    specKey: 'dr2Spec' as TranslationKey,
    hospitalKey: 'dr2Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.8,
    reviews: 987,
    experience: 12,
    available: true,
    price: (ar: boolean) => ar ? '200 ريال' : '200 SAR',
    tags: { ar: ['أطفال', 'رضع'], en: ['Pediatrics', 'Neonatal'] },
  },
  {
    nameKey: 'dr3Name' as TranslationKey,
    specKey: 'dr3Spec' as TranslationKey,
    hospitalKey: 'dr3Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.9,
    reviews: 2156,
    experience: 20,
    available: false,
    price: (ar: boolean) => ar ? '300 ريال' : '300 SAR',
    tags: { ar: ['عظام', 'مفاصل'], en: ['Bones', 'Joints'] },
  },
  {
    nameKey: 'dr4Name' as TranslationKey,
    specKey: 'dr4Spec' as TranslationKey,
    hospitalKey: 'dr4Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/18252410/pexels-photo-18252410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.7,
    reviews: 854,
    experience: 10,
    available: true,
    price: (ar: boolean) => ar ? '180 ريال' : '180 SAR',
    tags: { ar: ['جلدية', 'تجميل'], en: ['Dermatology', 'Cosmetic'] },
  },
  {
    nameKey: 'dr5Name' as TranslationKey,
    specKey: 'dr5Spec' as TranslationKey,
    hospitalKey: 'dr5Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/17829429/pexels-photo-17829429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.8,
    reviews: 1432,
    experience: 18,
    available: true,
    price: (ar: boolean) => ar ? '220 ريال' : '220 SAR',
    tags: { ar: ['عيون', 'جراحة'], en: ['Eyes', 'Surgery'] },
  },
  {
    nameKey: 'dr6Name' as TranslationKey,
    specKey: 'dr6Spec' as TranslationKey,
    hospitalKey: 'dr6Hospital' as TranslationKey,
    image: 'https://images.pexels.com/photos/19131218/pexels-photo-19131218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300',
    rating: 4.9,
    reviews: 673,
    experience: 14,
    available: false,
    price: (ar: boolean) => ar ? '350 ريال' : '350 SAR',
    tags: { ar: ['نفسية', 'صحة نفسية'], en: ['Psychiatry', 'Mental Health'] },
  },
];

export default function Doctors() {
  const { t, isAr } = useLang();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = isAr
    ? [{ key: 'all', label: 'الكل' }, { key: 'available', label: 'متاح اليوم' }, { key: 'top', label: 'الأعلى تقييماً' }]
    : [{ key: 'all', label: 'All' }, { key: 'available', label: 'Available Today' }, { key: 'top', label: 'Top Rated' }];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>👨‍⚕️</span>
            <span>{isAr ? 'أطباؤنا' : 'Our Doctors'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t('doctorsTitle')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            {t('doctorsSubtitle')}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={doc.image}
                  alt={t(doc.nameKey)}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Availability badge */}
                <div className={`absolute top-3 ${isAr ? 'left-3' : 'right-3'}`}>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    doc.available
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-600/80 text-white'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? 'bg-white animate-pulse' : 'bg-gray-300'}`} />
                    {doc.available ? t('availableToday') : t('nextAvailable')}
                  </span>
                </div>

                {/* Rating */}
                <div className={`absolute bottom-3 ${isAr ? 'right-3' : 'left-3'} flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1`}>
                  <Star size={13} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-gray-800">{doc.rating}</span>
                  <span className="text-xs text-gray-500">({doc.reviews})</span>
                </div>

                {/* Price */}
                <div className={`absolute bottom-3 ${isAr ? 'left-3' : 'right-3'} bg-blue-600/90 backdrop-blur-sm rounded-lg px-2.5 py-1`}>
                  <span className="text-xs font-bold text-white">{doc.price(isAr)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug">{t(doc.nameKey)}</h3>
                    <p className="text-blue-600 text-xs font-medium mt-0.5">{t(doc.specKey)}</p>
                  </div>
                  <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                </div>

                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                  <MapPin size={12} className="flex-shrink-0" />
                  <span className="truncate">{t(doc.hospitalKey)}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(isAr ? doc.tags.ar : doc.tags.en).map((tag, ti) => (
                    <span key={ti} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                    {doc.experience} {t('yearsExp')}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={scrollToBooking}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-semibold py-2.5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={13} />
                    {t('bookAppointment')}
                  </button>
                  <button className="px-3 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-xs text-gray-600 font-medium">
                    {t('viewProfile')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
            {isAr ? 'عرض جميع الأطباء' : 'View All Doctors'}
            <span className="text-lg">{isAr ? '←' : '→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

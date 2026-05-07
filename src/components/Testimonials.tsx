import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    nameAr: 'فاطمة أحمد العلي',
    nameEn: 'Fatima Ahmed Al-Ali',
    textAr: 'خدمة ممتازة جداً! حجزت موعدي مع دكتور القلب خلال دقيقتين فقط، والمتابعة كانت رائعة. أنصح الجميع باستخدام هذه المنصة الاحترافية.',
    textEn: 'Excellent service! I booked my cardiologist appointment in just two minutes, and the follow-up was great. I recommend everyone to use this professional platform.',
    rating: 5,
    date: '15 مارس 2024 | March 15, 2024',
    avatar: 'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
    specialty: { ar: 'أمراض القلب', en: 'Cardiology' },
  },
  {
    nameAr: 'محمد عبد الرحمن الغامدي',
    nameEn: 'Mohammed Abdulrahman Al-Ghamdi',
    textAr: 'تجربة رائعة من البداية للنهاية. الدكاترة محترفون والمواعيد دقيقة. الموقع سهل الاستخدام والحجز يأخذ دقائق فقط.',
    textEn: 'A wonderful experience from start to finish. The doctors are professional and appointments are precise. The website is easy to use and booking takes only minutes.',
    rating: 5,
    date: '22 فبراير 2024 | February 22, 2024',
    avatar: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
    specialty: { ar: 'العظام', en: 'Orthopedics' },
  },
  {
    nameAr: 'نورة سعد القحطاني',
    nameEn: 'Noura Saad Al-Qahtani',
    textAr: 'أخيراً منصة طبية تفهم احتياجاتنا! سهولة الحجز وخيارات الدكاترة المتاحة لا تصدق. شكراً جزيلاً على هذه الخدمة المميزة.',
    textEn: 'Finally a medical platform that understands our needs! The ease of booking and available doctor options are incredible. Thank you so much for this distinguished service.',
    rating: 5,
    date: '5 يناير 2024 | January 5, 2024',
    avatar: 'https://images.pexels.com/photos/18252410/pexels-photo-18252410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
    specialty: { ar: 'الجلدية', en: 'Dermatology' },
  },
  {
    nameAr: 'خالد يوسف المطيري',
    nameEn: 'Khalid Yousuf Al-Mutairi',
    textAr: 'خدمة الدعم ممتازة وسريعة الاستجابة. حجزت لوالدتي موعد مع طبيب الأطفال وكانت التجربة كاملة ومريحة جداً.',
    textEn: 'Excellent support service with quick response. I booked a pediatrician appointment for my mother and the experience was complete and very comfortable.',
    rating: 5,
    date: '18 ديسمبر 2023 | December 18, 2023',
    avatar: 'https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
    specialty: { ar: 'طب الأطفال', en: 'Pediatrics' },
  },
];

export default function Testimonials() {
  const { t, isAr } = useLang();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonialsData.length) % testimonialsData.length);
  const next = () => setCurrent(c => (c + 1) % testimonialsData.length);

  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonialsData[(current + i) % testimonialsData.length]
  );

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>💬</span>
            <span>{isAr ? 'آراء مرضانا' : 'Patient Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">{t('testimonialsTitle')}</h2>
          <p className="text-blue-200 max-w-xl mx-auto">{t('testimonialsSubtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((review, i) => (
            <div
              key={i}
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 transition-all duration-300 ${
                i === 0 ? 'md:scale-105 bg-white/15' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={isAr ? review.nameAr : review.nameEn}
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-white/20"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">
                      {isAr ? review.nameAr : review.nameEn}
                    </div>
                    <div className="text-blue-300 text-xs">
                      {isAr ? review.specialty.ar : review.specialty.en}
                    </div>
                  </div>
                </div>
                <Quote size={20} className="text-blue-300/50 flex-shrink-0" />
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, si) => (
                  <Star key={si} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {isAr ? review.textAr : review.textEn}
              </p>

              <div className="text-blue-400 text-xs border-t border-white/10 pt-3">
                {review.date}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={isAr ? next : prev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-6 bg-teal-400' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={isAr ? prev : next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Summary stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { num: '4.9/5', label: isAr ? 'متوسط التقييم' : 'Average Rating', icon: '⭐' },
            { num: '50K+', label: isAr ? 'مريض موثوق' : 'Trusted Patients', icon: '👥' },
            { num: '98%', label: isAr ? 'نسبة الرضا' : 'Satisfaction Rate', icon: '✅' },
            { num: '24/7', label: isAr ? 'خدمة مستمرة' : 'Continuous Service', icon: '⏰' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-white">{stat.num}</div>
              <div className="text-blue-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

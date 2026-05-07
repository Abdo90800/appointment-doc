import { useLang } from '../context/LangContext';
import { TranslationKey } from '../i18n/translations';

const specialtiesList: { key: TranslationKey; icon: string; color: string; bg: string; count: number }[] = [
  { key: 'cardiology', icon: '❤️', color: 'text-red-600', bg: 'bg-red-50 hover:bg-red-100 border-red-100', count: 48 },
  { key: 'neurology', icon: '🧠', color: 'text-purple-600', bg: 'bg-purple-50 hover:bg-purple-100 border-purple-100', count: 32 },
  { key: 'orthopedics', icon: '🦴', color: 'text-orange-600', bg: 'bg-orange-50 hover:bg-orange-100 border-orange-100', count: 56 },
  { key: 'pediatrics', icon: '👶', color: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100 border-blue-100', count: 44 },
  { key: 'dermatology', icon: '✨', color: 'text-pink-600', bg: 'bg-pink-50 hover:bg-pink-100 border-pink-100', count: 38 },
  { key: 'ophthalmology', icon: '👁️', color: 'text-sky-600', bg: 'bg-sky-50 hover:bg-sky-100 border-sky-100', count: 29 },
  { key: 'dentistry', icon: '🦷', color: 'text-teal-600', bg: 'bg-teal-50 hover:bg-teal-100 border-teal-100', count: 62 },
  { key: 'gynecology', icon: '🌸', color: 'text-fuchsia-600', bg: 'bg-fuchsia-50 hover:bg-fuchsia-100 border-fuchsia-100', count: 35 },
  { key: 'psychiatry', icon: '🧘', color: 'text-indigo-600', bg: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-100', count: 27 },
  { key: 'general', icon: '🩺', color: 'text-green-600', bg: 'bg-green-50 hover:bg-green-100 border-green-100', count: 85 },
];

export default function Specialties() {
  const { t, isAr } = useLang();

  return (
    <section id="specialties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🏥</span>
            <span>{isAr ? 'تخصصاتنا' : 'Our Specialties'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t('specialtiesTitle')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            {t('specialtiesSubtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {specialtiesList.map((spec) => (
            <button
              key={spec.key}
              className={`${spec.bg} border rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <div className={`font-bold text-sm ${spec.color} mb-1 leading-snug`}>
                {t(spec.key)}
              </div>
              <div className="text-xs text-gray-400">
                {spec.count} {isAr ? 'طبيب' : 'Doctors'}
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
            {t('viewAll')}
            <span className="text-lg">{isAr ? '←' : '→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

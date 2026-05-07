import { useLang } from '../context/LangContext';
import { TranslationKey } from '../i18n/translations';

const services: { titleKey: TranslationKey; descKey: TranslationKey; icon: string; color: string; bg: string }[] = [
  { titleKey: 'service1Title', descKey: 'service1Desc', icon: '⚡', color: 'text-yellow-600', bg: 'from-yellow-50 to-amber-50 border-yellow-100' },
  { titleKey: 'service2Title', descKey: 'service2Desc', icon: '🏅', color: 'text-blue-600', bg: 'from-blue-50 to-sky-50 border-blue-100' },
  { titleKey: 'service3Title', descKey: 'service3Desc', icon: '📊', color: 'text-green-600', bg: 'from-green-50 to-emerald-50 border-green-100' },
  { titleKey: 'service4Title', descKey: 'service4Desc', icon: '💻', color: 'text-purple-600', bg: 'from-purple-50 to-violet-50 border-purple-100' },
  { titleKey: 'service5Title', descKey: 'service5Desc', icon: '🔒', color: 'text-teal-600', bg: 'from-teal-50 to-cyan-50 border-teal-100' },
  { titleKey: 'service6Title', descKey: 'service6Desc', icon: '🎧', color: 'text-red-600', bg: 'from-red-50 to-rose-50 border-red-100' },
];

export default function Services() {
  const { t, isAr } = useLang();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>✨</span>
            <span>{isAr ? 'لماذا طبيبك؟' : 'Why Tabeebak?'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${srv.bg} border rounded-3xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className={`text-lg font-bold ${srv.color} mb-2`}>
                {t(srv.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(srv.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <span>🔄</span>
              <span>{isAr ? 'كيف يعمل' : 'How It Works'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              {t('howTitle')}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t('howSubtitle')}</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { titleKey: 'how1Title' as TranslationKey, descKey: 'how1Desc' as TranslationKey, step: '01', icon: '🔍', color: 'bg-blue-600' },
                { titleKey: 'how2Title' as TranslationKey, descKey: 'how2Desc' as TranslationKey, step: '02', icon: '📅', color: 'bg-teal-500' },
                { titleKey: 'how3Title' as TranslationKey, descKey: 'how3Desc' as TranslationKey, step: '03', icon: '💊', color: 'bg-green-500' },
              ].map((how, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${how.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-4 relative z-10`}>
                    {how.icon}
                  </div>
                  <div className={`text-xs font-black ${how.color.replace('bg-', 'text-')} mb-2 opacity-60`}>
                    {how.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t(how.titleKey)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(how.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

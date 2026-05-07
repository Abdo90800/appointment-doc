import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LangProvider, useLang } from './context/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Clinics from './components/Clinics';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { t, lang, dir } = useLang();

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: lang === 'ar' ? 'طبيبك' : 'Tabeebak',
    description: t('siteDescription'),
    url: 'https://tabeebak.sa',
    telephone: '+966920000000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressLocality: lang === 'ar' ? 'الرياض' : 'Riyadh',
    },
    sameAs: [
      'https://twitter.com/tabeebak',
      'https://instagram.com/tabeebak',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'ar' ? 'خدمات طبية' : 'Medical Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: lang === 'ar' ? 'حجز المواعيد' : 'Appointment Booking' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: lang === 'ar' ? 'استشارة أونلاين' : 'Online Consultation' } },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} dir={dir} />
        <title>{t('siteTitle')}</title>
        <meta name="description" content={t('siteDescription')} />
        <meta name="keywords" content={
          lang === 'ar'
            ? 'حجز طبيب، عيادات، أطباء، موعد طبي، طبيبك، استشارة طبية، أمراض القلب، طب الأطفال، الرياض، السعودية'
            : 'book doctor, clinics, doctors, medical appointment, tabeebak, medical consultation, cardiology, pediatrics, Riyadh, Saudi Arabia'
        } />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tabeebak.sa" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tabeebak.sa" />
        <meta property="og:title" content={t('siteTitle')} />
        <meta property="og:description" content={t('siteDescription')} />
        <meta property="og:image" content="https://images.pexels.com/photos/6627926/pexels-photo-6627926.jpeg" />
        <meta property="og:locale" content={lang === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta property="og:locale:alternate" content={lang === 'ar' ? 'en_US' : 'ar_SA'} />
        <meta property="og:site_name" content={lang === 'ar' ? 'طبيبك' : 'Tabeebak'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tabeebak" />
        <meta name="twitter:title" content={t('siteTitle')} />
        <meta name="twitter:description" content={t('siteDescription')} />
        <meta name="twitter:image" content="https://images.pexels.com/photos/6627926/pexels-photo-6627926.jpeg" />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar" href="https://tabeebak.sa/ar" />
        <link rel="alternate" hrefLang="en" href="https://tabeebak.sa/en" />
        <link rel="alternate" hrefLang="x-default" href="https://tabeebak.sa" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>

      <div
        className={`min-h-screen ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}
        dir={dir}
        style={{ fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
      >
        <Navbar />
        <main>
          <Hero />
          <Specialties />
          <Doctors />
          <Services />
          <Clinics />
          <BookingForm />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/966920000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 end-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center text-2xl z-50 hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label={lang === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
        >
          💬
        </a>

        {/* Scroll to top */}
        <ScrollToTop />
      </div>
    </>
  );
}

function ScrollToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 start-6 w-12 h-12 bg-blue-900/80 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center text-lg z-50 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </HelmetProvider>
  );
}

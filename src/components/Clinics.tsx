import { useLang } from '../context/LangContext';
import { MapPin, Clock, Star, Phone, ArrowRight } from 'lucide-react';

const clinicImages = [
  'https://images.pexels.com/photos/6627926/pexels-photo-6627926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
  'https://images.pexels.com/photos/8460372/pexels-photo-8460372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
  'https://images.pexels.com/photos/32830266/pexels-photo-32830266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
];

const clinicsData = [
  {
    nameAr: 'عيادة القلب التخصصية',
    nameEn: 'Cardiac Specialty Clinic',
    descAr: 'مركز متكامل لتشخيص وعلاج أمراض القلب بأحدث الأجهزة الطبية',
    descEn: 'Comprehensive center for diagnosing and treating heart diseases with the latest medical equipment',
    addressAr: 'الرياض، حي العليا، طريق الملك فهد',
    addressEn: 'Riyadh, Al-Olaya District, King Fahd Road',
    rating: 4.9,
    reviews: 3241,
    open: true,
    hoursAr: '٨:٠٠ ص - ١٠:٠٠ م',
    hoursEn: '8:00 AM - 10:00 PM',
    phone: '011-234-5678',
    tagsAr: ['قلب', 'أوعية دموية', 'تخطيط قلب'],
    tagsEn: ['Cardiology', 'Vascular', 'ECG'],
    doctorsCount: 12,
    image: clinicImages[0],
    color: 'from-red-500 to-rose-600',
    lightColor: 'bg-red-50 text-red-700',
  },
  {
    nameAr: 'مركز الأطفال الصحي',
    nameEn: "Children's Health Center",
    descAr: 'رعاية صحية شاملة للأطفال من الولادة حتى سن المراهقة',
    descEn: 'Comprehensive healthcare for children from birth to adolescence',
    addressAr: 'جدة، شارع التحلية، حي الروضة',
    addressEn: "Jeddah, Al-Tahliya Street, Al-Rawdah",
    rating: 4.8,
    reviews: 2187,
    open: true,
    hoursAr: '٩:٠٠ ص - ٩:٠٠ م',
    hoursEn: '9:00 AM - 9:00 PM',
    phone: '012-345-6789',
    tagsAr: ['أطفال', 'رضع', 'تطعيمات'],
    tagsEn: ['Pediatrics', 'Neonatal', 'Vaccinations'],
    doctorsCount: 18,
    image: clinicImages[1],
    color: 'from-blue-500 to-sky-600',
    lightColor: 'bg-blue-50 text-blue-700',
  },
  {
    nameAr: 'عيادة العظام والعمود الفقري',
    nameEn: 'Orthopedic & Spine Clinic',
    descAr: 'علاج متخصص لجميع إصابات العظام والمفاصل والعمود الفقري',
    descEn: 'Specialized treatment for all bone, joint, and spine injuries',
    addressAr: 'الدمام، حي الشاطئ، شارع الأمير محمد',
    addressEn: 'Dammam, Al-Shati District, Prince Mohammed St.',
    rating: 4.7,
    reviews: 1654,
    open: false,
    hoursAr: '٨:٠٠ ص - ٨:٠٠ م',
    hoursEn: '8:00 AM - 8:00 PM',
    phone: '013-456-7890',
    tagsAr: ['عظام', 'مفاصل', 'عمود فقري'],
    tagsEn: ['Orthopedics', 'Joints', 'Spine'],
    doctorsCount: 9,
    image: clinicImages[2],
    color: 'from-orange-500 to-amber-600',
    lightColor: 'bg-orange-50 text-orange-700',
  },
];

export default function Clinics() {
  const { isAr, t } = useLang();

  return (
    <section id="clinics" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>🏥</span>
            <span>{isAr ? 'عياداتنا' : 'Our Clinics'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            {t('clinicsTitle')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {t('clinicsSubtitle')}
          </p>
        </div>

        {/* Clinics */}
        <div className="space-y-6">
          {clinicsData.map((clinic, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-80 xl:w-96 h-52 lg:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={clinic.image}
                    alt={isAr ? clinic.nameAr : clinic.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-${isAr ? 'l' : 'r'} ${clinic.color} opacity-40`} />
                  <div className="absolute top-4 start-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      clinic.open ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${clinic.open ? 'bg-white animate-pulse' : 'bg-gray-300'}`} />
                      {clinic.open ? t('open') : t('closed')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-1">
                        {isAr ? clinic.nameAr : clinic.nameEn}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {isAr ? clinic.descAr : clinic.descEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2">
                      <Star size={15} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-800 text-sm">{clinic.rating}</span>
                      <span className="text-gray-400 text-xs">({clinic.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(isAr ? clinic.tagsAr : clinic.tagsEn).map((tag, ti) => (
                      <span key={ti} className={`text-xs font-medium px-3 py-1 rounded-full ${clinic.lightColor}`}>
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {clinic.doctorsCount} {isAr ? 'طبيب' : 'Doctors'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <MapPin size={15} className="mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>{isAr ? clinic.addressAr : clinic.addressEn}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={15} className="flex-shrink-0 text-teal-500" />
                      <span>{isAr ? clinic.hoursAr : clinic.hoursEn}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone size={15} className="flex-shrink-0 text-green-500" />
                      <span dir="ltr">{clinic.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all text-sm shadow-md shadow-blue-500/20 flex items-center gap-2"
                    >
                      {t('bookAppointment')}
                    </button>
                    <button className="border border-gray-200 text-gray-700 font-medium px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm flex items-center gap-1.5">
                      {isAr ? 'عرض التفاصيل' : 'View Details'}
                      <ArrowRight size={14} className={isAr ? 'rotate-180' : ''} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Calendar, User, Phone, Mail, FileText, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const timeSlots = {
  morning: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
  afternoon: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
  evening: ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
};

const specialtiesAr = ['أمراض القلب', 'طب الأطفال', 'العظام والمفاصل', 'الجلدية والتجميل', 'طب العيون', 'الطب النفسي', 'طب الأسنان', 'الطب العام'];
const specialtiesEn = ['Cardiology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Ophthalmology', 'Psychiatry', 'Dentistry', 'General Medicine'];

const doctorsAr = ['د. أحمد محمد السيد', 'د. سارة عبد الله العمري', 'د. خالد إبراهيم المنصور', 'د. نورة فيصل الراشد'];
const doctorsEn = ['Dr. Ahmed Mohammed Al-Sayed', 'Dr. Sara Abdullah Al-Omari', 'Dr. Khalid Ibrahim Al-Mansour', 'Dr. Noura Faisal Al-Rashid'];

export default function BookingForm() {
  const { t, isAr } = useLang();
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const formatDate = (d: Date) => {
    return d.toISOString().split('T')[0];
  };

  const formatDisplayDate = (d: Date) => {
    const days = isAr
      ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = isAr
      ? ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: days[d.getDay()],
      date: d.getDate(),
      month: months[d.getMonth()],
    };
  };

  const handleSubmit = () => {
    setSuccess(true);
  };

  const steps = [
    { num: 1, label: t('step1') },
    { num: 2, label: t('step2') },
    { num: 3, label: t('step3') },
    { num: 4, label: t('step4') },
  ];

  if (success) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{t('bookingSuccess')}</h3>
            <p className="text-gray-500 mb-8">{t('bookingSuccessMsg')}</p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-start">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 text-xs mb-1">{isAr ? 'التخصص' : 'Specialty'}</div>
                  <div className="font-semibold text-gray-800">{form.specialty}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{isAr ? 'الطبيب' : 'Doctor'}</div>
                  <div className="font-semibold text-gray-800">{form.doctor}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{isAr ? 'التاريخ' : 'Date'}</div>
                  <div className="font-semibold text-gray-800">{form.date}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{isAr ? 'الوقت' : 'Time'}</div>
                  <div className="font-semibold text-gray-800">{form.time}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => { setSuccess(false); setStep(1); setForm({ specialty: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', notes: '' }); }}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold px-8 py-3 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all"
            >
              {isAr ? 'حجز موعد آخر' : 'Book Another Appointment'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Calendar size={14} />
            <span>{isAr ? 'حجز موعد' : 'Book Appointment'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{t('bookingTitle')}</h2>
          <p className="text-gray-500">{t('bookingSubtitle')}</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10 px-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step > s.num ? 'bg-green-500 text-white' : step === s.num ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step > s.num ? <CheckCircle size={18} /> : s.num}
                </div>
                <div className={`text-xs mt-1 font-medium hidden sm:block ${step === s.num ? 'text-blue-600' : 'text-gray-400'}`}>
                  {s.label}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 w-12 sm:w-20 mx-2 transition-all ${step > s.num ? 'bg-green-400' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">

            {/* Step 1: Specialty */}
            {step === 1 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {isAr ? '🏥 اختر التخصص الطبي' : '🏥 Choose Medical Specialty'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(isAr ? specialtiesAr : specialtiesEn).map((spec, i) => (
                    <button
                      key={i}
                      onClick={() => setForm({ ...form, specialty: spec })}
                      className={`p-4 rounded-2xl border-2 text-sm font-medium text-center transition-all hover:scale-105 ${
                        form.specialty === spec
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Doctor */}
            {step === 2 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {isAr ? '👨‍⚕️ اختر الطبيب' : '👨‍⚕️ Choose Doctor'}
                </h3>
                <div className="space-y-3">
                  {(isAr ? doctorsAr : doctorsEn).map((doc, i) => {
                    const images = [
                      'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
                      'https://images.pexels.com/photos/19131217/pexels-photo-19131217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
                      'https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
                      'https://images.pexels.com/photos/18252410/pexels-photo-18252410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80',
                    ];
                    const ratings = [4.9, 4.8, 4.9, 4.7];
                    const exp = [15, 12, 20, 10];
                    return (
                      <button
                        key={i}
                        onClick={() => setForm({ ...form, doctor: doc })}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-start ${
                          form.doctor === doc
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-100 bg-gray-50 hover:border-blue-200'
                        }`}
                      >
                        <img src={images[i]} alt={doc} className="w-14 h-14 rounded-xl object-cover object-top" />
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-sm">{doc}</div>
                          <div className="text-blue-600 text-xs mt-0.5">{form.specialty}</div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs text-yellow-600">⭐ {ratings[i]}</span>
                            <span className="text-xs text-gray-400">{exp[i]} {isAr ? 'سنة خبرة' : 'yrs exp'}</span>
                          </div>
                        </div>
                        {form.doctor === doc && (
                          <CheckCircle size={20} className="text-blue-500 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {isAr ? '📅 اختر التاريخ والوقت' : '📅 Choose Date & Time'}
                </h3>

                {/* Date picker */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    {isAr ? 'التاريخ' : 'Date'}
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {dates.map((d, i) => {
                      const disp = formatDisplayDate(d);
                      const val = formatDate(d);
                      const isWeekend = d.getDay() === 5 || d.getDay() === 6;
                      return (
                        <button
                          key={i}
                          disabled={isWeekend}
                          onClick={() => setForm({ ...form, date: val })}
                          className={`flex-shrink-0 flex flex-col items-center p-3 w-16 rounded-2xl border-2 transition-all ${
                            form.date === val
                              ? 'border-blue-500 bg-blue-600 text-white'
                              : isWeekend
                              ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                              : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-300'
                          }`}
                        >
                          <span className="text-xs font-medium">{disp.day}</span>
                          <span className="text-lg font-black">{disp.date}</span>
                          <span className="text-xs">{disp.month}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                {(['morning', 'afternoon', 'evening'] as const).map(period => (
                  <div key={period} className="mb-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <span>{period === 'morning' ? '🌅' : period === 'afternoon' ? '☀️' : '🌙'}</span>
                      {t(period)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots[period].map(time => (
                        <button
                          key={time}
                          onClick={() => setForm({ ...form, time })}
                          className={`px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${
                            form.time === time
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Patient Info */}
            {step === 4 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {isAr ? '📋 بيانات المريض' : '📋 Patient Information'}
                </h3>

                {/* Booking summary */}
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 mb-6 border border-blue-100">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div><span className="text-gray-400">{isAr ? 'التخصص:' : 'Specialty:'}</span> <span className="font-semibold text-gray-800">{form.specialty}</span></div>
                    <div><span className="text-gray-400">{isAr ? 'الطبيب:' : 'Doctor:'}</span> <span className="font-semibold text-gray-800">{form.doctor}</span></div>
                    <div><span className="text-gray-400">{isAr ? 'التاريخ:' : 'Date:'}</span> <span className="font-semibold text-gray-800">{form.date}</span></div>
                    <div><span className="text-gray-400">{isAr ? 'الوقت:' : 'Time:'}</span> <span className="font-semibold text-gray-800">{form.time}</span></div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      <User size={14} className="inline me-1" />{t('patientName')} *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder={isAr ? 'الاسم الكامل' : 'Full Name'}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      <Phone size={14} className="inline me-1" />{t('patientPhone')} *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+966 5XX XXX XXX"
                      dir="ltr"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      <Mail size={14} className="inline me-1" />{t('patientEmail')}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      dir="ltr"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      <FileText size={14} className="inline me-1" />{t('notes')}
                    </label>
                    <input
                      type="text"
                      value={form.notes}
                      onChange={e => setForm({ ...form, notes: e.target.value })}
                      placeholder={isAr ? 'أي ملاحظات إضافية...' : 'Any additional notes...'}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="px-6 sm:px-8 pb-8 flex items-center justify-between gap-4">
            <button
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-semibold text-sm transition-all ${
                step === 1 ? 'opacity-30 cursor-not-allowed border-gray-200 text-gray-400' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {isAr ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              {isAr ? 'السابق' : 'Previous'}
            </button>

            {step < 4 ? (
              <button
                onClick={() => {
                  if (step === 1 && !form.specialty) return;
                  if (step === 2 && !form.doctor) return;
                  if (step === 3 && (!form.date || !form.time)) return;
                  setStep(s => s + 1);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-sm hover:from-blue-700 hover:to-teal-600 transition-all shadow-md shadow-blue-500/30"
              >
                {isAr ? 'التالي' : 'Next'}
                {isAr ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.phone}
                className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-sm hover:from-green-600 hover:to-teal-600 transition-all shadow-md shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle size={16} />
                {t('confirmBooking')}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

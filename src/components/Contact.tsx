import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t, isAr } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span>✉️</span>
            <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{t('contactTitle')}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t('contactSubtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: t('callUs'), value: '920-000-000', color: 'bg-green-100 text-green-600', href: 'tel:+966920000000' },
                { icon: Mail, label: t('emailUs'), value: 'info@tabeebak.sa', color: 'bg-blue-100 text-blue-600', href: 'mailto:info@tabeebak.sa' },
                { icon: MapPin, label: t('location'), value: t('locationVal'), color: 'bg-red-100 text-red-600', href: '#' },
              ].map((info, i) => (
                <a key={i} href={info.href} className="flex items-start gap-4 group">
                  <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{info.label}</div>
                    <div className="font-semibold text-gray-800 text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl h-52 flex items-center justify-center border border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-8 grid-rows-6 h-full gap-0.5 p-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="bg-blue-300/40 rounded-sm" />
                  ))}
                </div>
              </div>
              <div className="relative flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="bg-white rounded-xl px-4 py-2 shadow-lg text-xs font-semibold text-gray-700">
                  {t('locationVal')}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 mb-4">{t('followUs')}</div>
              <div className="flex gap-3">
                {['twitter', 'instagram', 'facebook', 'youtube', 'tiktok'].map(social => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all text-sm"
                  >
                    {social === 'twitter' && '𝕏'}
                    {social === 'instagram' && '📸'}
                    {social === 'facebook' && '📘'}
                    {social === 'youtube' && '📺'}
                    {social === 'tiktok' && '🎵'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isAr ? 'تم إرسال رسالتك!' : 'Message Sent!'}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {isAr ? 'سنتواصل معك قريباً إن شاء الله.' : 'We will get back to you soon.'}
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isAr ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {isAr ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('yourName')} *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder={isAr ? 'اسمك الكامل' : 'Your full name'}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('yourEmail')} *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      dir="ltr"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t('yourMessage')} *</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (form.name && form.email && form.message) setSent(true);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-3.5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all shadow-md shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {t('sendMessage')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

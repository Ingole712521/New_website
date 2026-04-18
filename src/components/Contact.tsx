import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import worldMap from '../assets/image/world.svg';
import { cn } from '../lib/utils';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatusType('error');
      setStatusMessage('Please fill name, email, and message.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusType('error');
      setStatusMessage('Email service is not configured yet.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          to_name: 'R Square Visuals',
        },
        {
          publicKey,
        }
      );

      setStatusType('success');
      setStatusMessage('Thank you! Your message was sent successfully.');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: '',
      });
    } catch {
      setStatusType('error');
      setStatusMessage('Unable to send your message right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <div className="mb-12">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-lg shadow-blue-500/5">
                <Mail className="text-blue-500" size={24} />
              </div>
              <h2 className="text-5xl font-extrabold text-white mb-6">Contact us</h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-gray-400 text-sm font-medium">
                <a href="mailto:rsquarevisuals1@gmail.com" className="hover:text-blue-500 transition-colors">rsquarevisuals1@gmail.com</a>
                <span className="text-white/10 hidden sm:inline">•</span>
                <span>+91 8983343111</span>


              </div>

            </div>


            <div className="relative mt-20 opacity-40 hover:opacity-70 transition-opacity duration-700">
              <img src={worldMap} alt="World Map" className="w-full h-auto grayscale" />


              <div className="absolute top-[40.5%] left-[70.8%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] text-black font-bold uppercase tracking-wider">
                    We are here
                  </div>

                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/30 rounded-full animate-ping"></div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-linear-to-b from-blue-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="relative group">

            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="relative bg-[#0A0A0A]/80 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)'
              }}>

              <div className="absolute top-0 right-0 w-full h-[400px] pointer-events-none z-0"
                style={{
                  maskImage: 'radial-gradient(circle at top right, black, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 75%)'
                }}>
                <div className="absolute top-0 right-0 grid grid-cols-[repeat(20,24px)] grid-rows-[repeat(20,24px)] opacity-[0.08]">
                  {[...Array(400)].map((_, i) => (
                    <div key={i} className={cn(
                      "w-[24px] h-[24px] border-r border-b border-white/20",
                      [18, 19, 38, 39, 57, 58, 59, 78, 98].includes(i) ? "bg-white/10" : ""
                    )}></div>
                  ))}
                </div>
              </div>

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-base font-bold text-white block tracking-wide">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-base font-bold text-white block tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="support@rsquare.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-base font-bold text-white block tracking-wide">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-base font-bold text-white block tracking-wide">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/10 transition-all resize-none shadow-inner"
                  ></textarea>
                </div>

                {statusMessage ? (
                  <p className={statusType === 'success' ? 'text-emerald-400 text-sm' : 'text-red-400 text-sm'}>
                    {statusMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-10 rounded-lg border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

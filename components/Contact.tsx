
import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white scroll-mt-24">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold">Let's build something <span className="text-indigo-400">great together.</span></h2>
            <p className="text-slate-400 text-lg">Currently seeking full-time opportunities in software engineering. I'm just an email or call away!</p>
          </div>

          <div className="space-y-6">
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                <svg className="w-6 h-6 text-indigo-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                <p className="text-lg font-semibold">{PERSONAL_DETAILS.email}</p>
              </div>
            </a>

            <a href={`tel:${PERSONAL_DETAILS.phone}`} className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                <svg className="w-6 h-6 text-indigo-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Call Me</p>
                <p className="text-lg font-semibold">{PERSONAL_DETAILS.phone}</p>
              </div>
            </a>

            <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                <svg className="w-6 h-6 text-indigo-400 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">LinkedIn</p>
                <p className="text-lg font-semibold">Connect with me</p>
              </div>
            </a>

            <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                <svg className="w-6 h-6 text-indigo-400 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">GitHub</p>
                <p className="text-lg font-semibold">View my projects</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Message</label>
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

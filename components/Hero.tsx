
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const handleViewProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-2 overflow-hidden relative bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/30">
      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Dots */}
          <circle cx="10%" cy="15%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
          <circle cx="25%" cy="25%" r="4" fill="currentColor" className="text-indigo-400 dark:text-indigo-600" />
          <circle cx="15%" cy="45%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
          <circle cx="8%" cy="70%" r="4" fill="currentColor" className="text-purple-400 dark:text-purple-600" />
          <circle cx="30%" cy="80%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

          <circle cx="70%" cy="10%" r="4" fill="currentColor" className="text-indigo-400 dark:text-indigo-600" />
          <circle cx="85%" cy="20%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
          <circle cx="90%" cy="45%" r="4" fill="currentColor" className="text-purple-400 dark:text-purple-600" />
          <circle cx="75%" cy="65%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
          <circle cx="88%" cy="85%" r="4" fill="currentColor" className="text-indigo-400 dark:text-indigo-600" />

          <circle cx="45%" cy="8%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
          <circle cx="60%" cy="15%" r="4" fill="currentColor" className="text-purple-400 dark:text-purple-600" />
          <circle cx="50%" cy="90%" r="3" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

          {/* Lines connecting dots */}
          <line x1="10%" y1="15%" x2="25%" y2="25%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="25%" y1="25%" x2="45%" y2="8%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="45%" y1="8%" x2="60%" y2="15%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="60%" y1="15%" x2="70%" y2="10%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="70%" y1="10%" x2="85%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

          <line x1="15%" y1="45%" x2="30%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="8%" y1="70%" x2="30%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

          <line x1="85%" y1="20%" x2="90%" y2="45%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="90%" y1="45%" x2="75%" y2="65%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="75%" y1="65%" x2="88%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

          <line x1="50%" y1="90%" x2="30%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
          <line x1="50%" y1="90%" x2="88%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 px-2">
        {/* Left Side - Content */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
              Hi There,
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              I'm Prashantha <span className="text-indigo-600 dark:text-indigo-400">D</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              I Am Into <span className="text-indigo-600 dark:text-indigo-400 font-bold">Software Development</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              onClick={handleViewProjects}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform hover:bg-indigo-600 dark:hover:bg-indigo-500"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 fill-current text-white dark:text-slate-900" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform hover:bg-indigo-600 dark:hover:bg-indigo-500"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 fill-current text-white dark:text-slate-900" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform hover:bg-indigo-600 dark:hover:bg-indigo-500"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <a
              href={`tel:${PERSONAL_DETAILS.phone}`}
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center hover:scale-110 transition-transform hover:bg-indigo-600 dark:hover:bg-indigo-500"
              aria-label="Phone"
            >
              <svg className="w-6 h-6 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
          </div>
        </div>

        {/* Right Side - Avatar/Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Yellow Circle Background */}
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 flex items-center justify-center shadow-2xl">
              {/* Avatar Placeholder - Using Initials */}
              <div className="text-9xl font-black text-white drop-shadow-lg">
                PD
              </div>
            </div>
            {/* Decorative network nodes around avatar */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-500 shadow-lg"></div>
            <div className="absolute top-1/4 -left-6 w-6 h-6 rounded-full bg-purple-500 shadow-lg"></div>
            <div className="absolute bottom-10 -right-8 w-10 h-10 rounded-full bg-indigo-400 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Download Resume Button - Bottom Right */}
      <a
        href={PERSONAL_DETAILS.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 px-6 py-3 bg-white dark:bg-slate-800 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl z-20 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        Resume
      </a>
    </section>
  );
};

export default Hero;


import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-4 flex justify-center">
      <div className="max-w-[1600px] w-full flex flex-col md:flex-row items-center justify-between glass rounded-3xl md:rounded-full px-6 py-2 shadow-xl border border-white/10 backdrop-blur-md bg-white/95">
        <div className="w-full md:w-auto flex items-center justify-between py-1 md:py-0">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {PERSONAL_DETAILS.brand}
            </span>
          </a>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-600"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8 text-sm font-semibold pb-4 md:pb-0`}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-indigo-500 transition-colors py-1">About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-indigo-500 transition-colors py-1">Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-indigo-500 transition-colors py-1">Experience</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-indigo-500 transition-colors py-1">Projects</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="hover:text-indigo-500 transition-colors py-1">Certifications</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-indigo-500 transition-colors py-1">Contact</a>
          <div className="md:hidden w-full h-px bg-slate-200 my-2"></div>
          <a
            href={PERSONAL_DETAILS.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:hidden bg-indigo-600 text-white text-center py-3 rounded-2xl font-bold shadow-lg shadow-indigo-500/20"
          >
            Download CV
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={PERSONAL_DETAILS.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white text-sm px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all font-bold shadow-md shadow-indigo-500/30 active:scale-95"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

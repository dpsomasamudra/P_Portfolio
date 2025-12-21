
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-sm text-slate-500">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-900 dark:text-slate-100">{PERSONAL_DETAILS.brand}</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center space-x-8">
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
        </div>

        <p className="flex items-center">
          Built with <span className="text-red-500 mx-1">❤</span> in Bengaluru
        </p>
      </div>
    </footer>
  );
};

export default Footer;

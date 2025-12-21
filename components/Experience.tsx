
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-slate-900 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Work Experience</h2>
          <p className="text-slate-500 dark:text-slate-400">Professional internships and corporate exposure</p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-indigo-500/20">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/10"></div>
              <div className="glass p-8 rounded-3xl border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-bold self-start">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

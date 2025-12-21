
import React from 'react';
import { SKILLS } from '../constants';

const SkillIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, { gradient: string; icon: React.ReactNode }> = {
    'Java': {
      gradient: 'from-[#FF6B6B] to-[#FF8E53]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    'Python': {
      gradient: 'from-[#4FACFE] to-[#00F2FE]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    'JavaScript': {
      gradient: 'from-[#F6D365] to-[#FDA085]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    'React': {
      gradient: 'from-[#2193B0] to-[#6DD5ED]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    'Node.js': {
      gradient: 'from-[#11998E] to-[#38EF7D]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    'Express': {
      gradient: 'from-[#434343] to-[#000000]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    'MongoDB': {
      gradient: 'from-[#00B09B] to-[#96C93D]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    },
    'SQL': {
      gradient: 'from-[#1E3C72] to-[#2A5298]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    },
    'HTML & CSS': {
      gradient: 'from-[#FF9966] to-[#FF5E62]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    'Git & GitHub': {
      gradient: 'from-[#0F2027] to-[#2C5364]',
      icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
    }
  };

  const config = iconMap[name] || {
    gradient: 'from-indigo-500 to-purple-500',
    icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  };

  return (
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
      {config.icon}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-[1600px] mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Technical Skills</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xl">Technologies I work with to build modern applications</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 dark:border-slate-700/50"
            >
              <SkillIcon name={skill.name} />

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100">{skill.name}</h3>

              <div className={`mt-3 text-[12px] font-bold px-5 py-1.5 rounded-full tracking-wide ${skill.level === 'Advanced' ? 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400' :
                  'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                }`}>
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

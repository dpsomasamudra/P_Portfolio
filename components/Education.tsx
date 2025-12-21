
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-purple-950/30 dark:to-indigo-950/30">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Academic Foundation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl">My educational journey and qualifications</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>

          {/* Education items */}
          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white dark:border-slate-900 shadow-lg animate-pulse"></div>
                </div>

                {/* Left/Right content based on index */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left side - Content */}
                    <div className="md:text-right md:pr-12">
                      <div className={`inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-indigo-200 dark:border-indigo-800 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <div className="space-y-3">
                          {/* Duration badge */}
                          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold shadow-lg">
                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {edu.duration}
                          </div>

                          {/* Degree */}
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h3>

                          {/* Institution */}
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {edu.institution}
                          </p>

                          {/* Details */}
                          <ul className="space-y-2 pt-2">
                            {edu.details.map((detail, i) => (
                              <li key={i} className="flex items-center justify-end md:justify-end space-x-2">
                                <span className="text-slate-600 dark:text-slate-400 text-sm">{detail}</span>
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Icon */}
                    <div className="hidden md:block md:pl-12">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - Icon */}
                    <div className="hidden md:block md:pr-12 flex justify-end">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl ml-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="md:text-left md:pl-12">
                      <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-purple-200 dark:border-purple-800">
                        <div className="space-y-3">
                          {/* Duration badge */}
                          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold shadow-lg">
                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {edu.duration}
                          </div>

                          {/* Degree */}
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h3>

                          {/* Institution */}
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            {edu.institution}
                          </p>

                          {/* Details */}
                          <ul className="space-y-2 pt-2">
                            {edu.details.map((detail, i) => (
                              <li key={i} className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600 dark:text-slate-400 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

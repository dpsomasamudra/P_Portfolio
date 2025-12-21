
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual/Decorative */}
          <div className="relative">
            {/* Large decorative gradient circle */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>

              {/* Center content */}
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center space-y-6 p-12">
                  {/* Large icon */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Projects</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-60 blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-60 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I am a results-driven software engineer and cybersecurity professional passionate about building secure, high-performance solutions. I am committed to leveraging emerging technologies and best practices to drive innovation and protect systems.
            </p>

            {/* Quote box with gradient border */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-8 h-8 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-base font-medium text-slate-700 dark:text-slate-300 italic">
                    Focused on delivering impactful results through secure coding and analytical problem-solving.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills list with colorful icons */}
            <ul className="space-y-4">
              {[
                { text: "Hands-on experience in Python and Data Analytics.", icon: "📊", color: "from-blue-500 to-cyan-500" },
                { text: "Proficient in Java, Python, and C programming.", icon: "💻", color: "from-purple-500 to-pink-500" },
                { text: "Specialized in Cyber Security and Authentication Vulnerabilities.", icon: "🔒", color: "from-red-500 to-orange-500" },
                { text: "Strong background in MERN stack development.", icon: "⚛️", color: "from-green-500 to-emerald-500" }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

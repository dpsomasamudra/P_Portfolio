
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const ProjectCarousel: React.FC<{ images: string[], title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden aspect-video bg-slate-200">
      {/* Images container */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/0 transition-colors pointer-events-none"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">PROJECTS</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Practical implementations of my software engineering and security knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <div key={project.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col">

              <ProjectCarousel images={project.images} title={project.title} />

              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed flex-1">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-widest block">The Problem</span>
                    <p className="text-slate-600 italic">"{project.problem}"</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-indigo-500 uppercase text-[10px] tracking-widest block">My Solution</span>
                    <p className="text-slate-600">{project.solution}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-6 border-t border-slate-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-2xl border border-slate-200 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    <span>View GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/20"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

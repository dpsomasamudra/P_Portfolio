
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
    // Icon variations for different certifications
    const getIcon = (index: number) => {
        const icons = [
            // Development icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>,
            // Security shield icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
            // Lock icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>,
            // Chart icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>,
            // Award icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ];
        return icons[index % icons.length];
    };

    // Color schemes for different cards
    const getColorScheme = (index: number) => {
        const schemes = [
            {
                gradient: 'from-indigo-500 to-purple-600',
                iconBg: 'bg-indigo-500',
                badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
                border: 'border-indigo-200 dark:border-indigo-800',
                shadow: 'shadow-indigo-500/20'
            },
            {
                gradient: 'from-blue-500 to-cyan-600',
                iconBg: 'bg-blue-500',
                badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                border: 'border-blue-200 dark:border-blue-800',
                shadow: 'shadow-blue-500/20'
            },
            {
                gradient: 'from-purple-500 to-pink-600',
                iconBg: 'bg-purple-500',
                badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
                border: 'border-purple-200 dark:border-purple-800',
                shadow: 'shadow-purple-500/20'
            },
            {
                gradient: 'from-green-500 to-emerald-600',
                iconBg: 'bg-green-500',
                badge: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                border: 'border-green-200 dark:border-green-800',
                shadow: 'shadow-green-500/20'
            },
            {
                gradient: 'from-orange-500 to-red-600',
                iconBg: 'bg-orange-500',
                badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
                border: 'border-orange-200 dark:border-orange-800',
                shadow: 'shadow-orange-500/20'
            }
        ];
        return schemes[index % schemes.length];
    };

    return (
        <section id="certifications" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-indigo-950/30 dark:to-purple-950/30 scroll-mt-24">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Certifications
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-xl">Professional certifications and completed courses</p>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS.map((cert, index) => {
                        const colors = getColorScheme(index);
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl border-2 ${colors.border} hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl ${colors.shadow} bg-white dark:bg-slate-800`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                {/* Content */}
                                <div className="relative p-6 space-y-4">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {getIcon(index)}
                                    </div>

                                    {/* Certificate Name */}
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight min-h-[3.5rem]">
                                        {cert.name}
                                    </h3>

                                    {/* Issuer */}
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        {cert.issuer}
                                    </p>

                                    {/* Year Badge */}
                                    <div className="flex items-center justify-between pt-2">
                                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full ${colors.badge} text-sm font-bold`}>
                                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {cert.year}
                                        </span>

                                        {/* Verified checkmark */}
                                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`h-1 w-full bg-gradient-to-r ${colors.gradient}`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

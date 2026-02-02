import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-20 px-6 bg-white dark:bg-black overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                            About the Event
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Opportunity</span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Knowledge Festival 2026 is CUSAT's premier annual gathering of brilliant minds. It's a celebration of technology, science, and the arts, bringing together students, experts, and industry leaders.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-blue-600 pl-4 py-1">
                            "A platform to showcase talent, exchange ideas, and foster the next generation of innovators."
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">5k+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Attendees</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Events</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Workshops</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element / "Image" */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out border border-white/20">
                            {/* Abstract Geometric Pattern representing innovation */}
                            <div className="absolute inset-0 bg-[url('/about-pattern.svg')] bg-cover opacity-50 mix-blend-overlay"></div>
                            {/* Since we don't have an image, we build a composition */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#263381]/80 to-[#5766be]/80 text-white backdrop-blur-sm">
                                <div className="w-24 h-24 mb-6 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 rotate-12 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.5-2.261M12 18c.241-1.815.146-2.583.146-2.583m0 0a6.046 6.046 0 00-6 6m0 0c0 .93.57 1.763 1.391 2.219m-3.805-4.437a3.001 3.001 0 00-2.822 5.25" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Knowledge Festival</h3>
                                <div className="w-16 h-1 bg-white/50 rounded-full mb-4"></div>
                                <p className="text-white/90 font-light">
                                    February 26-28, 2026<br />
                                    CUSAT Campus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

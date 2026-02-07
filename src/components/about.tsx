'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(motionValue, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref} className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
};

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
                            CUSAT Knowledge Festival – Curiosity Meets Opportunity is an open-house initiative of Cochin University of Science and Technology (CUSAT) designed to bring science, technology, and higher education closer to the public. The festival opens the doors of the University, offering students, parents, and the general public an opportunity to explore CUSAT’s academic, research, and infrastructural facilities.
                            The programme features exhibitions, expert lectures, interactive sessions, quizzes, and demonstrations organised by various departments, showcasing innovations, research outcomes, and learning opportunities at CUSAT. Through this festival, the University aims to reduce the gap between science and society by making knowledge accessible, engaging, and relevant to everyday life.
                            The Knowledge Festival also serves as a platform to guide aspiring students by familiarising them with academic programmes, career prospects, and admission opportunities available at CUSAT for the upcoming academic year.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-blue-600 pl-4 py-1">
                            "A platform to showcase talent, exchange ideas, and foster the next generation of innovators."
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div>
                                <Counter value={5} suffix="k+" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Attendees</div>
                            </div>
                            <div>
                                <Counter value={50} suffix="+" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Events</div>
                            </div>
                            <div>
                                <Counter value={20} suffix="+" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Workshops</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element / "Image" */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-8">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/card_image.jpeg"
                                alt="Knowledge Festival"
                                className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
                            />
                            {/* Decorative glow behind */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 scale-90"></div>
                        </div>

                        <motion.a
                            href="https://www.instagram.com/officialcusat?igsh=amhsMDNlYmMycWJl"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 5.539c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold text-lg">Explore CUSAT on Instagram</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

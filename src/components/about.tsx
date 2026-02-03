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
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/card_image.png"
                                alt="Knowledge Festival"
                                className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
                            />
                            {/* Decorative glow behind */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 scale-90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

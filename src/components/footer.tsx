'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    if (pathname === '/registration') {
        return null;
    }

    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-4 md:col-span-2">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/event_logo.svg"
                                alt="Knowledge Festival 2026"
                                width={150}
                                height={35}
                                className="h-auto"
                            />
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
                            Celebrating innovation, brilliance, and the pursuit of knowledge. Join us at CUSAT for an unforgettable experience of learning and inspiration.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                            Explore
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#263381] dark:hover:text-[#8898f3] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/registration" className="text-gray-600 dark:text-gray-400 hover:text-[#263381] dark:hover:text-[#8898f3] transition-colors">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/#departments" className="text-gray-600 dark:text-gray-400 hover:text-[#263381] dark:hover:text-[#8898f3] transition-colors">
                                    Departments
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600 dark:text-gray-400">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-1">Email</span>
                                info@cusat.ac.in
                            </li>
                            <li className="text-gray-600 dark:text-gray-400">
                                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-1">Location</span>
                                Cochin University of Science and Technology, Kochi, Kerala
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; 2026 Knowledge Festival. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

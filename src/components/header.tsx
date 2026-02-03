'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ButtonHoverMultiple = () => {
    return (
        <Link href="/registration">
            <button className='group relative inline-block'>
                {/* Background blops/glow effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur transition duration-500 group-hover:opacity-100"></div>

                <div
                    className='relative z-10 inline-flex items-center justify-center overflow-hidden rounded-full
                    bg-gradient-to-r from-blue-600 to-indigo-700 
                    px-5 py-2 md:px-12 md:py-4
                    font-bold text-white tracking-wide uppercase shadow-xl
                    transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl
                    text-xs md:text-xl'
                >
                    <span className="relative">Register Now</span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
                </div>
            </button>
        </Link>
    );
};

export default function Header() {
    const pathname = usePathname();

    // Hide header on registration page
    if (pathname === '/registration') {
        return null;
    }

    return (
        <header className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo on the left */}
                {/* Logo on the left */}
                <div className="flex items-center gap-3 md:gap-6">
                    <Link href="/">
                        <Image
                            src="/event_logo.png"
                            alt="Knowledge Festival 2026"
                            width={180}
                            height={40}
                            priority
                            className="h-auto w-28 md:w-48"
                        />
                    </Link>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 md:h-8"></div>
                    <Link href="https://cusat.ac.in" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/cusat_logo.png"
                            alt="CUSAT"
                            width={50}
                            height={50}
                            className="h-8 w-auto md:h-12"
                        />
                    </Link>
                </div>

                {/* Register Now button on the right */}
                <div className="flex items-center">
                    <ButtonHoverMultiple />
                </div>
            </div>
        </header>
    );
}

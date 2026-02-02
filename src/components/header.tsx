'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ButtonHoverMultiple = () => {
    return (
        <Link href="/registration">
            <button className='group relative'>
                <div
                    className='relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-full
        bg-linear-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] 
         bg-transparent px-12 font-medium dark:text-white text-black  transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3'
                >
                    Register Now
                </div>
                <div className='absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3  group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]'></div>
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
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/event_logo.svg"
                            alt="Knowledge Festival 2026"
                            width={200}
                            height={45}
                            priority
                            className="h-auto"
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

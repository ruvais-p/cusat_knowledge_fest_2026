'use client';

import React from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import ScrollElement from '@/components/ui/scroll-animation';
import departmentsData from '@/data/departments.json';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Dummy images from Unsplash as requested
// Images are loaded from department data

export default function DepartmentPage() {
    const params = useParams();
    const slug = params.slug as string;

    const department = departmentsData.departments.find((d) => d.slug === slug);

    if (!department) {
        return (
            <div className="min-h-screen grid place-content-center">
                <h1 className="text-2xl font-bold">Department not found</h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-20">
            {/* Header Section */}
            <section className="relative px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        {department.name}
                    </h1>
                    <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 md:leading-relaxed max-w-3xl mx-auto">
                        {department.description}
                    </p>
                </div>
                {department.url && department.urlText && (
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
  <a
    href={department.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 px-6 py-3 text-base font-black rounded-full shadow-sm
               text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
  >
    {department.urlText}

    {/* Arrow */}
    <span
      className="inline-block transform transition-transform duration-300
                 group-hover:translate-x-2"
    >
      <ArrowRightIcon className="w-5 h-5" />
    </span>
  </a>
</div>

                )}
            </section>

            {/* Gallery Section */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {(department.images && department.images.length > 0 ? department.images : []).map((src, index) => (
                            <ScrollElement
                                key={index}
                                viewport={{ once: true, amount: 0.2 }}
                                className="break-inside-avoid"
                            >
                                <div className="relative group overflow-hidden rounded-2xl">
                                    <img
                                        src={src}
                                        alt={`${department.name} gallery image ${index + 1}`}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </ScrollElement>
                        ))}
                        {(!department.images || department.images.length === 0) && (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                No images available for this department.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main >
    );
}

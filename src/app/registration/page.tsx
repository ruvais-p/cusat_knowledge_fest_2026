import React from 'react';

export default function RegistrationPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Register for Knowledge Fest 2026
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Fill out the form below to secure your spot
                    </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden p-4 md:p-8 flex justify-center">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe6T_RWLXQD9RZv0DSXon65YuhOaIzORZV5Rg097TPby3IOpw/viewform?embedded=true"
                        width="640"
                        height="1899"
                        className="w-full max-w-[640px]"
                        style={{ border: 0 }}
                        title="Registration Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </main>
    );
}

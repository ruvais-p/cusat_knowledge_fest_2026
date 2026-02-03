import Image from "next/image";
import Link from "next/link";
import departmentsData from "@/data/departments.json";
import AboutSection from "@/components/about";

interface Department {
  name: string;
  slug: string;
  images?: string[];
}

export default function Home() {
  const departments: Department[] = departmentsData.departments;

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        {/* Hero Image Section */}
        <div className="relative w-full h-full">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/home_page_image.jpg"
              alt="CUSAT Campus"
              fill
              priority
              className="object-cover"
              quality={100}
            />
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-6">
            {/* "Explore CUSAT" Text */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Explore CUSAT
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                Discover Knowledge, Innovation & Excellence
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/70 rounded-full animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Departments Section */}
      <section id="departments" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Departments
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#263381] to-[#5766be] rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of academic departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department: Department, index: number) => (
              <Link
                key={index}
                href={`/departments/${department.slug}`}
                className="block h-full group"
              >
                <div
                  className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Top Accent Gradient Line */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${index % 3 === 0 ? 'from-blue-500 to-cyan-400' : index % 3 === 1 ? 'from-indigo-500 to-purple-400' : 'from-fuchsia-500 to-pink-400'}`}></div>

                  <div className="p-8 flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Arrow Icon that appears/moves on hover */}
                      <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {department.name}
                      </h3>
                      <div className="w-12 h-1 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      <span>Explore Department</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}

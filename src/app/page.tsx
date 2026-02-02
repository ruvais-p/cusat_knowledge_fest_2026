import Image from "next/image";
import Link from "next/link";
import departmentsData from "@/data/departments.json";
import AboutSection from "@/components/about";

interface Department {
  name: string;
  slug: string;
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

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department: Department, index: number) => (
              <Link key={index} href={`/departments/${department.slug}`} className="block h-full">
                <div
                  className="group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${index % 3 === 0
                      ? '#263381, #394481'
                      : index % 3 === 1
                        ? '#5766be, #6b7bc9'
                        : '#8898f3, #9aa8f5'
                      })`
                  }}
                >
                  {/* Animated Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Department Name */}
                  <div className="relative z-10 h-full flex items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:scale-105 transition-transform duration-300">
                      {department.name}
                    </h3>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full group-hover:scale-150 group-hover:border-white/50 transition-all duration-500"></div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-2xl transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}

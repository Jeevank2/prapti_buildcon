import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  ArrowLeft, 
  Building2, 
  Info, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  Ruler, 
  LayoutGrid, 
  Check, 
  Landmark, 
  MessageSquare, 
  Phone, 
  Mail, 
  User,
  Sun,
  Moon
} from "lucide-react";
import { projects } from "../data/projects";

const fallbackImage =
  "https://images.unsplash.com/photo-1607348988049-05a0d3dd63df?auto=format&fit=crop&w=1200&q=80";

function BrandMark() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="logo-dark h-14 sm:h-16 w-auto object-contain dark:brightness-110" />
      <img src="/brand/prapti-logo-light.png" alt="PRAPTI BUILDCON Logo" className="logo-light h-14 sm:h-16 w-auto object-contain mix-blend-multiply" />
    </Link>
  );
}

function ProjectHeader({ isDark, toggleTheme }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-black/60 text-slate-800 dark:text-white backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <BrandMark />

        <nav className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
          <Link
            to="/"
            className="font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#projects"
            className="font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
          >
            Projects
          </Link>
          <a
            href="/#contact"
            className="hidden items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 font-bold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl sm:inline-flex"
          >
            Contact Us
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-slate-300 dark:border-[#c5a880]/30 rounded-full hover:bg-slate-100 dark:hover:bg-[#c5a880]/10 text-slate-800 dark:text-[#c5a880] transition-all flex items-center justify-center h-10 w-10 shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ compact = false }) {
  return (
    <footer
      className={`border-t border-slate-200 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#0a0a0a] text-slate-550 dark:text-slate-400 ${
        compact ? "py-6" : "py-10 sm:py-12"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        {!compact && (
          <div className="flex items-center justify-center">
            <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="logo-dark h-16 w-auto object-contain dark:brightness-110" />
            <img src="/brand/prapti-logo-light.png" alt="PRAPTI BUILDCON Logo" className="logo-light h-16 w-auto object-contain mix-blend-multiply" />
          </div>
        )}
        <p className="mx-auto max-w-md text-sm text-slate-400 dark:text-gray-500">
          © {new Date().getFullYear()} Prapti Buildcon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  // Scroll to top when the component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Theme support in details page
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return true; // default dark
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };


  if (!project) {
    return (
      <div className="flex min-h-screen w-full flex-col justify-between bg-slate-50 dark:bg-black font-sans transition-colors duration-300">
        <ProjectHeader isDark={isDark} toggleTheme={toggleTheme} />

        <main className="flex flex-grow flex-col items-center justify-center px-4 py-20">
          <div className="max-w-md space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 shadow-sm">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white">
              Project Not Found
            </h1>
            <p className="text-slate-605 dark:text-gray-400">
              The project you are looking for might have been moved, renamed,
              or does not exist.
            </p>
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-amber-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </div>
        </main>

        <Footer compact />
      </div>
    );
  }


  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#050505] font-sans text-slate-800 dark:text-slate-300 antialiased transition-colors duration-300">
      <ProjectHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="w-full">
        {/* Full-bleed Luxury Hero Section */}
        <section className="relative h-[60vh] sm:h-[80vh] w-full bg-slate-900 overflow-hidden flex items-end">
          <div className="absolute inset-0 z-0">
            <img
              src={project.coverImage || fallbackImage}
              alt={project.name}
              className="h-full w-full object-cover object-center transform transition-transform duration-[10s] hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            {/* Deep dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"></div>
          </div>
          
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24">
            {/* Navigation Breadcrumb */}
            <div className="mb-6">
              <Link
                to="/#projects"
                className="group inline-flex items-center text-sm font-semibold text-slate-300 transition-colors hover:text-amber-500"
              >
                <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects List
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-4 py-1.5 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest backdrop-blur-md">
                {project.type || "Completed Project"}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-black bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-widest backdrop-blur-md">
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl mb-4 drop-shadow-2xl">
              {project.name}
            </h1>
            
            <p className="flex items-center gap-2 font-medium text-slate-200 text-lg sm:text-xl max-w-3xl drop-shadow-lg">
              <MapPin className="h-6 w-6 text-amber-500 shrink-0" />
              <span>{project.address || `${project.location}, Pune, Maharashtra`}</span>
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Project Details: Description, Specs, Amenities, Gallery, Map */}
            <div className="lg:col-span-12 space-y-12 sm:space-y-16">

            {/* About the Project Description */}
            <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm text-left transition-all duration-300 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                <Info className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                About {project.name}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-normal transition-colors">
                {project.description ||
                  "This premium residential development is designed with the highest architectural standards. Positioned in a rapidly emerging sector of Pune, it features spacious interiors, ample sunlight, premium materials, and close connectivity to schools, shopping arenas, and industrial corridors."}
              </p>
            </div>

            {/* Specifications Cards Grid */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors">
                <Building2 className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                Key Specifications
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Configuration
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 transition-colors">
                    {project.bhk || "Residential Units"}
                  </span>
                </div>

                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Super Built-up Area
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 transition-colors">
                    {project.builtArea || "Varies by floorplan"}
                  </span>
                </div>

                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Total Units
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 transition-colors">
                    {project.units || "Premium Units"}
                  </span>
                </div>

                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Property Type
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 transition-colors">
                    {project.type || "Residential"}
                  </span>
                </div>

                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Developer
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 transition-colors">
                    Prapti Buildcon
                  </span>
                </div>

                <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 transition-colors">
                    Status
                  </span>
                  <span className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Amenities Section */}
            {project.amenities && project.amenities.length > 0 && (
              <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm text-left transition-all duration-300 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors">
                  <LayoutGrid className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                  Premium Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#050505] rounded-xl border border-slate-100 dark:border-white/5 transition-all duration-300 hover:bg-white dark:hover:bg-[#111111] hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-0.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-500 shrink-0 mt-0.5 transition-colors">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base transition-colors">{amenity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="text-left">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors">
                  <Landmark className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0a0a0a] shadow-sm group relative transition-all duration-300 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.name} gallery ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Site Location & Embed Map */}
            {project.address && (
              <div className="space-y-6 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 shadow-sm text-left transition-all duration-300 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:-translate-y-1">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                  <MapPin className="h-5.5 w-5.5 text-amber-600" />
                  Site Location & Connectivity
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-base transition-colors">
                  <strong>Site Address:</strong> {project.address}
                </p>
                {project.mapEmbed && !project.mapEmbed.includes("XXXXX") && (
                  <a 
                    href={project.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.address || project.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-80 relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner group cursor-pointer"
                  >
                    <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold shadow-xl transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                           <MapPin className="h-4.5 w-4.5 text-amber-600" />
                           Open Direct Map Location
                        </div>
                    </div>
                    <iframe
                      src={project.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title={`${project.name} location map`}
                      className="pointer-events-none"
                    />
                  </a>
                )}
              </div>
            )}

          </div>



          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

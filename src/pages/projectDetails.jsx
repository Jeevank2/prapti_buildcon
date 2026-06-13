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
      <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="h-14 sm:h-16 w-auto object-contain dark:brightness-110 logo-theme-filter" />
    </Link>
  );
}

function ProjectHeader({ isDark, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-black/80 text-slate-800 dark:text-white backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <BrandMark />

        <nav className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
          <Link
            to="/"
            className="font-semibold text-slate-650 dark:text-gray-300 hover:text-[#c5a880] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#projects"
            className="font-semibold text-slate-650 dark:text-gray-300 hover:text-[#c5a880] transition-colors"
          >
            Projects
          </Link>
          <a
            href="/#contact"
            className="hidden items-center justify-center rounded-xl bg-yellow-500 px-5 py-2.5 font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 sm:inline-flex"
          >
            Contact Us
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-slate-300 dark:border-[#c5a880]/30 rounded-full hover:bg-slate-100 dark:hover:bg-[#c5a880]/10 text-slate-800 dark:text-[#c5a880] transition-all flex items-center justify-center h-10 w-10"
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
            <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="h-16 w-auto object-contain dark:brightness-110 logo-theme-filter" />
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

  // Inquiry form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    config: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please fill in your name and phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800 antialiased">
      <ProjectHeader isDark={isDark} toggleTheme={toggleTheme} />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 text-left">
          <Link
            to="/#projects"
            className="group inline-flex items-center text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects List
          </Link>
        </div>

        {/* Hero Title Grid */}
        <div className="mb-8 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/50 uppercase tracking-wide">
              {project.type || "Completed Project"}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200/50 uppercase tracking-wide">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {project.name}
          </h1>
          <p className="flex items-center gap-1.5 mt-2 font-medium text-slate-500">
            <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
            <span>{project.address || `${project.location}, Pune, Maharashtra`}</span>
          </p>
        </div>

        {/* 2-Column Split: Details vs Sticky Inquiry Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Cover Image, Description, Specs, Amenities, Gallery, Map */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            
            {/* Cover Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={project.coverImage || fallbackImage}
                alt={project.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
            </div>

            {/* About the Project Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Info className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                About {project.name}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                {project.description ||
                  "This premium residential development is designed with the highest architectural standards. Positioned in a rapidly emerging sector of Pune, it features spacious interiors, ample sunlight, premium materials, and close connectivity to schools, shopping arenas, and industrial corridors."}
              </p>
            </div>

            {/* Specifications Cards Grid */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                Key Specifications
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Configuration
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {project.bhk || "Residential Units"}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Super Built-up Area
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {project.builtArea || "Varies by floorplan"}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Total Units
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {project.units || "Premium Units"}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Property Type
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {project.type || "Residential"}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Developer
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    Prapti Buildcon
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Status
                  </span>
                  <span className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Ready to Move
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Amenities Section */}
            {project.amenities && project.amenities.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <LayoutGrid className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                  Premium Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm sm:text-base">{amenity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Landmark className="h-5.5 w-5.5 text-amber-600 shrink-0" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm group relative"
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
              <div className="space-y-6 rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm text-left">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                  <MapPin className="h-5.5 w-5.5 text-amber-600" />
                  Site Location & Connectivity
                </h3>
                <p className="leading-relaxed text-slate-600 text-base">
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

          {/* Right Column: Sticky Inquiry Widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 mt-8 lg:mt-0 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-xl relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500" />

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                      <MessageSquare className="h-5 w-5 text-amber-600" />
                      Inquire / Schedule Visit
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and our real-estate advisors will contact you shortly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 mb-4 text-xs font-semibold text-red-600 bg-red-50 rounded-xl border border-red-100">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="johndoe@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Interested Config
                      </label>
                      <div className="relative">
                        <Ruler className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                        <select
                          name="config"
                          value={formData.config}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none"
                        >
                          <option value="">Select configuration</option>
                          <option value="1 BHK">1 BHK</option>
                          <option value="2 BHK">2 BHK</option>
                          <option value="3 BHK">3 BHK</option>
                          <option value="Other">Other / Investment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="I would like to request brochures and plan details..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Request Call Back
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100 shadow-sm">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Thank you <strong>{formData.name}</strong>. Your inquiry for <strong>{project.name}</strong> has been successfully received. 
                  </p>
                  <p className="text-xs text-slate-400">
                    Our sales representative will reach out to you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", config: "", message: "" });
                    }}
                    className="mt-4 text-xs font-semibold text-amber-600 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

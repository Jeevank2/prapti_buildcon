import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Info, MapPin, ShieldAlert } from "lucide-react";
import { projects } from "../data/projects";

const fallbackImage =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80";

function BrandMark({ stacked = false }) {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
        <Building2 className="h-5 w-5" />
      </div>
      {stacked ? (
        <div>
          <span className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-xl">
            Prapti
          </span>
          <span className="-mt-1 block text-sm font-medium text-slate-500">
            Buildcon
          </span>
        </div>
      ) : (
        <span className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          Prapti Buildcon
        </span>
      )}
    </Link>
  );
}

function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <BrandMark stacked />

        <nav className="flex items-center gap-4 sm:gap-8">
          <Link
            to="/"
            className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="hidden items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg sm:inline-flex"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer({ compact = false }) {
  return (
    <footer
      className={`border-t border-slate-800 bg-slate-950 text-slate-400 ${
        compact ? "py-6" : "py-10 sm:py-12"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        {!compact && (
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Building2 className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Prapti Buildcon
            </span>
          </div>
        )}
        <p className="mx-auto max-w-md text-sm">
          Copyright {new Date().getFullYear()} Prapti Buildcon. All rights
          reserved{compact ? "." : ". Built with precision and trust."}
        </p>
      </div>
    </footer>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen w-full flex-col justify-between bg-slate-50 font-sans">
        <ProjectHeader />

        <main className="flex flex-grow flex-col items-center justify-center px-4 py-20">
          <div className="max-w-md space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 shadow-sm">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950">
              Project Not Found
            </h1>
            <p className="text-slate-600">
              The project you are looking for might have been moved, renamed,
              or does not exist.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-indigo-700"
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
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800">
      <ProjectHeader />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 text-left">
          <Link
            to="/projects"
            className="group inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        <div className="mb-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:mb-12 lg:grid-cols-12">
          <div className="relative aspect-[4/3] bg-slate-100 sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[400px]">
            <img
              src={project.coverImage || fallbackImage}
              alt={project.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-md backdrop-blur-sm">
                {project.status}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6 p-5 text-left sm:p-8 lg:col-span-5 lg:p-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {project.name}
              </h1>

              <div className="flex items-center gap-2 font-medium text-slate-600">
                <MapPin className="h-5 w-5 shrink-0 text-slate-400" />
                <span>{project.location}</span>
              </div>

              <div className="my-4 border-t border-slate-100" />

              <p className="text-base leading-relaxed text-slate-600">
                {project.description ||
                  "This premium residential project is meticulously designed with top-tier materials, modern aesthetics, and standard specifications. Situated in a prime, rapidly growing region of Pune, it offers great connectivity and quality lifestyle."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
              <div className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Developer
                </span>
                <span className="text-sm font-bold text-slate-800">
                  Prapti Buildcon
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Status
                </span>
                <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                  Ready to Move
                </span>
              </div>
            </div>
          </div>
        </div>

        {(project.address || (project.gallery && project.gallery.length > 0)) && (
          <div className="mb-10 grid gap-6 text-left sm:gap-8 lg:mb-12 lg:grid-cols-2 lg:gap-12">
            {project.address && (
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <MapPin className="h-5 w-5 text-indigo-600" /> Site Location
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {project.address}
                </p>
                {project.mapEmbed && !project.mapEmbed.includes("XXXXX") && (
                  <div className="h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <iframe
                      src={project.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Maps Location"
                    />
                  </div>
                )}
              </div>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <Info className="h-5 w-5 text-indigo-600" /> Project Gallery
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {project.gallery.map((imgUrl, index) => (
                    <div
                      key={imgUrl}
                      className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.name} gallery ${index + 1}`}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

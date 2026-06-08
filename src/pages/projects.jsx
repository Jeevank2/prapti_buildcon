import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import ProjectCard from "../components/projectCard.jsx";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="h-16 w-auto object-contain" />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            <Link
              to="/"
              className="font-medium text-gray-300 transition-colors hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="font-semibold text-yellow-500 transition-colors"
            >
              Projects
            </Link>
            <a
              href="/#contact"
              className="hidden items-center justify-center rounded-xl bg-yellow-500 px-5 py-2.5 font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-600 sm:inline-flex"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/10 bg-black py-12 text-center sm:py-16 text-white">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Our Completed Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Discover our diverse portfolio of successfully delivered spaces,
            blending modern engineering with aesthetic perfection.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a0a0a] py-10 text-slate-400 sm:py-12">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="mx-auto max-w-md text-sm text-gray-500">
            © {new Date().getFullYear()} Prapti Buildcon. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

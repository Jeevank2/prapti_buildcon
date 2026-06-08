import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import ProjectCard from "../components/projectCard.jsx";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-xl">
                Prapti
              </span>
              <span className="-mt-1 block text-sm font-medium text-slate-500">
                Buildcon
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            <Link
              to="/"
              className="font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Projects
            </Link>
            <Link
              to="/"
              hash="#contact"
              className="hidden items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg sm:inline-flex"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50/50 to-transparent py-12 text-center sm:py-16">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Our Completed Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
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

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400 sm:py-12">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Building2 className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Prapti Buildcon
            </span>
          </div>
          <p className="mx-auto max-w-md text-sm">
            Copyright {new Date().getFullYear()} Prapti Buildcon. All rights
            reserved. Built with precision and trust.
          </p>
        </div>
      </footer>
    </div>
  );
}

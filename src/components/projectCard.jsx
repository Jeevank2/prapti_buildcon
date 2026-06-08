import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-md dark:hover:shadow-2xl">
        {/* Cover Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-zinc-900">
          <img
            src={project.coverImage || fallbackImage}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 dark:bg-black/90 backdrop-blur-md text-amber-600 dark:text-yellow-500 border border-slate-200/50 dark:border-white/10 shadow-sm uppercase tracking-wider">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-6 text-left">
          <div className="mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600/95 dark:text-yellow-500/80">
              {project.type || "Residential"}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="line-clamp-2 text-xl font-bold leading-tight text-slate-900 dark:text-white transition-colors group-hover:text-amber-600 dark:group-hover:text-yellow-500">
              {project.name}
            </h3>
            <div className="w-9 h-9 rounded-full bg-slate-50 dark:bg-zinc-800 group-hover:bg-amber-50 dark:group-hover:bg-[#c5a880]/15 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-yellow-500 flex items-center justify-center shrink-0 transition-colors duration-300">
              <ArrowUpRight className="w-4.5 h-4.5" />
            </div>
          </div>

          <p className="text-slate-500 dark:text-gray-405 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description || "Premium residential project in Pune with modern features."}
          </p>

          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-gray-500">
            <span className="font-bold text-slate-700 dark:text-gray-300">
              {project.bhk || "Residential Units"}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {project.location}
            </span>
          </div>

          <div className="mt-5 text-amber-600 dark:text-yellow-500 font-semibold text-sm flex items-center gap-1 group-hover:underline">
            View Details <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

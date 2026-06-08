import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/11]">
          <img
            src={project.coverImage || fallbackImage}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-indigo-700 shadow-sm uppercase tracking-wider">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-5 text-left sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-xl">
              {project.name}
            </h3>
            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-50 text-slate-400 group-hover:text-indigo-600 flex items-center justify-center shrink-0 transition-colors duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-auto mb-4 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
            <span className="truncate">{project.location}</span>
          </div>

          <span className="text-xs font-semibold text-indigo-600 group-hover:underline inline-flex items-center gap-1">
            View Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

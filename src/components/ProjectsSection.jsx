import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const fallbackImage =
  "https://images.unsplash.com/photo-1607348988049-05a0d3dd63df?auto=format&fit=crop&w=800&q=80";

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-white dark:bg-black py-24 text-slate-900 dark:text-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-yellow-500 uppercase tracking-widest text-sm font-semibold">
                        Our Projects
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                        Completed Developments
                    </h2>

                    <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
                        A showcase of our successfully delivered residential and commercial landmarks
                        across Pune.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                            className="group block h-full"
                        >
                            <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-[#c5a880]/30 dark:hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-md dark:hover:shadow-2xl hover:shadow-[#c5a880]/5 dark:hover:shadow-yellow-500/5">

                                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                    <img
                                        src={project.coverImage || fallbackImage}
                                        alt={project.name}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            e.currentTarget.src = fallbackImage;
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/75 backdrop-blur-md text-yellow-500 border border-yellow-500/20 shadow-sm uppercase tracking-wider">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow p-6 text-left">
                                    <div className="mb-2">
                                        <span className="text-xs font-medium uppercase tracking-wider text-yellow-500/80">
                                            {project.type || "Residential"}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300 leading-tight">
                                        {project.name}
                                    </h3>

                                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description || "Premium development showcasing quality homes in Pune."}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-gray-500">
                                        <span className="font-semibold text-slate-700 dark:text-gray-300">
                                            {project.bhk || "Residential Units"}
                                        </span>
                                        <span>
                                            📍 {project.location}
                                        </span>
                                    </div>

                                    <div className="mt-5 text-yellow-500 font-semibold text-sm flex items-center gap-1 group-hover:underline">
                                        Explore Project <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}
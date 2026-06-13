import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const fallbackImage =
  "https://images.unsplash.com/photo-1607348988049-05a0d3dd63df?auto=format&fit=crop&w=800&q=80";

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-gradient-to-b from-amber-50/30 to-white dark:from-[#0a0a0a] dark:to-[#050505] py-24 text-slate-900 dark:text-white">
            <div className="container mx-auto px-6">

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#c5a880] dark:text-yellow-500 bg-[#c5a880]/10 dark:bg-yellow-500/10 px-4 py-2 rounded-full border border-[#c5a880]/20 dark:border-yellow-500/20">
                        Our Portfolio
                    </span>
                    <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl tracking-tight">
                        Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a880] to-yellow-600 dark:from-yellow-400 dark:to-amber-500">Developments</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-500 dark:text-gray-400 text-sm md:text-base font-medium">
                        Explore our curated selection of premium properties designed for modern, luxurious living.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Link
                                to={`/projects/${project.slug}`}
                                className="group block h-full"
                            >
                                <div className="flex flex-col h-full bg-white dark:bg-[#121212] rounded-3xl overflow-hidden border border-amber-200/50 dark:border-white/5 hover:border-amber-400/50 dark:hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(245,158,11,0.1)] dark:hover:shadow-2xl dark:hover:shadow-yellow-500/5">

                                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                        <img
                                            src={project.coverImage || fallbackImage}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.src = fallbackImage;
                                            }}
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                                                {project.type}
                                            </span>
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#c5a880]/90 dark:bg-yellow-500/90 backdrop-blur-md text-black rounded-full shadow-lg">
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#c5a880] dark:group-hover:text-yellow-500 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="flex items-center text-sm font-medium text-slate-500 dark:text-gray-400 mb-6 line-clamp-2">
                                            <MapPin className="h-4 w-4 mr-1.5 opacity-70 shrink-0" />
                                            {project.location}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                                            <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                                <span className="text-slate-400 dark:text-gray-500 text-sm font-normal">Config:</span>
                                                {project.bhk}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-zinc-800 group-hover:bg-[#c5a880]/10 dark:group-hover:bg-yellow-500/15 text-slate-400 group-hover:text-[#c5a880] dark:group-hover:text-yellow-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                                                <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
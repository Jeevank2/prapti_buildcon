import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectsSection() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-yellow-500 uppercase tracking-widest">
                        Our Projects
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Completed Developments
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A showcase of our successfully delivered residential projects
                        across Pune.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                        >
                            <div className="group bg-[#111111] rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all duration-300">

                                <div className="overflow-hidden">
                                    <img
                                        src={project.coverImage}
                                        alt={project.name}
                                        className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                                <div className="p-6">

                                    <span className="inline-block mb-3 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                                        {project.status}
                                    </span>

                                    <h3 className="text-2xl font-semibold mb-2">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-400">
                                        {project.location}
                                    </p>

                                    <button className="mt-5 text-yellow-500 font-medium">
                                        View Project →
                                    </button>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}
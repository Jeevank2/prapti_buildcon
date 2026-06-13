import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="bg-gradient-to-b from-white to-amber-50/20 dark:from-[#050505] dark:to-[#0a0a0a] py-24 text-slate-900 dark:text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                        About Prapti Group
                    </span>
                    <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl tracking-tight">
                        Redefining the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Modern Living</span>
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-gray-400 text-sm font-medium">
                        Established in 2012 — Built on Trust and Excellence
                    </p>
                </motion.div>

                {/* Grid Content */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Company Background */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="relative border-l-2 border-yellow-500/30 pl-6 space-y-6">
                            <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                                At <strong className="text-yellow-500 font-semibold">Prapti Buildcon</strong>, we are dedicated to developing thoughtfully designed spaces that blend quality, comfort, and sustainability. Our focus is on creating exceptional residential and commercial developments that enhance lifestyles while respecting the environment.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                                We strive to deliver innovative infrastructure, superior construction standards, and value-driven communities that stand the test of time. By combining modern architecture with responsible development practices, we aim to provide spaces that are both aspirational and accessible.
                            </p>
                            <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300">
                                Our vision is to build vibrant communities where people can live, grow, and thrive, while contributing positively to the urban landscape and future generations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Vision & Mission Statements */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Vision Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group overflow-hidden rounded-3xl border border-amber-200/50 dark:border-yellow-500/10 bg-white dark:bg-gradient-to-br dark:from-[#121212] dark:to-black p-8 transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_8px_30px_rgb(245,158,11,0.1)] dark:hover:border-yellow-500/20 dark:hover:shadow-xl dark:hover:shadow-yellow-500/5"
                        >
                            <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-yellow-500/5 blur-xl group-hover:bg-yellow-500/10 transition-colors" />
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500">
                                    <Eye className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vision Statement</h3>
                            </div>
                            <blockquote className="border-l-4 border-yellow-500 pl-4 text-slate-700 dark:text-gray-300 italic text-base leading-relaxed">
                                "To create inspiring spaces and sustainable communities that enrich lives, deliver lasting value, and set new benchmarks in quality, innovation, and customer satisfaction."
                            </blockquote>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative group overflow-hidden rounded-3xl border border-amber-200/50 dark:border-yellow-500/10 bg-white dark:bg-gradient-to-br dark:from-[#121212] dark:to-black p-8 transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_8px_30px_rgb(245,158,11,0.1)] dark:hover:border-yellow-500/20 dark:hover:shadow-xl dark:hover:shadow-yellow-500/5"
                        >
                            <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-yellow-500/5 blur-xl group-hover:bg-yellow-500/10 transition-colors" />
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mission Statement</h3>
                            </div>
                            <blockquote className="border-l-4 border-yellow-500 pl-4 text-slate-700 dark:text-gray-300 italic text-base leading-relaxed">
                                "To develop thoughtfully planned projects that combine modern design, superior craftsmanship, and sustainable practices, ensuring exceptional living and investment opportunities for our customers."
                            </blockquote>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}

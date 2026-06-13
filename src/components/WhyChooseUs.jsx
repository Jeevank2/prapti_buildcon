import { Users, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="bg-gradient-to-b from-white to-amber-50/20 dark:from-[#050505] dark:to-[#0a0a0a] py-24 text-slate-900 dark:text-white">
            <div className="container mx-auto px-6 max-w-7xl">

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-18 max-w-3xl mx-auto"
                >
                    <span className="text-yellow-500 uppercase tracking-widest text-sm font-semibold bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight text-slate-900 dark:text-white">
                        The Prapti Advantage
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400 mt-4 text-lg">
                        Our core pillars shape the way we construct homes and build lasting relationships.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 mt-16">

                    {/* Pillar 1: Expert Team */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-between bg-white dark:bg-black p-8 md:p-12 rounded-[2rem] border border-amber-200/50 dark:border-white/5 hover:border-amber-400/50 dark:hover:border-yellow-500/20 transition-all duration-300 shadow-sm dark:shadow-xl group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(245,158,11,0.1)]"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-yellow-500/5 blur-2xl group-hover:bg-yellow-500/10 transition-colors" />
                        <div>
                            <div className="inline-flex p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500 mb-8">
                                <Users className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                                Expert Team & Customer-Focused Approach
                            </h3>

                            <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed text-base">
                                <p>
                                    At Prapti Buildcon, we believe that exceptional developments are built by exceptional people. Our team comprises experienced industry professionals and dynamic young talent who work together to deliver quality, innovation, and value in every project.
                                </p>
                                <p>
                                    With a strong focus on customer satisfaction, we strive to create thoughtfully designed spaces that combine modern living, superior construction standards, and long-term affordability. Our commitment to transparency, professionalism, and excellence ensures a seamless experience for every customer, from inquiry to possession.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10">
                            <blockquote className="text-yellow-500 font-semibold italic text-lg leading-relaxed">
                                "Driven by expertise, guided by integrity, and committed to creating spaces that exceed expectations."
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Timely Delivery */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col justify-between bg-white dark:bg-black p-8 md:p-12 rounded-[2rem] border border-amber-200/50 dark:border-white/5 hover:border-amber-400/50 dark:hover:border-yellow-500/20 transition-all duration-300 shadow-sm dark:shadow-xl group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(245,158,11,0.1)]"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-yellow-500/5 blur-2xl group-hover:bg-yellow-500/10 transition-colors" />
                        <div>
                            <div className="inline-flex p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500 mb-8">
                                <Clock3 className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                                Timely Delivery, Trusted Commitment
                            </h3>

                            <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed text-base">
                                <p>
                                    At Prapti Buildcon, we understand that owning a home is one of life's most important milestones, and timely possession plays a crucial role in that journey. Our experienced team follows a disciplined planning and execution process to ensure projects are delivered as per committed timelines.
                                </p>
                                <p>
                                    We focus on efficient project management, quality construction, and transparent communication, allowing our customers to plan their future with confidence. With our commitment to timely handovers, you can look forward to a smooth and hassle-free transition into your new home.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10">
                            <blockquote className="text-yellow-500 font-semibold italic text-lg leading-relaxed">
                                "Building trust through timely delivery, quality craftsmanship, and unwavering commitment to our customers."
                            </blockquote>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
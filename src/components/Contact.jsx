import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-white dark:bg-black text-slate-900 dark:text-white py-24"
        >
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Let's Build Together
                        </h2>

                        <p className="text-slate-600 dark:text-gray-400 mb-8">
                            Get in touch with Prapti Buildcon for project inquiries and collaborations.
                        </p>

                        <div className="space-y-4 text-slate-700 dark:text-gray-300">
                            <p>📞 +91 91453 11252</p>
                            <p>✉️ praptispaces@gmail.com</p>
                            <p>📍 Pune, Maharashtra</p>
                        </div>
                    </motion.div>

                    {/* Right */}

                    <motion.form 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-5"
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl bg-white dark:bg-[#111111] border border-amber-200/50 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-xl bg-white dark:bg-[#111111] border border-amber-200/50 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-4 rounded-xl bg-white dark:bg-[#111111] border border-amber-200/50 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full p-4 rounded-xl bg-white dark:bg-[#111111] border border-amber-200/50 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />

                        <button
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition active:scale-95 shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20"
                        >
                            Send Inquiry
                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}
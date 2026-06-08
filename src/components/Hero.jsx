import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full flex items-center justify-center bg-white dark:bg-black text-slate-900 dark:text-white overflow-hidden px-4 py-20 sm:px-6">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70 dark:bg-black/60" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] text-slate-900 dark:text-white"
                >
                    Building Trust.
                    <br />
                    Creating Landmarks.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto mt-6 max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-gray-300"
                >
                    Prapti Buildcon has delivered premium residential
                    developments across Pune with a commitment to quality,
                    innovation, and customer satisfaction.
                </motion.p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                    <a
                        href="#contact"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-400 px-8 py-3 font-semibold text-black transition active:scale-95 shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20 sm:py-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full flex items-center justify-center bg-black text-white overflow-hidden px-4 py-20 sm:px-6">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] text-white"
                >
                    Building Trust.
                    <br />
                    Creating Landmarks.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto mt-6 max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300"
                >
                    Prapti Buildcon has delivered premium residential
                    developments across Pune with a commitment to quality,
                    innovation, and customer satisfaction.
                </motion.p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                    <Link
                        to="/projects"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400 sm:py-4"
                    >
                        Explore Projects
                    </Link>

                    <a
                        href="#contact"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black sm:py-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

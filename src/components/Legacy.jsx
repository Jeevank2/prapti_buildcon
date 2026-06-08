import { motion } from "framer-motion";

const timeline = [
    {
        year: "2012",
        title: "Company Founded",
        desc: "Prapti Buildcon began its journey with a vision of creating quality homes."
    },
    {
        year: "2015",
        title: "Vrundavan Homes",
        desc: "Successfully delivered residential project in Alandi."
    },
    {
        year: "2018",
        title: "Vedant Residency",
        desc: "Expanded presence with premium residential development."
    },
    {
        year: "2020",
        title: "Indu Pride",
        desc: "Delivered modern residential living spaces."
    },
    {
        year: "2023",
        title: "Estella by Prapti Homes",
        desc: "Strengthened our portfolio in Hinjawadi."
    },
    {
        year: "2025",
        title: "Onella Tower",
        desc: "A landmark development showcasing modern architecture."
    }
];

export default function Legacy() {
    return (
        <section className="bg-[#111111] py-24 text-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-yellow-500 uppercase tracking-widest">
                        Our Legacy
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        A Journey of Growth
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="flex gap-6 mb-12"
                        >
                            <div className="min-w-[90px]">
                                <div className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl text-center">
                                    {item.year}
                                </div>
                            </div>

                            <div className="bg-black p-6 rounded-3xl flex-1 border border-yellow-500/10">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}
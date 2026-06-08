import { Building2, ShieldCheck, Clock3, Award } from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Quality Construction",
        desc: "Built with premium materials and modern construction standards.",
    },
    {
        icon: Clock3,
        title: "Timely Delivery",
        desc: "Committed to delivering projects on schedule.",
    },
    {
        icon: ShieldCheck,
        title: "Transparency",
        desc: "Clear communication and trustworthy processes.",
    },
    {
        icon: Award,
        title: "Customer Satisfaction",
        desc: "Focused on creating value and long-term relationships.",
    },
];

export default function About() {
    return (
        <section className="w-full bg-black py-16 text-white sm:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Left Side */}
                    <div className="text-left">
                        <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
                            About Us
                        </span>

                        <h2 className="mt-4 mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            Building Homes,
                            <br />
                            Creating Trust.
                        </h2>

                        <p className="max-w-2xl leading-relaxed text-gray-400">
                            Prapti Buildcon is committed to delivering quality residential
                            developments that combine modern design, strong construction,
                            and customer-focused planning. With multiple successful projects
                            across Pune, we continue to build spaces that families proudly
                            call home.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-yellow-500/10 bg-[#111111] p-5 text-left sm:p-6"
                                >
                                    <Icon className="h-10 w-10 text-yellow-500 mb-4" />

                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}

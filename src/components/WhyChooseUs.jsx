import {
    ShieldCheck,
    Building2,
    Clock3,
    BadgeCheck,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Quality Construction",
        desc: "Premium materials and superior construction standards."
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        desc: "Projects delivered with commitment and precision."
    },
    {
        icon: ShieldCheck,
        title: "Transparent Process",
        desc: "Clear communication and trustworthy business practices."
    },
    {
        icon: BadgeCheck,
        title: "Customer Satisfaction",
        desc: "Building long-term relationships through excellence."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#111111] py-24 text-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-yellow-500 uppercase tracking-widest">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        The Prapti Advantage
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-black p-8 rounded-3xl border border-white/5 hover:border-yellow-500/20 transition"
                            >
                                <Icon className="w-12 h-12 text-yellow-500 mb-5" />

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
import CountUpModule from "react-countup";
import { Building2, Users, Trophy, Landmark } from "lucide-react";

const CountUp = CountUpModule.default ?? CountUpModule;

const stats = [
    {
        icon: Building2,
        number: 6,
        suffix: "+",
        label: "Completed Projects",
    },
    {
        icon: Users,
        number: 500,
        suffix: "+",
        label: "Happy Families",
    },
    {
        icon: Trophy,
        number: 15,
        suffix: "+",
        label: "Years Experience",
    },
    {
        icon: Landmark,
        number: 5,
        suffix: "L+",
        label: "Sq. Ft Delivered",
    },
];

export default function Stats() {
    return (
        <section className="w-full bg-[#111111] py-14 sm:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-yellow-500/20 bg-black p-6 text-center transition hover:-translate-y-1 sm:p-8"
                            >
                                <Icon className="mx-auto mb-4 h-10 w-10 text-yellow-500" />

                                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                                    <CountUp
                                        end={item.number}
                                        duration={3}
                                    />
                                    {item.suffix}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

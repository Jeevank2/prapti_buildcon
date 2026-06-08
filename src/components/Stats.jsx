import CountUpModule from "react-countup";
import { Building2, Users, Clock3, Calendar } from "lucide-react";

const CountUp = CountUpModule.default ?? CountUpModule;

const stats = [
    {
        icon: Building2,
        number: 9,
        suffix: "",
        label: "Completed Projects",
    },
    {
        icon: Clock3,
        number: 1,
        suffix: "",
        label: "Ongoing Project",
    },
    {
        icon: Calendar,
        number: 2,
        suffix: "",
        label: "Upcoming Projects",
    },
    {
        icon: Users,
        number: 500,
        suffix: "+",
        label: "Happy Families",
    },
];

export default function Stats() {
    return (
        <section className="w-full bg-[#f8f9fa] dark:bg-[#111111] py-14 sm:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 dark:border-yellow-500/20 bg-white dark:bg-black p-6 text-center transition hover:-translate-y-1 sm:p-8 shadow-sm dark:shadow-none"
                            >
                                <Icon className="mx-auto mb-4 h-10 w-10 text-yellow-500" />

                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                                    <CountUp
                                        end={item.number}
                                        duration={3}
                                    />
                                    {item.suffix}
                                </h3>

                                <p className="text-slate-500 dark:text-gray-400 mt-2">
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

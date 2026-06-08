import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Deshmukh",
        location: "Pune",
        role: "Business Owner",
        rating: 5,
        text: "Purchasing a flat with Prapti Buildcon has been one of the best financial decisions of my life. Their construction quality is top-notch, and the team was transparent at every stage of the booking process."
    },
    {
        name: "Vikram Malhotra",
        location: "Hinjawadi",
        role: "Tech Consultant",
        rating: 5,
        text: "Exceptional professional standards! The project was completed exactly as per the promised timeline. The design of the flat maximizes natural light and ventilation beautifully."
    },
    {
        name: "Sunita Patil",
        location: "Alandi",
        role: "High School Principal",
        rating: 5,
        text: "As a homebuyer, trust was my primary concern. Prapti Buildcon exceeded all expectations. They handled all documentations professionally, making the entire journey smooth and stress-free."
    },
    {
        name: "Aisha Sharma",
        location: "Baner",
        role: "Product Manager",
        rating: 5,
        text: "The post-sales support team at Prapti is extremely cooperative. Even after taking possession, they were always prompt to address any minor maintenance requests. Highly recommended!"
    },
    {
        name: "Sachin Kulkarni",
        location: "Hinjawadi",
        role: "Lead Software Engineer",
        rating: 5,
        text: "Extremely happy with the layout and structure of our home. They use premium brand materials for fittings, and the attention to detail in the common areas is remarkable."
    },
    {
        name: "Rohan Mehta",
        location: "Kalyani Nagar",
        role: "Entrepreneur",
        rating: 5,
        text: "What sets Prapti Buildcon apart is their commitment to commitments. The club house and landscaped gardens were delivered exactly as shown in the initial brochures."
    },
    {
        name: "Priyadarshani Joshi",
        location: "Kothrud",
        role: "Interior Designer",
        rating: 5,
        text: "From an design perspective, the floor plans are highly optimized with zero space wastage. The plaster finish, plumbing layout, and electric conduits are executed to perfection."
    },
    {
        name: "Sneha Kapoor",
        location: "Viman Nagar",
        role: "Fashion Designer",
        rating: 4,
        text: "The project location is perfect with excellent connectivity to schools and markets. The community feels extremely safe, and the security systems installed are state-of-the-art."
    },
    {
        name: "Anand Shinde",
        location: "Wakad",
        role: "Government Officer",
        rating: 5,
        text: "A builder that truly understands the value of a client's hard-earned money. Clean titles, hassle-free bank loan approvals, and delivery of what was promised. A very trustworthy brand."
    },
    {
        name: "David D'Souza",
        location: "Koregaon Park",
        role: "Retd. Army Officer",
        rating: 5,
        text: "The construction standards are robust, and the site maintenance is immaculate. Their commitment to rainwater harvesting and solar panels reflects their eco-friendly approach."
    },
    {
        name: "Vaishali Gaikwad",
        location: "Hadapsar",
        role: "Banking Professional",
        rating: 5,
        text: "As a banker, I thoroughly checked their permissions and approvals before buying. Everything was clean and legal. The hand-over process was perfectly on time."
    },
    {
        name: "Ananya Iyer",
        location: "Wakad",
        role: "Data Scientist",
        rating: 5,
        text: "We were looking for a home that fits our budget but does not compromise on modern amenities. Prapti Buildcon delivered the perfect combination of premium quality and affordability."
    },
    {
        name: "Sanjay More",
        location: "Baner",
        role: "Chartered Accountant",
        rating: 5,
        text: "I analyzed the appreciation value of their projects and was thoroughly impressed. It's a great investment choice. Their transparency in cost breakup was highly professional."
    },
    {
        name: "Sameer Verma",
        location: "Hadapsar",
        role: "Operations Head",
        rating: 4,
        text: "Highly disciplined project managers. They kept sending monthly progress photographs and emails, keeping us updated throughout the construction phase."
    },
    {
        name: "Swati Sawant",
        location: "Ravet",
        role: "Homemaker",
        rating: 5,
        text: "The kids' play area and senior citizen seating sections are beautifully designed. Our family has transitioned so smoothly into this peaceful, vibrant community."
    },
    {
        name: "Priya Nair",
        location: "Baner",
        role: "Software Architect",
        rating: 5,
        text: "Superb engineering quality. The building structures are earthquake-resistant, and the open parking spaces are wide and well-allocated. A highly satisfying purchase."
    },
    {
        name: "Amit Kadam",
        location: "Chinchwad",
        role: "Mechanical Engineer",
        rating: 5,
        text: "Their execution and construction quality speak for themselves. Having visited the construction site multiple times, I was impressed by the safety standards and quality controls."
    },
    {
        name: "Kabir Khanna",
        location: "Kothrud",
        role: "Creative Director",
        rating: 5,
        text: "The architectural design is contemporary and sleek. The aesthetics of the main entrance lobby and common corridors feel like entering a luxury hotel."
    },
    {
        name: "Snehal Rane",
        location: "Kharadi",
        role: "Human Resources Manager",
        rating: 5,
        text: "Extremely transparent dealings. The customer relationship team was helpful in addressing all our customization queries for our modular kitchen."
    },
    {
        name: "Tanvi Shah",
        location: "Ravet",
        role: "Chartered Accountant",
        rating: 5,
        text: "The value appreciation of Prapti projects is strong. The pricing is competitive, and they offer a highly reliable experience. I highly recommend them to first-time buyers."
    }
];

export default function Testimonials() {
    const [showAll, setShowAll] = useState(false);

    // Show first 6 by default
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

    return (
        <section id="testimonials" className="bg-white dark:bg-black py-20 text-slate-900 dark:text-white sm:py-28 overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                        Testimonials
                    </span>
                    <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl tracking-tight">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Homeowners Say</span>
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-gray-400 text-lg">
                        Hear from over 500+ happy families who have trusted us to build their dream homes.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
                    {visibleTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-yellow-500/10 bg-slate-50 dark:bg-gradient-to-br dark:from-[#121212] dark:to-black p-6 md:p-8 transition-all duration-300 hover:border-[#c5a880]/30 dark:hover:border-yellow-500/30 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-xl hover:shadow-[#c5a880]/5 dark:hover:shadow-yellow-500/5 group"
                        >
                            <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-200 dark:text-yellow-500/10 group-hover:text-[#c5a880]/20 dark:group-hover:text-yellow-500/20 transition-colors pointer-events-none" />
                            
                            <div>
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < item.rating
                                                    ? "fill-yellow-500 text-yellow-500"
                                                    : "text-slate-300 dark:text-gray-600"
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-8 text-base">
                                    "{item.text}"
                                </p>
                            </div>

                            {/* Reviewer Details */}
                            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#c5a880] to-amber-600 dark:from-yellow-500 dark:to-amber-600 text-white dark:text-black font-extrabold flex items-center justify-center text-lg shadow-inner">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-slate-550 dark:text-gray-400 text-sm mt-1">
                                        {item.role}, {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Toggle Button */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => {
                            setShowAll(!showAll);
                            if (showAll) {
                                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-yellow-500 px-10 py-3 font-semibold text-black transition hover:bg-yellow-400 active:scale-95 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20"
                    >
                        {showAll ? "Show Less Reviews" : "Show All 20 Reviews"}
                    </button>
                </div>

            </div>
        </section>
    );
}

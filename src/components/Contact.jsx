export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-white dark:bg-black text-slate-900 dark:text-white py-24"
        >
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <div>
                        <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Let's Build Together
                        </h2>

                        <p className="text-slate-600 dark:text-gray-400 mb-8">
                            Get in touch with Prapti Buildcon for project inquiries and collaborations.
                        </p>

                        <div className="space-y-4 text-slate-700 dark:text-gray-300">
                            <p>📞 +91 XXXXX XXXXX</p>
                            <p>✉️ info@praptibuildcon.com</p>
                            <p>📍 Pune, Maharashtra</p>
                        </div>
                    </div>

                    {/* Right */}

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500/50"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500/50"
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500/50"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500/50"
                        />

                        <button
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition active:scale-95 shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20"
                        >
                            Send Inquiry
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}
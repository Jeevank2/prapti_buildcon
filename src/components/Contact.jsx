export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-black text-white py-24"
        >
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <div>
                        <h2 className="text-5xl font-bold mb-6">
                            Let's Build Together
                        </h2>

                        <p className="text-gray-400 mb-8">
                            Get in touch with Prapti Buildcon for project inquiries and collaborations.
                        </p>

                        <div className="space-y-4">
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
                            className="w-full p-4 rounded-xl bg-[#111111]"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-xl bg-[#111111]"
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-4 rounded-xl bg-[#111111]"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full p-4 rounded-xl bg-[#111111]"
                        />

                        <button
                            className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold"
                        >
                            Send Inquiry
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}
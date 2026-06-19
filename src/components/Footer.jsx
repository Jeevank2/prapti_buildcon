export default function Footer() {
    return (
        <footer className="bg-[#f8f9fa] dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10 text-slate-800 dark:text-white py-12">
            <div className="container mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-10">

                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-center">
                            <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="logo-dark h-16 w-auto object-contain mb-4 dark:brightness-110" />
                            <img src="/brand/prapti-logo-light.png" alt="PRAPTI BUILDCON Logo" className="logo-light h-16 w-auto object-contain mb-4 mix-blend-multiply" />

                            <p className="text-slate-500 dark:text-gray-400 text-center">
                                Building Trust. Creating Landmarks.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                            Quick Links
                        </h4>

                        <div className="space-y-2 text-slate-500 dark:text-gray-400">
                            <a href="/" className="block hover:text-[#c5a880] transition-colors cursor-pointer">Home</a>
                            <a href="/#projects" className="block hover:text-[#c5a880] transition-colors cursor-pointer">Projects</a>
                            <a href="/#about" className="block hover:text-[#c5a880] transition-colors cursor-pointer">About</a>
                            <a href="/#contact" className="block hover:text-[#c5a880] transition-colors cursor-pointer">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                            Contact
                        </h4>

                        <div className="space-y-2 text-slate-500 dark:text-gray-400">
                            <p>Pune, Maharashtra</p>
                            <p>+91 91453 11252</p>
                            <p>praptispaces@gmail.com</p>
                        </div>
                    </div>

                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 text-center text-slate-400 dark:text-gray-500">
                    © 2026 Prapti Buildcon. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

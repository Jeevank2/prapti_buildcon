export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 text-white py-12">
            <div className="container mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>
                        <h3 className="text-2xl font-bold text-yellow-500">
                            PRAPTI BUILDCON
                        </h3>

                        <p className="text-gray-400 mt-4">
                            Building Trust. Creating Landmarks.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">
                            Quick Links
                        </h4>

                        <div className="space-y-2 text-gray-400">
                            <p>Home</p>
                            <p>Projects</p>
                            <p>About</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">
                            Contact
                        </h4>

                        <div className="space-y-2 text-gray-400">
                            <p>Pune, Maharashtra</p>
                            <p>+91 XXXXX XXXXX</p>
                            <p>info@praptibuildcon.com</p>
                        </div>
                    </div>

                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-500">
                    © 2026 Prapti Buildcon. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

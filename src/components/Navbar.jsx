import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                <Link to="/" className="text-2xl font-bold text-yellow-500">
                    PRAPTI BUILDCON
                </Link>

                <div className="hidden md:flex gap-8 text-white">
                    <a href="#about">About</a>
                    <a href="#legacy">Legacy</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>

            {open && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="flex flex-col p-6 gap-4 text-white">
                        <a href="#about">About</a>
                        <a href="#legacy">Legacy</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
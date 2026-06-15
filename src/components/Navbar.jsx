import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

// Custom Social SVG Icons to avoid lucide-react version compatibility issues
function FacebookIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        // Default to dark mode since the original design is dark
        const saved = localStorage.getItem("theme");
        if (saved) {
            return saved === "dark";
        }
        return true; // default dark
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 text-slate-800 dark:text-white backdrop-blur-md border-b border-slate-200 dark:border-white/10 h-20 flex items-center">
                <div className="container mx-auto px-6 flex items-center justify-between w-full">

                    {/* Logo: Prapti Buildcon original image logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/brand/prapti-logo.png" alt="PRAPTI BUILDCON Logo" className="logo-dark h-14 sm:h-16 w-auto object-contain dark:brightness-110" />
                        <img src="/brand/prapti-logo-light.png" alt="PRAPTI BUILDCON Logo" className="logo-light h-14 sm:h-16 w-auto object-contain mix-blend-multiply" />
                    </Link>

                    {/* Menu links */}
                    <div className="hidden lg:flex gap-8 items-center text-xs font-semibold tracking-widest text-slate-600 dark:text-gray-300">
                        <a href="#about" className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">OUR STORY</a>
                        <a href="#projects" className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">PROJECTS</a>

                        <a href="#contact" className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">CONTACT</a>
                    </div>

                    {/* Right side: Theme Toggle (only visible in nav on md/lg) and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle Button (Navbar) */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 border border-slate-300 dark:border-[#c5a880]/30 rounded-full hover:bg-slate-100 dark:hover:bg-[#c5a880]/10 text-slate-800 dark:text-[#c5a880] transition-all flex items-center justify-center h-10 w-10"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden text-slate-800 dark:text-white p-2"
                        >
                            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 shadow-lg">
                        <div className="flex flex-col p-6 gap-4 text-sm font-semibold tracking-widest text-slate-600 dark:text-gray-300">
                            <a href="#about" onClick={() => setOpen(false)} className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">OUR STORY</a>
                            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">PROJECTS</a>

                            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors">CONTACT</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Floating Sidebar (Right Side - Matches second screenshot) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
                {/* Facebook */}
                <a href="#" className="text-slate-400 dark:text-gray-500 hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors" aria-label="Facebook">
                    <FacebookIcon className="h-5 w-5" />
                </a>
                {/* Instagram */}
                <a href="#" className="text-slate-400 dark:text-gray-500 hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors" aria-label="Instagram">
                    <InstagramIcon className="h-5 w-5" />
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-slate-400 dark:text-gray-500 hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors" aria-label="LinkedIn">
                    <LinkedinIcon className="h-5 w-5" />
                </a>
                
                {/* Divider Line */}
                <div className="h-16 w-[1px] bg-slate-300 dark:bg-yellow-500/20" />
                
                {/* Vertical Text */}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-gray-500 [writing-mode:vertical-lr] select-none">
                    FOLLOW US
                </span>
            </div>
        </>
    );
}
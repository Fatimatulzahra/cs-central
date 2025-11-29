import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LaptopMinimalCheck, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-emerald-600/95 to-green-500/90 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-lg border-b border-emerald-400/30 dark:border-gray-700">
      <nav className="flex justify-between items-center text-white py-7 px-8 md:px-32">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-playfair font-bold text-2xl tracking-wide hover:text-yellow-200 transition"
        >
          <LaptopMinimalCheck className="w-6 h-6" />
          CS Central
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          {["Home", "Events", "Resources"].map((page) => (
            <li key={page}>
              <Link
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="relative py-2 px-3 transition-all duration-300 hover:text-yellow-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          {dark ? (
            <Sun
              className="h-6 w-6 cursor-pointer text-yellow-300 hover:scale-110 transition-transform"
              onClick={() => setDark(false)}
            />
          ) : (
            <Moon
              className="h-6 w-6 cursor-pointer text-gray-100 hover:text-yellow-200 hover:scale-110 transition-transform"
              onClick={() => setDark(true)}
            />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden block text-white hover:text-yellow-200 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`xl:hidden flex flex-col items-center bg-white/95 dark:bg-gray-900/95 text-emerald-800 dark:text-gray-200 font-semibold shadow-md transition-all duration-500 overflow-hidden ${
          open ? "max-h-60 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        {["Home", "Events", "Resources"].map((page) => (
          <Link
            key={page}
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            className="w-full text-center py-3 hover:bg-emerald-100 rounded-md transition"
            onClick={() => setOpen(false)}
          >
            {page}
          </Link>
        ))}
      </div>
    </header>
  );
}

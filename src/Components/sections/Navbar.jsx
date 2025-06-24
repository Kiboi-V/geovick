import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            GIS<span className="text-blue-500">.vick</span>
          </a>

          <button
            className="md:hidden text-white text-3xl z-50 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-cyan-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-cyan-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-cyan-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-cyan-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
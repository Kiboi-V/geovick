import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 ${menuOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-90"
        onClick={() => setMenuOpen(false)}
      />
      
      {/* Menu */}
      <div 
        className="absolute top-0 right-0 h-full w-72 bg-gray-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pt-20">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>

          <nav className="flex flex-col space-y-6 mt-10">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium text-white hover:text-cyan-300 transition-colors px-4 py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
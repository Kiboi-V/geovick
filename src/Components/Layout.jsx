import { useState, useEffect } from 'react';
import { Navbar } from './sections/Navbar';
import { MobileMenu } from './MobileMenu';

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};
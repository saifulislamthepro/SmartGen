// app/components/Navbar.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        requestAnimationFrame(() => setMenuOpen(false));
      }
    }



    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[menuOpen]);

  if (!mounted) return null;
  return (
    <header className="navbar">
      <div className="navbar-container" ref={menuRef}>
        <Link href="/" className="navbar-logo">
          <img src="/Images/Logo.svg" alt="Smartgen" width={80} />
        </Link>

        <nav className={`web-navbar-links`}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="navbar-cta">Get a Quote</button>

        <div
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
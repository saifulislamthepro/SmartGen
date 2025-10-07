// app/components/Navbar.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropActive, setDrop] = useState(false);
  const [pdropActive, setpDrop] = useState(false);
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
          <div className="dropdown">
          <a href="/#services" className='dropbtn'>Services ▾</a>
            <div className="dropdownContent">
              <a href="/services/website-development-in-Bangladesh">Web Development</a>
              <a href="/services/graphics-and-brand-design">Graphics and Design</a>
              <a href="/services/promotional-video-making-in-bangladesh">Promotional Video</a>
              <a href="/services/seo-expert-in-bangladesh">SEO Expert</a>
              <a href="/services/expert-digital-marketing-in-Bangladesh">Social Media Manager</a>
              <a href="/services/mobile-app-development">Mobile App Development</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="/#packages" className='dropbtn'>Packages ▾</a>
            <div className="dropdownContent">
              <a href="/packages/startup">Starter Package</a>
              <a href="/packages/business">Business Package</a>
              <a href="/packages/premium">Premium Package</a>
              <a href="/packages/custom-package">Custom Package</a>
            </div>
          </div>
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
          <div className='m-dropdown' onClick={()=> {setDrop(!dropActive)}}>Services ▾</div>
            <div className={`m-dropdownContent ${dropActive ? 'active' : ''}`}>
              <a href="/services/website-development-in-Bangladesh">Web Development</a>
              <a href="/services/graphics-and-brand-design">Graphics and Design</a>
              <a href="/services/promotional-video-making-in-bangladesh">Promotional Video</a>
              <a href="/services/seo-expert-in-bangladesh">SEO Expert</a>
              <a href="/services/expert-digital-marketing-in-Bangladesh">Social Media Manager</a>
              <a href="/services/mobile-app-development">Mobile App Development</a>
            </div>
            
          <div className='m-dropdown' onClick={()=> {setpDrop(!pdropActive)}}>Packages ▾</div>
            <div className={`pm-dropdownContent ${pdropActive ? 'active' : ''}`}>
              <a href="/packages/startup">Starter Package</a>
              <a href="/packages/business">Business package</a>
              <a href="/packages/premium">Premium Package</a>
              <a href="/packages/custom-package">Custom Package</a>
            </div>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
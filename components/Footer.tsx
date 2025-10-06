// app/components/Footer.tsx
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>SmartGen Digital</h3>
          <p>Next-gen marketing solutions for Bangladeshi businesses. We craft digital experiences that convert and scale.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#packages">Packages</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: hello@smartgendigital.com</p>
          <p>Phone: +880-XXX-XXXXXXX</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SmartGen Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
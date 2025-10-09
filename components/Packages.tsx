// components/Packages.tsx
import { Package } from '../types/index';
import './Packages.css';

const packages: Package[] = [
  {
    name: "Startup",
    price: "৳15,000",
    features: ["Complete Graphics & Design Solutions",
    "Run Ads with Expert Digital Marketer",
    "Data Analysis for Quick Real Growth",
    "24/7 Customer Support"],
    highlight: "Popular"
  },
  {
    name: "Business",
    price: "৳30,000",
    features: ["Startup Package", "Video Editing( 10 Videos per month)",
      "Promotional Strategy by Experts", "Promotion with the Current Trends"
    ]
  },
  {
    name: "Premium",
    price: "৳50,000",
    features: ["Startup + Business Package", "Complete Website Solutions", "Promotional Content and Video Shoot", "Mobile Application Solution"],
    highlight: "Best Value"
  }
];

export default function Packages() {
  return (
    <div className="pack-page" id='packages'>
      <h2>Choose Any Package You Need</h2>
      <section className="packages" >
        <div className="home-package-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="home-package-card">
              <h3>{pkg.name.toUpperCase()}</h3>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href={`/packages/${pkg.name.toLowerCase()}`}>
                <button className="package-button">Start Now</button>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="custom-package">
        <h3 className='custom'>If You Need <strong>Custom Package</strong> within your budget?<br />create Custom Package</h3>
        <a href="/packages/custom-package"><button className='contact-btn'>Custom Order</button></a>
      </section>
    </div>
  );
}
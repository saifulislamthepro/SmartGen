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
    <div className="pack-page">
      <h2>Choose Any Package You Need</h2>
      <section className="packages">
        <div className="package-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <h3>{pkg.name.toUpperCase()}</h3>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="package-button">Start Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
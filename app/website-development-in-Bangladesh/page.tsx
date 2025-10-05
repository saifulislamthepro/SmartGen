import "./style.css";

export default function WebDev() {
    return(
        <section className="page">
            <section className='dev-hero '>
                <h1>Web Development Solutions for Bangladesh</h1>
                <p>SmartGen builds powerful, mobile-friendly websites and software for businesses across industries—from resorts to ecommerce. We turn your vision into digital reality.</p>
            </section>
            <div className="container">
                <section className="industries">
                <h2>Industries We Serve</h2>
                <ul>
                    <li><strong>🏨 Resort Booking Systems:</strong> Real-time availability, booking engines, payment integration.</li>
                    <li><strong>✈️ Travel Agencies:</strong> Tour listings, itinerary builders, multilingual support.</li>
                    <li><strong>🛒 Ecommerce Platforms:</strong> Custom storefronts, secure checkout, inventory management.</li>
                    <li><strong>🏘️ Real Estate Portals:</strong> Property listings, map integration, lead capture forms.</li>
                    <li><strong>📚 Education & NGOs:</strong> Course portals, donation systems, multilingual content.</li>
                </ul>
                </section>

                <section className="features">
                    <h2>Why Choose SmartGen?</h2>
                    <div className='grid'>
                        <div>
                        <h3>🔐 Secure & Scalable</h3>
                        <p>We use modern stacks (Next.js, PHP, MySQL) to build secure, scalable platforms tailored to your growth.</p>
                        </div>
                        <div>
                        <h3>📱 Mobile-First Design</h3>
                        <p>Every site is optimized for mobile, ensuring smooth UX across devices and screen sizes.</p>
                        </div>
                        <div>
                        <h3>🌐 SEO & Visibility</h3>
                        <p>We write clean code, fast-loading pages, and meta tags that help you rank on Google in Bangladesh and beyond.</p>
                        </div>
                        <div>
                        <h3>💬 Bilingual Content</h3>
                        <p>We support Bangla and English content to reach wider audiences and build trust locally.</p>
                        </div>
                    </div>
                </section>

                <section className="seo">
                    <h2>SEO-Optimized for Bangladesh</h2>
                    <p>Searching for <strong>web development services in Bangladesh</strong>? SmartGen is your trusted partner. We specialize in:</p>
                    <ul>
                        <li>Custom website development for Bangladeshi businesses</li>
                        <li>SEO-friendly ecommerce platforms in Bangladesh</li>
                        <li>Travel agency website design Bangladesh</li>
                        <li>Real estate website development Bangladesh</li>
                        <li>Affordable web development Bangladesh</li>
                    </ul>
                    <p>Our goal is simple: make sure your website ranks high, loads fast, and converts visitors into customers.</p>
                </section>
            </div>
                <section className="cta">
                    <h2>Let’s Build Your Website</h2>
                    <p>Whether you're launching a resort, travel agency, or online store, SmartGen is ready to build your digital foundation. Contact us today for a free consultation.</p>
                    <a href="/contact" className="button">Get Started</a>
                </section>
        </section>
    )
}
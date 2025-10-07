import Head from 'next/head';
import "../style.css";
export default function Packages() {
  return (
    <>
      <Head>
        <title>Digital Marketing Packages in Bangladesh | SmartGen</title>
        <meta name="description" content="Explore SmartGen's digital marketing packages for businesses in Bangladesh. From social media to content creation, we offer scalable solutions for every industry." />
      </Head>
      <main className="packages-page">
        <section className="packages-hero">
          <h1>SmartGen Digital Marketing Packages</h1>
          <p>Save time, grow faster, and scale smarter. Our packages are designed for Bangladeshi businesses ready to thrive online.</p>
        </section>

          <h2>The Ultimate Full Stack Plan</h2>

        <section className="packages-list">

          <div className="package-card">
            <h3>Premium</h3>
            <p className="price">৳ 64,800 / Month</p>
            <ul>
              <li>All Platforms + Website Maintenance</li>
              <li>16 Graphics, 8 Reels, 4 Explainer Videos</li>
              <li>40 Copywriting Pieces, 30 Story Shares</li>
              <li>Up to 50 Ad Campaigns</li>
              <li>2 Online Meetings + Full R&D Support</li>
            </ul>
            <button className='buy-btn'>Buy Now</button>
          </div>
        </section>

        <section className="packages-custom">
          <h2>Need a Custom Plan?</h2>
          <p>We build tailored packages for resorts, travel agencies, ecommerce, real estate, and more. Let’s design a solution that fits your business goals.</p>
          <a href="/packages/custom-package" className="btn-orange">Customize Your Package</a>
        </section>

        <section className="packages-seo">
          <h2>Why SmartGen?</h2>
          <ul>
            <li>✅ Trusted digital marketing agency in Bangladesh</li>
            <li>✅ SEO-friendly content and strategy</li>
            <li>✅ Full-stack support: content, ads, analytics</li>
            <li>✅ Industry-specific solutions for Bangladeshi businesses</li>
            <li>✅ Transparent reporting and dedicated support</li>
          </ul>
          <p>Rank higher on Google with SmartGen’s proven strategies. Whether you're searching for <strong>digital marketing packages in Bangladesh</strong> or <strong>social media management for ecommerce</strong>, we’ve got you covered.</p>
        </section>
      </main>
    </>
  );
}
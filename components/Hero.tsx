
import './Hero.css';

export default function Hero() {

  return(
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <img src="/Images/My_image.png" alt="Saiful" width={250}/>
        <h1>SmartGen Digital</h1>
        <span className="slogan">Build for Next-Gen Businesses</span>
        <p>SmartGen Digital empowers Bangladeshi brands with futuristic marketing, design, and web solutions.</p>
        <button className="hero-button">Explore Services</button>
      </div>
    </div>
    <div className="hero-grid">
        <a href='/web-solutions' className="hero-card">
          <img src="/Images/website.jpg" alt="Web Solutions" />
          <h2>Premium Web Solutions</h2>
        </a>
        <a href='/web-solutions'className="hero-card">
          <img src="/Images/ads.jpg" alt="Web Solutions" />
          <h2>Expert Digital Marketing</h2>
        </a>
        <a href='/web-solutions'className="hero-card">
          <img src="/Images/promotion.jpg" alt="Web Solutions" />
          <h2>Promotional Video Shoot</h2>
        </a>
        <a href='/web-solutions'className="hero-card">
          <img src="/Images/VideoEditing.jpg" alt="Web Solutions" />
          <h2>Professional Video Edit</h2>
        </a>
        <a href='/web-solutions'className="hero-card">
          <img src="/Images/MotionGraphics.jpg" alt="Web Solutions" />
          <h2>Motion And Graphics</h2>
        </a>
        <a href='/web-solutions'className="hero-card">
          <img src="/Images/MobileApp.jpg" alt="Web Solutions" />
          <h2>Mobile App Solutions</h2>
        </a>
    </div>
  </section>
  )
}
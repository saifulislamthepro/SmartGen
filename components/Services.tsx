import "./Services.css"

export default function Services () {

return( 
    <section className="service-page">
        <h2>Our Professional Services</h2>
        <div className="service-container"> 
            <div className="hero-grid">
                <a href='/website-development-in-Bangladesh' className="hero-card">
                <img src="/Images/website.jpg" alt="Web Solutions" />
                <h2>Premium Web Solutions</h2>
                </a>
                <a href='/expert-digital-marketing-in-Bangladesh'className="hero-card">
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
        </div>   
    </section>   
    )
}
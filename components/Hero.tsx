
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
  </section>
  )
}
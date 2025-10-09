
import './Hero.css';
import Navbar from './Navbar';

export default function Hero() {

  return(
  <section className="hero">
    <div className="container">
      <div className="contact-header">
        <div className="left">
          <div className='phone'>
            <i className="fi fi-sr-phone-call"></i>
            <p>+88016488981296</p>
          </div>
          <div className="email">
            <i className="fi fi-sr-envelope"></i>
            <p>info@smartgen.com</p>
          </div>
        </div>
        <div className="right">
          <i className="fi fi-brands-instagram"></i>
          <i className="fi fi-brands-facebook"></i>
          <i className="fi fi-brands-whatsapp"></i>
          <i className="fi fi-brands-youtube"></i>
        </div>
      </div>
    </div>
    <div id='static-nav'>
      <Navbar/>
    </div>
    <div className="container">
      <div className="hero-main">
        <div className="hero-left">
          <h1>SmartGen Digital <br /> <span className='seo-title'> Best Digital Marketing Agency In Bangladesh</span></h1>
          <span className="slogan">Build for Next-Gen Businesses</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere asperiores amet neque temporibus, error non hic ut minima dolor iusto quo, atque corrupti voluptatem velit consequuntur, nesciunt vero rem! SmartGen Digital empowers Bangladeshi brands with futuristic marketing, design, and web solutions.</p>
          <a href="#services"><button className="hero-button">Explore Services</button></a>
        </div>
        <div className="hero-right">
          <img src="/Images/My_image.png" alt="Saiful" width={250}/>
        </div>
      </div>
    </div>
  </section>
  )
}
import Hero from "@/components/Hero";
import CTA from "@/components/Cta";
import Packages from "@/components/Packages";
import ServiceCard from "@/components/ServiceCard";
import Services from "@/components/Services";

export default function HomePage() {



  return(
    <div>
      <Hero/>
      <h2>Our services</h2>
      <Services/>
      <h2>Our Packages</h2>
      <Packages/>
      <CTA/>
    </div>
  )
}
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Testimonial from "./components/Testimonial";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMe />
      <MyPortfolio />
      <Service />
      <Resume />
      <Testimonial />
      <ContactMe />
      <Footer />
    </div>
  );
}

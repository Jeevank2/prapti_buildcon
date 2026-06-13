import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <ProjectsSection />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

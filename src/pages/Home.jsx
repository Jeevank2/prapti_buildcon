import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Legacy from "../components/Legacy";
import ProjectsSection from "../components/ProjectsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Legacy />
      <ProjectsSection />
      <WhyChooseUs />
      <Footer />

    </>
  );
}

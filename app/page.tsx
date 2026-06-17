import Navbar from "./components/layout/Navbar";
import PageWrapper from "./components/layout/PageWrapper";
import BackgroundGlow from "./components/animations/BackgroundGlow";
import CursorGlow from "./components/animations/CursorGlow";
import Experience from "./components/sections/Experience";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundGlow />
      <CursorGlow />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />

      <Footer />
    </PageWrapper>
  );
}
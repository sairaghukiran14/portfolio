
import { About } from "./Components/About";
import { CTA } from "./Components/CTA";
import { Experience } from "./Components/Experience";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Nav } from "./Components/Nav";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { useScrollReveal } from "./Hooks/useScrollReveal";
function App() {
  useScrollReveal();
  return (
    <>
      {/* <style>{CSS}</style> */}
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}

export default App
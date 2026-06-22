import { useRef } from "react";
import { Background } from "./Components/Background";
import { Cursor } from "./Components/Cursor";
import { Nav } from "./Components/Nav";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/Projects";
import { CTA } from "./Components/CTA";
import { Footer } from "./Components/Footer";
import { useSiteMotion } from "./Hooks/useSiteMotion";

function App() {
  const root = useRef(null);
  useSiteMotion(root);

  return (
    <div ref={root}>
      <Background />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

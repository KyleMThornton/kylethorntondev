import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrollToTheTop from "./components/ScrollToTheTop";

export default function Home() {
  return (
    <main className="">
      <ScrollToTheTop />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

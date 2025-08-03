import BackgroundGrid from "@/app/components/BackgroundGrid";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <BackgroundGrid>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </BackgroundGrid>
    </main>
  );
}

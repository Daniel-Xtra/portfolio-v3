import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Perspective } from "@/components/Perspective";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500">
      <Header />
      <Hero />
      <Perspective>
        <Experience />
      </Perspective>
      <Perspective>
        <Projects />
      </Perspective>
      <Footer />
    </main>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Index() {
  return (
    <main className="mt-24 flex w-full flex-col items-center px-4 sm:mt-0 sm:px-6">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
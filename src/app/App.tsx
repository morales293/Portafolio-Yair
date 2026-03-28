import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a", color: "#f0f0f0" }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0d1117",
            color: "#f0f0f0",
            border: "1px solid rgba(59,130,246,0.2)",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
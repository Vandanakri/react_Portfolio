// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useEffect } from "react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <Articles />
      <Skills />
      <Education />
      <Contact />
      <footer className="p-2 text-center">
        <h6 className="mb-3">Created By Vandana Kumari</h6>
      </footer>
    </div>
  );
};

export default App;

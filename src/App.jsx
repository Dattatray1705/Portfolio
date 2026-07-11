import "./App.css";

import Background from "./component/Background/Background";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Experience from "./component/Experience/Experience";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <>
      <Background />

      <Navbar />


      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
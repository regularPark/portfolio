import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Intro />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export default App;

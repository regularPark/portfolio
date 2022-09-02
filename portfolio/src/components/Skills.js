import React from "react";

const usableLanguage = ["JavaScript", "CSS", "HTML", "Kotlin", "C++", "Python"];

const setUsableLanguage = () => {
  return usableLanguage.map((lang) => <li key={lang}>{lang}</li>);
};

/** 모듈화할 것 */
const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>{setUsableLanguage()}</ul>
    </div>
  );
};

export default Skills;

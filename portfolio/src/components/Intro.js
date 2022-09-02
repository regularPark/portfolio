import React from "react";

import "./Intro.css";

const Intro = () => {
  let Introduction = <h2>박정규</h2>;

  return (
    <div className="intro">
      <h2>Introduction</h2>
      <div>{Introduction}</div>
    </div>
  );
};

export default Intro;

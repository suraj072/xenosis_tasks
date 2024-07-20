// src/components/About.js
import React from "react";
import { useSpring, animated } from "react-spring";

const About = () => {
  const slideIn = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    delay: 300,
  });

  return (
    <animated.div style={slideIn}>
      <h1>About Me</h1>
      <p>Here's some information about me...</p>
    </animated.div>
  );
};

export default About;

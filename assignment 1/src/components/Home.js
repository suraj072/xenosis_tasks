// src/components/Home.js
import React from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.div style={fadeIn} className="container text-center mt-5">
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects, skills, and more about me.</p>
    </animated.div>
  );
};

export default Home;

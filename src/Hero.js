import React from "react";
import "./hero.css";
import path from "./Videos/Moon.mp4";

function Hero() {
  return (
    <div className="hero_container">
      <video src={path} autoPlay loop muted />
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Hobbies</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="greet">
        <h1>Hello!</h1>
        <p>I am Parth</p>
      </div>
    </div>
  );
}

export default Hero;

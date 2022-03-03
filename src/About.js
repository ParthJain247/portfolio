import React from "react";
import "./about.css";
import img from "./Images/profile.jpg";
function About() {
  return (
    <div className="about">
      <div style={{ textAlign: "center" }}>
        <h2>About Me</h2>
      </div>

      <div className="about-flex">
        <img className="profile" src={img} alt="profile" />
        <div className="about-text">
          <h3>I'm Parth and I am a Web Developer</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries,
          </p>
          <button>
            <a href="https://www.youtube.com/watch?v=I2UBjN5ER4s&t=3158s">
              Get Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

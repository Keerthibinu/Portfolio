import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import profileImage from '../../assets/profile.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="content">
        <div className="introText">
          <div className="typewriter">
            <h1>I'm Keerthi Binu</h1>
          </div>
          <span className="grey">
            &lt; Web Developer /&gt;
            <br></br>
            Exploring the dynamic domains of web development and machine learning, driven by curiosity and enthusiasm.
          </span>
          <div className="btnGroup">
            <a href={require("../../assets/Keerthi_Binu_resume.pdf")} download="Keerthi_Binu.pdf">
              <button className="btn">Resume</button>
            </a>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}><button className="btn">Skills</button></Link>
            <Link to="journey" spy={true} smooth={true} offset={-100} duration={500}><button className="btn">Works</button></Link>
            
          </div>
        </div>
        <img className="introImage" src={profileImage} alt="Keerthi Binu" />
      </div>
    </section>
  );
};

export default Intro;
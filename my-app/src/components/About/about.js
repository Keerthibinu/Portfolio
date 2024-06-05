import React from 'react';
import './about.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="skillTitle">About Me</h2>
            <div className="column-about">
                <div className="desc-container">
                    <p>
                        Enthusiastic and self-motivated Computer Science graduate with strong skills in programming and software development environments. Passionately working to enhance my expertise in machine learning and web development. Looking forward to a fulfilling career that promotes both professional and personal growth.
                    </p>
                </div>
                <div className="accordion-container">
                    <div className="accordion">
                        <div className="accordion-header" tabIndex="0">Professional Experience</div>
                        <div className="accordion-content">
                            <p>Web Developer Intern at CIASL Academy</p>
                            <p>Software Developer Intern at Phenomtec Solutions</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-header" tabIndex="0">What I'm good at..</div>
                        <div className="accordion-content">
                            <p>Python</p>
                            <p>HTML & CSS</p>
                            <p>Machine Learning</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-header" tabIndex="0">Projects</div>
                        <div className="accordion-content">
                            <p>Text Extraction and Recognition from Certificates</p>
                            <p>Early Stage Detection of Autism Spectrum Disorder</p>
                            <p>Event Management Website</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-header" tabIndex="0">Other than coding, I'm also interested in...</div>
                        <div className="accordion-content">
                            <p>Web Surfing</p>
                            <p>Playing badminton</p>
                            <p>Photography</p>
                            <p>Traveling</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-header" tabIndex="0">My Academic Qualifications..</div>
                        <div className="accordion-content">
                            <p>Bachelor of Technology in Computer Science Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

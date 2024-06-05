// Journey.js
import React from 'react';
import './journey.css';

const Journey = () => {
  return (
    <section id="journey">
      <h2 className="worksTitle">Recent Works</h2>
      <div className="panel-container">
        <div className="panel">
          <div className="panel-header">
            <h2>Text Extraction and Recognition</h2>
            <p>Automated data extraction from certificate using machine learning.</p>
          </div>
          <div className="panel-content">
            <p>PaddleOCR converts scanned images into text, then an annotation process pinpoints crucial details like names, dates, and awards. This labeled data trains a Named Entity Recognition (NER) model to categorize information within the extracted text. By automating data capture and eliminating manual errors, the project ensures reliable, structured information storage for easy retrieval.</p>
            <a href="https://gitlab.com/Keerthiii098/text-extractor-and-verifier">Know more about it</a>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Autism Detection</h2>
            <p>Early stage detection of Autism Spectrum Disorder(ASD).</p>
          </div>
          <div className="panel-content">
            <p>Implemented machine learning and deep learning techniques to analyze child behavior patterns, aiming to identify potential signs of ASD and facilitate early intervention. Implemented an interactive ReactJS website where users can upload an image and complete a questionnaire to receive a preliminary ASD risk assessment.</p>
            <a href="https://github.com/Keerthibinu/Autism_Detection_Website">Know more about it</a>
          </div>
      </div>

      <div className="panel-container">
          <div className="panel">
          <div className="panel-header">
            <h2>Web Developer Intern</h2>
            <p>Internal Website for Cochin International Aviation Services Ltd.</p>
          </div>
          <div className="panel-content">
            <p>Collaborated with a team to develop an internal site for CIASL Academy, utilizing  JavaScript, HTML, CSS and MySQL. The site's features and functionalities were tailored to meet the specificneeds of CIASL Academy. It served as a platform to demonstrate my programming skills and ability to work collaboratively</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Journey;

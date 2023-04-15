import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import photo from '../../assets/Jeffrey.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={photo} alt="Jeffrey" style={{ width: '700px' }}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h3>Experience</h3>
              <small>Bank of America                    - Lead Developer</small>
              <h4>   </h4>
              <small>New Jersey Institute of Technology - Teaching Assistant</small>
              <h4></h4>              
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
          As a recent graduate with a Master's degree in Data Science from New Jersey Institute of Technology and experience leading a team to develop prediction systems for Bank of America, I am skilled in building machine learning models, manipulating databases, and applying statistical algorithms. My experience includes designing and deploying a power outage prediction system using SQL and XGBoost Regressor, coordinating study events as a teaching assistant on a deep learning course, and achieving top 10% performance ratings in a Kaggle competition using CNN models. With 5+ years of Python experience, 2+ years of SQL and R experience, 1+ year of Power BI and AWS experience, I am well-versed in various frameworks and tools, including Scikit-learn, TensorFlow, Tableau, and Flask.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

import "./intro.css";

import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
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
              <BiTargetLock className="about__icon" />
              <h5>Objective</h5>
              <small>As a recent graduate with a strong background in Data Science and Statistics, I am actively seeking opportunities to apply my skills and contribute to a data-driven organization as a data analyst.</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <h4> Bank of America</h4>
              <small> Lead Developer </small>
              <h4>   </h4>  
              <h4> New Jersey Institute of Technology</h4>
              <small> Teaching Assistant </small>         
            </article>
          </div>
          <h4>   </h4>
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <h4> New Jersey Institute of Technology</h4>
              <small> M.S. in Data Science (GPA: 3.75 / 4.0 ) </small>
              <h4>   </h4>
              <h4>Fu Jen Catholic University</h4>
              <small> B.S. in Statistics and Information Science  </small>
              <h4></h4>
            </article> 
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
            <h4>20+ Completed Projects, including</h4>
            <small>AI training models, Prediction Models</small>
            <h4>   </h4>
            <small>Web Applications, SQL Server databases</small>
            <h4>   </h4>
            <small>Data visualization dashboards</small>                         
            </article>
            
          </div>
          <p>
          I am proficient in developing machine learning models to analyze complex business problems, manipulating databases to create efficient relational schemas, applying statistical algorithms to enhance deep learning, and creating informative dashboards for data visualization
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

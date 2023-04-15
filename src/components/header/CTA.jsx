import React from 'react';
import CV from '../../assets/Jeffrey Hsieh Resume.pdf';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="https://www.linkedin.com/in/jeffrey-hsieh-chialin/" target="_blank" rel="noreferrer" ><BsLinkedin size={45}/>
      </a>
      <a href= "https://github.com/ChiaLinz" target="_blank" rel="noreferrer" ><FaGithub size={45}/>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;

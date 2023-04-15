import "./portfolio.css";

import IMG1 from "../../assets/Weather & Power Outage Project.jpg";
import IMG2 from "../../assets/Space X Falcon 9 Landing Prediction.jpg";
import IMG3 from "../../assets/Atari Transfer Learning Project.jpg";
import IMG4 from "../../assets/Transaction Website.jpg";
import IMG5 from "../../assets/Amazon Food Reviews Sentiment Analysis Project.jpg";
import IMG6 from "../../assets/Digital Recognizer Project.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Prediction of Power Outage impact on Customer Service",
      img: IMG1,
      description:
        "Designed and deployed a power outage prediction system for Bank of America that uses XGBoost to forecast the impact of weather conditions on financial customer service.",
      technologies: "Python | Flask | Database | Random Forest Regressor | XGBoost Regressor",
      link: "https://drive.google.com/file/d/18xvPbv5Sno18_5NbIi9CKYMCmz8Vlq-o/view?usp=share_link",
      github: "https://github.com/ChiaLinz/Prediction-of-Power-Outage-impact-on-Customer-Service",
    },
    {
      id: 2,
      title: "Space X Falcon 9 Landing Prediction",
      img: IMG2,
      description:
        "Determined the cost of a Falcon 9 rocket launch by predicting the success of its first stage landing, using data analysis and the decision tree algorithm.", 
      technologies: "Python | API | BeautifulSoup | SQL | Dash",
      link: "https://drive.google.com/file/d/1eZZIYy1Zyp1J6qWUNO9GLKvh2QCO1zG_/view?usp=share_link",
      github: "https://github.com/ChiaLinz/IBM_Data_Science_Professional_Certificate/blob/main/10.%20Applied%20Data%20Science%20Capstone/readme.md#hands-on-project---space-x-falcon-9-landing-prediction",
    },    
    {
      id: 3,
      title: "Autonomous game agent using Reinforcement Learning",
      img: IMG3,
      description: "Reduced training time for OpenAI models and improved performance in breakout and space-invader games through pre-trained model fine-tuning.",
      technologies: "Python | OpenAI | Gym | Transfer Learning | Reinforcement Learning",
      link: "https://drive.google.com/file/d/1ajSDny1U8XBl6PcnTOR0quGKyTFDkNhL/view?usp=share_link",
      github: "https://github.com/ChiaLinz/atari-transfer-learning",
    },
    {
      id: 4,
      title: "Transaction Website",
      img: IMG4,
      description:
        "Managed transactions with a reliable website, including a personalized dashboard, flexible configuration options, 25+ unit test, and easy registration, login, and CSV upload.",
      technologies: "Python | Html | CSS | Docker | Heroku",
      link: "https://github.com/ChiaLinz/IS601_Personal_Website/blob/master/Demo/Demo.md",
      github: "https://github.com/ChiaLinz/IS601_Personal_Website",
    },
    {
      id: 5,
      title: "Amazon Food Reviews Sentiment Analysis",
      img: IMG5,
      description:
        "Utilized NLP to analyze a dataset of 500K+ reviews, providing user insights, ratings, and plain text reviews for a comprehensive understanding of customer sentiment.",
      technologies: "Python | Pandas | Numpy | Seaborn | NLTK | VADER | Transformers",
      link: "https://drive.google.com/file/d/1tgkq5h9RBlMDT0mpmTEnek14_rG3DNSc/view?usp=share_link",
      github: "https://github.com/ChiaLinz/Amazon-Food-Reviews-Sentiment-Analysis",
    },
    {
      id: 6,
      title: "Digital Recognizer",
      img: IMG6,
      description:
        "Achieved top 10% ranking in Kaggle's Digit-Recognizer competition, identifying handwritten digits from thousands of images using deep learning models.",
      technologies: "Python | Kaggle | TensorFlow | Keras | SVM | KNN",
      link: "https://github.com/ChiaLinz/Digit-Recognizer/blob/main/digit-recognizer.ipynb",
      github: "https://github.com/ChiaLinz/Digit-Recognizer",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>              
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

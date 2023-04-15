import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <h3 style={{ textAlign: 'center' }}>Programming Languages</h3>
        <div className="experience__content" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <article className="experience__details">
            <h4>PythonL</h4>
          </article>
          <article className="experience__details">
            <h4>SQL</h4>
          </article>
          <article className="experience__details">
            <h4>R</h4>
          </article>
          <article className="experience__details">
            <h4>Java</h4>
          </article>
          <article className="experience__details">
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <h4>React.JS</h4>
          </article>
          <article className="experience__details">
            <h4>CSS</h4>
          </article>
        </div>
        <h3 style={{ textAlign: 'center' }}>Frameworks & Tools</h3>
        <div className="experience__content" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <article className="experience__details">
            <h4>Power BI</h4>
          </article>
          <article className="experience__details">
            <h4>Tableau</h4>
          </article>
          <article className="experience__details">
            <h4>Jupyter Notebook</h4>
          </article>
          <article className="experience__details">
            <h4>Scikit-learn</h4>
          </article>
          <article className="experience__details">
            <h4>TensorFlow</h4>
          </article>
          <article className="experience__details">
            <h4>Pytorch</h4>
          </article>
          <article className="experience__details">
            <h4>Flask</h4>
          </article>
          <article className="experience__details">
            <h4>Git</h4>
          </article>
        </div>
        <h3 style={{ textAlign: 'center' }}>Database & Data Warehouses</h3>
        <div className="experience__content" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <article className="experience__details">
            <h4>MS SQL Server</h4>
          </article>
          <article className="experience__details">
            <h4>Hive</h4>
          </article>
          <article className="experience__details">
            <h4>Snowflake</h4>
          </article>
          <article className="experience__details">
            <h4>Spark</h4>
          </article>
          <article className="experience__details">
            <h4>MongoDB</h4>
          </article>
          <article className="experience__details">
            <h4>IBM DB2</h4>
          </article>
          <article className="experience__details">
            <h4>AWS</h4>
          </article>
          <article className="experience__details">
            <h4>Azure</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience;

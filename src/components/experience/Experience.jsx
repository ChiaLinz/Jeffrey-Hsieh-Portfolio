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
            <h4>Python ( 4+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>SQL ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>R ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>HTML ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>CSS ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Java ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>JavaScript ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>React.JS ( 1+ year)</h4>
          </article>
        </div>
        <h3 style={{ textAlign: 'center' }}>Frameworks & Tools</h3>
        <div className="experience__content" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <article className="experience__details">
            <h4>Jupyter Notebook ( 4+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Scikit-learn ( 4+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Git ( 3+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>TensorFlow ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Pytorch ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Flask ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Power BI ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>Tableau ( 1+ year)</h4>
          </article>
        </div>
        <h3 style={{ textAlign: 'center' }}>Database & Data Warehouses</h3>
        <div className="experience__content" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <article className="experience__details">
            <h4>MS SQL Server ( 2+ years)</h4>
          </article>
          <article className="experience__details">
            <h4>Hive ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>Snowflake ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>Spark ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>MongoDB ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>IBM DB2 ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>AWS ( 1+ year)</h4>
          </article>
          <article className="experience__details">
            <h4>Azure ( 1+ year)</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience;

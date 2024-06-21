import React from 'react';
import { Helmet } from 'react-helmet';
import './Skills.css';
import Navbar from '../navbar';

const Skills = () => {
  return (
    <>
      <Helmet>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Custom CSS */}
        <link rel="stylesheet" href="data.css" />
        {/* Bootstrap CSS */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Helmet>

      <div className="skills-section container mt-5">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-js-square skill-icon"></i>
              <h3>JavaScript</h3>
              <p>
                JavaScript is a versatile language used for web development,
                allowing dynamic content and interactive features.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-html5 skill-icon"></i>
              <h3>HTML5 & CSS</h3>
              <p>
                HTML5 and CSS are the fundamental technologies for building and
                designing web pages.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fas fa-database skill-icon"></i>
              <h3>MongoDB</h3>
              <p>
                MongoDB is a NoSQL database known for its high performance,
                scalability, and flexibility.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fas fa-database skill-icon"></i>
              <h3>SQLite</h3>
              <p>
                SQLite is a lightweight database engine commonly used in mobile
                applications and small projects.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-node-js skill-icon"></i>
              <h3>Node.js</h3>
              <p>
                Node.js is a runtime environment that allows server-side
                scripting using JavaScript.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-python skill-icon"></i>
              <h3>Python</h3>
              <p>
                Python is a high-level programming language known for its
                readability and wide range of applications.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-react skill-icon"></i>
              <h3>React.js</h3>
              <p>
                React.js is a JavaScript library for building user interfaces,
                maintained by Facebook.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fab fa-bootstrap skill-icon"></i>
              <h3>Bootstrap</h3>
              <p>
                Bootstrap is a front-end framework for developing responsive and
                mobile-first websites.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="skill-container glass-effect">
              <i className="fas fa-th-large skill-icon"></i>
              <h3>Grid System</h3>
              <p>
                CSS Grid is a powerful tool for creating flexible and responsive
                web layouts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

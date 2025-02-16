import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Gautam Patidar. I'm a passionate developer with a love for building impactful web applications. My expertise includes:</p>
          <ul className="skills-list">
            <li>Frontend Development (React, Vue, HTML, CSS)</li>
            <li>Backend Development (Node.js, Express)</li>
            <li>UI/UX Design</li>
            <li>Database Management (MongoDB, SQL)</li>
          </ul>
          <button className="resume-button" onClick={() => window.location.href = '/assets/resume.pdf'}>View Resume</button>
        </div>
      </div>
    </section>
  );
};

export default About;
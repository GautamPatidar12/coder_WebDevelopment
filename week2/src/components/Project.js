import React from 'react';
import Data from "./projects.json"

const Project = () => {
  return (
    <>
      <div className="Base">
        {
          Data.map(data => (
            <section key={data.id} id="projects" className="projects">
              <h2 className="projects-title">{data.name}</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h3 className="project-title">{data.ProjectNum}</h3>
                  <p className="project-description">{data.description}</p>
                  <div className="project-links">
                    <a href={data.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
      </div>
    </>
  );
};

export default Project;
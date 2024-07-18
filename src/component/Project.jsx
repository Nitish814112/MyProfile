import React from 'react';
import './project.css';

const Project = () => {
  return (
    <div className="project-body">
      <div className="partition-line"></div>
      <h1 className="text-center mb-4">PROJECTS</h1>

      
      <div className="line-modifier">
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line2"></div>
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="sticker">Waiting</div>
      <div className="project-card">
      <div className="header">
      <h4>Todo-App</h4>
      </div>
      <div className="img"></div>
      <div className="des">
          <a
            className="btn btn-primary"
            href="https://bmdrx1.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>

      </div>
      <div className="sticker1">Waiting</div>
      <div className="project-card1">
      <div className="header">
        <h4>Weather-Card</h4>
      </div>
      <div className="img-1"></div>
      <div className="des">
          <a
            className="btn btn-primary"
            href="https://ggoi51.csb.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>


    </div>
  );
}

export default Project;

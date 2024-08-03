import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contactCard">
      <div className="partition-line"></div>
      <h1>CONTACT</h1>
      <div className="contactContainer">
        <button className='btn btn-danger'>
          <a href="mailto:n814112@gmail.com">
            <span><i className="fas fa-envelope"></i></span> Email Me
          </a>
        </button>

        <button className='btn btn-primary'>
          <a href="https://www.linkedin.com/in/nitish814112" target="_blank" rel="noopener noreferrer">
           <span><i className="fab fa-linkedin"></i></span>  LinkedIn
          </a>
        </button>

        <button className='btn btn-secondary'>
          <a href="https://github.com/Nitish814112" target="_blank" rel="noopener noreferrer">
            <span><i className="fab fa-github"></i></span> GitHub
          </a>
        </button>

        <button className='btn btn-dark'>
          <a href="https://twitter.com/NitishK41778192" target="_blank" rel="noopener noreferrer">
            <span><i className="fab fa-twitter"></i></span> Twitter
          </a>
        </button>
        
      </div>
    </div>
  );
}

export default Contact;

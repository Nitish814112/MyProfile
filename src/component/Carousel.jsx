import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carousel.css';

const Carousel = () => {
  return (
    <>
      <div className='heit carousel slide' id="carouselExampleIndicators" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img1 d-block w-100"></div>
            <div className="carousel-caption">
              <h1 className="greeting">Nitish👋</h1>
              <h2 className="animation-text">Web Developer</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img2 d-block w-100"></div>
            <div className="carousel-caption">
              <h1 className="greeting">Nitish👋</h1>
              <h2 className="animation-text">Web Developer</h2>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img3 d-block w-100"></div>
            <div className="carousel-caption">
              <h1 className="greeting">Nitish👋</h1>
              <h2 className="animation-text">Web Developer</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;

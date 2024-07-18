import React from "react";
import "./achievement.css";
import cpImg from "./images/cp.png";
import cpcImg from "./images/cpcoding.png";
import cpquiz from "./images/cpquiz.png";
import dsaImg from "./images/dsa.png";
import dsacImg from "./images/dsacoding.png";
import dsaquiz from "./images/dsaquiz.png";
import html from "./images/HTML.png";
import dweb from "./images/DWebdesign.png";
import jsf from "./images/Jsfoundation.png";
import search from "./images/salgo.png";
import btrack from "./images/rbacktracking.png";
import tail from "./images/Tailwindcss.png";

const Achievements = () => {
  return (
    <>
      <div className="contents">
        <div className="partition-line"></div>
        <div className="heading">
          <h1>ACHIEVEMENTS</h1>
        </div>
        <div className="display-certi">
          <div
            className="card border border-danger mb-3 "
            style={{ height: "200px", width: "18rem", margin: "35px" }}
          >
            <img src={cpImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodyss">
              <p className="card-text">Computer-Programming</p>
            </div>
          </div>

          <div
            className="card border border-danger mb-3"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={cpcImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Coding-Challenges</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={cpquiz} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Quiz Assessment</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsaImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Design & Analysis Algo</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsacImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">DSA coding challenge</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsaquiz} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Dsa Quiz-Assessment</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={search} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Sorting & Searching Algo</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={btrack} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Recursion & Back Tracking</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={html} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">HTML & CSS</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dweb} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Dynamic Web Design</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={jsf} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">JavaScript Foundation</p>
            </div>
          </div>
          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={tail} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">TailWind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;

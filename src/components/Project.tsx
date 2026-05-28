import React from "react";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img
            src={mock09}
            className="zoom"
            alt="Food Recipe Platform"
            width="100%"
          />
          <h2>Food Recipe Platform</h2>
          <p>
            Developed scalable RESTful APIs using Java Spring Boot following
            SOLID architecture principles. Improved backend efficiency through
            optimized SQL queries and cloud-backed storage workflows, with high
            test coverage using JUnit.
          </p>
          <p className="project-stack">Java · Spring Boot · SQL · AWS</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/srithin19/smart-parking"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock08}
              className="zoom"
              alt="Smart Parking System"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/srithin19/smart-parking"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Smart Parking System</h2>
          </a>
          <p>
            Parking management system built with React.js frontend and Java
            backend using MySQL. Efficiently manages parking spaces for cars and
            bikes across multiple floors.
          </p>
          <p className="project-stack">React.js · JavaScript · Java · MySQL</p>
        </div>
        <div className="project">
          <a
            href="https://ieeexplore.ieee.org/document/10687749"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock10}
              className="zoom"
              alt="Image Hiding Strategy"
              width="100%"
            />
          </a>
          <a
            href="https://ieeexplore.ieee.org/document/10687749"
            target="_blank"
            rel="noreferrer"
          >
            <h2>An Image Hiding Strategy Based on Neural Networks</h2>
          </a>
          <p>
            Combines steganography, cryptography, and deep neural networks to
            hide an image within another image. Uses Prep, Hiding, and Reveal
            layers trained on natural photos to conceal and recover images.
          </p>
          <p className="project-stack">
            Machine Learning · Python · DES · Neural Networks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

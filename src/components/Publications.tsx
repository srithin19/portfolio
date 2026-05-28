import React from "react";
import springerLogo from "../assets/images/springer-logo.svg";
import ieeeLogo from "../assets/images/ieee-logo.svg";
import "../assets/styles/Publications.scss";

const publications = [
  {
    title: "Neural Style Transfer Using PyTorch",
    venue: "Springer — Lecture Notes in Networks and Systems",
    year: "2024",
    url: "https://link.springer.com/chapter/10.1007/978-981-96-0139-4_18",
    logo: springerLogo,
    logoAlt: "Springer",
    logoBg: "#ffffff",
  },
  {
    title: "An Image Hiding Strategy Based on Neural Networks",
    venue: "IEEE Xplore — International Conference",
    year: "2024",
    url: "https://ieeexplore.ieee.org/document/10687749",
    logo: ieeeLogo,
    logoAlt: "IEEE",
    logoBg: "#1a1a2e",
  },
];

function Publications() {
  return (
    <div className="publications-container" id="publications">
      <h1>Research Publications</h1>
      <div className="publications-list">
        {publications.map((pub) => (
          <a
            className="publication-row"
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="publication-logo-panel"
              style={{ backgroundColor: pub.logoBg }}
            >
              <img src={pub.logo} alt={pub.logoAlt} />
            </div>
            <div className="publication-info">
              <h2>{pub.title}</h2>
              <p className="publication-venue">{pub.venue}</p>
              <span className="publication-year-tag">{pub.year}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Publications;

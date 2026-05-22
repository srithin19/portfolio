import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/srithin19" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/srithin-chillamcharla/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        Designed & built by{" "}
        <a
          href="https://github.com/srithin19/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Srithin Chillamcharla
        </a>
        <br />© 2026 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

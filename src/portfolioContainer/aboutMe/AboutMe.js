import React from "react";
import './AboutMe.css'
export default function AboutMe() {
  return (
    <div style={{marginTop:'12px'}}
      class="about-me-container screen-container fade-in"
      id="AboutMe"
    >
      <div class="about-me-parent">
        <div class="heading-container">
          <div class="screen-heading">
            <span>About Me</span>
          </div>
          <div class="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div class="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div class="about-me-card">
          <div class="about-me-profile"></div>
          <div class="about-me-details">
            <span class="about-me-description">
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency.
                          </span>
            <div class="about-me-highlights">
              <div class="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>React Js</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Redux for State Mnanagement</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
            <div class="about-me-options">
              <button class="btn primary-btn"> Hire Me </button>
              <a href="karima.pdf" download="cv maaoui karima.pdf">
                <button class="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Hobby() {
  return (
    <div>
      <div
        class="resume-container screen-container fade-in"
        id="Resume"
        style={{ opacity: "5", transform: "translateY(1px)" }}
      >
        <div class="resume-content">
          <div class="heading-container">
            <div class="screen-heading">
              <span>Hobbies</span>
            </div>
            <div class="heading-seperator">
              <div class="seperator-line"></div>
              <div class="seperator-blob">
                <div></div>
              </div>
            </div>
            <br />
            <div class="">
              <div class="resume-heading">
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  Listening to Music
                </span>
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                 Reading  Books
                </span>
                <div class="resume-main-heading">
                  <div class="heading-bullet"></div>
                </div>
                <div class="heading-bullet"></div>
                <span
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                 Watching TV
                </span>
 
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

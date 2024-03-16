import React from "react";
import "./AboutMe.css";
import subramanyaImage from "../assets/images/Subramanya_Image.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <h2>About Me</h2>
        <img src={subramanyaImage} alt="Subramanya" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

import React, { useEffect } from "react";
import "./styles/about.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-content">
      <div className="about-header">ABOUT US</div>
      <div className="about-content-container">
        <div className="about-content-text">
          We are a distributor of Genshin Impact Merchandise. Except we are not
          of course because this is a fake site made as a project from The Odin
          Project Curriculum. If we were, we would say that we offer the best
          and most high quality Genshin impact Merchandise of which all the
          materials are of the highest quality, ethically sourced and are good
          for the environment! We are also Carbon Negative. Every purchase we
          plant a tree. You are a good person if you buy from here.
        </div>
        {/* <img src="/shopping-cart-OdinProject/images/stickers/diluc_sticker_1.png" alt="diluc mixing cocktails" /> */}
      </div>
      <div className="made-by">
        <div>
          This site was made as a project from The Odin Project curriculum.
        </div>
        <div>
          {" "}
          <a href="https://github.com/NenoPr" className="about-github_link">
            {" "}
            <img
              src="/shopping-cart-OdinProject/GitHub-Mark-32px.png"
              alt="GitHub Logo"
            />{" "}
            Made by NenoPr{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useState } from "react";
import "./hero.css";
import heroImage from "/assets/magic.png";
import { TextFade } from "./Components/TextFade";
import HeroStars from "./HeroStars"; // <- import the star component

const Hero = () => {
  const [offset, setOffset] = useState(0);

  return (
    <section className="hero" id="home">
      {/* Floating 4-point stars in the background */}
<TextFade direction="up" className="hero__content hero__text-wrapper">
  <h4>
    <a href="/about" className="hero-link">
      Hi, I’m Alyssa
    </a>
  </h4>

  <p>
    I’m <a href="#projects" className="highlight">designing</a> for and dreaming <br/>
    of a world that’s a little more <a href="/playground" className="highlight">playful</a>.
  </p>
</TextFade>

      <TextFade direction="up" className="hero__image-wrapper">
        <img
          src={heroImage}
          alt="Alyssa on a bike"
          className="hero__image"
        />
      </TextFade>
    </section>
    
  );
};

export default Hero;

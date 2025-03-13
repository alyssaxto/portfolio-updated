import { useEffect, useState } from "react";
import "./hero.css";
import heroImage from "/assets/hero.png";
import { TextFade } from "./Components/TextFade"; // Ensure this import is correct

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<section className="hero" id="home">
  <TextFade direction="up" className="hero__content">
    <h4>Hey, I’m Alyssa!</h4>
    <p>
      I’m a <a href="#projects" className="highlight">designer</a> and <a href="/playground" span className="highlight">artist</a> making
      playful and purposeful products. After hours, I like to create
      <span className="highlight"> youtube </span> videos!
    </p>
    <p>Incoming ux designer @ <a href="https://www.bp.com" className="greenhighlight" target="_blank" rel="noopener noreferrer">bp</a></p>
  </TextFade>

  <img
    src={heroImage}
    alt="Alyssa on a bike"
    className="hero__image"
    style={{
      transform: `translateX(${Math.min(0, -offset * 0.1)}px)`, // Moves the image left as you scroll
    }}
  />
</section>

  );
};

export default Hero;

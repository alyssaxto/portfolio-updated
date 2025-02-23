import { useEffect, useState } from "react";
import "./index.css";
import heroImage from "../assets/hero.png";

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
    <section className="hero">
      <div className="hero__content">
        <h1>Hey, I’m Alyssa!</h1>
        <p>
          I’m a <span className="highlight">designer</span> and <span className="highlight">artist</span> making
          playful and purposeful products. After hours, I like to create
          <span className="highlight"> youtube </span> videos!
        </p>
        <p>Incoming UX designer @ <span className="company">bp</span></p>
      </div>
      <img
        src={heroImage}
        alt="Alyssa on a bike"
        className="hero__image"
        style={{ transform: `translateX(${Math.max(0, 300 - offset)}px)` }}
      />
    </section>
  );
};

export default Hero;
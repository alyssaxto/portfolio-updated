import { useEffect, useState } from "react";
import "./hero.css";
import heroImage from "/assets/hero.png";
import { TextFade } from "./Components/TextFade";

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
        <h4>Hey, I’m Alyssa</h4>
<p>
  I’m <a href="#projects" className="highlight">designing</a> for, building towards, and dreaming of a world that’s (a little more) <a href="/playground" className="highlight">playful</a>
</p>

        <p>
          UX Designer @{" "}
          <a
            href="https://www.bp.com"
            className="greenhighlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            bp
          </a>
        </p>
      </TextFade>

      <img
        src={heroImage}
        alt="Alyssa on a bike"
        className="hero__image"
        style={{
          transform: `translateX(${Math.min(0, -offset * 0.1)}px)`,
        }}
      />

      <TextFade direction="up" className="hero__content">
        <p style={{ marginTop: "4rem" }}>P.S. Click around the screen <span className="no-break">(˶ᵔ ᵕ ᵔ˶)ᯓ★</span></p>
      </TextFade>
    </section>
  );
};

export default Hero;

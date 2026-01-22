import { useEffect, useState } from "react";
import "./hero.css";
import heroImage from "/assets/magic.gif";
import { TextFade } from "./Components/TextFade";
import magicleft from "/assets/magicleft.gif";
import magicright from "/assets/magicright.gif";



const Hero = () => {
  const [offset, setOffset] = useState(0);



  return (
<section className="hero" id="home">
<TextFade direction="up" className="hero__content hero__text-wrapper">
  <img
    src={magicleft}
    alt="Magic left"
    className="hero__magic-overlay hero__magic-left"
  />
  <img
    src={magicright}
    alt="Magic right"
    className="hero__magic-overlay hero__magic-right"
  />

  <h4>Hey, I’m Alyssa</h4>
  <p>
    I’m <a href="#projects" className="highlight">designing</a> for and dreaming <br/>
    of a world that’s a little more <a href="/playground" className="highlight">playful</a>.
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
    <p style={{ marginTop: "4rem" }}>
      P.S. Click around the screen <span className="no-break">(˶ᵔ ᵕ ᵔ˶)ᯓ★</span>
    </p>
  </TextFade>
</section>


  );
};

export default Hero;

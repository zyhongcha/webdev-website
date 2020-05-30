import React, { useEffect, useRef } from 'react';
import { TweenLite, TimelineLite, Power2 } from "gsap";
import backgroundImage from "../images/DotGrid.png";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Banner = () => {
/*
  let backgroundReveal = useRef(null);
  let backgroundImagery = CSSRulePlugin.getRule(".hero:before");
  let headlineText = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    
    const fadeInText = element => {
    TweenLite.from(element, 1, { y: 60, stagger: {  each: 0.2}});
    }
    fadeInText(".fadeIn")

    tl.to(backgroundReveal, 0, { css: { visibility: "visible" } })
    .to(backgroundImagery, 1, { height: "0%", delay: 2, ease: Power2.easeOut })
  }, []);
*/
  return (

    <div className="hero" >
      <div className="hero__wrapper">
        <div className="hero__main-text">
          <h1 className="fadeIn" style={{ lineHeight: "2.7rem", color: "#434343" }}>Create,</h1>
          <h1 className="fadeIn"><mark>Experience</mark>;</h1>
          <p className="fadeIn">Hello, my name is Zyhong Liu. I build websites with a fiery passion, my goal is to create websites with a unique user experience combined in a good website layout. <a href="#">Learn more about me.</a></p>
        </div>
        <div className="hero__cta">
          <div className="button fadeIn" id="btn-contact">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              Contact Me
            </div>
          <div className="button fadeIn" id="btn-portfolio">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              Portfolio
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
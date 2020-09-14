import React, { useEffect, useRef } from 'react';
import { TweenLite, TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Banner = () => {

  let tl = new TimelineLite();

  useEffect(() => {

    tl.to(".display.intro", 1, { opacity: 1, stagger: 1 })
      .to(".display", 1, { opacity: 1 })
  }, []);

  return (

    <div className="hero" >
      <div className="hero__wrapper">
        <div className="hero__main-text">
          <h1 className="display intro" style={{ lineHeight: "2.7rem", color: "#434343" }}>Create,</h1>
          <h1 className="display intro"><mark>Experience</mark>;</h1>
          <p className="display">Hello, my name is Zyhong Liu. I build websites with a fiery passion, my goal is to create websites with a unique user experience combined in a good website layout. <a href="#">Learn more about me.</a></p>
        </div>
        <div className="hero__cta display">
          <div className="button" id="btn-contact">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              Contact
            </div>
          <div className="button" id="btn-portfolio">
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
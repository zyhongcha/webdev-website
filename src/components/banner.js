import React, { useEffect } from 'react';
import { TimelineLite } from "gsap";

const Banner = () => {

  let tl = new TimelineLite();

  useEffect(() => {

    tl.to(".display.intro", 1, { opacity: 1, stagger: 1 })
      .to(".display", 1, { opacity: 1 })
  }, [tl]);

  return (

    <div className="hero" >
      <div className="hero__wrapper">
        <div className="hero__main-text">
          <h1 className="display intro" style={{ lineHeight: "2.7rem", color: "#434343" }}>Create,</h1>
          <h1 className="display intro">Experience;</h1>
          <p className="display">Hello, my name is Zyhong Liu. I am a Web Developer, Freelancer, Asian Food Promoter and Tea & Sake Specialist. I strive for connecting intercultural relationships. Scroll down to learn more about me.</p>
        </div>

        <div className="hero__cta display">
        <a href="#form">
          <div className="button" id="btn-contact">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              Contact me now
            </div>
            </a>
          <a href="#sake-academy">
          <div className="button" id="btn-portfolio">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              See my works
            </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
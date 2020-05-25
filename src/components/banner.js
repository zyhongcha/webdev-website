import React from 'react';

const Banner = () => {

  return (

    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__main-text">
          <h1 style={{ lineHeight: "1rem", color: "#434343" }}>Create,</h1>
          <h1 style={{ textIndent: "2.5rem" }}><mark>Experience</mark>;</h1>
          <p>Hello, my name is Zyhong Liu. I build websites with a fiery passion, my goal is to create websites with a unique user experience combined in a good website layout. <a href="#">Learn more about me.</a></p>
        </div>
        <div className="hero__cta">
          {/*
          <a className="btn">
            <span>
              <span>
                <span>Contact Me</span>
              </span>
            </span>
          </a>
          */}
          <div className="button" id="btn-contact">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
              Contact Me
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
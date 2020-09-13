import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { TweenLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useIntersection } from "use-intersection";

function Works({ element, triggerRefOne }) {

  const triggerRef = useRef(null);


  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "200px 0px 0px 0px",
    threshold: 1,
    once: true
  });


  //Intersection for Fade-in Animation
  useEffect(() => {

    if (intersection) {
      TweenLite.to("#sake-academy-description .fadeIn", 1, {
        opacity: 1,
        ease: "power4.out",
        y: 0,
        stagger: 0.3,
      }
      )
    }
  }, [intersection]);


  const data = useStaticQuery(graphql`
query {
  sakeOne: file(relativePath: { eq: "Portfolio-SAKE-Mac.png" }) {
    childImageSharp {
      fluid(maxWidth: 630, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sakeTwo: file(relativePath: { eq: "Portfolio-Sake-phone-3.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sakeThree: file(relativePath: { eq: "Portfolio-Sake-phone-1.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sakeFour: file(relativePath: { eq: "Portfolio-Sake-phone-2.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`)

  return (
    <section id="sake-academy" ref={triggerRefOne}>
      <div className="works-container">
        <div className="works-container__inner-wrapper" ref={element}>
          <div className="works-container__showcase">
            <div className="works-container__showcase-display" ref={triggerRef}>
              <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeOne.childImageSharp.fluid} /></a>
            </div>
            <div className="works-container__showcase-description" id="sake-academy-description" >
              <div className="works-container__showcase-description-text">
                <h4 className="fadeIn">Schooling Website</h4>
                <h2 className="fadeIn">Sake &amp; Shochu Academy Europe</h2>
                <p className="fadeIn">This is a schooling website
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
                <div className="works-container__showcase-details fadeIn">
                  <h3 >Details</h3>
                  <p>por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
                </div>
              </div>
              <div className="works-container__showcase-details-mobileshots">
                <div className="works-container__mobile-1 fadeIn">
                  <a href="https://sake-academy.eu/#willkommen-section" target="_blank"><Img fluid={data.sakeTwo.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-2 fadeIn">
                  <a href="https://sake-academy.eu/?kursangebot=sake-diploma-kurs" target="_blank"><Img fluid={data.sakeThree.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-3 fadeIn">
                  <a href="https://sake-academy.eu/anmeldeformular-kurse/" target="_blank"><Img fluid={data.sakeFour.childImageSharp.fluid} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;
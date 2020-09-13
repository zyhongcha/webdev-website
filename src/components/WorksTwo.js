import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { TweenLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useIntersection } from "use-intersection";

export function WorksTwo({ newWorkElement, triggerRefTwo }) {

  const triggerRef = useRef(null);

  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
    once: true
  });

  //Intersection for Fade-in Animation
  useEffect(() => {
    if (intersection) {
      TweenLite.to("#zyhongcha .fadeIn", 1, {
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
  zyhongchaOne: file(relativePath: { eq: "Portfolio-Zyhongcha-Mac.png" }) {
    childImageSharp {
      fluid(maxWidth: 630, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  zyhongchaTwo: file(relativePath: { eq: "zyhongcha-singlepost-1.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  zyhongchaThree: file(relativePath: { eq: "zyhongcha-blogpost-3.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  zyhongchaFour: file(relativePath: { eq: "zyhongcha-newsletter-2.png" }) {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  } 
}`)

  return (
    <section id="zyhongcha" ref={triggerRefTwo}>
      <div className="works-container">
        <div className="works-container__inner-wrapper" >
          <div className="works-container__showcase" ref={newWorkElement} >
            <div className="works-container__showcase-display" ref={triggerRef}>
              <a href="https://zyhongcha.com" target="_blank"><Img fluid={data.zyhongchaOne.childImageSharp.fluid} /></a>
            </div>
            <div className="works-container__showcase-description" id="zyhongcha-description" >
              <div className="works-container__showcase-description-text">

                <h4 className="fadeIn">Scientific Tea Blog</h4>
                <h2 className="fadeIn">Zyhong's Journal of Tea</h2>
                <p className="fadeIn">This is a tea website
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
                <div className="works-container__showcase-details">
                  <div className="works-container__showcase-details-text fadeIn" >
                    <h3>Details</h3>
                    <p>por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
                  </div>
                </div>
              </div>
              <div className="works-container__showcase-details-mobileshots">
                <div className="works-container__mobile-1 fadeIn" >
                  <a href="https://zyhongcha.com/teascience/tea-research-news-april-2020-the-taste-of-shincha/" target="_blank"><Img fluid={data.zyhongchaTwo.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-2 fadeIn">
                  <a href="https://zyhongcha.com/teascience/ice-brew-a-little-sip-of-the-sweet-dew-of-heaven/" target="_blank"><Img fluid={data.zyhongchaThree.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-3 fadeIn">
                  <a href="https://zyhongcha.com" target="_blank"><Img fluid={data.zyhongchaFour.childImageSharp.fluid} /></a></div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section>
  )
}

export default WorksTwo;
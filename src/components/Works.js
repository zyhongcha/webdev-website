import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { TweenLite } from "gsap";
import { useIntersection } from "use-intersection";

function Works({ element }) {

  const triggerRef = useRef(null);
  const [tween, setTween] = useState();


  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    once:true
  });


  //Intersection for Fade-in Animation
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setTween(
        TweenLite.to(".fadeIn", 1, {
          opacity: 1,
          y: 60,
          ease: "power4.out",
          stagger: 0.2,
        })
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
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sakeThree: file(relativePath: { eq: "Portfolio-Sake-phone-1.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sakeFour: file(relativePath: { eq: "Portfolio-Sake-phone-2.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`)

  return (
    <section id="sake-academy" >
      <div className="works-container">
        <div className="works-container__inner-wrapper" ref={element}>
          <div className="works-container__showcase">
            <div className="works-container__showcase-display">
              <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeOne.childImageSharp.fluid} /></a>
            </div>
            <div className="works-container__showcase-description" id="sake-academy-description" ref={triggerRef}>
              <h4 className="fadeIn">Schooling Website</h4>
              <h2 className="fadeIn">Sake &amp; Shochu Academy Europe</h2>
              <span className="divider"></span>
              <p className="fadeIn">This is a schooling website
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

              <div className="works-container__showcase-details">
                <div className="works-container__showcase-details-text">
                  <h3 className="fadeIn">Details</h3>
                  <p className="fadeIn">por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
                </div>
              </div>
              <div className="works-container__showcase-details-mobileshots">
                <div className="works-container__mobile-1 fadeIn">
                  <a href="https://sake-academy.eu/#willkommen-section" target="_blank"><Img fixed={data.sakeTwo.childImageSharp.fixed} /></a></div>
                <div className="works-container__mobile-2 fadeIn">
                  <a href="https://sake-academy.eu/?kursangebot=sake-diploma-kurs" target="_blank"><Img fixed={data.sakeThree.childImageSharp.fixed} /></a></div>
                <div className="works-container__mobile-3 fadeIn">
                  <a href="https://sake-academy.eu/anmeldeformular-kurse/" target="_blank"><Img fixed={data.sakeFour.childImageSharp.fixed} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;
import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
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
                <p className="fadeIn">
                  Information about tea is widely available on the internet; and so are the styles to approach different tea subjects: Be it historical, philosophical, spiritual or educative. Despite the variety, one approach is rather scarce: The scientifc one.
<br /><br />
This journal aims to provide knowledge about tea for the general tea enthusiast around the world via passionate personal stories, but also via science-based articles. Many of the prevalent tea myths or established practices will be tackled and tried to be answered in an evidence-based way. #TeaScience articles will regularly delve deep into the subjects, referencing several data bases and scientific papers from research institutes.
<br /><br />
Therefore, for the unexperienced tea drinker some articles may be hard to understand without some prior knowledge in tea terminology, however despite the scientific approach, generally articles will be written to be understood even for the layman. Although you will read some “hard science”, do not expect here true rigorous academic writing and methods though. This journal is rather relaxed, but insightful and not to be compared to true scientific journals.
<br /><br />
This project kickstarted my pursuit in web development. The design follows modern web design, which is quite rare for tea websites throughout the internet. Tea may be a 2000-year-old drink, but it does not mean, that its presentation has to be kept "traditional" or conservative.
          </p>
                <div className="works-container__showcase-details">
                  <div className="works-container__showcase-details-text fadeIn" >
                    <h3>Technical Details</h3>
                    <p>CMS: Wordpress, Frontend built with Elementor Page Builder.</p>
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
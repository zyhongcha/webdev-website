import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { IconContext } from 'react-icons';


function WorksTwo( {newWorkElement }) {


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
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zyhongchaThree: file(relativePath: { eq: "zyhongcha-blogpost-3.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zyhongchaFour: file(relativePath: { eq: "zyhongcha-newsletter-2.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
  }`)

  return (
    <section id="zyhongcha" >
      <div className="works-container">
        <div className="works-container__inner-wrapper">
          <div className="works-container__showcase" ref={newWorkElement}>
            <div className="works-container__showcase-display">
              <a href="https://zyhongcha.com" target="_blank"><Img fluid={data.zyhongchaOne.childImageSharp.fluid} /></a>
            </div>
            <div className="works-container__showcase-description" id="zyhongcha-description">
              <h4>Scientific Tea Blog</h4>
              <h2>Zyhong's Journal of Tea</h2>
              <span className="divider"></span>
              <p>This is a tea website
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
              <div className="works-container__showcase-details">
                <div className="works-container__showcase-details-text">
                  <h3>Details</h3>
                  <p>por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
                </div>
              </div>

              <div className="works-container__showcase-details-mobileshots">
                <div className="works-container__mobile-1">
                  <a href="https://zyhongcha.com/teascience/tea-research-news-april-2020-the-taste-of-shincha/" target="_blank"><Img fixed={data.zyhongchaTwo.childImageSharp.fixed} /></a></div>
                <div className="works-container__mobile-2">
                  <a href="https://zyhongcha.com/teascience/ice-brew-a-little-sip-of-the-sweet-dew-of-heaven/" target="_blank"><Img fixed={data.zyhongchaThree.childImageSharp.fixed} /></a></div>
                <div className="works-container__mobile-3">
                  <a href="https://zyhongcha.com" target="_blank"><Img fixed={data.zyhongchaFour.childImageSharp.fixed} /></a></div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </section>
  )
}

export default WorksTwo;
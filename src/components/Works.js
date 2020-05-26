import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

function Works() {

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
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sakeThree: file(relativePath: { eq: "Portfolio-Sake-phone-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sakeFour: file(relativePath: { eq: "Portfolio-Sake-phone-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo2: file(relativePath: { eq: "Portfolio-Zyhongcha-Mac.png" }) {
      childImageSharp {
        fluid(maxWidth: 630, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }`)

  return (
    <div className="works-container">
      <div className="works-container__inner-wrapper">
        <div id="sake-academy" className="works-container__showcase">
          <div className="works-container__showcase-display">
            <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeOne.childImageSharp.fluid} /></a>
          </div>
          <div className="works-container__showcase-description">
            <h4>Schooling Website</h4>
            <h2>Sake &amp; Shochu Academy Europe</h2>
            <span className="divider"></span>
            <p>This is a schooling website
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="works-container__showcase-details">
              <div className="works-container__showcase-details-text">
                <h3>Details</h3>
                <p>por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e</p>
              </div>
              <div className="works-container__showcase-details-mobileshots">
                <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeTwo.childImageSharp.fluid} /></a></div>
              <div className="works-container__showcase-details-mobileshots">
                <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeThree.childImageSharp.fluid} /></a></div>
              <div className="works-container__showcase-details-mobileshots">
                <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.sakeFour.childImageSharp.fluid} /></a></div>
            </div>
          </div>
        </div>

        <div id="zyhongcha" className="works-container__showcase">
          <div className="works-container__showcase-description">
            <h4>Scientific Tea Blog</h4>
            <h2>Zyhong's Journal of Tea</h2>
            <hr />
            <span className="divider"></span>
            <p>This is a tea blog website
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="works-container__showcase-display">
            <a href="https://zyhongcha.com" target="_blank"><Img fluid={data.photo2.childImageSharp.fluid} /></a>
          </div>
        </div>

      </div >
    </div >
  )
}

export default Works;
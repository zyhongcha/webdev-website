import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

function Works() {

  const data = useStaticQuery(graphql`
  query {
    photo: file(relativePath: { eq: "Portfolio-SAKE.png" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo2: file(relativePath: { eq: "Portfolio-Zyhongcha-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }`)

  return (
    <div className="works-container">
      <div className="works-container__inner-wrapper">
        <h1>WORKS;</h1>
        <div id="sake-academy" className="works-container__showcase">
          <div className="works-container__showcase-description">
            <h4>Schooling Website</h4>
            <h2>Sake &amp; Shochu Academy Europe</h2>
            <hr />
            <span className="divider"></span>
            <p>This is a schooling website</p>
          </div>
          <div className="works-container__showcase-display">
            <a href="https://sake-academy.eu" target="_blank"><Img fluid={data.photo.childImageSharp.fluid} /></a>
          </div>
        </div>

        <div id="zyhongcha" className="works-container__showcase">
          <div className="works-container__showcase-description">
            <h4>Scientific Tea Blog</h4>
            <h2>Zyhong's Journal of Tea</h2>
            <hr />
            <span className="divider"></span>
            <p>This is a tea blog website</p>
          </div>
          <div className="works-container__showcase-display">
            <a href="https://zyhongcha.com" target="_blank"><Img fluid={data.photo2.childImageSharp.fluid} /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Works;
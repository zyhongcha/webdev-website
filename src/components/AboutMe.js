import Img from 'gatsby-image';
import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useIntersection } from "use-intersection";
import { TweenLite } from "gsap";
import ContactForm from "./contactform";

export const AboutMe = ({ aboutMeElement, triggerRefThree }) => {
  const triggerRef = useRef(null);

  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    once: true
  });
  useEffect(() => {
    if (intersection) {
      TweenLite.to("#about .fadeIn", 1, {
        opacity: 1,
        ease: "power4.out",
        y: 0,
        stagger: 0.1,
      }
      )
    }
  }, [intersection]);



  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: { id: { eq: "about-me" }}) {
      html
    }

  image: file(relativePath: { eq: "Zyhong-bw.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 512, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
  `)

  return (
  <section id="about" className="about-me__container" ref={triggerRefThree}>
  <div className="about-me__container-wrapper">
    <div className="about-me__container-inner-wrapper" ref={aboutMeElement}>
      <div className="about-me__container-inner-wrapper-text fadeIn" ref={triggerRef}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />



      <div id="portrait" className="fadeIn"><Img fluid={data.image.childImageSharp.fluid} />


      </div>
      <div className="about-me__container-inner-wrapper-skills fadeIn">
        <h1>Skills</h1>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, TypeScript, React, Gatsby, Next</li>
          <li>Backend: PHP, MySQL, MongoDB, Nginx, Apache, Express</li>
          <li>CMS: Wordpress Development, Magento, WooCommerce, Strapi</li>
          <li>Data Analysis: Python, Tableau, Power BI</li>
          <li>Cloud: AWS S3, EC2</li>
          <li>SEO: Google Analytics, Google Ads, Matomo, SendinBlue </li>
          <li>Design: Photoshop, Lightroom, Illustrator</li>
          <br/>
          <br/>
          <li>Fluent in: English, German, Japanese, Cantonese</li>
          <li>Sake Enthusiast (WSET Level 3 Award)</li>
          <li>Tea tutor and tea science writer</li>
        </ul>
      </div>
    <ContactForm/>

    </div>
    </div>

  </section>
  )


  }

export default AboutMe;

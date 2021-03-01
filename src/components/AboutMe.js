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
      <ContactForm/>



      <div id="portrait" className="fadeIn"><Img fluid={data.image.childImageSharp.fluid} />


      </div>
      <div className="about-me__container-inner-wrapper-skills fadeIn">
        <h1>Skills</h1>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, TypeScript, React, Gatsby, Next</li>
          <li>Backend: PHP, MySQL, MongoDB, Nginx, Apache, Express</li>
          <li>CMS: Wordpress Development, Magento, WooCommerce</li>
          <li>Data Analysis: Python, Tableau, Power BI</li>
          <li>Cloud: AWS S3, EC2</li>
          <li>SEO: Google Analytics, Google Ads, Matomo, SendInBlue </li>
          <li>Design: Photoshop, Lightroom, Illustrator</li>
          <br/>
          <br/>
          <li>Fluent in: English, German, Japanese, Cantonese</li>
          <li>Sake Enthusiast (WSET Level 3 Award)</li>
          <li>Tea tutor and tea science writer</li>
        </ul>
      </div>
    </div>
    </div>

  </section>
  )


  }


// const AboutMe = () => {
//   const data = useStaticQuery(graphql`
//     {
//       photo: file(relativePath: { eq: "about-me/selfie-boy.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 512) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
//         html
//       }
//     }
//   `);

//   return (
//     <section id="about-me">

//       <div className="grid lg:grid-cols-6 gap-12 items-center">
//         <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
//           <GatsbyImage {...data.photo.childImageSharp} />
//         </div>
//         <div
//           className="text-justify lg:col-span-4 wow fadeIn"
//           dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
//         />
//       </div>
//     </section>
//   );
// };

export default AboutMe;

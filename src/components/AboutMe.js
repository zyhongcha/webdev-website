import Img from 'gatsby-image';
import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useIntersection } from "use-intersection";
import { TweenLite } from "gsap";

export const AboutMe = ({ aboutMeElement, triggerRefThree }) => {
  const triggerRef = useRef(null);

  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
    once: true
  });
  useEffect(() => {
    if (intersection) {
      TweenLite.to("#about .fadeIn", 1, {
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
      <div className="about-me__container-inner-wrapper" ref={aboutMeElement}>
        <div className="about-me__container-inner-wrapper-text fadeIn" ref={triggerRef}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <div id="portrait" ><Img fluid={data.image.childImageSharp.fluid} /></div>
        <div class="about-me__container-inner-wrapper-skills">
          <h1>Skills</h1>
          <ul>
            <li>Fluent in: English, German, Japanese, Cantonese</li>
            <li>Frontend: HTML, CSS, JavaScript (jQuery, React, Gatsby)</li>
            <li>Backend: LAMP/LEMP Stack (PHP, MySQL, Nginx, Apache)</li>
            <li>Wordpress Development, Magento, WooCommerce</li>
            <li>Design: Photoshop, Lightroom, Illustrator</li>
          </ul>
        </div>
        <p>Interested in getting to know more about me? Message me!</p>
        <form class="contact-form" name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message<textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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

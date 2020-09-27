import React, { useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";
import { TweenLite } from "gsap";
import { useIntersection } from "use-intersection";

function Works({ element, triggerRefOne }) {

  const triggerRef = useRef(null);


  const intersection = useIntersection(triggerRef, {
    root: null,
    rootMargin: "200px 0px 0px 0px",
    threshold: 0.6,
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
              <a href="https://sake-academy.eu" target="_blank" rel="noopener noreferrer"><Img fluid={data.sakeOne.childImageSharp.fluid} /></a>
            </div>
            <div className="works-container__showcase-description" id="sake-academy-description" >
              <div className="works-container__showcase-description-text">
                <h4 className="fadeIn">Schooling Website</h4>
                <h2 className="fadeIn">Sake &amp; Shochu Academy Europe</h2>
                <p className="fadeIn">Sake & Shochu Academy Europe offers courses for professionals and sake enthusiasts alike for promoting and driving the recognition of the national drink of Japan in Europe.<br /><br />
                Yoshiko Ueno-Mueller, the academy's president, is the first female, as well as first non-Japan resident to pass the difficult exam as „Master of Sake“. Further she is Sake Expert Assessor (NRIB) and a certified sommelière (IHK). With enthusiasm, she engages herself as a member of Slow Food as well as of the Sommelier Union Germany. For her effort und success, she was announced SAKE SAMURAI in October 2011, an ambassador of sake culture and received the special recognition of the Japanese foreign minister in 2015. For Sake & Shochu Academy Europe, Yoshiko Ueno-Mueller hosts the international recognized J.S.A. Sake Diploma in Europe.
                <br /><br />
                My goal in developing this website was to highlight Sake in a new, modern way that drives further understanding and welcomes Europeans which have not come into contact with the beverage yet; portraying Sake in a new image in Europe. The color scheme consists of blue and an off-white color, representing the European colors for unity, as well as depicting the colors of the traditional Sake drinking cup (kikichoko), which is used to measure clarity and quality of the Sake. Both colors bridge the cultures between the West and Japan, thus helping in not just understanding Sake, but also the traditional and cultural values of Japan, which is also required when experiencing the Sake culture more in-depth.

The website is designed to be very user-friendly, especially to beginners, who have not come into contact with Sake. The course list is very easy to understand and beginners can navigate easily from first getting to know what Sake is, to booking the basic tasting courses.

The website comes with a booking system, custom made for the client, as well as an E-Commerce shop for smaller courses.
            </p>
                <div className="works-container__showcase-details fadeIn">
                  <h3 >Technical Details</h3>
                  <p>CMS: Wordpress, Frontend partly built with Elementor Page Builder, pure HTML, CSS and JavaScript. Backend functionalities customized with PHP, WooCommerce customized for the client, making it conform to the German market and its laws.</p>
                </div>
              </div>
              <div className="works-container__showcase-details-mobileshots">
                <div className="works-container__mobile-1 fadeIn">
                  <a href="https://sake-academy.eu/#willkommen-section" target="_blank" rel="noopener noreferrer"><Img fluid={data.sakeTwo.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-2 fadeIn">
                  <a href="https://sake-academy.eu/?kursangebot=sake-diploma-kurs" target="_blank" rel="noopener noreferrer"><Img fluid={data.sakeThree.childImageSharp.fluid} /></a></div>
                <div className="works-container__mobile-3 fadeIn">
                  <a href="https://sake-academy.eu/anmeldeformular-kurse/" target="_blank" rel="noopener noreferrer"><Img fluid={data.sakeFour.childImageSharp.fluid} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;
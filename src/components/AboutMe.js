import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import React from "react";

const AboutMe = ( ) => {

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
  `);
  return (
    <section id="about" className="about-me__container" >
      <div className="about-me__container-inner-wrapper">
        <h2>Hello.</h2>
        <div className="about-me__container-inner-wrapper-text"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <div id="portrait"><Img fluid={data.image.childImageSharp.fluid} /></div>
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

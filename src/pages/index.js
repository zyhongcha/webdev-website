import React from "react"
import useSticky from "../components/hooks/useSticky"
import useNavChangeColor from "../components/hooks/useNavChangeColor"
import useIntersected from "../components/hooks/useIntersected"
import SEO from "../components/seo"
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/Works'
import WorksTwo from '../components/WorksTwo'
import AboutMe from '../components/AboutMe'
import Footer from '../components/footer'
import "normalize.css"
import "../styles/styles.scss"

function IndexPage() {
  const { isSticky, element } = useSticky()
  const { hasReached, newWorkElement, aboutMeElement } = useNavChangeColor()
  const { isIntersectedAt, triggerRefOne, triggerRefTwo, triggerRefThree } = useIntersected()

  return (
    <div className="App">
      <div className="wrapper">
        <Header sticky={isSticky} hasReached={hasReached} isIntersectedAt={isIntersectedAt} />
        <Banner />
        <SEO title="Home" />
        <div className="afterHeaderWrapper">
          <Works element={element} triggerRefOne={triggerRefOne} />
          <WorksTwo newWorkElement={newWorkElement} triggerRefTwo={triggerRefTwo} />
          <AboutMe aboutMeElement={aboutMeElement} triggerRefThree={triggerRefThree} />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default IndexPage

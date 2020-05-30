import React from "react"
import useSticky from "../components/hooks/useSticky"
import useNavChangeColor from "../components/hooks/useNavChangeColor"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/Works'
import WorksTwo from '../components/WorksTwo'
import AboutMe from '../components/AboutMe'
import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => {
  const { isSticky, element } = useSticky()
  const { hasReached, newWorkElement } = useNavChangeColor()

  return (
    <div className="App">
      <div className="wrapper">
        <Header sticky={isSticky} hasReached={hasReached} />
        <Banner />
        <SEO title="Home" />
        <div className="afterHeaderWrapper">
          <Works element={element} />
          <WorksTwo newWorkElement={newWorkElement} />
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
export default IndexPage

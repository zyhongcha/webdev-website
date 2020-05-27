import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/Works'
import WorksTwo from '../components/WorksTwo'
import AboutMe from '../components/AboutMe'
import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div className="App">
    <div className="wrapper">
      <Header />
      <Banner />
      <SEO title="Home" />
      <Works />
      <WorksTwo />
      <AboutMe />
    </div>
  </div>
)

export default IndexPage

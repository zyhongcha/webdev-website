import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/Works'
import AboutMe from '../components/AboutMe'
import "../styles/styles.scss"


const IndexPage = () => (
  <div className="App">
    <Header />
    <Banner />
    <SEO title="Home" />
    <AboutMe />
    <Works />

  </div>
)

export default IndexPage

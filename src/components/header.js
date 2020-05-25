import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {


  return (
    <header>
      <div className="header">
        <div className="header__inner-header">
          <div className="header__logo">
            <Link to="/">ZYHONG LIU</Link></div>
          <div className="header__navigation">
            <nav>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="header__navigation">
            <nav>
              <Link to="/contact">Contact Me</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header

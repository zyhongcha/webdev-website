import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ sticky, hasReached, isIntersectedWorksOne ,isIntersectedWorksTwo }) => {

  function whichSection() {
    let className = [];
    if (isIntersectedWorksOne) {
      className.push("works-1")
    } else if (isIntersectedWorksTwo) {
      console.log(className)  ;
      className.push("works-2");
    }
    className.push("sticky")
    return className.join(" ");

  }


  return (
    <header className={whichSection()}>
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

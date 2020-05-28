import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ sticky, hasReached }) => {

  function whichSection() {
    let className = [];
    if (sticky) {
      className.push("sticky works-1")
    }
    if (hasReached) {
      className.splice(className.indexOf('works-1'), 1);
      className.push("sticky works-2")
    }
    /*
    let classNameIterator = className.values();
    for (let value of classNameIterator) {
    return value;
    }
    */
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

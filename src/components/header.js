import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { IoLogoGithub, IoLogoLinkedin, IoLogoXing, IoLogoInstagram } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import Hamburger from "./hamburger"

const Header = ({ isIntersectedAt }) => {

  const [isOpen, setOpen] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  const [disabled, setDisabled] = useState(false)


  const handleMenu = () => {
    disabledMenu();
    if (isOpen.initial === false) {
      setOpen({
        initial: null,
        clicked: true,
        menuName: "Close"
      })
    } else if (isOpen.clicked === true) {
      setOpen({
        clicked: !isOpen.clicked,
        menuName: "Menu"
      })
    } else if (isOpen.clicked === false) {
      setOpen({
        clicked: !isOpen.clicked,
        menuName: "Close"
      })
    }
  }

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  function whichSection() {
    if (isIntersectedAt === 1) {
      return "works-1"
    } else if (isIntersectedAt === 2) {
      return "works-2"
    }
  }
  return (
    <header id={whichSection()} className="display sticky">
      <div className="header">
        <div className="header__inner-header">
          <div className="header__navigation">
            <nav>
              <Link to="/" className="logo">ZYHONG LIU</Link>
            </nav>
          </div>
          <div className="header__navigation">
            <nav>
              <Link to="#sake-academy">Works</Link>
              <Link to="#about">About</Link>
            </nav>
          </div>
          <div className="header__navigation">
            <nav>
              <div className="header__desktop-nav">
                <IconContext.Provider value={{ size: "1rem" }}>
                  <a href="https://github.com/zyhongcha" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
                  <a href="https://www.linkedin.com/in/zyhong-liu-a58bb2196/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                  <a href="https://www.xing.com/profile/Zyhong_Liu/" target="_blank" rel="noopener noreferrer"><IoLogoXing /></a>
                  <a href="https://www.instagram.com/zyhongcha/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a></IconContext.Provider>
              </div>
              <button className="toggle-menu" onClick={handleMenu} disabled={disabled}><GiHamburgerMenu /></button>
            </nav>
          </div>
        </div>
      </div>
      <Hamburger isOpen={isOpen} setOpen={setOpen} />
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header;

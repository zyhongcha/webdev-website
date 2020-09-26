import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { IoLogoGithub, IoLogoLinkedin, IoLogoXing, IoLogoInstagram } from "react-icons/io";
import { IconContext } from "react-icons";
import gsap from "gsap";
import { TimelineLite } from 'gsap/gsap-core';

const Hamburger = ({ isOpen, setOpen }) => {

  let menuRef = useRef(null);
  let revealMenuRef = useRef(null);
  let revealMenuBackgroundRef = useRef(null);
  let linkToTopRef= useRef(null);
  let tl = new TimelineLite();
  let tl2 = new TimelineLite();

  useEffect(() => {
    if (isOpen.clicked === false) {
      closeMenuAnimation();
    } else if (isOpen.clicked === true || (isOpen.clicked === true && isOpen.initial === null)) {
      openMenuAnimation();
    }
  }, [isOpen])


  const closeMenuAnimation = () => {
    tl.to(".hamburger-menu__container a", {
      duration: 0.2,
      css: { opacity: 0 }
    })
      .to([revealMenuRef, revealMenuBackgroundRef], {
        duration: 0.7,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      })
      .to(menuRef, {
        duration: 1,
        css: { display: "none" }
      })
  }


  const openMenuAnimation = () => {
    gsap.to(menuRef, {
      duration: 1,
      css: { display: "block" }
    })
    gsap.set([revealMenuBackgroundRef, revealMenuRef], {
      height: "100%"
    });
    tl2.from([revealMenuBackgroundRef, revealMenuRef],
      {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 8,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2
        }
      }
    ).to(".hamburger-menu__container a", {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
      stagger: 0.1
    })
  }

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 7,
      skewX: -12,
      ease: "power3.inOut"
    })
  }

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    })
  }


  const handleLinkClick = () => {
    setOpen({ clicked: !isOpen.clicked, menuName: "Close" })
  }

  return (
    <div className="hamburger-menu" ref={el => menuRef = el}>
      <div className="hamburger-menu__bgcolor" ref={el => revealMenuBackgroundRef = el}></div>
      <div ref={el => revealMenuRef = el} className="hamburger-menu__layer">
        <div className="hamburger-menu__container">
          <div className="hamburger-menu__container-header">
            <Link to="/" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} onClick={handleLinkClick} ref={el => linkToTopRef = el}>ZYHONG LIU</Link>
          </div>
          <div className="hamburger-menu__links" >
            <nav>
              <ul>
                <li><Link onClick={handleLinkClick} to="#sake-academy">Works</Link></li>
                <li><Link onClick={handleLinkClick} to="#about">About</Link></li>
              </ul>
            </nav>
          </div>
          <div className="hamburger-menu__container-footer">
            <nav>
              <IconContext.Provider value={{ size: "2.5rem" }}>
                <a href="https://github.com/zyhongcha" target="_blank" rel="noopener noreferrer"><IoLogoGithub /></a>
                <a href="https://www.linkedin.com/in/zyhong-liu-a58bb2196/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                <a href="https://www.xing.com/profile/Zyhong_Liu/" target="_blank" rel="noopener noreferrer"><IoLogoXing /></a>
                <a href="https://www.instagram.com/zyhongcha/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
              </IconContext.Provider>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger;
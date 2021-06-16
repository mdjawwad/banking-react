import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./navElements";

const Navbar = ({ toggle }) => {
  const [scrolNav, setScrolNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolNav(true);
    } else {
      setScrolNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrolNav={scrolNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Jd
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLink>
              </NavItems>
              <NavItems>
                <NavLink
                  to="discover"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLink>
              </NavItems>
              <NavItems>
                <NavLink
                  to="services"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLink>
              </NavItems>
              <NavItems>
                <NavLink
                  to="signup"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLink>
              </NavItems>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

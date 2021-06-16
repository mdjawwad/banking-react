import React from "react";
import {
  SideContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarManu,
  SideBarLink,
  SideBarRoute,
  SideBtnWrap,
} from "./sideElementss";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarManu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarManu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideContainer>
  );
};

export default Sidebar;

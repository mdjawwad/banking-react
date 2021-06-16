import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinkItem,
  FooterLinkContainer,
  FooterLinkWraper,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
import {
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  CopyRigth,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";


const FooterSection = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWraper>
            <FooterLinkItem>
              <FooterLinkTitle>About Us </FooterLinkTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">How its works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms and Services</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Contact Us </FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItem>
          </FooterLinkWraper>
          <FooterLinkWraper>
            <FooterLinkItem>
              <FooterLinkTitle>Videos </FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Social Media </FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItem>
          </FooterLinkWraper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Jd</SocialLogo>
            <CopyRigth>
              Jd © {new Date().getFullYear()} All rights reserved.{" "}
            </CopyRigth>
            <SocialIcon>
              <SocialIconLink href="https://www.facebook.com/md.jawwad.581"  target="_blank" aria-label="Facebook">
                <FaFacebook  />
              </SocialIconLink>

              <SocialIconLink href="https://www.linkedin.com/mwlite/in/muhammad-jawwad-4b244a18b" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink href="https://www.youtube.com/channel/UCfu4HpQ0pZzJ0_cK2OdjTaw" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterSection;

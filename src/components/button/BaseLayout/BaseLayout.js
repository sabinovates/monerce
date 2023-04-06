import React from "react";
import { Link } from "react-router-dom";
import {
  BaseStyle,
  FooterContactStyle,
  FooterContactUlStyle,
  FooterInnerSection2Style,
  FooterSectionConStyle,
  FooterSectionStyle1,
  FooterSectionStyle2,
  FooterStyle,
  FooterTermsStyle,
  HeaderStyle,
  MainStyle,
  NavContainerStyle,
  NavLinkStyle,
  NavLiStyle,
  NavLogoStyle,
  NavSignUpLinkStyle,
  NavUlContainerStyle,
} from "./BaseStyle";
import companyLogo from "../../../assets/Images/companyLogo.svg";

function BaseLayout({ children, showLearnMore = true }) {
  return (
    <BaseStyle>
      {/* Header */}
      <HeaderStyle>
        <NavContainerStyle>
          {/* <NavContainerStyle> */}
          <NavLogoStyle src={companyLogo} alt="companyIcon" />
          {/* </NavContainerStyle> */}
          <nav type="navigator">
            <NavUlContainerStyle>
              <NavLiStyle>
                <NavLinkStyle to="/">Home</NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle to="/AboutUs">About us</NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle to="/HowItWorks">How it works</NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle to="/Channels">Channels</NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle to="/Pricing">Pricing</NavLinkStyle>
              </NavLiStyle>
            </NavUlContainerStyle>
          </nav>
        </NavContainerStyle>
        <nav type="navigator2">
          <NavUlContainerStyle>
            <NavLiStyle>
              <NavLinkStyle href="#/">Login</NavLinkStyle>
            </NavLiStyle>
            <NavLiStyle>
              <NavSignUpLinkStyle href="#/">Sign up</NavSignUpLinkStyle>
            </NavLiStyle>
          </NavUlContainerStyle>
        </nav>
      </HeaderStyle>
      {/* Main */}
      <MainStyle>{children}</MainStyle>
      {/* Footer */}
      <FooterStyle>
        <FooterSectionConStyle>
          <FooterSectionStyle1>
            <div>
              <h1>Make Your Shopping Easy with Our O2O Platform</h1>
              <p>
                Discover the best of both worlds with our O2O platform. Browse
                online, shop offline, and enjoy a seamless shopping experience.
              </p>
            </div>
            <ul>
              {showLearnMore ? (
                <li>
                  <a href="#/">Learn more</a>
                </li>
              ) : (
                <li style={{ display: "none" }}>
                  <a href="#/">Learn more</a>
                </li>
              )}

              <li>
                <a href="#/">Get started</a>
              </li>
            </ul>
          </FooterSectionStyle1>
          <FooterSectionStyle2>
            <FooterContactStyle>
              <div>
                <img src={companyLogo} alt="companyIcon" />
                <FooterContactUlStyle>
                  <li>
                    <a href="#/">FAQ</a>
                  </li>
                  <li>
                    <a href="#/">Contact us</a>
                  </li>
                  <li>
                    <a href="#/">Become an agent</a>
                  </li>
                </FooterContactUlStyle>
              </div>
              <div>
                <h1>Stay up to date</h1>
                <form>
                  <input type="text" />
                  <button>Subscribe</button>
                </form>
              </div>
            </FooterContactStyle>
            <FooterInnerSection2Style>
              <FooterContactUlStyle>
                <li>
                  <a href="#/">© 2023 Monerce. All rights reserved.</a>
                </li>
                <li>
                  <a href="#/">
                    Powered by Legacy Technology & Innovation Liberia
                  </a>
                </li>
                <FooterTermsStyle>
                  <h1>
                    <a href="#/">Terms</a>
                  </h1>
                  <h1>
                    <a href="#/">Privacy</a>
                  </h1>
                  <h1>
                    <a href="#/">Cookies</a>
                  </h1>
                </FooterTermsStyle>
              </FooterContactUlStyle>
            </FooterInnerSection2Style>
          </FooterSectionStyle2>
        </FooterSectionConStyle>
      </FooterStyle>
    </BaseStyle>
  );
}

export default BaseLayout;

import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  // Extract the current page's pathname
  const pathname = location.pathname;

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
                <NavLinkStyle
                  to="/"
                  style={pathname === "/" ? { color: "#FCCE34" } : null}
                >
                  Home
                </NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle
                  to="/aboutUs"
                  style={pathname === "/aboutUs" ? { color: "#FCCE34" } : null}
                >
                  About us
                </NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle
                  to="/howItWorks"
                  style={
                    pathname === "/howItWorks" ? { color: "#FCCE34" } : null
                  }
                >
                  How it works
                </NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle
                  to="/channels"
                  style={pathname === "/channels" ? { color: "#FCCE34" } : null}
                >
                  Channels
                </NavLinkStyle>
              </NavLiStyle>
              <NavLiStyle>
                <NavLinkStyle
                  to="/pricing"
                  style={pathname === "/pricing" ? { color: "#FCCE34" } : null}
                >
                  Pricing
                </NavLinkStyle>
              </NavLiStyle>
            </NavUlContainerStyle>
          </nav>
        </NavContainerStyle>
        <nav type="navigator2">
          <NavUlContainerStyle>
            <NavLiStyle>
              <NavLinkStyle to="/login">Login</NavLinkStyle>
            </NavLiStyle>
            <NavLiStyle>
              <NavSignUpLinkStyle to="/signup">Sign up</NavSignUpLinkStyle>
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
                    <Link
                      to="/faq"
                      style={pathname === "/faq" ? { color: "#FCCE34" } : null}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact_us"
                      style={
                        pathname === "/contact_us" ? { color: "#FCCE34" } : null
                      }
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/become_an_agency"
                      style={
                        pathname === "/become_an_agency"
                          ? { color: "#FCCE34" }
                          : null
                      }
                    >
                      Become an agent
                    </Link>
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
                    <Link
                      to="/terms"
                      style={
                        pathname === "/terms" ? { color: "#FCCE34" } : null
                      }
                    >
                      Terms
                    </Link>
                  </h1>
                  <h1>
                    <Link
                      to="/privacy"
                      style={
                        pathname === "/privacy" ? { color: "#FCCE34" } : null
                      }
                    >
                      Privacy
                    </Link>
                  </h1>
                  <h1>
                    <Link
                      to="/cookies"
                      style={
                        pathname === "/cookies" ? { color: "#FCCE34" } : null
                      }
                    >
                      Cookies
                    </Link>
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

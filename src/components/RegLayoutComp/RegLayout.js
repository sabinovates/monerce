import React from "react";
import companyLogo from "../../assets/Images/companyLogo.svg";
import {
  HeaderStyle,
  NavContainerStyle,
  NavLogoStyle,
} from "../LayoutComponent/BaseLayout/BaseStyle";
import { Link } from "react-router-dom";
import { MainStyle } from "./MainStyle";
import cautionIcon from "../../assets/Images/Icon (1).svg";
import closeIcon from "../../assets/Images/Icon (2).svg";

function RegLayout({ children }) {
  return (
    <div>
      <HeaderStyle>
        <NavContainerStyle>
          <NavLogoStyle src={companyLogo} alt="companyIcon" />
        </NavContainerStyle>
      </HeaderStyle>

      <MainStyle>
        <nav>
          <Link to="/">-- Back to home</Link>
        </nav>
        <section>{children}</section>
        <main>
          <aside>
            <p>
              <img src={cautionIcon} alt="icon" />
              <h4>Invitation Code Unsuccessful</h4>
            </p>
            <img src={closeIcon} alt="icon" />
          </aside>
          <h5>
            please provide the correct invitation code sent to your phone number
          </h5>
        </main>
      </MainStyle>
    </div>
  );
}

export default RegLayout;

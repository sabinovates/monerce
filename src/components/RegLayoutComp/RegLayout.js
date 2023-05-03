import React from "react";
import companyLogo from "../../assets/Images/companyLogo.svg";
import {
  HeaderStyle,
  NavContainerStyle,
  NavLogoStyle,
} from "../LayoutComponent/BaseLayout/BaseStyle";
import { Link } from "react-router-dom";
import { MainStyle } from "./MainStyle";
import ErrorCard from "../ErrorCard";
import SignupCongratPage from "../../Pages/SignupPage/SignupCongratPage";

function RegLayout({
  children,
  showErrorCard,
  handleShowErrorCard,
  errorCardMsg,
  cardHeader,
  signupCongrat,
}) {
  return (
    <div>
      <HeaderStyle>
        <NavContainerStyle>
          <NavLogoStyle src={companyLogo} alt="companyIcon" />
        </NavContainerStyle>
      </HeaderStyle>

      <MainStyle>
        {signupCongrat ? (
          <SignupCongratPage />
        ) : (
          <>
            <nav>
              <Link to="/">-- Back to home</Link>
            </nav>
            <section>{children}</section>
            {showErrorCard ? (
              <ErrorCard
                cardHeader={cardHeader}
                handleShowErrorCard={handleShowErrorCard}
                errorMsg={errorCardMsg}
              />
            ) : null}
          </>
        )}
      </MainStyle>
    </div>
  );
}

export default RegLayout;

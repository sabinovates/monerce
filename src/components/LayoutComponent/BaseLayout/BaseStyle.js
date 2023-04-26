import styled from "styled-components";
import { Link } from "react-router-dom";
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

export const BaseStyle = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  background-color: #f9fafb;
`;

export const HeaderStyle = styled.header`
  background-color: ${(props) =>
    props.variant === "outline" ? "#000" : "#492C7C"};
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5%;
  border-bottom: 1px solid #6d5696;
`;

export const MainStyle = styled.main`
  /* background-color: #fff; */
`;

export const NavContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLogoStyle = styled.img`
  padding-bottom: 5px;
  width: 100%;
`;
export const NavUlContainerStyle = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavLinkStyle = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  white-space: nowrap;
  color: #ffffff;
`;

export const NavSignUpLinkStyle = styled(NavLinkStyle)`
  padding: 10px 18px;
  border-radius: 8px;
  background: #dbd5e5;
  border: 1px solid #dbd5e5;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #492c7c;
`;

export const NavLiStyle = styled.li`
  /* !important;
  color: red; */
`;

export const FooterStyle = styled.footer`
  background: #fff;
  background: linear-gradient(180deg, #fff 40%, #492c7c 40%);
  @media (max-width: 990px) {
    background: linear-gradient(180deg, #fff 36%, #492c7c 36%);
  }
`;

export const FooterSectionConStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`;

export const FooterSectionStyle1 = styled.section`
  width: 100%;
  max-width: 1216px;
  min-height: 242px;
  background: #9280b0;
  margin-top: 176px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 990px) {
    padding: 69px 5%;
  }
  div {
    width: 768px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
    }
    @media (max-width: 990px) {
      width: 100%;
      margin-bottom: 39px;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    li {
      padding: 12px 20px;
      margin-left: 12px;
      border-radius: 8px;
      a {
        text-decoration: none;
        white-space: nowrap;
        font-weight: 500;
        @media (max-width: 990px) {
          font-size: 14px !important;
        }
      }
      @media (max-width: 990px) {
        text-align: center;
      }
    }
    li:first-child {
      background: #ffffff;
      a {
        color: #492c7c;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
      }
    }
    li:nth-child(2) {
      background: #492c7c;
      border: 1px solid #492c7c;
      a {
        color: #ffffff;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
      }
    }
    @media (max-width: 990px) {
      flex-wrap: wrap;
      width: 100%;
      li {
        width: 100%;
        margin-left: 0;
        margin-bottom: 12px;
        a {
          font-size: 140px;
        }
      }
    }
    a {
    }
  }
`;
export const FooterSectionStyle2 = styled.section`
  width: 100%;
  max-width: 1216px;
  background: #492c7c;
  margin-top: 5.5%;
`;

export const FooterContactStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 42px;
  border-bottom: 2px solid #9280b0;
  flex-wrap: wrap;
  margin-bottom: 42px;
  @media (max-width: 990px) {
    padding-bottom: 10px;
  }
  div {
    width: 360px;
    li {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    form {
      input {
        width: 226px;
        height: 44px;
        background: #ffffff;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #98a2b3;
        padding: 14px;
        outline: none;
        margin-right: 16px;
        @media (max-width: 990px) {
          width: 100%;
          margin-bottom: 16px;
        }
      }
      button {
        align-items: center;
        padding: 10px 18px;
        gap: 8px;
        width: 118px;
        height: 44px;
        background: #009444;
        border: 1px solid #009444;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        @media (max-width: 990px) {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 990px) {
    div {
      width: 100%;
      margin-bottom: 32px;
    }
  }
  img {
    margin-bottom: 39px;
  }
`;
export const FooterContactUlStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  flex-wrap: wrap;
`;

export const FooterInnerSection2Style = styled.section`
  margin-bottom: 58px;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
  }
  li {
    @media (max-width: 990px) {
      margin-bottom: 26px;
    }
  }
`;

export const FooterTermsStyle = styled(FooterContactUlStyle)`
  width: 204px;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

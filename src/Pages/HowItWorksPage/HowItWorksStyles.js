import styled from "styled-components";

export const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 96px 7.5% 163px 7.5%;
  @media (max-width: 990px) {
    justify-content: center;
    padding: 37px 0 163px 0;
    margin-bottom: 0;
  }
  div {
    max-width: 575.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 990px) {
      padding: 0 7.5% 0 7.5%;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
      margin-bottom: 12px;
    }
    p {
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #475467;
        margin-top: 10px;
        @media (max-width: 990px) {
          margin-top: 0;
        }
      }
    }
    nav {
      margin-top: 40px;
      a {
        text-align: center;
        padding: 12px 20px;
        white-space: nowrap;
        width: 127px;
        height: 48px;
        border: 1px solid #492c7c;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #492c7c;
        display: block;
        @media (max-width: 990px) {
          width: 100%;
        }
      }
    }
  }
`;

export const Section2 = styled.section`
  padding: 10px 7.5% 10px 7.5%;
  div {
    margin-bottom: 114px;
    @media (max-width: 990px) {
      margin-bottom: 50px;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #101828;
      margin-bottom: 20px;
    }
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #475467;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 990px) {
      justify-content: center;
    }
    li {
      max-width: 384px;
      margin-bottom: 86px;
      @media (max-width: 990px) {
        margin-bottom: 42px;
      }
      p {
        margin-top: 42px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #475467;
        @media (max-width: 990px) {
          margin-top: 16px;
        }
      }
    }
  }
`;

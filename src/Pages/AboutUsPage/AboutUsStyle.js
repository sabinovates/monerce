import styled from "styled-components";

export const Section1 = styled.section`
  padding: 123px 7.5% 130px 7.5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 7% 40px 7%;
    img {
      margin-bottom: 64px;
    }
  }
  p {
    max-width: 576px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
      height: 10%;
      @media (max-width: 990px) {
        margin-bottom: 40px;
      }
    }
    div {
      /* background-color: red; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #475467;
        @media (max-width: 990px) {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const Section2 = styled.section`
  padding: 21px 7.5% 130px 7.5%;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    @media (max-width: 990px) {
      justify-content: center;
    }
    li {
      max-width: 384px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      @media (max-width: 990px) {
        margin-bottom: 56px;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        color: #101828;
        margin-top: 20px;
        margin-bottom: 8px;
      }
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #475467;
      }
    }
  }
`;

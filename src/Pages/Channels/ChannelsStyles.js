import styled from "styled-components";

export const Section1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 55.5px 0 144px 7.5%;
  @media (max-width: 990px) {
    padding: 50px 7% 50px 7%;
    justify-content: center;
  }
  p {
    max-width: 544px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
      margin-bottom: 50px;
    }
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #475467;
      @media (max-width: 990px) {
        margin-bottom: 50px;
      }
    }
  }
  img {
    @media (max-width: 990px) {
      width: 100%;
    }
  }
`;

export const Section2 = styled.section`
  padding: 96px 4% 136px 4%;
  @media (max-width: 990px) {
    padding: 0 4% 0 4%;
  }
  p {
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
      margin-bottom: 100px;
      @media (max-width: 990px) {
        margin-bottom: 50px;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      display: flex;
      padding: 24px;
      background: #f2f4f7;
      border-radius: 12px;
      width: 405.33px;
      min-height: 226px;
      margin: 10px;
      @media (max-width: 850px) {
        width: calc(100% / 1 - 20px);
        /* height: 100%; */
      }
      img {
        width: 29px;
        height: 29px;
        margin-right: 12px;
      }
      div {
        width: 300px;
        @media (max-width: 850px) {
          width: 100%;
        }
        h2 {
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: #101828;
          margin-top: 2px;
          margin-bottom: 20px;
        }
        h3 {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #475467;
          margin-bottom: 20px;
        }
        nav {
          a {
            text-align: center;
            padding: 12px 20px;
            white-space: nowrap;
            width: 128px;
            height: 48px;
            border: 1px solid #492c7c;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            color: #492c7c;
            h1 {
              margin-right: 12.17px;
            }
            img {
              width: 11.67px;
              height: 11.67px;
            }
          }
        }
      }
    }
  }
`;

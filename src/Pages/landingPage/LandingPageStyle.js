import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

export const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 96px 7.5% 200px 7.5%;
  flex-wrap: wrap;

  background: #492c7c;
  border-bottom: 30px solid #d0d5dd;
  border-radius: 0px 0px 200px 0px;
  @media (max-width: 990px) {
    justify-content: center;
    padding: 40px 7.5% 104px 7.5%;
  }
  div {
    max-width: 576px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 60px;
      color: #ffffff;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
      @media (max-width: 990px) {
        font-size: 36px;
        line-height: 44px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
      @media (max-width: 990px) {
        font-size: 18px;
        line-height: 28px;
      }
    }
    nav {
      margin-top: 40px;
      width: 189px;
      @media (max-width: 990px) {
        width: 100%;
        @media (max-width: 990px) {
          margin-bottom: 50px;
        }
      }
      a {
        width: 100%;
        text-align: center;
        align-items: center;
        padding: 14px 18px;
        gap: 8px;
        background: #009444;
        border: 1px solid #009444;
        border-radius: 8px;
        white-space: nowrap;
        display: block;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
`;

export const Section2 = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 87px 7.5% 99px 7.5%;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 990px) {
    justify-content: center;
  }
  div {
    width: 576px;
    h1 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
      margin-bottom: 40px;
      @media (max-width: 990px) {
        margin-top: 64px;
      }
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #475467;
      margin-bottom: 35px;
      span {
        font-weight: bold;
      }
    }
    nav {
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

export const Section3 = styled.section`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 96px 4% 136px 4%;
    padding: 0px 32px;
    background: #492c7c;
    border-radius: 12px;
    @media (max-width: 990px) {
      margin: 96px 0 200px 0;
      border-radius: 0;
      justify-content: center;
      padding: 0;
    }
    p {
      padding: 79px 0;
      width: 576px;
      @media (max-width: 990px) {
        padding: 32px;
      }
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #ffffff;
        margin-bottom: 24px;
      }
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        margin-bottom: 40px;
      }
      nav {
        margin-top: 40px;
        width: 189px;
        @media (max-width: 990px) {
          width: 100%;
          @media (max-width: 990px) {
            /* margin-bottom: 50px; */
          }
        }
        a {
          width: 100%;
          text-align: center;
          align-items: center;
          padding: 14px 18px;
          gap: 8px;
          background: #009444;
          border: 1px solid #009444;
          border-radius: 8px;
          white-space: nowrap;
          display: block;
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
    img {
      width: fit-content;
    }
  }
`;

export const Section4 = styled.section`
  background: #f2f4f7;
  padding: 87px 7.5% 99px 7.5%;
  @media (max-width: 990px) {
    padding: 50px 7.5% 50px 7.5%;
  }
  p {
    max-width: 768px;
    margin-bottom: 64px;
    @media (max-width: 990px) {
      margin-bottom: 24px;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.02em;
      color: #101828;
      margin-bottom: 20px;
      @media (max-width: 990px) {
        font-size: 30px;
      }
    }
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #475467;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 990px) {
      justify-content: center;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      max-width: 389.33px;
      background: #ffffff;
      border: 1px solid #eaecf0;
      border-radius: 12px;
      margin-bottom: 64px;

      @media (max-width: 990px) {
        margin-bottom: 24px;
        :last-child {
          margin-bottom: 0;
        }
      }
      img {
        margin-bottom: 64px;
      }
      p {
        margin-bottom: 0;
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #101828;
        margin-bottom: 8px;
      }
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #475467;
      }
    }
  }
`;

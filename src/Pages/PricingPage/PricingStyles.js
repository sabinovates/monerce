import styled from "styled-components";

export const Section1 = styled.section`
  padding: 96px 7.5% 96px 7.5%;
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #404a5a;
    margin-bottom: 24px;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #475467;
  }
`;

export const Section2 = styled.section`
  padding: 0 2% 100px 2%;
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    li {
      width: 384px;
      min-height: 324px;
      background: #ffffff;
      border: 1px solid #eaecf0;
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
        0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      margin: 16px;
      padding: 32px;
      @media (max-width: 850px) {
        width: calc(100% / 1 - 20px);
        margin: 16px 0 16px 0;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.03em;
        color: #492c7c;
        margin-bottom: 16px;
      }
      h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        line-height: 66px;
        letter-spacing: -0.04em;
        color: #404a5a;
        margin-bottom: 16px;
      }
    }
  }
`;

export const Section3 = styled.section`
  display: flex;
  justify-content: center;
  margin: 16px;
  div {
    width: 858px;
    padding: 16px;
    gap: 70px;
    /* height: 899px; */
    background: #492c7c;
    border-radius: 12px;
    padding: 50px;
    @media (max-width: 850px) {
      padding: 20px;
    }
    main {
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        color: #ffffff;
        margin-bottom: 6px;
      }
      input {
        padding: 10px 12px;
        gap: 8px;
        width: 100%;
        height: 92px;
        background: #ffffff;
        border: 1px solid #d0d5dd;
        border-radius: 8px;
        font-weight: 600;
        margin-bottom: 44px;
        :focus {
          outline: none;
        }
        /* Text */
        font-size: 60px;
        line-height: 72px;
        letter-spacing: -0.02em;
        color: #492c7c;
        ::placeholder {
          color: #492c7c;
        }
      }
      p {
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          margin-bottom: 20px;
        }
        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 60px;
          line-height: 72px;
          letter-spacing: -0.02em;
        }
      }
    }
    ul {
      margin-top: 80px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0px 22px;
        height: 72px;
        border-bottom: 1px solid #f2f4f7;
        margin-bottom: 20px;
        /* Text */
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        h1 {
          @media (max-width: 850px) {
            width: 231px;
          }
        }
      }
    }
  }
`;

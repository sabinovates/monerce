import styled from "styled-components";

export const SignUpCongratStyles = styled.div`
  background: #492c7c;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 100vh;
  p {
    padding: 72px 0;
    max-width: 660px;
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-bottom: 44px;
    }
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 21px;
    }
    h6 {
      text-align: center;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      margin-top: 16px;
      a {
        color: #fcce34;
        text-decoration: none;
        font-weight: 600;
      }
    }
    a {
      text-decoration: none;
      h3 {
        background-color: red;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 18px;
        gap: 8px;
        width: 276px;
        max-width: 276px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 8px;
        //text

        margin-top: 34px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #492c7c;
      }
    }
  }
`;

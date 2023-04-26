import styled from "styled-components";

export const FooterNavStyles = styled.section`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aside {
    max-width: 784px;
    width: 100%;
    padding: 5% 16px 10px 16px;

    div {
      background-color: #f9fafb;
      width: 100%;
      text-align: center;
      margin-bottom: 64px;
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
      li {
        border-bottom: 1px solid #eaecf0;
        padding-bottom: 32px;
        margin-bottom: 36px;
        :last-child {
          border-bottom: none;
        }
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #101828;
          }
        }
        h3 {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.02em;
          color: #475467;
          max-width: 720px;
        }
      }
    }
  }
  div {
    max-width: 1216px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Base/White */

    background: #ffffff;
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 10%;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #101828;
      margin: 32px 0 8px 0;
    }
    p {
      max-width: 680px;
      text-align: center;
    }
    a {
      background-color: #101828;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 138px;
      height: 48px;
      background: #492c7c;
      border: 1px solid #492c7c;
      border-radius: 8px;

      margin: 32px 0 0 0;
      //text

      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

import styled from "styled-components";

export const ContactUlStyle = styled.section`
  padding: 14% 16px 10px 16px;
  main {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1070px) {
      justify-content: center;
      align-items: center;
    }
    p {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      @media (max-width: 1070px) {
        flex: 100%;
        margin-bottom: 98px;
      }
      ul {
        max-width: 494px;
        width: 100%;
        list-style-type: none;
        li {
          :first-child {
            margin-bottom: 60px;
          }
          margin-bottom: 34px;
          :last-child {
            margin-bottom: 0;
          }
          h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 64px;
            letter-spacing: -0.05em;
            color: #101828;
          }
          h2 {
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 38px;
            color: #101828;
          }
          h3 {
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: -0.03em;
            color: #475467;
          }
        }
      }
    }
    div {
      flex: 1;
      @media (max-width: 1070px) {
        flex: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

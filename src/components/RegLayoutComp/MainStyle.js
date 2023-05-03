import styled from "styled-components";
import { Form, ErrorMessage } from "formik";

export const MainStyle = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  main {
    background-color: #fef3f2;
    width: 466px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 17.67px;
    padding: 16px;
    background: #fef3f2;
    border: 1px solid #fecdca;
    border-radius: 12px;
    @media (max-width: 530px) {
      width: 358px;
    }
    aside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      p {
        display: flex;
        align-items: center;
        img {
          margin-right: 13px;
          cursor: pointer;
        }
      }
      img {
        cursor: pointer;
      }
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: #b42318;
      }
    }
    h5 {
      padding: 0 32px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #b42318;
    }
  }
  nav {
    padding: 0 7.5%;
    background-color: #fff;
    min-height: 80px;
    padding-top: 40px;
    @media (min-width: 800px) {
      margin-left: 50px;
    }
  }
  section {
    /* background-color: red; */
    min-height: 80vh;
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const FormContainer = styled(Form)`
  /* background-color: yellow; */
  max-width: 405px;
  padding: 10px 5px 40px 5px;

  div {
    margin-bottom: 24px;
  }
  h1 {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    margin-bottom: 12px;
  }
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #344054;
    margin-bottom: 32px;
  }
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    span {
      font-weight: 600;
    }
  }
  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
  }
  input {
    margin: 6px 0;
    background-color: #ffffff;
    width: 100%;
    padding: 10px 14px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
  }
  button {
    width: 100%;
    height: 52px;
    /* background: #492c7c; */
    border: 1px solid #492c7c;
    border-radius: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    margin-bottom: 32px;
  }
  h5 {
    text-align: right;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 24px;
    a {
      color: #492c7c;
      text-decoration: none;
    }
  }

  h4 {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    a {
      margin-left: 4px;
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #492c7c;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #98a2b3;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#d3c7eb" : "#492C7C")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none !important;
`;

import styled from "styled-components";

export const StyleBtn = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "#000" : "#4caf50"};
  color: #fff;
  font-size: larger;
  padding: 10px 30px;
  margin: 10px 0;
  //adding pseudo code
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "blue" : "#4caf50"};
  }
`;
// extend/ add more CSS to the existing CSS
export const StyleCreateBtn = styled(StyleBtn)`
  font-size: larger;
  font-weight: bolder;
  padding: 10px 90px;
  //adding pseudo code
  &:hover {
    /* background-color: red; */
  }
`;

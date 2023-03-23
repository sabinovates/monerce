import React from "react";
import { StyleBtn, StyleCreateBtn } from "./Button.style";

function Button() {
  return (
    <>
      <StyleBtn>Just click me</StyleBtn>
      <br />
      <StyleBtn variant="outline">Dont click me</StyleBtn>
      <br />
      <StyleCreateBtn as="a">Dont click me</StyleCreateBtn>
    </>
  );
}

export default Button;

import { createGlobalStyle, css } from "styled-components";
// import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap";

export const bodyStyles = css`
  font-family: "Noto Sans KR", sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;

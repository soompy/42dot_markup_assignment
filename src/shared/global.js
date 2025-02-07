import { createGlobalStyle } from "styled-components";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap";

const GlobalStyles = createGlobalStyle`
  @import url('${fontUrl}');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      font-family: 'Noto Sans KR', sans-serif;
      vertical-align: baseline;
      box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }

  body {
      transition: background-color 0.3s ease, color 0.3s ease;
      line-height: 1;
      font-family: 'Noto Sans KR', sans-serif;
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  .bold {
      font-weight: bold;
  }
`;

export default GlobalStyles;

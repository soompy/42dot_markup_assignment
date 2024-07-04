import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import layouts from "../../tokens/layouts";
import { fontSizes } from "../../tokens/fontSize";
import ListContainer from "../../components/List/ListContainer";
import { themeColors } from "../../styles/colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.boxBackgroundColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1000px;
`;

const Title = styled.h2`
  font-size: ${fontSizes.mobile.large};

  @media (min-width: ${layouts.grid.breakpoints.tablet}) {
    font-size: ${fontSizes.tablet.large};
  }

  @media (min-width: ${layouts.grid.breakpoints.pc}) {
    font-size: ${fontSizes.pc.large};
  }
`;

const AdminPage = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <button onClick={toggleTheme}>
        Toggle Theme to {theme === "light" ? "Dark" : "Light"}
      </button>
      <GlobalStyle />
      <div>
        <Container>
          <Title>Title Text</Title>

          <ListContainer items={items} />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default AdminPage;

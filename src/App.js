import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./shared/global";
import { lightTheme, darkTheme } from "./styles/theme";
import AdminPage from "./pages/admin/adminPage";

function App() {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />   
      <div>
        <AdminPage />
      </div>
    </ThemeProvider>
  );
}

export default App;

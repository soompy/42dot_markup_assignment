import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/global";
import AdminPage from "./pages/admin/adminPage";
import Checkbox from "./stories/Checkbox";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ padding: "20px" }}>
        <GlobalStyle />
        <AdminPage />

        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <Checkbox
          label=""
          checked={isChecked}
          onChange={handleCheckboxChange}
          theme={theme}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

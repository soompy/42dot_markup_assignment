import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/global";
import { lightTheme, darkTheme } from "./styles/theme";
import Input from "./stories/Input";
import Checkbox from "./stories/Checkbox";

function App() {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleReset = () => {
    console.log("Input has been reset");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ padding: "20px" }}>
        <GlobalStyle />
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <Input
          placeholder="Light Theme Input"
          theme={theme}
          resettable
          onReset={handleReset}
        />
        <Input
          placeholder="Dark Theme Input"
          theme={theme}
          resettable
          onReset={handleReset}
        />

        <Checkbox
          label="히히"
          checked={isChecked}
          onChange={handleCheckboxChange}
          theme={theme}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./shared/global";
import { lightTheme, darkTheme } from "./styles/theme";
import AdminPage from "./pages/admin/adminPage";
import Input from "./stories/Input";
import Checkbox from "./stories/Checkbox";
import Switch from "./stories/Switch";

function App() {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  const handleReset = () => {
    console.log("Input has been reset");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ padding: "20px" }}>
        <GlobalStyles />

        {/* <button onClick={toggleTheme}>
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

        <Switch
          checked={isSwitchChecked}
          onChange={handleSwitchChange}
          theme={theme}
        /> */}
        
        <AdminPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;

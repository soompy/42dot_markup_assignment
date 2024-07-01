import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import Checkbox from "./Checkbox";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,  
  argTypes: {
    theme: {
      control: { type: "radio", options: ["light", "dark"] },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.theme === "dark" ? darkTheme : lightTheme;
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

const CheckboxUi = (args) => <Checkbox {...args} />;

export const IsChecked = CheckboxUi.bind({});
IsChecked.args = {
  label: "",
  checked: true,
  onChange: () => {},
  theme: "light",
};

export const UnChecked = CheckboxUi.bind({});
UnChecked.args = {
  label: "",
  checked: false,
  onChange: () => {},
  theme: "light",
};
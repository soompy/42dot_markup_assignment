import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { themeColors } from "../styles/colors";
import { margins } from "../tokens/margins";

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  margin-right: 8px;

  &::after {
    display: inline-block;
    clear: both;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.theme.boxBackgroundColor};
    border: 3px solid ${(props) => props.theme.grayColor};
    border-radius: 5px;
  }

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.checked &&
    css`
      &::after {
        background-color: ${(props) => props.theme.primaryColor};
        border-color: ${(props) => props.theme.checkedgrayColor};
      }
    `}
`;

const CheckboxInput = styled.input`
  opacity: 0;
`;

const CheckboxText = styled.span`
  font-size: 18px;
  margin-left: ${(props) => margins[props.marginSize] || "4px"};
`;

const Checkbox = ({ label, checked, onChange, theme, marginSize }) => {
  const colors = themeColors[theme];

  return (
    <CheckboxContainer theme={colors} checked={checked}>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CheckboxText marginSize={marginSize}>{label}</CheckboxText>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  marginSize: PropTypes.oneOf(["small", "medium", "large", "xLarge"]),
};

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Checkbox UI",
      },
    },
    layout: "centered",
  },
  argTypes: {
    theme: {
      control: { type: "radio", options: ["light", "dark"] },
    },
    checked: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "onChange" },
    marginSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "xLarge"],
      },
    },
  },
};

export const IsChecked = (args) => (
  <ThemeProvider theme={args.theme === "dark" ? darkTheme : lightTheme}>
    <Checkbox {...args} />
  </ThemeProvider>
);
IsChecked.args = {
  label: "",
  checked: true,
  onChange: () => {},
  theme: "light",
};

export const UnChecked = (args) => (
  <ThemeProvider theme={args.theme === "dark" ? darkTheme : lightTheme}>
    <Checkbox {...args} />
  </ThemeProvider>
);
UnChecked.args = {
  label: "",
  checked: false,
  onChange: () => {},
  theme: "light",
};

export const DarkTheme = (args) => (
  <ThemeProvider theme={args.theme === "dark" ? darkTheme : lightTheme}>
    <Checkbox {...args} />
  </ThemeProvider>
);
DarkTheme.args = {
  label: "",
  checked: false,
  onChange: () => {},
  theme: "dark",
};

export const DarkThemeChecked = (args) => (
  <ThemeProvider theme={args.theme === "dark" ? darkTheme : lightTheme}>
    <Checkbox {...args} />
  </ThemeProvider>
);
DarkThemeChecked.args = {
  label: "",
  checked: true,
  onChange: () => {},
  theme: "dark",
};

import React from "react";
import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Button UI",
      },
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    color: {
      control: {
        type: "select",
        options: ["primaryColor", "secondaryColor", "boxBackgroundColor"],
      },
    },
    theme: {
      control: { type: "select", options: ["light", "dark"] },
    },
    textColor: {
      control: "color",
    },
    border: {
      control: "boolean",
    },
  },
};

const ButtonCp = (args) => <Button {...args}>Button</Button>;

export const PrimarySmall = ButtonCp.bind({});
PrimarySmall.args = {
  size: "small",
  color: "primaryColor",
  theme: "light",
  textColor: "boxBackgroundColor",
  border: false,
};

export const PrimaryMedium = ButtonCp.bind({});
PrimaryMedium.args = {
  size: "medium",
  color: "primaryColor",
  theme: "light",
  textColor: "boxBackgroundColor",
  border: false,
};

export const PrimaryLarge = ButtonCp.bind({});
PrimaryLarge.args = {
  size: "large",
  color: "primaryColor",
  theme: "light",
  textColor: "boxBackgroundColor",
  border: false,
};

export const SecondarySmall = ButtonCp.bind({});
SecondarySmall.args = {
  size: "small",
  color: "secondaryColor",
  theme: "light",
  textColor: "textColor",
  border: false,
};

export const SecondaryMedium = ButtonCp.bind({});
SecondaryMedium.args = {
  size: "medium",
  color: "secondaryColor",
  theme: "light",
  textColor: "textColor",
  border: false,
};

export const SecondaryLarge = ButtonCp.bind({});
SecondaryLarge.args = {
  size: "large",
  color: "secondaryColor",
  theme: "light",
  textColor: "textColor",
  border: false,
};

export const BorderLarge = ButtonCp.bind({});
BorderLarge.args = {
  size: "small",
  color: "boxBackgroundColor",
  theme: "light",
  textColor: "textColor",
  border: true,
  borderColor: "lightGrayColor",
};

export const PrimarySmallDark = ButtonCp.bind({});
PrimarySmallDark.args = {
  size: "small",
  color: "primaryColor",
  theme: "dark",
  textColor: "boxBackgroundColor",
  border: true,
};

export const SecondaryMediumDark = ButtonCp.bind({});
SecondaryMediumDark.args = {
  size: "medium",
  color: "secondaryColor",
  theme: "dark",
  textColor: "boxBackgroundColor",
  border: true,
};

export const BorderLargeDark = ButtonCp.bind({});
BorderLargeDark.args = {
  size: "large",
  color: "boxBackgroundColor",
  theme: "dark",
  textColor: "textColor",
  border: true,
  borderColor: "lightGrayColor",
};

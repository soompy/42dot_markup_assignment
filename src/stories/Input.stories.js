import React from "react";
import Input from "./Input";

export default {
  title: "Design System/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "input UI",
      },
    },
  },
};

const InputBox = (args) => <Input {...args} />;

export const Enabled = InputBox.bind({});
Enabled.args = {
  placeholder: "텍스트를 입력하세요.",
};

export const Hover = InputBox.bind({});
Hover.args = {
  placeholder: "텍스트를 입력하세요.",
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Pressed = InputBox.bind({});
Pressed.args = {
  placeholder: "텍스트를 입력하세요.",
};
Pressed.parameters = {
  pseudo: { active: true },
};

export const Disabled = InputBox.bind({});
Disabled.args = {
  placeholder: "텍스트를 입력하세요.",
  disabled: true,
};

export const WithValidation = InputBox.bind({});
WithValidation.args = {
  placeholder: "텍스트를 입력하세요.",
  isValid: false,
};

export const WithResetButton = InputBox.bind({});
WithResetButton.args = {
  placeholder: "텍스트를 입력하세요.",
  resettable: true,
};

export const DarkTheme = InputBox.bind({});
DarkTheme.args = {
  placeholder: "텍스트를 입력하세요.",
  theme: "dark",
};

export const FocusState = InputBox.bind({});
FocusState.args = {
  placeholder: "텍스트를 입력하세요.",
};
FocusState.parameters = {
  pseudo: { focus: true },
};
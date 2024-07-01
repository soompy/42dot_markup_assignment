import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
};

const CheckboxUi = ({ label, ...args }) => <Checkbox label={label} {...args} />;

export const IsChecked = CheckboxUi.bind({});
IsChecked.args = {
  label: '',
  checked: true,
  onChange: () => {},
};

export const UnChecked = CheckboxUi.bind({});
UnChecked.args = {
  label: '',
  checked: false,
  onChange: () => {},
};

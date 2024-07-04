import React, { useState } from 'react';
import Switch from '../components/Switch/Switch';

export default {
  title: 'Design System/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "switch UI",
      },
    },
    layout: 'centered',
  },
};

const SwitchBtn = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return <Switch {...args} checked={checked} onChange={handleChange} />;
};

export const Light = SwitchBtn.bind({});
Light.args = {
  theme: 'light',
  checked: false,
};

export const Dark = SwitchBtn.bind({});
Dark.args = {
  theme: 'dark',
  checked: false,
};

// checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

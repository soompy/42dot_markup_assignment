import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themeColors } from "../styles/colors";

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
    border: 3px solid ${(props) => props.theme.boxBorderColor};
    border-radius: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const CheckboxInput = styled.input`
  opacity: 0;
`;

const CheckboxText = styled.span`
  font-size: 18px;
  margin-left: 4px;
`;

const Checkbox = ({ label, checked, onChange, theme }) => {
  const colors = themeColors[theme];

  return (
    <CheckboxContainer theme={colors}>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CheckboxText>{label}</CheckboxText>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Checkbox;

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../../styles/colors";
import { margins } from "../../tokens/margins";

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  margin-right: ${(props) => margins[props.marginSize] || "8px"};

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
  margin-left: ${(props) => margins[props.marginSize] || "6px"};
`;

export const Checkbox = ({ label, checked, onChange, theme, marginSize }) => {
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

export default Checkbox;

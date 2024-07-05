import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../../styles/colors";
import { margins } from "../../tokens/margins";

const CheckboxContainer = styled(({ marginSize, fillColor, ...rest }) => (
  <label {...rest} />
))`
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
        border-color: ${(props) => props.theme.checkedGrayColor};
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 -0.5 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='si-glyph si-glyph-checked' fill='${encodeURIComponent(props.fillColor || '#ffffff')}'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Ctitle%3E1228%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M3.432,6.189 C3.824,5.798 4.455,5.798 4.847,6.189 L6.968,8.31 L13.147,2.131 C13.531,1.747 14.157,1.753 14.548,2.144 L16.67,4.266 C17.06,4.657 17.066,5.284 16.684,5.666 L7.662,14.687 C7.278,15.07 6.651,15.064 6.261,14.673 L1.311,9.723 C0.92,9.333 0.92,8.7 1.311,8.31 L3.432,6.189 Z' fill='${encodeURIComponent(props.fillColor || '#ffffff')}' class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center center;
      }
    `}
`;

const CheckboxInput = styled.input`
  opacity: 0;
`;

const CheckboxText = styled(({ marginSize, ...rest }) => <span {...rest} />)`
  font-size: 18px;
  margin-left: ${({ marginSize }) => margins[marginSize] || "6px"};
`;

const Checkbox = ({ label, checked, onChange, theme, marginSize, fillColor }) => {
  const colors = themeColors[theme];

  return (
    <CheckboxContainer theme={colors} checked={checked} marginSize={marginSize} fillColor={fillColor}>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CheckboxText theme={colors} marginSize={marginSize}>
        {label}
      </CheckboxText>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  marginSize: PropTypes.oneOf(["small", "medium", "large", "xLarge"]),
  fillColor: PropTypes.string, // Ensure fillColor is defined here
};

export default Checkbox;

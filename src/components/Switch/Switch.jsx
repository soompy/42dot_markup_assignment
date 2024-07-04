import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../../styles/colors";
import { margins } from "../../tokens/margins";

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  margin-right: ${(props) => margins[props.marginSize || "medium"]};;

  &:last-of-type {
    margin-right: 0;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 30px;
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 20px;
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.boxBackgroundColor};
    top: 4px;
    left: 4px;
    transition: transform 0.2s;
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: ${(props) => props.theme.primaryColor};

      &::before {
        transform: translateX(34px);
        background-color: ${(props) => props.theme.boxBackgroundColor};
      }
    `}
`;

export const Switch = ({ checked, onChange, theme }) => {
  const colors = themeColors[theme];

  return (
    <SwitchContainer theme={colors}>
      <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
      <Slider checked={checked} theme={colors} />
    </SwitchContainer>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Switch;

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../styles/colors";

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  margin-right: 8px;

  &:last-child {
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
  width: 34px;
  height: 20px;
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 20px;
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.boxBackgroundColor};
    top: 2px;
    left: 2px;
    transition: transform 0.2s;
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: ${(props) => props.theme.primaryColor};

      &::before {
        transform: translateX(14px);
        background-color: ${(props) => props.theme.boxBackgroundColor};
      }
    `}
`;

const Switch = ({ checked, onChange, theme }) => {
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

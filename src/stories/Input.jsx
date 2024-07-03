import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../styles/colors";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.boxBackgroundColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 4px;
  margin-left: 12px;

  &:hover {
    border-color: ${(props) => props.theme.primaryColor};
    box-shadow: 2px 4px 4px -5px ${(props) => props.theme.lightGrayColor};
  }

  &:focus {
    border-color: ${(props) => props.theme.primaryColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.grayColor};
    border-color: ${(props) => props.theme.lightGrayColor};
  }

  &:first-child {
    margin-left: 0;
  }

  ${(props) =>
    props.isValid !== undefined &&
    css`
      border-color: ${props.isValid
        ? props.theme.validColor
        : props.theme.invalidColor};
    `}
`;

const ResetButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  background: ${(props) =>
    props.isValid === undefined
      ? props.theme.primaryColor
      : props.isValid
        ? props.theme.validColor
        : props.theme.invalidColor};
  color: ${(props) => props.theme.grayColor};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const ValidationMessage = styled.span`
  display: block;
  color: ${(props) =>
    props.isValid ? props.theme.validColor : props.theme.invalidColor};
  font-size: 12px;
  margin-top: 6px;
`;

export const Input = ({
  placeholder = "텍스트를 입력하세요.",
  disabled = false,
  isValid,
  resettable = false,
  onReset = null,
  theme = "light",
  validationMessage = "필수 입력 항목입니다.",
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
    if (onReset) onReset();
  };

  const colors = themeColors[theme] || themeColors.light;

  return (
    <InputContainer theme={colors}>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
        isValid={isValid}
        theme={colors}
      />
      {resettable && value && (
        <ResetButton
          type="button"
          onClick={handleReset}
          isValid={isValid}
          theme={colors}
        >
          X
        </ResetButton>
      )}
      {isValid !== undefined && (
        <ValidationMessage isValid={isValid} theme={colors}>
          {isValid ? "" : validationMessage}
        </ValidationMessage>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  resettable: PropTypes.bool,
  onReset: PropTypes.func,
  theme: PropTypes.oneOf(["light", "dark"]),
  validationMessage: PropTypes.string,
};

export default Input;

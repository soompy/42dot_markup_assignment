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
  border: 1px solid ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.boxBackgroundColor};
  border-radius: 4px;
  margin-right: 12px;

  &:hover {
    border-color: ${(props) => props.theme.primaryColor};
    box-shadow: 2px 4px 4px -5px ${(props) => props.theme.lightGrayColor};
  }

  &:focus {
    border-color: ${(props) => props.theme.primaryColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.grayColor};
  }

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.isValid !== undefined &&
    css`
      border-color: ${props.isValid ? "green" : "red"};
    `}
`;

const ResetButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const ValidationMessage = styled.span`
  display: block;
  color: ${(props) => (props.isValid ? "green" : "red")};
  font-size: 12px;
  margin-top: 6px;
`;

const Input = ({
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
      />
      {resettable && value && (
        <ResetButton type="button" onClick={handleReset}>
          X
        </ResetButton>
      )}
      {isValid !== undefined && (
        <ValidationMessage isValid={isValid}>
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

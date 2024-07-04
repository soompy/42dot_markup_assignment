import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../../styles/colors";

const sizes = {
  small: css`
    padding: 6px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 12px 24px;
    font-size: 20px;
  `,
};

const StyledButton = styled.button.attrs(
  ({ border, textColor, borderColor }) => ({
    border: border ? "true" : "false",
    style: {
      color: textColor,
      borderColor: borderColor,
    },
  })
)`
  border: ${({ border }) => (border === "true" ? "2px solid" : "none")};
  border-radius: 8px;
  cursor: pointer;
  ${({ size }) => sizes[size]}
  background-color: ${({ color, theme }) => theme[color]};
  border-color: ${({ borderColor }) => borderColor};

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  size = "medium",
  color = "primaryColor",
  theme = "light",
  textColor = "",
  border = false,
  borderColor,
  children,
  ...props
}) => {
  const colors = themeColors[theme];

  return (
    <StyledButton
      size={size}
      color={color}
      theme={colors}
      style={{ color: textColor || colors.boxBackgroundColor }}
      border={border ? "true" : "false"}
      borderColor={borderColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  textColor: PropTypes.string,
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { themeColors } from "../../styles/colors";
import { fontSizes } from "../../tokens/fontSize";
import { margins } from "../../tokens/margins";

const sizes = {
  small: css`
    width: 60px;
    height: 30px;
    font-size: ${fontSizes.pc.small};
  `,
  medium: css`
    width: 100px;
    height: 45px;
    font-size: ${fontSizes.pc.medium};
  `,
  large: css`
    width: 130px;
    height: 50px;
    font-size: ${fontSizes.pc.large};
  `,
};
const StyledButton = styled.button`
  margin-left: ${(props) => margins[props.marginSize || "medium"]};
  border: ${(props) =>
    props.hasBorder ? `2px solid ${props.borderColor}` : "none"};
  border-radius: 8px;
  cursor: pointer;
  ${({ size }) => sizes[size]}
  background-color: ${({ bgColor, theme }) => theme[bgColor] || bgColor};
  color: ${({ textColor, theme }) => textColor || theme.boxBackgroundColor};
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    opacity: 0.9;
    border-color: ${({ borderColor }) => borderColor};
  }

  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border-color: ${({ borderColor }) => borderColor};
    `}
`;

const Button = ({
  size = "medium",
  color = "primaryColor",
  theme = "light",
  textColor = "",
  border = false,
  borderColor = "",
  children,
  ...props
}) => {
  const colors = themeColors[theme];

  return (
    <StyledButton
      size={size}
      bgColor={color}
      theme={colors}
      hasBorder={border}
      borderColor={borderColor}
      textColor={textColor}
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

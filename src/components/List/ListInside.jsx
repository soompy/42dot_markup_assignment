import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { paddings } from "../../tokens/paddings";
import layouts from "../../tokens/layouts";

const ListInsideWrapper = styled.ul`
  padding: ${(props) => paddings[props.paddingSize || "medium"]};
  padding-left: ${(props) => paddings[props.paddingSize || "xLarge"]};
  color: ${(props) => props.theme.textColor};

  @media (max-width: ${layouts.grid.breakpoints.tablet}) {
    display: none;
  }
`;

const ListInside = ({ children, paddingSize }) => {
  return (
    <ListInsideWrapper paddingSize={paddingSize}>{children}</ListInsideWrapper>
  );
};

ListInside.propTypes = {
  paddingSize: PropTypes.oneOf(["small", "medium", "large", "xLarge"]),
  children: PropTypes.node.isRequired,
};

export default ListInside;

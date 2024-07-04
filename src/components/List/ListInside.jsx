import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { paddings } from "../../tokens/paddings";

const ListInsideWrapper = styled.ul`
  padding: ${(props) => paddings[props.paddingSize || "medium"]};
  padding-left: ${(props) => paddings[props.paddingSize || "xLarge"]};
  color: ${(props) => props.theme.textColor};
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

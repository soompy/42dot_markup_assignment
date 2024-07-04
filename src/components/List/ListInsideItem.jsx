import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { paddings } from "../../tokens/paddings";
import { fontSizes } from "../../tokens/fontSize";

const ListInsideText = styled.li`
  font-size: ${fontSizes.pc.small};
  padding-top: ${(props) => paddings[props.paddingSize || "medium"]};

  &:first-child {
    padding-top: 0;
  }
`;

const ListInsideItem = ({ text }) => {
  return <ListInsideText>{text}</ListInsideText>;
};

ListInsideItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListInsideItem;

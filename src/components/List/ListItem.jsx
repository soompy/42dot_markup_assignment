import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import layouts from "../../tokens/layouts";

const ListItemWrapper = styled.li`
  display: grid;
  width: ${layouts.grid.columnWidths[3]};
  padding: ${layouts.grid.gutter};
  background-color: ${(props) => props.theme.grayColor};
  color: ${(props) => props.theme.textColor};

  @media (min-width: ${layouts.grid.breakpoints.tablet}) {
    width: ${layouts.grid.columnWidths[2]};
  }

  @media (min-width: ${layouts.grid.breakpoints.pc}) {
    width: ${layouts.grid.columnWidths[1]};
  }
`;

export const ListItem = ({ item }) => {
  return <ListItemWrapper>{item}</ListItemWrapper>;
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,  
};

export default ListItem;

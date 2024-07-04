import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import styled from "styled-components";
import layouts from "../../tokens/layouts";

const ListContainerWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${layouts.grid.gutter};
  width; 100%;

  @media (max-width: ${layouts.grid.breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ListContainer = ({ items, checkedItems, onItemChange, theme }) => (
  <ListContainerWrapper>
    {items.map((item) => (
      <ListItem
        key={item}
        item={item}
        checked={checkedItems[item]}
        onChange={onItemChange}
        theme={theme}
      />
    ))}
  </ListContainerWrapper>
);

ListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkedItems: PropTypes.objectOf(PropTypes.bool).isRequired,
  onItemChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default ListContainer;

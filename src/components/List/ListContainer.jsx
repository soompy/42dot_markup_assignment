import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const ListContainer = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </ul>
);

ListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListContainer;

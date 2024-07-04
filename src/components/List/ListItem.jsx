import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import layouts from "../../tokens/layouts";
import Checkbox from "../Checkbox/Checkbox";
import { paddings } from "../../tokens/paddings";
import ListInside from "./ListInside";
import ListInsideItem from "./ListInsideItem";

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

const ListHead = styled.div`
  padding-bottom: ${(props) => paddings[props.paddingSize || "medium"]};
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

export const ListItem = ({ item, checked, onChange, theme, paddingSize }) => {
  return (
    <ListItemWrapper>
      <ListHead className="bold" paddingSize={paddingSize}>
        <Checkbox
          label={item}
          checked={checked}
          onChange={() => onChange(item)}
          theme={theme}
          marginSize="small"          
        />
      </ListHead>
      <ListInside paddingSize={paddingSize}>
        <ListInsideItem text="권한 조회"></ListInsideItem>
        <ListInsideItem text="관리자 등록"></ListInsideItem>
        <ListInsideItem text="권한 수정"></ListInsideItem>
        <ListInsideItem text="권한 삭제"></ListInsideItem>
      </ListInside>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  paddingSize: PropTypes.oneOf(["small", "medium", "large", "xLarge"]),
};

export default ListItem;

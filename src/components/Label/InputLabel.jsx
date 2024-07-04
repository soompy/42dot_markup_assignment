import React from "react";
import styled from "styled-components";
import { paddings } from "../../tokens/paddings";
import { fontSizes } from "../../tokens/fontSize";

const LabelWrapper = styled.label`
  display: inline-flex;
  padding-bottom: ${(props) => paddings[props.paddingsSize || "medium"]};
`;

const Strong = styled.strong`
  font-size: ${fontSizes.pc.medium};
  font-weight: bold;
`;

const Em = styled.em`
  color: ${(props) => props.theme.invalidColor};
`;

const InputLabel = ({ labelText }) => {
  return (
    <LabelWrapper>
      <Strong>{labelText}</Strong>
      <Em>&#x002A;</Em>
    </LabelWrapper>
  );
};

export default InputLabel;

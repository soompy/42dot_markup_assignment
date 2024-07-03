import React from "react";
import { fontSizes } from "../tokens";

export default {
  title: "Design Tokens/Typography",
};

export const FontSizes = () => (
  <div>
    {Object.entries(fontSizes).map(([key, size]) => (
      <div key={key} style={{ fontSize: size }}>
        {key}: {size}
      </div>
    ))}
  </div>
);

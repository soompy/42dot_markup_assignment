import React from "react";
import { fontSizes } from "../tokens";

export default {
  title: "Design Tokens/Typography",
};

export const FontSizes = () => (
  <div>
    {Object.keys(fontSizes).map((device) => (
      <div key={device} style={{ marginBottom: "16px" }}>
        <h3>{device}</h3>
        {Object.entries(fontSizes[device]).map(([key, size]) => (
          <div key={key} style={{ fontSize: size }}>
            {key}: {size}
          </div>
        ))}
      </div>
    ))}
  </div>
);

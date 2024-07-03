import React from 'react';
import { margins } from '../tokens/margins';
import { paddings } from '../tokens/paddings';

export default {
  title: 'Design Tokens/Margin and Padding',
};

export const MarginPadding = () => (
  <div>
    <div style={{ margin: margins.small, padding: paddings.small, background: '#e3f2fd' }}>
      Small Margin and Padding
    </div>
    <div style={{ margin: margins.medium, padding: paddings.medium, background: '#bbdefb' }}>
      Medium Margin and Padding
    </div>
    <div style={{ margin: margins.large, padding: paddings.large, background: '#90caf9' }}>
      Large Margin and Padding
    </div>
    <div style={{ margin: margins.xLarge, padding: paddings.xLarge, background: '#64b5f6' }}>
      Extra Large Margin and Padding
    </div>
  </div>
);

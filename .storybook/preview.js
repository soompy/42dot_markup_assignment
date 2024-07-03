/** @type { import('@storybook/react').Preview } */
import { fontSizes } from "../src/tokens";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designTokens: {
      fontSizes,
    },
  },
};

export default preview;

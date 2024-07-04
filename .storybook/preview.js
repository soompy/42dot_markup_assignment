import { fontSizes } from "../src/tokens";
import GlobalStyles from "../src/shared/global";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

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

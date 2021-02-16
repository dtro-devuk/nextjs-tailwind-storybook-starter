// Storybook Addons
// ============================================
// Styles that need to be globally accessible to components
import { configure, addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { CUSTOM_VIEWPORTS } from "./helpers/custom-viewports";
import * as nextImage from "next/image";
import { GlobalStyles, theme } from "twin.macro";

import customTheme from "./helpers/customTheme";

import Layout from "./layout";

import addonAPI from "@storybook/addons";

let firstLoad = true;
addonAPI.register("dtro-devuk/welcome-addon", (storybookAPI) => {
  storybookAPI.onStory((kind, story) => {
    // when you enter a story, if you are just loading storybook up, default to a specific kind/story.
    if (firstLoad) {
      firstLoad = false; // make sure to set this flag to false, otherwise you will never be able to look at another story.
      storybookAPI.selectStory("Overview", "Welcome");
    }
  });
});

// Storybook Decorators
// ============================================

const appDecorator = (storyFn) => {
  return <Layout>{storyFn()}</Layout>;
};

addDecorator(appDecorator);

// Storybook Parameters
// ============================================

// Add a11y support
addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    hierarchyRootSeparator: /\|/,
  },
});

// Configure some viewports

addParameters({
  viewport: {
    viewports: {
      ...CUSTOM_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "desktop",
  },
});

// Option defaults:
addParameters({
  options: {
    downPanelInRight: true,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "right",
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    // theme: customTheme,
    storySort: {
      method: "alphabetical",
      order: ["Overview", "Atomic Design", "Pages", "Components"],
      locales: "",
    },
    //storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
});

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "frost",
    values: [
      {
        name: "pinot-noir",
        value: `linear-gradient(180deg, ${theme`colors.pinot`}, ${theme`colors.noir`})`,
      },
      {
        name: "deep-space",
        value: `linear-gradient(180deg, ${theme`colors.deep`}, ${theme`colors.space`})`,
      },
      {
        name: "purple-bliss",
        value: `linear-gradient(180deg, ${theme`colors.purple`}, ${theme`colors.bliss`})`,
      },
      {
        name: "moonlit-asteroid",
        value: `linear-gradient(180deg, ${theme`colors.moonlight`}, ${theme`colors.asteroid`})`,
      },
      {
        name: "frost",
        value: `linear-gradient(180deg, ${theme`colors.frostLight`}, ${theme`colors.frostDark`})`,
      },
      {
        name: "coal",
        value: `linear-gradient(180deg, ${theme`colors.coalLight`}, ${theme`colors.coalDark`})`,
      },
      {
        name: "witching-hour",
        value: `linear-gradient(180deg, ${theme`colors.witching`}, ${theme`colors.hour`})`,
      },
    ],
  },
};

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

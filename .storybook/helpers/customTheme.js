import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "blue",
  colorSecondary: "purple",

  // UI
  appBg: "silver",
  appContentBg: "white",
  appBorderColor: "darkblue",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Merriweather Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "darkblue",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "darkblue",
  barSelectedColor: "purple",
  barBg: "silver",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "dtro-devuk storybook",
  brandUrl: "https://github.com/dtro-devuk",
  brandImage: "/images/logo300-profile-dtro-devuk.png",
});

const {
  spacing,
  fontFamily,
  colors,
  backgroundColor,
  borderColor,
} = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // This is not present inside the default configuration
  // but it's good to build your production application
  // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", //false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Oswald Variable, Georgia,  Arial", fontFamily.sans],
      serif: ["Merriweather Sans", fontFamily.serif],
      header: ["Grandstander Variable"],
      heading: ["Gandstander Variable"],
      body: ["Merriweather Sans"],
    },

    extend: {
      fontFamily: {
        "Grandstander-VariableFont": ["Grandstander Variable"],
      },
      backgroundColor: {
        /** Button variants */
        default: "#262637",
        defaultHover: "#00DEB6",
        primary: "#00DEB6",
        primaryHover: colors.white,
        secondary: colors.white,
        secondaryHover: "#00DEB6", //Green
        /** Programming Language colors */

        progAzure: "#0078D4",
        progDotNetAndCore: "#512BD4",
        progGatsby: "#663399",
        progGraphQL: "#171E26",
        progJavaScript: "#FCDC00", //'#f0db4f',
        progNativeScript: "#3C5AFD",
        progNextjs: "#111111",
        progNodejs: "#026E00",
        progMDX: "#f9ac00",
        progPowerBI: "#F2C811",
        progReactjs: "#282C34",
        progMySQL: "#00758F",
        progStorybook: "#ff4785",
        progTailwindCSS: "#06b6d4",
        progTypeScript: "#2775c3",
        defaultLanguage: "#22262f",
      },
      borderColor: {
        /** Button variants */
        primary: "#262637", // Dark Purple
        secondary: "#00DEB6", //Green
        secondaryHover: "#262637",

        /** Programming Language colors */
        progTailwindCSS: "#06b6d4",
      },
      colors: {
        /** Button Variants colors */
        default: colors.white,
        primary: "#262637",
        primaryHover: "#00DEB6",

        secondary: "#00DEB6",
        secondaryHover: colors.white,

        tertiary: colors.gray,

        /** Programming Language colors */

        progGraphQL: "#E00097",
        progReactjs: "#61DAFB",
        progTailwindCSS: "#111827",
        progTypescript: "#fff",
        progMySQL: "#F29221",
        progBlack: "#000000",
        defaultLanguage: "#fff",

        /** Background Colors Language colors */

        pinot: "#4b6cb7",
        noir: "#182848",
        purple: "#360033",
        bliss: "#0b8793",
        deep: "#000000",
        space: "#434343",
        frostLight: "#000428",
        frostDark: "#004e92",
        coalLight: "#eb5757",
        coalDark: "#000000",
        moonlight: "#0f2027",
        asteroid: "#2c5364",
        witching: "#c31432",
        hour: "#240b36",

        coal: {
          100: colors.coalLight,
          900: colors.coalDark,
        },
        gold: {
          light: "#ddbf5f",
          base: "#d4af37",
          dark: "#aa8c2c",
        },
        blue: {
          100: "#EBF2FD",
          200: "#CDDFFA",
          300: "#AFCBF6",
          400: "#72A5F0",
          500: "#367EE9",
          600: "#3171D2",
          700: "#204C8C",
          800: "#183969",
          900: "#102646",
        },
        monochrome: {
          900: "#333",
          800: "#444",
          700: "#666",
          600: "#999",
          500: "#ddd",
          400: "#eee",
          300: "#f3f3f3",
          200: "#f8f8f8",
          100: "#fff",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.red.900"),
            },
            "h2,h3,h4": {
              color: theme("colors.blue.500"),
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.blue.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
    variants: {
      typography: ["dark"],
      extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
  },
};

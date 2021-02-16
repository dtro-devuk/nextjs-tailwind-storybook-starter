import tw, { css, styled, theme } from "twin.macro";

const ButtonContainer = styled.button(
  ({ variant = "default", disabled, isSmall = false }) => [
    // The common button styles added with the tw import
    tw`h-12 min-h-0 px-5 m-2 w-14 min-w-min`,
    tw`truncate focus:outline-none focus:shadow-lg`,
    tw`antialiased font-semibold text-center `,
    tw`border-none rounded-lg bg-default active:bg-yellow-300 hover:bg-defaultHover`,
    tw`px-8 py-2 text-lg rounded focus:outline-none`,
    tw`transition-transform duration-75 transform`,
    tw`transition-colors duration-150`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(scale-105 text-white)`,

    // The theme import can supply values from your tailwind.config.js
    css`
      color: ${theme`colors.white`};
    `,
    // Use props to conditionally style your components
    variant === "primary" && [
      tw`uppercase bg-primary text-primary `,
      tw`hover:bg-primaryHover hover:text-primaryHover hover:border-black hover:border-2 hover:border-solid`,
    ],

    // Combine regular css with tailwind classes within backticks
    variant === "secondary" && [
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      `,
      tw`bg-secondary text-secondary`,
      tw`border-2 border-solid hover:bg-secondaryHover hover:text-secondaryHover border-secondary`,
    ],

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`,

    disabled && tw`disabled:opacity-75 disabled:cursor-not-allowed`,

    variant === "link" && [
      tw`text-yellow-500 bg-transparent border-none focus:outline-none`,
    ],
  ]
);

export default ButtonContainer;

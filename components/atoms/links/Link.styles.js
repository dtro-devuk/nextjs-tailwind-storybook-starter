import AnchorLink from './Link';
import tw, { css, styled, theme } from 'twin.macro';

const StyledLink = styled.a(({ inline, disabled, visited, size }) => [
  tw`text-blue-600 hover:text-blue-600  hover:font-semibold active:text-yellow-600 visited:text-purple`,
  tw`no-underline hover:underline focus:underline`,
  tw`transform transition-transform duration-75`,
  tw`transition-colors duration-150`,
  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(text-yellow-400)`,
  // The theme import can supply values from your tailwind.config.js
  // css`
  //   color: ${theme`colors.white`};
  // `,
  disabled &&
    tw`disabled:opacity-75 no-underline hover:no-underline cursor-not-allowed hover:text-blue-600 hover:font-normal `,
  inline && tw`inline`,
  visited && tw`visited:text-purple underline font-bold`,
  size === 'sm' && tw`text-sm`,
  size === 'lg' && tw`text-lg`,
  size === 'xl' && tw`text-xl`,
]);

export default StyledLink;

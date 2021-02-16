import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Logo = ({
  accent = 'black',
  color = 'black',
  hoverColor = 'blue-500',
  text,
  size = '2xl',
  fontFamily,
}) => (
  <LogoContainer
    className={`hover:text-${hoverColor} text-${color} lg:text-${size}
    md:text-xl sm:text-md text-sm`}
  >
    <Tag className={`text-${accent}`} data-testid="OpeningTag">
      &lt;
    </Tag>
    <Tag className={`font-${fontFamily}`}>{text}</Tag>
    <Tag className={`text-${accent}`} data-testid="ClosingTag">
      /&gt;
    </Tag>
  </LogoContainer>
);

const LogoContainer = tw.div`cursor-pointer font-header font-black tracking-wide `;

const Tag = tw.span``;

Logo.propTypes = {
  /** The colour of the opening and closing tags. */
  accent: PropTypes.string,
  /** The colour of main text. */
  color: PropTypes.string,
  /** The colour when you hover over the logo. */
  hoverColor: PropTypes.string,
  /** The main text of the logo for example, your name. */
  text: PropTypes.string.isRequired,
  /** The size of the main text  */
  size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl']),
  /** The font family of the main text  */
  fontFamily: PropTypes.string,
};

export default Logo;

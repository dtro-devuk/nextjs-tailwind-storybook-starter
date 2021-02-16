import React from 'react';
import Link from 'next/link';
import { bool, func, node, string, oneOf } from 'prop-types';
import StyledLink from './Link.styles.js';

const AnchorLink = (props) => {
  const {
    children,
    className,
    inline,
    disabled,
    visited,
    href,
    onClick,
    target,
    size,
    value,
  } = props;

  let to = '/';

  if (href ? (to = href) : to);

  return (
    <Link {...props} href={to} disabled={disabled} target={target}>
      <StyledLink
        disabled={disabled}
        visited={visited}
        inline={inline}
        size={size}
        href={to}
        className={className}
        onClick={onClick}
        target={target}
        rel={target === `_blank` ? `noopener norefferer` : null}
        value={value}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

// Expected prop values
AnchorLink.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: node.isRequired,
  /**
   * Provide a custom className to be applied to the containing `<a>` node
   */
  className: string,
  /**
   * Specify if the control caption text
   */
  // caption: string.isRequired,
  /**
   * Specify if the control should be disabled, or not
   */
  disabled: bool.isRequired,
  /**
   * Provide the `href` attribute for the `<a>` node
   */
  href: string,
  /**
   * Provide the `onClick` attribute for the `<a>` node
   */
  onClick: func,
  /**
   * Provide the `target` attribute for the `<a>` node
   */
  target: string,
  /**
   * Specify whether you want the inline version of this control
   */
  inline: bool,
  /**
   * Specify whether you want the link to receive visited styles after the link has been clicked
   */
  visited: bool,
  /**
   * Specify the size of the Link. Currently supports either `sm`,`lg` or`xl` as an option.
   */
  size: oneOf(['sm', 'lg', 'xl']),
};

AnchorLink.defaultProps = {
  disabled: false,
};

export default AnchorLink;

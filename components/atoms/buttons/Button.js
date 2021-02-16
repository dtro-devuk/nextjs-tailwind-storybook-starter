import React from "react";
import { bool, func, node, string } from "prop-types";
import ButtonContainer from "./Button.styles.js";

import AnchorLink from "../links/Link";

const Button = (props) => {
  const { children, label, disabled, type, onClick } = props;
  const { variant, isSmall, value } = props;
  const { href, target } = props;

  if (!href)
    return (
      <ButtonContainer
        {...props}
        disabled={disabled}
        variant={variant}
        isSmall={isSmall}
        onClick={onClick}
        value={value ? value : children}
        type={type}
        role="button"
        aria-label="button"
      >
        {label}
        {children}
      </ButtonContainer>
    );

  return (
    <ButtonContainer variant="link" disabled={disabled}>
      <AnchorLink {...props} href={href} target={target}>
        {label}
        {children}
      </AnchorLink>
    </ButtonContainer>
  );
};

// Expected prop values
Button.propTypes = {
  children: node,
  label: string.isRequired,
  disabled: bool,
  type: string,
  onClick: func,
  variant: string,
  isSmall: bool,
  href: string,
  target: string,
};

// Default prop values
Button.defaultProps = {
  disabled: false,
  type: "button",
  isSmall: false,
};

export default Button;

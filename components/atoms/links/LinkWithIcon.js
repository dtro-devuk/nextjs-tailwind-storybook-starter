import React from "react";
import Link from "next/link";
import PropTypes, { string, bool } from "prop-types";
import tw, { styled } from "twin.macro";

const LinkWithIcon = ({
  icon,
  label = "Icon link",
  url = "/",
  disabled = false,
  className = "text-2xl",
}) => (
  <Link disabled={disabled} href={url || "/"}>
    <A
      className={className || ""}
      disabled={disabled}
      key={url || "/"}
      href={disabled ? "" : url}
      // href={url || '/'}
      role="Icon"
      aria-label={`Opens link to ${icon} page`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <I disabled={disabled}>{icon}</I>
      <S disabled={disabled}>{label || ""}</S>
    </A>
  </Link>
);

const I = styled.i`
  ${tw`mt-1 mr-2 text-center text-default hover:text-primaryHover`}
`;

const S = styled.span`
  ${tw`font-bold`}
`;

const A = styled.a(({ disabled }) => [
  tw`inline-block w-auto h-10 cursor-pointer text-default hover:text-primaryHover`,
  tw`transition duration-500 ease-in-out transform hover:scale-x-105`,

  disabled && tw`cursor-not-allowed`,
]);

const LinkContainer = styled.link(({ disabled }) => [
  disabled && tw`cursor-not-allowed`,
]);

LinkWithIcon.propTypes = {
  /** The Icon to show. */
  icon: PropTypes.node.isRequired,
  /** The url to link to when the icon link is pressed. */
  url: string.isRequired,
  /** The label for the link. */
  label: string,
  /** Enable/Disable the Icon Link */
  disabled: bool,
  /** Extra CSS classes to assign to this component. */
  className: PropTypes.string,
};

LinkWithIcon.defaultProps = {
  disabled: false,
};

export default LinkWithIcon;

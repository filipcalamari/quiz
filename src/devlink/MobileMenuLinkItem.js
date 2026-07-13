"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";

export function MobileMenuLinkItem({
  ariaLabel = "",

  link = {
    href: "#",
  },

  text = "Link Label",
}) {
  return (
    <Link
      aria-label={ariaLabel}
      block={"inline"}
      button={false}
      className={"width-fill"}
      options={link}
    >
      <Block className={"padding-vertical padding-small"} tag={"div"}>
        <Block className={"text-size-medium text-weight-bold"} tag={"div"}>
          {text}
        </Block>
      </Block>
    </Link>
  );
}

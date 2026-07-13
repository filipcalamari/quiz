"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function Newsletter({
  ctaInputSlot,
  heading = "HR knowledge in your inbox",
  paragraph = "Get monthly insights and make HR simple withus",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Small Heading": "w-variant-a0f08ec7-2a36-de2e-5fd8-b911bfc08ee0",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <Block className={`cta-component ${_activeStyleVariant}`} tag={"div"}>
      <Block className={`cta-container ${_activeStyleVariant}`} tag={"div"}>
        <Heading className={`cta-header ${_activeStyleVariant}`} tag={"h2"}>
          {heading}
        </Heading>
        <Paragraph className={`cta-paragraph ${_activeStyleVariant}`}>
          {paragraph}
        </Paragraph>
        {ctaInputSlot}
      </Block>
    </Block>
  );
}

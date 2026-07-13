"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";

export function Section({ containerLarge, variant = "Base" }) {
  const _styleVariantMap = {
    Base: "",
    "No Container": "w-variant-be7bb647-7012-1f39-0e5f-4e33ba9e9294",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <Block className={`section-component ${_activeStyleVariant}`} tag={"div"}>
      {containerLarge}
    </Block>
  );
}

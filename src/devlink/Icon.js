"use client";
import React from "react";
import DOM from "./webflow_modules/Builtin/components/DOM";

export function Icon({ iconId = "", variant = "Base" }) {
  const _styleVariantMap = {
    Base: "",
    Medium: "w-variant-9f82e846-675b-eb38-40b2-4d44fa737ee6",
    Fill: "w-variant-ff594be2-956e-4d55-0d3f-5aeb0446c682",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <DOM className={`icon-component ${_activeStyleVariant}`} tag={"svg"}>
      <DOM href={iconId} tag={"use"} />
    </DOM>
  );
}

"use client";
import React from "react";
import Link from "./webflow_modules/Basic/components/Link";

export function Button({
  analyticsClickValue = "",
  ariaLabel = "",
  dataCta = "",

  href = {
    href: "#",
  },

  label = "Button",
  rel = "",
  unknownProp1977De6E98B1B693E17CFc74A98B3893 = false,
  variant = "Primary",
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-4de95dec-c684-a091-08f7-02fc46ce688b",
    "Secondary Reversed": "w-variant-4378fea3-660f-9ce0-af6f-216c21bd45f8",
    "Full width": "w-variant-75c975ee-8dd1-e835-9e4d-e8b25ea0a134",
    Small: "w-variant-70cb2c63-9abc-5c2f-7353-cf3d734ae8e4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Link
      aria-label={ariaLabel}
      block={"inline"}
      button={false}
      className={`button ${_activeStyleVariant}`}
      data-click={analyticsClickValue}
      data-cta={dataCta}
      options={href}
      // @ts-ignore - User-defined custom attribute(s)
      rel={rel}
    >
      {label}
    </Link>
  );
}

"use client";
import React from "react";
import Link from "./webflow_modules/Basic/components/Link";

export function ElementButtonTrial({
  ariaLabel = "",
  classes = "",
  label = "Start free trial",
  unknownProp425De1983D38Da0C77394F0707D4B61D = true,
}) {
  return (
    <Link
      aria-label={ariaLabel}
      button={false}
      className={`button ${classes}`}
      data-cta={"signup"}
      options={{
        href: "https://auth.calamari.io/sign-up",
      }}
    >
      {label}
    </Link>
  );
}

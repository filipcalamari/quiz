"use client";
import React from "react";
import Link from "./webflow_modules/Basic/components/Link";

export function ElementButtonDemoV2({
  buttonLabel = "Book a demo",
  buttonV2Style = "",
}) {
  return (
    <Link
      button={true}
      className={`button button-secondary-reversed button-white ${buttonV2Style}`}
      data-cta={"call"}
      options={{
        href: "https://meetings-eu1.hubspot.com/dbooking",
        target: "_blank",
        preload: "none",
      }}
      // @ts-ignore - User-defined custom attribute(s)
      rel={"nofollow"}
    >
      {buttonLabel}
    </Link>
  );
}

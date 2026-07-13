"use client";
import React from "react";
import Link from "./webflow_modules/Basic/components/Link";

export function ElementButtonDemo({}) {
  return (
    <Link
      button={false}
      className={"button-text-v2"}
      data-cta={"call"}
      options={{
        href: "https://meetings-eu1.hubspot.com/dbooking",
        target: "_blank",
      }}
      // @ts-ignore - User-defined custom attribute(s)
      rel={"nofollow"}
    >
      {"Book a demo"}
    </Link>
  );
}

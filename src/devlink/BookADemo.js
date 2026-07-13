"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import { Button } from "./Button";

export function BookADemo({
  buttonHref = {
    href: "#",
  },

  buttonLabel = "Book a demo",
  variant = "Secondary",
}) {
  return (
    <Block tag={"div"}>
      <Button
        dataCta={"call"}
        href={buttonHref}
        label={buttonLabel}
        variant={variant}
      />
    </Block>
  );
}

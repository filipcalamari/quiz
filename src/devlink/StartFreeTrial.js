"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import { Button } from "./Button";

export function StartFreeTrial({
  ariaLabel = "",
  label = "Start free trial",

  link = {
    href: "https://auth.calamari.io/sign-up/start?v=v1",
  },

  variant = "Primary",
}) {
  return (
    <Block tag={"div"}>
      <Button
        ariaLabel={ariaLabel}
        dataCta={"signup"}
        href={link}
        label={label}
        unknownProp1977De6E98B1B693E17CFc74A98B3893={true}
        variant={variant}
      />
    </Block>
  );
}

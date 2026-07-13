"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM2 from "./webflow_modules/Builtin/components/DOM";

export function Dom({}) {
  return (
    <Block tag={"div"}>
      <DOM2 tag={"button"} />
    </Block>
  );
}

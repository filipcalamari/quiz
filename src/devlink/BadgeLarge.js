"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function BadgeLarge({ icon = "", label = "Label" }) {
  return (
    <Block className={"badge-large"} tag={"div"}>
      <Block className={"div-block-84"} tag={"div"}>
        <Image
          alt={""}
          className={"image-height-fill"}
          height={"48"}
          loading={"lazy"}
          src={icon}
          width={"48"}
        />
      </Block>
      <Block tag={"div"}>{label}</Block>
    </Block>
  );
}

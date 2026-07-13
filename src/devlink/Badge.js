"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function Badge({ icon = "", label = "Label" }) {
  return (
    <Block className={"badge is-icon is-grey"} tag={"div"}>
      <Block className={"icon-1x1-small"} tag={"div"}>
        <Image
          alt={""}
          height={"24"}
          loading={"lazy"}
          src={icon}
          width={"24"}
        />
      </Block>
      <Block className={"text-size-small"} tag={"div"}>
        {label}
      </Block>
    </Block>
  );
}

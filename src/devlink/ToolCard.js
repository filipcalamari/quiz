"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";

export function ToolCard({
  image = "",

  integrationLink = {
    href: "#",
  },

  name = "Name",
}) {
  return (
    <Link
      block={"inline"}
      button={false}
      className={"tool_component"}
      options={integrationLink}
    >
      <Block className={"tool_logo"} tag={"div"}>
        <Image
          alt={""}
          className={"image-height-fill"}
          height={"40"}
          loading={"lazy"}
          src={image}
          width={"40"}
        />
      </Block>
      <Block className={"spacer-small"} tag={"div"} />
      <Block className={"text-size-small text-weight-semibold"} tag={"div"}>
        {name}
      </Block>
    </Link>
  );
}

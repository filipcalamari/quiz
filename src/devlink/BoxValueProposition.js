"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function BoxValueProposition({
  bodyText = "Body text",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65534815e9b7de556fb875c8_calamari-asset-box-vp-1.svg",
  title = "Title",
}) {
  return (
    <Block tag={"div"}>
      <Block tag={"div"}>
        <Block className={"icon-height-xxlarge"} tag={"div"}>
          <Image
            alt={""}
            className={"image-height-fill"}
            height={"64"}
            loading={"lazy"}
            src={image}
            width={"64"}
          />
        </Block>
      </Block>
      <Block className={"spacer-small"} tag={"div"} />
      <Heading className={"heading-style-h3"} tag={"h2"}>
        {title}
      </Heading>
      <Block className={"spacer-medium"} tag={"div"} />
      <Block className={"shape-asset-box-vp"} tag={"div"} />
      <Block className={"spacer-medium"} tag={"div"} />
      <Paragraph>{bodyText}</Paragraph>
    </Block>
  );
}

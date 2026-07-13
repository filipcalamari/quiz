"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function HeaderSectionGroupCenter({
  paragraf = "Paragraf",
  paragrafVisibility = true,
  title = "Title",
}) {
  return (
    <Block
      className={"layout-row layout-align-center text-align-center"}
      tag={"div"}
    >
      <Block className={"max-width-xlarge"} tag={"div"}>
        <Heading className={"heading-style-h2"} tag={"h2"}>
          {title}
        </Heading>
      </Block>
      <Block className={"spacer-medium"} tag={"div"} />
      {paragrafVisibility ? (
        <Block className={"max-width-large"} tag={"div"}>
          <Paragraph
            className={"text-size-medium text-weight-semibold text-style-muted"}
          >
            {paragraf}
          </Paragraph>
        </Block>
      ) : null}
      <Block className={"spacer-xxlarge"} tag={"div"} />
    </Block>
  );
}

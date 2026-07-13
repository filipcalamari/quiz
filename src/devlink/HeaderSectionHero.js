"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function HeaderSectionHero({
  header = "Header",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et diam suscipit, fringilla metus blandit, hendrerit lacus. Phasellus scelerisque congue sem eu varius.",
  subheader = "Subheader",
  subheaderVisibility = true,
  supportTextVisibility = true,
}) {
  return (
    <Block tag={"div"}>
      {subheaderVisibility ? (
        <Block tag={"div"}>
          <Block
            className={
              "text-size-medium text-style-allcaps text-weight-bold text-color-brand"
            }
            tag={"div"}
          >
            {subheader}
          </Block>
          <Block className={"spacer-medium"} tag={"div"} />
        </Block>
      ) : null}
      <Block className={"max-width-xlarge"} tag={"div"}>
        <Heading className={"heading-style-h1"} tag={"h1"}>
          {header}
        </Heading>
        {supportTextVisibility ? (
          <Block tag={"div"}>
            <Block className={"spacer-medium"} tag={"div"} />
            <Paragraph
              className={
                "text-size-medium text-weight-semibold text-style-muted"
              }
            >
              {paragraph}
            </Paragraph>
          </Block>
        ) : null}
      </Block>
    </Block>
  );
}

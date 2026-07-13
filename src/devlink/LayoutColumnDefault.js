"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import RichText from "./webflow_modules/Basic/components/RichText";
import { StartFreeTrial } from "./StartFreeTrial";

export function LayoutColumnDefault({
  classesImage = "",
  classesTextBox = "",
  imageAltText = "__wf_reserved_inherit",
  imageFile = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6501ff9925fe6fa44b67fc70_image.svg",
  textBody = "",
  textHeading = "Lorem ipsum",
  visibilityButton = true,
}) {
  return (
    <Block className={"layout_v1"} tag={"div"}>
      <Block className={`asset-layout_v5 ${classesImage}`} tag={"div"}>
        <Image
          className={"width-fill"}
          height={"1800"}
          loading={"lazy"}
          src={imageFile}
          width={"2400"}
        />
      </Block>
      <Block className={"layout_v2"} tag={"div"}>
        <Block
          className={`hero_layout_column_content_inner ${classesTextBox}`}
          tag={"div"}
        >
          <Heading className={"section-content-column-heading"} tag={"h2"}>
            {textHeading}
          </Heading>
          <Block className={"spacer-large"} tag={"div"} />
          <RichText
            className={"text-rich-text section-content-column_paragraph"}
            tag={"div"}
          >
            {textBody}
          </RichText>
          {visibilityButton ? (
            <Block className={"section-content-column-cta"} tag={"div"}>
              <StartFreeTrial ariaLabel={"signup-body"} />
            </Block>
          ) : null}
        </Block>
      </Block>
    </Block>
  );
}

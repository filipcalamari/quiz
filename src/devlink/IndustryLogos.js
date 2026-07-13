"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function IndustryLogos({
  logo4Visability = true,
  logo5Visibility = true,
  unknownProp01 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173d381fd3872cea288_Frame%20633970.png",
  unknownProp02 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b1736d0ca94b9993eb7d_Frame%20633974.png",
  unknownProp03 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173b360bec03f4424a4_Frame%20633972.png",
  unknownProp04 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b1731a6a0da13135c8e7_Frame%20633973.png",
  unknownProp05 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173402bb844e2ac7b61_Frame%20633975.png",
}) {
  return (
    <Block className={"section_logos container-large"} tag={"div"}>
      <Block tag={"div"}>
        <Block className={"padding-xsmall"} tag={"div"}>
          <Block className={"spacer-xxlarge"} tag={"div"} />
          <Block
            className={"layout-column-desktop is-industry-logo"}
            tag={"div"}
          >
            <Block className={"icon-height-huge"} tag={"div"}>
              <Image
                alt={""}
                className={"image-height-fill align-center"}
                height={"718"}
                loading={"eager"}
                src={unknownProp01}
                width={"692"}
              />
            </Block>
            <Block className={"icon-height-huge"} tag={"div"}>
              <Image
                alt={""}
                className={"image-height-fill align-center"}
                height={"718"}
                loading={"eager"}
                src={unknownProp02}
                width={"692"}
              />
            </Block>
            <Block className={"icon-height-huge"} tag={"div"}>
              <Image
                alt={""}
                className={"image-height-fill align-center"}
                height={"718"}
                loading={"eager"}
                src={unknownProp03}
                width={"692"}
              />
            </Block>
            <Block className={"icon-height-huge"} tag={"div"}>
              {logo4Visability ? (
                <Image
                  alt={""}
                  className={"image-height-fill align-center"}
                  height={"718"}
                  loading={"eager"}
                  src={unknownProp04}
                  width={"692"}
                />
              ) : null}
            </Block>
            {logo5Visibility ? (
              <Block className={"icon-height-huge"} tag={"div"}>
                <Image
                  alt={""}
                  className={"image-height-fill align-center"}
                  height={"718"}
                  loading={"eager"}
                  src={unknownProp05}
                  width={"692"}
                />
              </Block>
            ) : null}
          </Block>
          <Block className={"spacer-xxlarge"} tag={"div"} />
        </Block>
      </Block>
    </Block>
  );
}

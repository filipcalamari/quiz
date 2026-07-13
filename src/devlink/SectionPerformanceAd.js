"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import Section from "./webflow_modules/Layout/components/Section";
import { Button } from "./Button";

export function SectionPerformanceAd({
  buttonLabel = "Explore Performance Review",

  buttonLink = {
    href: "#",
  },

  content = "",
  header = "Run performance reviews ",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/69aee07c2e553cf2f635999a_performance-1.webp",
  subheading = "Performance Review",
}) {
  return (
    <Section className={"section"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={
                "background-color-dark radius-medium padding-section-large"
              }
              tag={"div"}
            >
              <Block
                className={
                  "layout-column-desktop padding-global grid-gap-standard"
                }
                tag={"div"}
              >
                <Block className={"sizing-60p"} tag={"div"}>
                  <Paragraph className={"section-header-subheading"}>
                    {subheading}
                  </Paragraph>
                  <Heading className={"section-header-heading"} tag={"h2"}>
                    {header}
                  </Heading>
                  <RichText
                    className={"section-header-paragraph text-rich-text"}
                    tag={"div"}
                  >
                    {content}
                  </RichText>
                  <Block className={"section-content-column-cta"} tag={"div"}>
                    <Button
                      analyticsClickValue={"explore-performance"}
                      href={buttonLink}
                      label={buttonLabel}
                      unknownProp1977De6E98B1B693E17CFc74A98B3893={true}
                      variant={"Primary"}
                    />
                  </Block>
                </Block>
                <Block className={"div-block-233 is-within"} tag={"div"}>
                  <Block
                    className={"div-block-234 radius-small-top-left"}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={"image-cover image-position-left aa"}
                      height={"2168"}
                      loading={"lazy"}
                      src={image}
                      width={"3336"}
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Section from "./webflow_modules/Layout/components/Section";
import { ElementProductCardsArchive } from "./ElementProductCardsArchive";

export function SectionProductCardsArchive({
  visibilityCoreHr = true,
  visibilityTA = true,
  visibilityTimeOff = true,
}) {
  return (
    <Section
      className={"section_logos background-color-blue text-color-white"}
      tag={"section"}
    >
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Heading className={"heading-style-h2-v2"} tag={"h2"}>
              {"Need more support withHR?"}
            </Heading>
            <Block className={"spacer-huge"} tag={"div"} />
            <ElementProductCardsArchive
              visibilityCoreHr={visibilityCoreHr}
              visibilityTA={visibilityTA}
              visibilityTimeOff={visibilityTimeOff}
            />
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

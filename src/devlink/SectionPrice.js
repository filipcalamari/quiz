"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Section from "./webflow_modules/Layout/components/Section";
import { ElementPrice } from "./ElementPrice";

export function SectionPrice({ price = "$2.5" }) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <ElementPrice textPrice={price} />
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

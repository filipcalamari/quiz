"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function SectionWhatSNew({}) {
  return (
    <Section className={"section-full"} id={"blog-articles"} tag={"section"}>
      <Block className={"container-large"} tag={"div"}>
        <Block className={"blog-section-header"} tag={"div"}>
          <Heading className={"blog-section-heading"} tag={"h2"}>
            {"Product updates"}
          </Heading>
        </Block>
        <Block className={"blog-whatsnew-component"} tag={"div"}>
          <Link
            aria-label={"What's new"}
            block={"inline"}
            button={false}
            className={"blog-whatsnew-cover"}
            options={{
              href: "https://eu.intercom.news/calamari",
            }}
          >
            <Image
              alt={"What's new cover"}
              className={"image-cover"}
              height={"2100"}
              loading={"lazy"}
              src={
                "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/68e4dfe5eb761662433ebcd6_c73990b1b9a2e3c62471ab51cd5aef63_whats-new-en.webp"
              }
              width={"2100"}
            />
          </Link>
          <NotSupported _atom={"Collection List"} />
        </Block>
      </Block>
    </Section>
  );
}

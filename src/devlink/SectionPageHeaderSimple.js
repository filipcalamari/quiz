"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function SectionPageHeaderSimple({
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",

  link = {
    href: "#",
  },

  name = "Heading",
  previousPageName = "Previous Page Name",
  updatedDate = "",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Bottom Border": "w-variant-ab212361-dc85-f9e8-86d9-d8a9c71bec0e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Section
      className={`section page-header ${_activeStyleVariant}`}
      tag={"section"}
    >
      <Block className={`padding-global ${_activeStyleVariant}`} tag={"div"}>
        <Block
          className={`padding-section-medium ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`container-large ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Link
              block={"inline"}
              button={false}
              className={`hero-backlink ${_activeStyleVariant}`}
              options={link}
            >
              <DOM tag={"span"}>
                <HtmlEmbed
                  className={`hero-backlink-icon ${_activeStyleVariant}`}
                  content={
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path></svg>'
                  }
                />
              </DOM>
              <DOM tag={"span"}>{previousPageName}</DOM>
            </Link>
            <Heading
              className={`hero-heading ${_activeStyleVariant}`}
              tag={"h1"}
            >
              {name}
            </Heading>
            <Paragraph className={`hero-paragraph ${_activeStyleVariant}`}>
              {description}
            </Paragraph>
            <DOM
              className={`hero-informative-text ${_activeStyleVariant}`}
              tag={"p"}
            >
              <DOM tag={"span"}>{"Updated on: "}</DOM>
              <DOM tag={"span"}>{updatedDate}</DOM>
            </DOM>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

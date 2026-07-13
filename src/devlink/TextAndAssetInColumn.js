"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import { Dropdown } from "./Dropdown";

export function TextAndAssetInColumn({
  ctaVisibility = true,
  dropdownContent1 = "",
  dropdownContent2 = "",
  dropdownContent3 = "",
  dropdownContent4 = "",
  dropdownContent5 = "",
  dropdownContent6 = "",
  dropdownHeader1 = "Dropdown Header [1]",
  dropdownHeader2 = "Dropdown Header [2]",
  dropdownHeader3 = "Dropdown Header [3]",
  dropdownHeader4 = "Dropdown Header [4]",
  dropdownHeader5 = "Dropdown Header [5]",
  dropdownHeader6 = "Dropdown Header [6]",
  dropdownsVisibility = true,
  dropdownVisibility4 = true,
  dropdownVisibility5 = true,
  dropdownVisibility6 = true,
  header = "Header",
  imageLeft = "",
  imageLeftVisibility = true,
  imageRight = "",
  imageRightVisibility = true,
  richText = "",
  richTextVisibility = true,
  subheader = "Subheader",
  subheaderVisibility = true,
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ",
  subtitleVisibility = true,
}) {
  return (
    <Block className={"padding-vertical padding-huge"} tag={"div"}>
      <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
        {imageLeftVisibility ? (
          <Block
            className={"column-half-desktop tablet-order-last"}
            tag={"div"}
          >
            <Block className={"radius-medium"} tag={"div"}>
              <Image
                alt={""}
                className={"width-fill"}
                height={"300"}
                loading={"lazy"}
                src={imageLeft}
                width={"300"}
              />
            </Block>
          </Block>
        ) : null}
        <Block className={"column-half-desktop"} tag={"div"}>
          <Block tag={"div"}>
            {subheaderVisibility ? (
              <Block tag={"div"}>
                <Block
                  className={
                    "text-size-regular text-style-allcaps text-weight-semibold text-color-brand"
                  }
                  tag={"div"}
                >
                  {subheader}
                </Block>
                <Block className={"spacer-small"} tag={"div"} />
              </Block>
            ) : null}
            <Block tag={"div"}>
              <Heading className={"heading-style-h3"} tag={"h2"}>
                {header}
              </Heading>
            </Block>
            {subtitleVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-small"} tag={"div"} />
                <Paragraph
                  className={
                    "text-size-regular text-weight-semibold text-style-muted"
                  }
                >
                  {subtitle}
                </Paragraph>
              </Block>
            ) : null}
            {dropdownsVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Block className={"divider-horizontal"} tag={"div"} />
                <Block className={"dropdown_group"} tag={"div"}>
                  <Dropdown
                    dropdownContent={dropdownContent1}
                    dropdownHeader={dropdownHeader1}
                  />
                  <Dropdown
                    dropdownContent={dropdownContent2}
                    dropdownHeader={dropdownHeader2}
                  />
                  <Dropdown
                    dropdownContent={dropdownContent3}
                    dropdownHeader={dropdownHeader3}
                  />
                  <Dropdown
                    dropdownContent={dropdownContent4}
                    dropdownHeader={dropdownHeader4}
                    dropdownVisibility={dropdownVisibility4}
                  />
                  <Dropdown
                    dropdownContent={dropdownContent5}
                    dropdownHeader={dropdownHeader5}
                    dropdownVisibility={dropdownVisibility5}
                  />
                  <Dropdown
                    dropdownContent={dropdownContent6}
                    dropdownHeader={dropdownHeader6}
                    dropdownVisibility={dropdownVisibility6}
                  />
                </Block>
              </Block>
            ) : null}
            {richTextVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-large"} tag={"div"} />
                <Block tag={"div"}>
                  <HtmlEmbed
                    content={
                      "<style>\n.custom-list-marker-checkoval ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.custom-list-marker-checkoval ul li {\n    position: relative;\n    padding-left: 2rem;\n}\n\n.custom-list-marker-checkoval ul li::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0.2rem;\n    width: 1.25rem;\n    height: 1.25rem;\n    background-image: url('https://uploads-ssl.webflow.com/6501ff9925fe6fa44b67fc6a/6554bb838d9f9c69ef732ebf_check_circle.svg');\n    background-size: cover;\n}\n</style>"
                    }
                  />
                  <RichText
                    className={
                      "text-rich-text text-size-medium custom-list-marker-checkoval"
                    }
                    tag={"div"}
                  >
                    {richText}
                  </RichText>
                </Block>
              </Block>
            ) : null}
            {ctaVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-large"} tag={"div"} />
                <Block className={"text-color-brand"} tag={"div"}>
                  <Link
                    button={true}
                    className={"button-delete is-text"}
                    options={{
                      href: "https://app.calamari.io/o/sign-up-company",
                    }}
                  >
                    {"Start free trial now →"}
                  </Link>
                </Block>
              </Block>
            ) : null}
          </Block>
        </Block>
        {imageRightVisibility ? (
          <Block
            className={"column-half-desktop tablet-order-last"}
            tag={"div"}
          >
            <Block className={"radius-medium"} tag={"div"}>
              <Image
                alt={""}
                className={"width-fill"}
                height={"300"}
                loading={"lazy"}
                src={imageRight}
                width={"300"}
              />
            </Block>
          </Block>
        ) : null}
      </Block>
    </Block>
  );
}

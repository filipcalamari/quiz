"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import Section from "./webflow_modules/Layout/components/Section";
import { Dropdown } from "./Dropdown";

export function Industry2ColLeft({
  buttonLink = {
    href: "#",
  },

  buttonText = "Start Trial →",
  buttonVisibility = false,
  check01 = "",
  check01Visibility = true,
  check02 = "",
  check02Visibility = true,
  check03 = "",
  check03Visibility = true,
  check04 = "",
  check04Visibility = false,
  check05Visibility = false,
  check06Visibility = false,
  check5 = "",
  check6 = "",
  checkVisibility = true,
  headline = "",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65fd648c2238f2d24eaa3826_Software%20house2.png",
  text01 = "",
  text2 = false,
  text22 = "",
}) {
  return (
    <Section className={"section_logos padding-section-small"} tag={"section"}>
      <Block className={"padding-global"} tag={"div"}>
        <Block className={"container-large"} tag={"div"}>
          <Block className={"padding-vertical"} tag={"div"}>
            <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
              <Block className={"column-half-desktop"} tag={"div"}>
                <Block tag={"div"}>
                  <Block className={"spacer-tiny"} tag={"div"} />
                  <Block tag={"div"}>
                    <Heading className={"heading-style-h3"} tag={"h2"}>
                      {headline}
                    </Heading>
                  </Block>
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
                        {text01}
                      </RichText>
                    </Block>
                  </Block>
                  <Block className={"spacer-large"} tag={"div"} />
                  {checkVisibility ? (
                    <Block tag={"div"}>
                      {check01Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check01}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                      {check02Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check02}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                      {check03Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check03}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                      {check04Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check04}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                      {check05Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check5}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                      {check06Visibility ? (
                        <Block tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-large min-weight"}
                              tag={"div"}
                            >
                              <Image
                                alt={""}
                                className={"image-height-fill"}
                                height={"64"}
                                loading={"lazy"}
                                src={
                                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65facb6045f429887a2165a1_check.png"
                                }
                                width={"64"}
                              />
                            </Block>
                            <Block
                              className={"align-center-vertical"}
                              tag={"div"}
                            >
                              <RichText
                                className={
                                  "text-rich-text text-size-medium custom-list-marker-checkoval"
                                }
                                tag={"div"}
                              >
                                {check6}
                              </RichText>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                        </Block>
                      ) : null}
                    </Block>
                  ) : null}
                  {text2 ? (
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <RichText
                        className={
                          "text-rich-text text-size-medium custom-list-marker-checkoval"
                        }
                        tag={"div"}
                      >
                        {text22}
                      </RichText>
                    </Block>
                  ) : null}
                  {buttonVisibility ? (
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block className={"text-color-brand"} tag={"div"}>
                        <Link
                          button={true}
                          className={"button-delete is-text"}
                          options={buttonLink}
                        >
                          {buttonText}
                        </Link>
                      </Block>
                    </Block>
                  ) : null}
                </Block>
              </Block>
              <Block
                className={"column-half-desktop tablet-order-last"}
                tag={"div"}
              >
                <Block tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-width-fill"}
                    height={"300"}
                    loading={"lazy"}
                    src={image}
                    width={"300"}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

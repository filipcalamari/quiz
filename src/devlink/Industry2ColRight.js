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

export function Industry2ColRight({
  buttonLink = {
    href: "https://www.calamari.io/security",
  },

  buttonText = "Start free trial now →",
  buttonVisibility = false,
  checkVisibility = true,
  headline = "",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65fd62157b79715e03777cb2_Software%20house1.png",
  text012 = "",
  text02 = "",
  textVisability = false,
  unknownProp01Check = "",
  unknownProp02Check = "",
  unknownProp03Check = "",
  unknownProp04Check = "",
  unknownProp05Check = "",
  unknownProp06Check = "",
  vis01 = true,
  vis02 = true,
  vis03 = true,
  vis04 = false,
  vis05 = false,
  vis06 = false,
}) {
  return (
    <Block className={"section_logos"} tag={"div"}>
      <Block className={"padding-global padding-section-medium"} tag={"div"}>
        <Block className={"container-large"} tag={"div"}>
          <Block className={"padding-vertical"} tag={"div"}>
            <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
              <Block
                className={"column-half-desktop tablet-order-last"}
                tag={"div"}
              >
                <Image
                  alt={""}
                  className={"image-width-fill"}
                  height={"300"}
                  loading={"lazy"}
                  src={image}
                  width={"300"}
                />
              </Block>
              <Block className={"column-half-desktop"} tag={"div"}>
                <Block tag={"div"}>
                  <Block tag={"div"}>
                    <Block className={"spacer-tiny"} tag={"div"} />
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
                        {text012}
                      </RichText>
                    </Block>
                  </Block>
                  <Block tag={"div"}>
                    <Block className={"spacer-large"} tag={"div"} />
                    {checkVisibility ? (
                      <Block tag={"div"}>
                        {vis01 ? (
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
                                  {unknownProp01Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                        {vis02 ? (
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
                                  {unknownProp02Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                        {vis03 ? (
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
                                  {unknownProp03Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                        {vis04 ? (
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
                                  {unknownProp04Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                        {vis05 ? (
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
                                  {unknownProp05Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                        {vis06 ? (
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
                                  {unknownProp06Check}
                                </RichText>
                              </Block>
                            </Block>
                            <Block className={"spacer-small"} tag={"div"} />
                          </Block>
                        ) : null}
                      </Block>
                    ) : null}
                  </Block>
                  {textVisability ? (
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <RichText
                        className={
                          "text-rich-text text-size-medium custom-list-marker-checkoval"
                        }
                        tag={"div"}
                      >
                        {text02}
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
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

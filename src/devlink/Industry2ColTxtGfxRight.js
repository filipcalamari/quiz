"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import Section from "./webflow_modules/Layout/components/Section";
import Strong from "./webflow_modules/Basic/components/Strong";
import { Dropdown } from "./Dropdown";

export function Industry2ColTxtGfxRight({
  check01 = "Quick onboarding for managers and employees",
  check02 = "Custom Leave policies (PTO) for any type of contract",
  check03 = "Integrations with Slack, Google, MS Office",
  check04 = "Timesheet with automatic & manual edition",
  heading = "",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65fd648c2238f2d24eaa3826_Software%20house2.png",
  paragraph01 = "",
  paragraphVisibility = false,
}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-global"} tag={"div"}>
        <Block className={"container-large"} tag={"div"}>
          <Block className={"spacer-xxhuge"} tag={"div"} />
          <Block className={"padding-vertical padding-huge"} tag={"div"}>
            <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
              <Block className={"column-half-desktop"} tag={"div"}>
                <Block tag={"div"}>
                  <Block className={"spacer-tiny"} tag={"div"} />
                  <Block tag={"div"}>
                    <Heading className={"heading-style-h3"} tag={"h2"}>
                      {heading}
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
                        {paragraph01}
                      </RichText>
                    </Block>
                  </Block>
                  <Block className={"spacer-large"} tag={"div"} />
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"layout-column gap-small"} tag={"div"}>
                        <Block className={"icon-height-large"} tag={"div"}>
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
                        <Block className={"align-center-vertical"} tag={"div"}>
                          <Block className={"text-weight-bold"} tag={"div"}>
                            {check01}
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-small"} tag={"div"} />
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"layout-column gap-small"} tag={"div"}>
                        <Block className={"icon-height-large"} tag={"div"}>
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
                        <Block className={"align-center-vertical"} tag={"div"}>
                          <Block className={"text-weight-bold"} tag={"div"}>
                            {check02}
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-small"} tag={"div"} />
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"layout-column gap-small"} tag={"div"}>
                        <Block className={"icon-height-large"} tag={"div"}>
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
                        <Block className={"align-center-vertical"} tag={"div"}>
                          <Block className={"text-weight-bold"} tag={"div"}>
                            {check03}
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-small"} tag={"div"} />
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"layout-column gap-small"} tag={"div"}>
                        <Block className={"icon-height-large"} tag={"div"}>
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
                        <Block className={"align-center-vertical"} tag={"div"}>
                          <Block className={"text-weight-bold"} tag={"div"}>
                            {check04}
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-large"} tag={"div"}>
                        {paragraphVisibility ? (
                          <Paragraph>
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                            }
                          </Paragraph>
                        ) : null}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block
                className={"column-half-desktop tablet-order-last"}
                tag={"div"}
              >
                <Block tag={"div"}>
                  <Image
                    alt={""}
                    height={"300"}
                    loading={"lazy"}
                    src={image}
                    width={"300"}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
          <Block className={"padding-global"} tag={"div"}>
            <Block tag={"div"}>
              <Block className={"spacer-xxlarge"} tag={"div"} />
              <Block
                className={"layout-column-desktop layout-justify-sb-desktop"}
                tag={"div"}
              >
                <Block className={"icon-height-huge"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-height-fill align-center"}
                    height={"718"}
                    loading={"eager"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173d381fd3872cea288_Frame%20633970.png"
                    }
                    width={"692"}
                  />
                </Block>
                <Block className={"icon-height-huge"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-height-fill align-center"}
                    height={"718"}
                    loading={"eager"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b1736d0ca94b9993eb7d_Frame%20633974.png"
                    }
                    width={"692"}
                  />
                </Block>
                <Block className={"icon-height-huge"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-height-fill align-center"}
                    height={"718"}
                    loading={"eager"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173b360bec03f4424a4_Frame%20633972.png"
                    }
                    width={"692"}
                  />
                </Block>
                <Block className={"icon-height-huge"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-height-fill align-center"}
                    height={"718"}
                    loading={"eager"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b1731a6a0da13135c8e7_Frame%20633973.png"
                    }
                    width={"692"}
                  />
                </Block>
                <Block className={"icon-height-huge"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-height-fill align-center"}
                    height={"718"}
                    loading={"eager"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65f9b173402bb844e2ac7b61_Frame%20633975.png"
                    }
                    width={"692"}
                  />
                </Block>
              </Block>
              <Block className={"spacer-xxlarge"} tag={"div"} />
            </Block>
          </Block>
          <Block className={"padding-vertical padding-huge"} tag={"div"}>
            <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
              <Block
                className={"column-half-desktop tablet-order-last"}
                tag={"div"}
              >
                <Image
                  alt={""}
                  height={"300"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65fd62157b79715e03777cb2_Software%20house1.png"
                  }
                  width={"300"}
                />
              </Block>
              <Block className={"column-half-desktop"} tag={"div"}>
                <Block tag={"div"}>
                  <Block tag={"div"}>
                    <Block className={"spacer-tiny"} tag={"div"} />
                    <Heading className={"heading-style-h3"} tag={"h2"}>
                      <Strong>
                        {
                          "Choose secure and well tested solutions that are used accross software agencies worldwide."
                        }
                      </Strong>
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
                        <Paragraph>
                          {
                            "We’re a cloud base company compliant with AWS Well Architected Framework, and all our software and systems are compliant with the industry best practices and standards. Choose a product that is developed in accordance with best software development practices, and focus on growing your business instead of repetitive HR tasks."
                          }
                        </Paragraph>
                      </RichText>
                    </Block>
                  </Block>
                  <Block tag={"div"}>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Block tag={"div"}>
                      <Block tag={"div"}>
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-large"} tag={"div"}>
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
                            <Block className={"text-weight-bold"} tag={"div"}>
                              {"API access for connecting other systems"}
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small"} tag={"div"} />
                      </Block>
                      <Block tag={"div"}>
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-large"} tag={"div"}>
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
                            <Block className={"text-weight-bold"} tag={"div"}>
                              {"Secured data transfer with GDPR compliance"}
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small"} tag={"div"} />
                      </Block>
                      <Block tag={"div"}>
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-large"} tag={"div"}>
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
                            <Block className={"text-weight-bold"} tag={"div"}>
                              {"Permissions & Authorisation"}
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small"} tag={"div"} />
                      </Block>
                      <Block tag={"div"}>
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-large"} tag={"div"}>
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
                            <Block className={"text-weight-bold"} tag={"div"}>
                              {"Timesheet with automatic & manual edition"}
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small"} tag={"div"} />
                      </Block>
                    </Block>
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

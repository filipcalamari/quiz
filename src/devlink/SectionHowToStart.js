"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import { StartFreeTrial } from "./StartFreeTrial";

export function SectionHowToStart({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Heading className={"section-header-heading"} tag={"h2"}>
              {"How To Start?"}
            </Heading>
            <Block className={"spacer-huge"} tag={"div"} />
            <Block className={"layout-column gap-small"} tag={"div"}>
              <Block className={"how-to-start_component"} tag={"div"}>
                <Block className={"how-to-start_box"} tag={"div"}>
                  <Block className={"how-to-start_number"} tag={"div"}>
                    <Image
                      alt={""}
                      className={"image-height-fill"}
                      height={"auto"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f6d4bb044fe1a0fbb0_1.svg"
                      }
                      width={"auto"}
                    />
                  </Block>
                  <Block className={"how-to-start_content"} tag={"div"}>
                    <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                      {"Trial & Demo"}
                    </Heading>
                    <Block className={"spacer-medium"} tag={"div"} />
                    <Paragraph className={"text-size-large"}>
                      {
                        "Try our system for free for 14 days. Book a demo with us, so we can answer all your questions and setup the system together."
                      }
                    </Paragraph>
                    <Block className={"spacer-xxlarge"} tag={"div"} />
                    <StartFreeTrial
                      ariaLabel={"signup-start"}
                      variant={"Secondary Reversed"}
                    />
                  </Block>
                </Block>
                <Block className={"how-to-start_box"} tag={"div"}>
                  <Block className={"how-to-start_number"} tag={"div"}>
                    <Image
                      alt={""}
                      className={"image-height-fill"}
                      height={"auto"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f6d4bb044fe1a0fd61_2.svg"
                      }
                      width={"auto"}
                    />
                  </Block>
                  <Block className={"how-to-start_content"} tag={"div"}>
                    <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                      {"Setup & Import"}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Paragraph className={"text-size-large"}>
                      {
                        "Configure policies and upload employee HR data. Our Customer Success Team will help you out with the configuration."
                      }
                    </Paragraph>
                    <Block className={"spacer-xxlarge"} tag={"div"} />
                  </Block>
                </Block>
                <Block className={"how-to-start_box"} tag={"div"}>
                  <Block className={"how-to-start_number"} tag={"div"}>
                    <Image
                      alt={""}
                      className={"image-height-fill"}
                      height={"auto"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f6d4bb044fe1a0fcab_3.svg"
                      }
                      width={"auto"}
                    />
                  </Block>
                  <Block className={"how-to-start_content"} tag={"div"}>
                    <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                      {"Invite &Go"}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Paragraph className={"text-size-large"}>
                      {
                        "Quickly onboard your employees by sharing an invitation link, and you’re ready to go!"
                      }
                    </Paragraph>
                    <Block className={"spacer-xlarge"} tag={"div"} />
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

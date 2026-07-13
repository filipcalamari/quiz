"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function IndustryBestFeatures2({
  head01 = "Choose only what you need",
  head2 = "Self-service for your employees",
  head3 = "Integrations & mobile apps",
  head4 = "Simple Time Off",
  head5 = "Time & Attendance",
  head6 = "Core HR",
  headline = "How Calamari helps SaaS",
  icon01 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf67eea13f7aa22788c_Frame%20634013.png",
  icon2 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf67eea13f7aa2278b6_Frame%20634014.png",
  icon3 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf7b460163a1fa4534c_Frame%20634015.png",
  icon4 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf6b0e23020f37ecbac_Frame%20634016.png",
  icon5 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf62d02df19c4c43fbf_Frame%20634017.png",
  icon6 = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65faaaf67992c97a3fd350eb_Frame%20634018.png",
  text01 = "You can start with only one module in just a few days of quick onboarding process. Pay only for the number of employees",
  text2 = "Make it simple for your employees to request absences, time track and engage with company’s document, as well as see the directory of team members.",
  text3 = "Connect to your favourite apps with Slack, Teams, Google, and more. Use iOS & Android mobile apps on the go.",
  text4 = "Free your time from repetitive tasks. Give your employees and managers easier access to automated leave management process.",
  text5 = "Clock in & clock out using iBeacons, QR codes, and other useful methods. Use a simple tool with timesheets, manual & automatic time entry, approval flows, and more.",
  text6 = (
    <>
      {
        "Organize your employee documents in a transparent and safe way. See People Directory with Work With Me Manual for each employee and use Custom Fields and Sections to organise HR-related information."
      }
      <br />
    </>
  ),
}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block
          className={
            "layout-row layout-align-center text-align-center container-large"
          }
          tag={"div"}
        >
          <Block className={"padding-medium"} tag={"div"}>
            <Heading className={"heading-style-h2"} tag={"h2"}>
              {headline}
            </Heading>
          </Block>
          <Block className={"max-width-large"} tag={"div"} />
          <Block className={"spacer-xhuge"} tag={"div"} />
        </Block>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block tag={"div"}>
              <Block className={"layout-column-desktop gap-large"} tag={"div"}>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon01}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head01}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text01}</Paragraph>
                </Block>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon2}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head2}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text2}</Paragraph>
                </Block>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon3}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head3}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text3}</Paragraph>
                </Block>
              </Block>
              <Block className={"spacer-xlarge"} tag={"div"} />
              <Block className={"layout-column-desktop gap-large"} tag={"div"}>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon4}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head4}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text4}</Paragraph>
                </Block>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon5}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head5}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text5}</Paragraph>
                </Block>
                <Block className={"sizing-grow"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"icon-height-large"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-height-fill"}
                          height={"64"}
                          loading={"lazy"}
                          src={icon6}
                          width={"64"}
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Heading className={"heading-style-h5"} tag={"h2"}>
                      {head6}
                    </Heading>
                    <Block className={"spacer-small"} tag={"div"} />
                  </Block>
                  <Paragraph>{text6}</Paragraph>
                </Block>
              </Block>
            </Block>
            <Block className={"spacer-xxlarge"} tag={"div"} />
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

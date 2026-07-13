"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import TabsContent from "./webflow_modules/Tabs/components/TabsContent";
import TabsLink from "./webflow_modules/Tabs/components/TabsLink";
import TabsMenu from "./webflow_modules/Tabs/components/TabsMenu";
import TabsPane from "./webflow_modules/Tabs/components/TabsPane";
import TabsWrapper from "./webflow_modules/Tabs/components/TabsWrapper";

export function IndustryBestFeatures({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block tag={"div"}>
              <TabsWrapper
                className={"tabs_component"}
                current={"Time & Attendence"}
                easing={"ease-in-out"}
                fadeIn={150}
                fadeOut={150}
              >
                <TabsMenu className={"tabs_menu"} tag={"div"}>
                  <TabsLink
                    block={"inline"}
                    className={"tab_link"}
                    data-w-tab={"Time Off"}
                  >
                    <Block tag={"div"}>{"Time Off"}</Block>
                  </TabsLink>
                  <TabsLink
                    block={"inline"}
                    className={"tab_link"}
                    data-w-tab={"Time & Attendence"}
                  >
                    <Block className={""} tag={"div"}>
                      {"Time & Attendance"}
                    </Block>
                  </TabsLink>
                  <TabsLink
                    block={"inline"}
                    className={"tab_link shadow-style-light"}
                    data-w-tab={"Core HR"}
                  >
                    <Block tag={"div"}>{"Core HR"}</Block>
                  </TabsLink>
                </TabsMenu>
                <TabsContent className={"tabs_content"} tag={"div"}>
                  <TabsPane data-w-tab={"Time Off"} tag={"div"}>
                    <Block className={"spacer-xxlarge"} tag={"div"} />
                    <Block
                      className={
                        "container-medium align-center text-align-center"
                      }
                      tag={"div"}
                    >
                      <Paragraph className={"text-align-center"}>
                        {
                          "Easily manage absences and holidays, automate PTO calculations, and use flexible multi-level approval processes. See your employees' availability at a glance with shared calendars."
                        }
                      </Paragraph>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "layout-column-desktop gap-medium text-align-left"
                        }
                        tag={"div"}
                      >
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Status tracking of pending requests"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom time off types"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Automatic time off calculations"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom Leave policies (PTO)"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Attachments"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"E-mail, Slack & MS Teams notifications"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Customizable approval workflow"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Requesting restrictions"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Customizable absences visibility"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Comments & request history"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Integrations with Google & MS Office"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block className={"icon-height-medium"} tag={"div"}>
                              <Image
                                alt={""}
                                className={"image-height-fill min-witdth"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {
                                  "Calendars of public holidays from 110 countries"
                                }
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Link
                        button={false}
                        className={"text-style-link text-align-center"}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Get details →"}
                      </Link>
                    </Block>
                  </TabsPane>
                  <TabsPane data-w-tab={"Time & Attendence"} tag={"div"}>
                    <Block className={"spacer-xxlarge"} tag={"div"} />
                    <Block
                      className={"container-medium align-center"}
                      tag={"div"}
                    >
                      <Paragraph className={"text-align-center"}>
                        {
                          "Let employees clock in & clock out using iBeacons, QR codes, andother useful clocking methods. This easy-to-use tool offers timesheets, manual time entry, approval flows, and more."
                        }
                      </Paragraph>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "layout-column-desktop gap-medium text-align-left"
                        }
                        tag={"div"}
                      >
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"QR terminal (KIOSK) clock in/out"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Abuses notifications"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Attendance tracker"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Timesheets approvals"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Team/employee reports"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block className={"icon-height-medium"} tag={"div"}>
                              <Image
                                alt={""}
                                className={"image-height-fill min-witdth"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Timesheet with automatic & manual edition"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Clock in/out and breaks"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom filtering"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Permissions"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Time tracking"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom task management"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Approval Flows"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Link
                        button={false}
                        className={"text-style-link"}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Get details →"}
                      </Link>
                    </Block>
                  </TabsPane>
                  <TabsPane data-w-tab={"Core HR"} tag={"div"}>
                    <Block className={"spacer-xxlarge"} tag={"div"} />
                    <Block
                      className={
                        "container-medium align-center text-align-center"
                      }
                      tag={"div"}
                    >
                      <Paragraph className={"text-align-center"}>
                        {
                          "Instead of worrying about paperwork and workflows, focus on your employees with a safe and well-organized space. Get access to an easy approval process, document history, and notifications about any changes."
                        }
                      </Paragraph>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "layout-column-desktop gap-medium text-align-left"
                        }
                        tag={"div"}
                      >
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Clear approval process"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"People Directory"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Uploading in bulk and with statuses"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Advanced search options"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"History with changes notifications"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Work With Me Manual"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Configurable access restrictions"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Attachements"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"width-50--desktop"} tag={"div"}>
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Visibility permissions and approvals"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Birthday & anniversary notifications"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom Fields & Sections"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Custom document directory structure"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"sizing-grow"} tag={"div"}>
                            <Block
                              className={"layout-column gap-small"}
                              tag={"div"}
                            >
                              <Block
                                className={"icon-height-medium"}
                                tag={"div"}
                              >
                                <Image
                                  alt={""}
                                  className={"image-height-fill min-witdth"}
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
                                <Block
                                  className={"heading-style-h6"}
                                  tag={"div"}
                                >
                                  {"Mobile app access"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block className={"icon-height-medium"} tag={"div"}>
                              <Image
                                alt={""}
                                className={"image-height-fill min-witdth"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Encrypted employee document storage"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block className={"icon-height-medium"} tag={"div"}>
                              <Image
                                alt={""}
                                className={"image-height-fill min-witdth"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Full history of changes/actions on documents"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Link
                        button={false}
                        className={"text-style-link"}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Get details →"}
                      </Link>
                    </Block>
                  </TabsPane>
                </TabsContent>
              </TabsWrapper>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

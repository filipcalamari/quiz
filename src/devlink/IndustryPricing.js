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

export function IndustryPricing({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-medium"} tag={"div"}>
        <Block tag={"div"}>
          <TabsWrapper
            className={"tabs_component"}
            current={"Time Off"}
            easing={"ease-in-out"}
            fadeIn={150}
            fadeOut={150}
          >
            <TabsMenu className={"tabs_menu-2"} tag={"div"}>
              <TabsLink
                block={"inline"}
                className={"tab_link-2"}
                data-w-tab={"Time Off"}
              >
                <Block tag={"div"}>{"Time Off"}</Block>
              </TabsLink>
              <TabsLink
                block={"inline"}
                className={"tab_link-2"}
                data-w-tab={"Time & Attendence"}
              >
                <Block className={""} tag={"div"}>
                  {"Time & Attendance"}
                </Block>
              </TabsLink>
              <TabsLink
                block={"inline"}
                className={"tab_link-2 shadow-style-light"}
                data-w-tab={"Core HR"}
              >
                <Block tag={"div"}>{"Core HR"}</Block>
              </TabsLink>
            </TabsMenu>
            <TabsContent className={"tabs_content"} tag={"div"}>
              <TabsPane data-w-tab={"Time Off"} tag={"div"}>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Paragraph className={"text-align-center"}>
                  {
                    "Easily manage absences and holidays, automate balances calculations, and use flexible multi-level approval processes. See your remote & on-site employees' availability at a glance with shared calendars."
                  }
                </Paragraph>
                <Block
                  className={"layout-column-desktop gap-medium"}
                  tag={"div"}
                >
                  <Block className={"width-66--desktop"} tag={"div"}>
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
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Status tracking of pending requests"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Custom time off & remote work types"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Automatic time off calculations"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Attachments "}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Automatic carry-over"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {
                                  "Group & personal notifications (e-mail, Slack & MS Teams)"
                                }
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
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Customizable approval workflow"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Requesting restrictions"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Customizable absences visibility"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Comments & request history"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-medium-2"} tag={"div"}>
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
                              {"Integrations with Slack, Google & MS Office"}
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {
                                  "Calendars of public holidays from 110 countries"
                                }
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Link
                      button={false}
                      className={"text-style-link-2 text-align-center hide"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Sprawdź szczegóły →"}
                    </Link>
                  </Block>
                  <Block className={"sizing-grow"} tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "text-align-center background-color-light radius-small padding-large"
                        }
                        tag={"div"}
                      >
                        <Block className={"text_size-medium"} tag={"div"}>
                          {"Time Off module from"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"heading-style-h1"} tag={"div"}>
                          {"2 $"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"text-size-small"} tag={"div"}>
                          {"per user monthly"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Link
                          button={true}
                          className={"button-2"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Check pricing"}
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </TabsPane>
              <TabsPane data-w-tab={"Time & Attendence"} tag={"div"}>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Paragraph className={"text-align-center"}>
                  {
                    "Let employees clock in & clock out using iBeacons, QR codes, andother useful clocking methods. This easy-to-use tool offers timesheets, manual time entry, approval flows, and more."
                  }
                </Paragraph>
                <Block
                  className={"layout-column-desktop gap-medium"}
                  tag={"div"}
                >
                  <Block className={"width-66--desktop"} tag={"div"}>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Block className={"layout-column-desktop"} tag={"div"}>
                      <Block className={"width-50--desktop"} tag={"div"}>
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {
                                  "7 methods for time tracking (Slack, MSTeams, web & app mobiles)"
                                }
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Easy timesheet management"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Presence overview "}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Team/employee reports"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Timesheets approvals with custom flows"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"API integration "}
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
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Flexible work schedules"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Custom filtering"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Permissions & roles"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Reminders & notifications"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Time project tracking"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-medium-2"} tag={"div"}>
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
                              {"Abnormalities report"}
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Link
                      button={false}
                      className={"text-style-link-2 hide"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Sprawdź szczegóły →"}
                    </Link>
                  </Block>
                  <Block className={"sizing-grow"} tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "text-align-center background-color-light radius-small padding-large"
                        }
                        tag={"div"}
                      >
                        <Block className={"text_size-medium"} tag={"div"}>
                          {"Time & Attendence module from"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"heading-style-h1"} tag={"div"}>
                          {"2.5 $"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"text-size-small"} tag={"div"}>
                          {"per user monthly"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Link
                          button={true}
                          className={"button-2"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Check pricing"}
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </TabsPane>
              <TabsPane data-w-tab={"Core HR"} tag={"div"}>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Paragraph className={"text-align-center"}>
                  {
                    "Instead of worrying about paperwork and workflows, focus on your employees with a safe and well-organized space. Get access to an easy approval process, document history, and notifications about any changes."
                  }
                </Paragraph>
                <Block
                  className={"layout-column-desktop gap-medium"}
                  tag={"div"}
                >
                  <Block className={"width-66--desktop"} tag={"div"}>
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
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Encrypted HR documents storage"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Custom document directory structure"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Actions on documents"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Notifications about changes"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"History of actions on documents"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Work With Me Manual"}
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
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"People directory"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Advanced search options"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Custom Fields & Sections"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Birthday & anniversary notifications"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-column gap-small"}
                            tag={"div"}
                          >
                            <Block
                              className={"icon-height-medium-2"}
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
                              <Block className={"heading-style-h6"} tag={"div"}>
                                {"Work With Me Manual"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block
                          className={"layout-column gap-small"}
                          tag={"div"}
                        >
                          <Block className={"icon-height-medium-2"} tag={"div"}>
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
                              {"Mobile app access"}
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Link
                      button={false}
                      className={"text-style-link-2 hide"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Sprawdź szczegóły →"}
                    </Link>
                  </Block>
                  <Block className={"sizing-grow"} tag={"div"}>
                    <Block tag={"div"}>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={
                          "text-align-center background-color-light radius-small padding-large"
                        }
                        tag={"div"}
                      >
                        <Block className={"text_size-medium"} tag={"div"}>
                          {"Core HR module from"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"heading-style-h1"} tag={"div"}>
                          {"2 $"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Block className={"text-size-small"} tag={"div"}>
                          {"per user monthly"}
                        </Block>
                        <Block className={"spacer-small-6"} tag={"div"} />
                        <Link
                          button={true}
                          className={"button-2"}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Check pricing"}
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </TabsPane>
            </TabsContent>
          </TabsWrapper>
        </Block>
      </Block>
    </Section>
  );
}

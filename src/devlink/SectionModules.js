"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import { Badge } from "./Badge";
import { HeaderSectionGroupCenter } from "./HeaderSectionGroupCenter";

export function SectionModules({
  coreHrVisibility = true,
  firstDividerVisibility = true,
  secondDividerVisibility = true,
  sectionHeading = "Use self-serviced HR solutions to refocus on growing your business",
  sectionSubheading = "See how Calamari can work for you with our leave management, time tracking, and core HR modules.",
  sectionSubheadingVisibility = true,
  timeAttendanceVisibility = true,
  timeOffVisibility = true,
}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <HeaderSectionGroupCenter
              paragraf={sectionSubheading}
              paragrafVisibility={sectionSubheadingVisibility}
              title={sectionHeading}
            />
            <Block
              className={
                "layout-column-desktop gap-medium-tablet is-shape-splitted-contenboxes"
              }
              tag={"div"}
            >
              {timeOffVisibility ? (
                <Block
                  className={"content-box_default is-dark is-dividedontablet"}
                  tag={"div"}
                >
                  <Block className={"layout-row height-fill"} tag={"div"}>
                    <Block className={"sizing-grow"} tag={"div"}>
                      <Block
                        className={"symbol-oval-feature background-color-navy"}
                        tag={"div"}
                      >
                        <HtmlEmbed
                          className={"icon-1x1-global"}
                          content={
                            '<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M33.7745 19.1901C32.2364 17.5654 30.3314 16.9365 28.5487 16.7792L32.7083 15.504L33.4074 13.7221L34.5959 15.0148L36.9728 14.019C36.9728 14.019 35.2076 9.09259 29.475 10.2281C27.7098 10.5775 26.4339 11.3986 25.5426 12.3769C25.3503 11.0143 24.7736 9.59921 23.5152 8.25405C19.4429 3.88663 15.2658 6.87394 15.2658 6.87394L16.6465 9.11006L18.3244 8.76067L17.9224 10.6299L20.7013 14.2811C19.0759 13.1456 16.8563 12.4642 13.955 13.4076C9.27103 14.9624 7.57571 19.1726 7.64562 20.6925L10.0226 20.4479L10.8964 19.0154L11.6829 20.1334L14.8289 19.9413L15.7727 18.1244L16.4892 19.6093L21.3829 18.8931C19.4604 21.1641 17.3631 24.8677 17.3281 30.196C17.3806 30.1785 17.433 30.1785 17.5029 30.161C18.202 30.0562 18.9186 30.0038 19.6352 30.0038C20.6139 30.0038 21.5752 30.1086 22.519 30.3008C22.5714 30.3183 22.6064 30.3183 22.6588 30.3357C22.4491 27.7153 22.7462 22.8762 24.7386 19.3648L29.2653 23.7497L30.646 23.278L30.611 25.0249L33.1453 27.1562L34.3687 26.6496L34.124 28.2568L36.099 30.0038C37.3399 27.2436 37.9341 23.5575 33.7745 19.1901Z" fill="white"/>\n<path d="M19.6171 30.9814C18.9355 30.9814 18.2713 31.0339 17.6247 31.1387C13.5175 31.7676 10.1793 34.2832 8.8335 37.6025H30.4007C29.1423 34.4754 26.1013 32.0646 22.3261 31.261C21.4697 31.0688 20.5609 30.9814 19.6171 30.9814Z" fill="white"/>\n</svg>'
                          }
                        />
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Heading className={"heading-style-h3"} tag={"h3"}>
                        {"Time Off"}
                      </Heading>
                      <Block className={"spacer-medium"} tag={"div"} />
                      <Block className={"max-width-small"} tag={"div"}>
                        <Paragraph className={"text-size-regular"}>
                          {
                            "Easily manage absences and holidays, automate PTO calculations, and use flexible multi-level approval processes. See your employees' availability at a glance with shared calendars."
                          }
                        </Paragraph>
                      </Block>
                    </Block>
                    <Block tag={"div"}>
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
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={"layout-row gap-small is-align-start"}
                        tag={"div"}
                      >
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65535073ddac87c670090411_check.svg"
                          }
                          label={"Multi-level approval"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655350737d11be14a8168217_notifications.svg"
                          }
                          label={"Notifications"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6553516986fc55805b728e4f_tree.svg"
                          }
                          label={"Flexible leave policies"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              ) : null}
              {firstDividerVisibility ? (
                <Block
                  className={
                    "divider-content-box-dark_container is-separated-boxes"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"divider-vertical-content-box-dark_shape"}
                    tag={"div"}
                  />
                </Block>
              ) : null}
              {timeAttendanceVisibility ? (
                <Block
                  className={"content-box_default is-dark is-dividedontablet"}
                  tag={"div"}
                >
                  <Block className={"layout-row height-fill"} tag={"div"}>
                    <Block className={"sizing-grow"} tag={"div"}>
                      <Block
                        className={"symbol-oval-feature background-color-brand"}
                        tag={"div"}
                      >
                        <HtmlEmbed
                          className={"icon-1x1-global"}
                          content={
                            '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3574 4.0529H28.3135V0.400879H17.3574V4.0529Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4373 31.5883C26.3224 35.705 19.6494 35.705 15.5336 31.5883C14.7822 30.8358 14.1697 29.997 13.6935 29.1055L22.9859 24.1352V13.5932C25.6831 13.5932 28.3794 14.6228 30.4373 16.6812C34.553 20.7979 34.553 27.4716 30.4373 31.5883ZM41.0964 12.9555L38.2667 8.87497L35.3739 10.8814C28.2182 4.1058 16.9355 4.20775 9.92425 11.2197C2.79348 18.3521 2.79348 29.9173 9.92425 37.0498C17.0559 44.1822 28.6175 44.1822 35.7483 37.0498C41.7941 31.0035 42.6937 21.7803 38.489 14.7646L41.0964 12.9555Z" fill="white"/>\n</svg>'
                          }
                        />
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Heading className={"heading-style-h3"} tag={"h3"}>
                        {"Time & Attendance"}
                      </Heading>
                      <Block className={"spacer-medium"} tag={"div"} />
                      <Block className={"max-width-small"} tag={"div"}>
                        <Paragraph className={"text-size-regular"}>
                          {
                            "Let employees clock in & clock out using iBeacons, QR codes, andother useful clocking methods. This easy-to-use tool offers timesheets, manual time entry, approval flows, and more."
                          }
                        </Paragraph>
                      </Block>
                    </Block>
                    <Block tag={"div"}>
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
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={"layout-row gap-small is-align-start"}
                        tag={"div"}
                      >
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655350735f81d005e884c623_timer.svg"
                          }
                          label={"Various time tracking methods"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65535073456aa8ae713b3e28_list.svg"
                          }
                          label={"Automated attendance lists"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65535073d1d3df90b5d2a8a8_warning.svg"
                          }
                          label={"Abnormality reports"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              ) : null}
              {secondDividerVisibility ? (
                <Block
                  className={
                    "divider-content-box-dark_container is-separated-boxes"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"divider-vertical-content-box-dark_shape"}
                    tag={"div"}
                  />
                </Block>
              ) : null}
              {coreHrVisibility ? (
                <Block
                  className={"content-box_default is-dark is-dividedontablet"}
                  tag={"div"}
                >
                  <Block className={"layout-row height-fill"} tag={"div"}>
                    <Block className={"sizing-grow"} tag={"div"}>
                      <Block
                        className={
                          "symbol-oval-feature background-color-accent"
                        }
                        tag={"div"}
                      >
                        <HtmlEmbed
                          className={"icon-1x1-global"}
                          content={
                            '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M31.1654 33.4228V36.6668H1.83203C1.83203 36.1551 1.83203 33.8614 1.83203 33.4045C1.83203 30.855 2.01722 29.265 4.56351 28.3786C4.91536 28.2689 5.27648 28.1593 5.72092 28.0679C9.84129 27.1723 13.8876 26.3773 11.9524 23.0054C6.1561 12.9991 10.295 7.3335 16.4894 7.3335C22.5728 7.3335 26.8228 12.7981 21.0543 23.0145C19.1654 26.3682 23.0728 27.1815 27.2857 28.077C27.6931 28.1684 28.0357 28.2598 28.3505 28.3694C30.9617 29.2467 31.1654 30.8367 31.1654 33.4228Z" fill="#21537C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9996 33H42.168V30.567C42.168 28.6274 42.0152 27.4349 40.0569 26.7769C39.8208 26.6947 39.5638 26.6262 39.2583 26.5576L39.215 26.5484C36.0719 25.8804 33.1745 25.2645 34.5847 22.7607C38.911 15.0984 35.7235 11 31.161 11C26.5152 11 23.411 15.2492 27.7583 22.7539C28.7558 24.492 27.6342 25.3172 25.8319 25.8814C26.4006 26.0138 27.0058 26.1425 27.643 26.2779L27.6896 26.2878C28.131 26.3869 28.5444 26.4951 28.9466 26.6346C30.5857 27.1872 31.7672 28.0845 32.4088 29.4968C32.911 30.6018 32.9885 31.8584 32.9996 33Z" fill="#21537C"/>\n</svg>'
                          }
                        />
                      </Block>
                      <Block className={"spacer-large"} tag={"div"} />
                      <Heading className={"heading-style-h3"} tag={"h3"}>
                        {"Core HR"}
                      </Heading>
                      <Block className={"spacer-medium"} tag={"div"} />
                      <Block className={"max-width-small"} tag={"div"}>
                        <Paragraph className={"text-size-regular"}>
                          {
                            "Instead of worrying about paperwork and workflows, focus on your employees with a safe and well-organized space. Get access to an easy approval process, document history, and notifications about any changes."
                          }
                        </Paragraph>
                      </Block>
                    </Block>
                    <Block tag={"div"}>
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
                      <Block className={"spacer-large"} tag={"div"} />
                      <Block
                        className={"layout-row gap-small is-align-start"}
                        tag={"div"}
                      >
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655350732f8d133540fb0fbd_folder.svg"
                          }
                          label={"Documents storage"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655350731d33c702ffcb9057_people.svg"
                          }
                          label={"People directory"}
                        />
                        <Badge
                          icon={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655351d72f2b2d24a096a71c_lock.svg"
                          }
                          label={"Access levels & permissions"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              ) : null}
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

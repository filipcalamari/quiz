"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import List from "./webflow_modules/Basic/components/List";
import ListItem from "./webflow_modules/Basic/components/ListItem";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-400":{"id":"e-400","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-401"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".link_arrow_shape","originalId":"655380af99b39782ae6e4da0|b82f5aac-bfea-1434-a65a-6796ec322f53","appliesTo":"CLASS"},"targets":[{"selector":".link_arrow_shape","originalId":"655380af99b39782ae6e4da0|b82f5aac-bfea-1434-a65a-6796ec322f53","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1745581285658},"e-416":{"id":"e-416","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-417"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".div-block-136","originalId":"7f332531-8770-8b0a-0d62-0e3866c56415","appliesTo":"CLASS"},"targets":[{"selector":".div-block-136","originalId":"7f332531-8770-8b0a-0d62-0e3866c56415","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751531156240},"e-417":{"id":"e-417","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-416"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".div-block-136","originalId":"7f332531-8770-8b0a-0d62-0e3866c56415","appliesTo":"CLASS"},"targets":[{"selector":".div-block-136","originalId":"7f332531-8770-8b0a-0d62-0e3866c56415","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751531156242}},"actionLists":{"a-101":{"id":"a-101","title":"Link arrow","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"inOutQuint","duration":500,"target":{"useEventTarget":true,"id":"655380af99b39782ae6e4da0|b82f5aac-bfea-1434-a65a-6796ec322f53"},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-101-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"655380af99b39782ae6e4da0|b82f5aac-bfea-1434-a65a-6796ec322f53"},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-101-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":500,"target":{"useEventTarget":true,"id":"655380af99b39782ae6e4da0|b82f5aac-bfea-1434-a65a-6796ec322f53"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745581292821},"a-104":{"id":"a-104","title":"Calamari Product Section Box / Zoom in","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".div-block-140","selectorGuids":["f094e509-ae3b-0cd9-29e1-f05b25fde476"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-104-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-140","selectorGuids":["f094e509-ae3b-0cd9-29e1-f05b25fde476"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1751531194638},"a-105":{"id":"a-105","title":"Calamari Product Section Box / Zoom Out","actionItemGroups":[{"actionItems":[{"id":"a-105-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":[0.77,0,0.175,1],"duration":300,"target":{"useEventTarget":"CHILDREN","selector":".div-block-140","selectorGuids":["f094e509-ae3b-0cd9-29e1-f05b25fde476"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1751531194638}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionCalamariProductArchive({
  heading = (
    <>
      {"Choose and Use "}
      {" You"}
      {" Need"}
    </>
  ),
  paragraph = "Calamari grows with your team — whenever you need to upgrade number of employees orwant to try a new module — we’re here for you!",
  textChr = "Keep all HR Documents in a safe and well-organized place",
  textTA = "Get digital timesheets and clock-in clock-out tool to streamline HRprocesses",
  textTo = "Change excel and paperwork for an easy-to-use leave management system",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Section className={"section theme-dark"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"section-header is-center"} tag={"div"}>
              <Paragraph className={"subheading_general on_dark"}>
                {"Calamari Product"}
              </Paragraph>
              <Heading className={"section-header-heading"} tag={"h2"}>
                {heading}
              </Heading>
              <Paragraph className={"section-header-paragraph on_dark"}>
                {paragraph}
              </Paragraph>
            </Block>
            <Block tag={"div"}>
              <HtmlEmbed
                className={"component-styles"}
                content={
                  "<style>\n\n.modules-animated-text::after {\n  content: '';\n  display: inline-block;\n  width: 0.1875rem;\n  height: 0.1875rem;\n  background-color: currentColor; /* inherits text color */\n  border-radius: 50%;\n  margin-left: 0.5rem;\n  flex-shrink: 0;\n  vertical-align: middle; /* aligns nicely with text */\n}\n\n@keyframes scroll-left {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n</style>"
                }
              />
              <Block className={"div-block-144"} tag={"div"}>
                <Block
                  className={"div-block-145"}
                  id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56414-66c56400"}
                  tag={"div"}
                >
                  <Block
                    className={"div-block-136"}
                    data-link-target={""}
                    id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56415-66c56400"}
                    tag={"div"}
                  >
                    <Block className={"modules-ribbon-component"} tag={"div"}>
                      <Block className={"modules-ribbon-container"} tag={"div"}>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Absences overview calendar"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Unlimited absence types"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Automatic carry-over"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Multi-country absence policies"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Automatic balances calculations"}
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"div-block-137"} tag={"div"}>
                      <Block className={"div-block-141"} tag={"div"}>
                        <Block className={"div-block-139"} tag={"div"}>
                          <Block className={"div-block-138"} tag={"div"}>
                            <HtmlEmbed
                              className={"icon-1x1-global"}
                              content={
                                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.6085 8.79439C14.8813 8.02625 13.9806 7.72891 13.1378 7.65457L15.1045 7.05162L15.435 6.20914L15.9969 6.82035L17.1207 6.34955C17.1207 6.34955 16.2861 4.02034 13.5757 4.55722C12.7411 4.72241 12.1379 5.11061 11.7165 5.57315C11.6256 4.9289 11.3529 4.25987 10.758 3.62388C8.83261 1.55898 6.85768 2.97137 6.85768 2.97137L7.51048 4.0286L8.30376 3.86341L8.1137 4.74719L9.42757 6.47345C8.65908 5.93657 7.60964 5.61445 6.23793 6.06047C4.02337 6.79557 3.22183 8.78614 3.25488 9.50472L4.37869 9.38909L4.79186 8.7118L5.16371 9.24041L6.6511 9.14956L7.09732 8.29056L7.43611 8.99263L9.74984 8.65398C8.84087 9.72773 7.84928 11.4788 7.83275 13.9979C7.85754 13.9897 7.88233 13.9897 7.91538 13.9814C8.24592 13.9319 8.58471 13.9071 8.92351 13.9071C9.38625 13.9071 9.84073 13.9566 10.287 14.0475C10.3117 14.0558 10.3283 14.0558 10.3531 14.064C10.2539 12.8251 10.3944 10.5372 11.3364 8.87699L13.4766 10.9502L14.1294 10.7271L14.1129 11.5531L15.311 12.5608L15.8895 12.3212L15.7738 13.0811L16.7075 13.9071C17.2942 12.6021 17.5752 10.8593 15.6085 8.79439Z" fill="#0D1D44"/>\n<path d="M8.91486 14.3696C8.59259 14.3696 8.27859 14.3944 7.97285 14.444C6.03097 14.7413 4.45268 15.9307 3.81641 17.5H14.0133C13.4184 16.0216 11.9805 14.8817 10.1957 14.5018C9.79077 14.4109 9.36108 14.3696 8.91486 14.3696Z" fill="#0D1D44"/>\n</svg>'
                              }
                            />
                          </Block>
                          <Heading className={"heading-style-h5-v2"} tag={"h3"}>
                            {"Time Off"}
                          </Heading>
                        </Block>
                        <Paragraph className={"paragraph"}>{textTo}</Paragraph>
                        <Link
                          block={"inline"}
                          button={false}
                          className={"link_arrow_component on_dark"}
                          data-link-source={""}
                          options={{
                            href: "#",
                          }}
                        >
                          <DOM className={"link_arrow_label"} tag={"span"}>
                            {"Learn more about Time Off"}
                          </DOM>
                          <DOM className={"link_arrow_container"} tag={"span"}>
                            <HtmlEmbed
                              className={"link_arrow_shape"}
                              content={
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>'
                              }
                            />
                          </DOM>
                        </Link>
                      </Block>
                      <Block className={"div-block-140"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-cover"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/685e7b0413ce32d0a3450f71_Frame%20634141.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <RichText className={"rich-text-block"} tag={"div"}>
                    <Paragraph>
                      {"See also:"}
                      <br />
                      {"‍"}
                    </Paragraph>
                    <List tag={"ul"} unstyled={false}>
                      <ListItem>
                        {"‍"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/integration/leave-management-with-microsoft",
                          }}
                        >
                          {"Microsoft 365 Integration"}
                        </Link>
                        {" for leave management inside the MSapp"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/maximize-vacation-days",
                          }}
                        >
                          {"‍"}
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/maximize-vacation-days",
                          }}
                        >
                          {"Maximize Vacation Days "}
                        </Link>
                        {"to squeeze the most out of your PTO"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/integration/leave-management-with-microsoft",
                          }}
                        >
                          {"‍"}
                        </Link>
                      </ListItem>
                    </List>
                  </RichText>
                </Block>
                <Block
                  className={"div-block-145"}
                  id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56445-66c56400"}
                  tag={"div"}
                >
                  <Block
                    className={"div-block-136"}
                    data-link-target={""}
                    id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56446-66c56400"}
                    tag={"div"}
                  >
                    <Block className={"modules-ribbon-component"} tag={"div"}>
                      <Block className={"modules-ribbon-container"} tag={"div"}>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Seven time tracking methods"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Timesheet management"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Project tracking"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Custom approval flows"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Abnormalities detection"}
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"div-block-137"} tag={"div"}>
                      <Block className={"div-block-141"} tag={"div"}>
                        <Block className={"div-block-139"} tag={"div"}>
                          <Block className={"div-block-138"} tag={"div"}>
                            <HtmlEmbed
                              className={"icon-1x1-global"}
                              content={
                                '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3574 4.0529H28.3135V0.400879H17.3574V4.0529Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4373 31.5883C26.3224 35.705 19.6494 35.705 15.5336 31.5883C14.7822 30.8358 14.1697 29.997 13.6935 29.1055L22.9859 24.1352V13.5932C25.6831 13.5932 28.3794 14.6228 30.4373 16.6812C34.553 20.7979 34.553 27.4716 30.4373 31.5883ZM41.0964 12.9555L38.2667 8.87497L35.3739 10.8814C28.2182 4.1058 16.9355 4.20775 9.92425 11.2197C2.79348 18.3521 2.79348 29.9173 9.92425 37.0498C17.0559 44.1822 28.6175 44.1822 35.7483 37.0498C41.7941 31.0035 42.6937 21.7803 38.489 14.7646L41.0964 12.9555Z" fill="white"/>\n</svg>'
                              }
                            />
                          </Block>
                          <Heading className={"heading-style-h5-v2"} tag={"h3"}>
                            {"Time & Attendance"}
                          </Heading>
                        </Block>
                        <Paragraph className={"paragraph"}>{textTA}</Paragraph>
                        <Link
                          block={"inline"}
                          button={false}
                          className={"link_arrow_component on_dark"}
                          data-link-source={""}
                          options={{
                            href: "#",
                          }}
                        >
                          <DOM className={"link_arrow_label"} tag={"span"}>
                            {"Learn more about T&A"}
                          </DOM>
                          <DOM className={"link_arrow_container"} tag={"span"}>
                            <HtmlEmbed
                              className={"link_arrow_shape"}
                              content={
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>'
                              }
                            />
                          </DOM>
                        </Link>
                      </Block>
                      <Block className={"div-block-140"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-cover"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/685e823ded73917ecc97dbba_clock.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <RichText className={"rich-text-block"} tag={"div"}>
                    <Paragraph>
                      {"See also:"}
                      <br />
                      <Link
                        button={false}
                        className={"text-style-link"}
                        options={{
                          href: "/attendance-tracking/geofencing",
                        }}
                      >
                        {"‍"}
                      </Link>
                    </Paragraph>
                    <List tag={"ul"} unstyled={false}>
                      <ListItem>
                        {"‍"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/attendance-tracking/geofencing",
                          }}
                        >
                          {"Geofencing"}
                        </Link>
                        {" for accurate time tracking inspecific locations"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/attendance-tracking/kiosk",
                          }}
                        >
                          {"‍"}
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/attendance-tracking/kiosk",
                          }}
                        >
                          {"Kiosk"}
                        </Link>
                        {" for time tracking with QR codes andNFC"}
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/integration/leave-management-with-microsoft",
                          }}
                        >
                          {"‍"}
                        </Link>
                      </ListItem>
                    </List>
                  </RichText>
                </Block>
                <Block
                  className={"div-block-145"}
                  id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56477-66c56400"}
                  tag={"div"}
                >
                  <Block
                    className={"div-block-136"}
                    data-link-target={""}
                    id={"w-node-_7f332531-8770-8b0a-0d62-0e3866c56478-66c56400"}
                    tag={"div"}
                  >
                    <Block className={"modules-ribbon-component"} tag={"div"}>
                      <Block className={"modules-ribbon-container"} tag={"div"}>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"People directory"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"HR documents repository"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Custom fields & categories"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Reporting (e.g. People)"}
                        </Block>
                        <Block className={"modules-animated-text"} tag={"div"}>
                          {"Document management flows"}
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"div-block-137"} tag={"div"}>
                      <Block className={"div-block-141"} tag={"div"}>
                        <Block className={"div-block-139"} tag={"div"}>
                          <Block className={"div-block-138"} tag={"div"}>
                            <HtmlEmbed
                              className={"icon-1x1-global"}
                              content={
                                '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M31.1654 33.4228V36.6668H1.83203C1.83203 36.1551 1.83203 33.8614 1.83203 33.4045C1.83203 30.855 2.01722 29.265 4.56351 28.3786C4.91536 28.2689 5.27648 28.1593 5.72092 28.0679C9.84129 27.1723 13.8876 26.3773 11.9524 23.0054C6.1561 12.9991 10.295 7.3335 16.4894 7.3335C22.5728 7.3335 26.8228 12.7981 21.0543 23.0145C19.1654 26.3682 23.0728 27.1815 27.2857 28.077C27.6931 28.1684 28.0357 28.2598 28.3505 28.3694C30.9617 29.2467 31.1654 30.8367 31.1654 33.4228Z" fill="#21537C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9996 33H42.168V30.567C42.168 28.6274 42.0152 27.4349 40.0569 26.7769C39.8208 26.6947 39.5638 26.6262 39.2583 26.5576L39.215 26.5484C36.0719 25.8804 33.1745 25.2645 34.5847 22.7607C38.911 15.0984 35.7235 11 31.161 11C26.5152 11 23.411 15.2492 27.7583 22.7539C28.7558 24.492 27.6342 25.3172 25.8319 25.8814C26.4006 26.0138 27.0058 26.1425 27.643 26.2779L27.6896 26.2878C28.131 26.3869 28.5444 26.4951 28.9466 26.6346C30.5857 27.1872 31.7672 28.0845 32.4088 29.4968C32.911 30.6018 32.9885 31.8584 32.9996 33Z" fill="#21537C"/>\n</svg>'
                              }
                            />
                          </Block>
                          <Heading className={"heading-style-h5-v2"} tag={"h3"}>
                            {"Core HR"}
                          </Heading>
                        </Block>
                        <Paragraph className={"paragraph"}>{textChr}</Paragraph>
                        <Link
                          block={"inline"}
                          button={false}
                          className={"link_arrow_component on_dark"}
                          data-link-source={""}
                          options={{
                            href: "#",
                          }}
                        >
                          <DOM className={"link_arrow_label"} tag={"span"}>
                            {"Learn more about Core HR"}
                          </DOM>
                          <DOM className={"link_arrow_container"} tag={"span"}>
                            <HtmlEmbed
                              className={"link_arrow_shape"}
                              content={
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>'
                              }
                            />
                          </DOM>
                        </Link>
                      </Block>
                      <Block className={"div-block-140"} tag={"div"}>
                        <Image
                          alt={""}
                          className={"image-cover"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/685e823d696023d0efb9f560_people.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <RichText className={"rich-text-block"} tag={"div"}>
                    <Paragraph>{"See also:"}</Paragraph>
                    <Paragraph>
                      {"‍"}
                      <br />
                    </Paragraph>
                    <List tag={"ul"} unstyled={false}>
                      <ListItem>
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/hrms-employee-database/employee-directory-online",
                          }}
                        >
                          {"Employee Directory Online"}
                        </Link>
                        {" as your "}
                        <Span>{"single source"}</Span>
                        {" of truth"}
                      </ListItem>
                      <ListItem>
                        <Link
                          button={false}
                          className={"text-style-link"}
                          options={{
                            href: "/blog/work-with-me-for-better-communication",
                          }}
                        >
                          {"Work With Me"}
                        </Link>
                        {" for better communication inateam"}
                      </ListItem>
                    </List>
                  </RichText>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

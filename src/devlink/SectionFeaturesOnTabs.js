"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";
import TabsContent from "./webflow_modules/Tabs/components/TabsContent";
import TabsLink from "./webflow_modules/Tabs/components/TabsLink";
import TabsMenu from "./webflow_modules/Tabs/components/TabsMenu";
import TabsPane from "./webflow_modules/Tabs/components/TabsPane";
import TabsWrapper from "./webflow_modules/Tabs/components/TabsWrapper";
import * as _interactions from "./webflow_modules/interactions";
import { ElementPrice } from "./ElementPrice";

const _interactionsData = JSON.parse(
  '{"events":{"e-209":{"id":"e-209","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["main"],"target":{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"},"targets":[{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714217856615},"e-208":{"id":"e-208","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main"],"target":{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"},"targets":[{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714217856616},"e-220":{"id":"e-220","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-219"}},"mediaQueries":["main"],"target":{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"},"targets":[{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714217856615},"e-219":{"id":"e-219","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main"],"target":{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"},"targets":[{"selector":".features_item","originalId":"66265c9013e722d0ba613f2d|0bf3e813-baac-649c-d159-994d41f9d9be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714217856616}},"actionLists":{"a-62":{"id":"a-62","title":"v2 / Features List / Item / Hover [in]","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-62-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":200,"target":{},"value":1,"unit":""}},{"id":"a-62-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":200,"target":{},"xValue":2.25,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714217864815},"a-59":{"id":"a-59","title":"v2 / Features List / Item / Hover [in] 2","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":200,"target":{},"value":0,"unit":""}},{"id":"a-59-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":200,"target":{},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714217864815},"a-70":{"id":"a-70","title":"v2 / Features List / Item / Hover [in] 4","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".features_item_dot","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463a5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-70-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".features_item_dot","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463a5"]},"value":1,"unit":""}},{"id":"a-70-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".features_item_label","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d46363"]},"xValue":2.25,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714217864815},"a-67":{"id":"a-67","title":"v2 / Features List / Item / Hover [in] 3","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".features_item_dot","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463a5"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".features_item_label","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d46363"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714217864815}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionFeaturesOnTabs({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Section className={"section"} tag={"section"}>
      <Block className={"padding-global-v2"} tag={"div"}>
        <Block className={"padding-section-large"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"section-header is-center"} tag={"div"}>
              <Paragraph className={"subheading_general on_dark"}>
                {"KeyProduct Features"}
              </Paragraph>
              <Heading className={"section-header-heading"} tag={"h2"}>
                {"Need "}
                <Span className={"heading-style-italic"}>{"More"}</Span>
                {" to Go On?"}
              </Heading>
              <Paragraph className={"section-header-paragraph"}>
                {
                  "Take a closer look at the key features that matter most — more flexibility, more impact, and more reasons to get started."
                }
              </Paragraph>
            </Block>
            <TabsWrapper
              className={"tabs_component"}
              current={"Time & Attendence"}
              easing={"ease-in-out"}
              fadeIn={150}
              fadeOut={150}
            >
              <TabsMenu
                animation-features={"tabs"}
                className={"tab_menu_small"}
                tag={"div"}
              >
                <TabsLink
                  block={"inline"}
                  className={"tab_link_small"}
                  data-w-tab={"Time & Attendence"}
                >
                  <Block className={"div-block-148"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-1x1-global"}
                      content={
                        '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3574 4.0529H28.3135V0.400879H17.3574V4.0529Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4373 31.5883C26.3224 35.705 19.6494 35.705 15.5336 31.5883C14.7822 30.8358 14.1697 29.997 13.6935 29.1055L22.9859 24.1352V13.5932C25.6831 13.5932 28.3794 14.6228 30.4373 16.6812C34.553 20.7979 34.553 27.4716 30.4373 31.5883ZM41.0964 12.9555L38.2667 8.87497L35.3739 10.8814C28.2182 4.1058 16.9355 4.20775 9.92425 11.2197C2.79348 18.3521 2.79348 29.9173 9.92425 37.0498C17.0559 44.1822 28.6175 44.1822 35.7483 37.0498C41.7941 31.0035 42.6937 21.7803 38.489 14.7646L41.0964 12.9555Z" fill="white"/>\n</svg>'
                      }
                    />
                  </Block>
                  <Block className={""} tag={"div"}>
                    {"Time & Attendance"}
                  </Block>
                </TabsLink>
                <TabsLink
                  block={"inline"}
                  className={"tab_link_small"}
                  data-w-tab={"Time Off"}
                >
                  <Block className={"div-block-148"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-1x1-global"}
                      content={
                        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.6085 8.79439C14.8813 8.02625 13.9806 7.72891 13.1378 7.65457L15.1045 7.05162L15.435 6.20914L15.9969 6.82035L17.1207 6.34955C17.1207 6.34955 16.2861 4.02034 13.5757 4.55722C12.7411 4.72241 12.1379 5.11061 11.7165 5.57315C11.6256 4.9289 11.3529 4.25987 10.758 3.62388C8.83261 1.55898 6.85768 2.97137 6.85768 2.97137L7.51048 4.0286L8.30376 3.86341L8.1137 4.74719L9.42757 6.47345C8.65908 5.93657 7.60964 5.61445 6.23793 6.06047C4.02337 6.79557 3.22183 8.78614 3.25488 9.50472L4.37869 9.38909L4.79186 8.7118L5.16371 9.24041L6.6511 9.14956L7.09732 8.29056L7.43611 8.99263L9.74984 8.65398C8.84087 9.72773 7.84928 11.4788 7.83275 13.9979C7.85754 13.9897 7.88233 13.9897 7.91538 13.9814C8.24592 13.9319 8.58471 13.9071 8.92351 13.9071C9.38625 13.9071 9.84073 13.9566 10.287 14.0475C10.3117 14.0558 10.3283 14.0558 10.3531 14.064C10.2539 12.8251 10.3944 10.5372 11.3364 8.87699L13.4766 10.9502L14.1294 10.7271L14.1129 11.5531L15.311 12.5608L15.8895 12.3212L15.7738 13.0811L16.7075 13.9071C17.2942 12.6021 17.5752 10.8593 15.6085 8.79439Z" fill="#0D1D44"/>\n<path d="M8.91486 14.3696C8.59259 14.3696 8.27859 14.3944 7.97285 14.444C6.03097 14.7413 4.45268 15.9307 3.81641 17.5H14.0133C13.4184 16.0216 11.9805 14.8817 10.1957 14.5018C9.79077 14.4109 9.36108 14.3696 8.91486 14.3696Z" fill="#0D1D44"/>\n</svg>'
                      }
                    />
                  </Block>
                  <Block tag={"div"}>{"Time Off"}</Block>
                </TabsLink>
                <TabsLink
                  block={"inline"}
                  className={"tab_link_small"}
                  data-w-tab={"Core HR"}
                >
                  <Block className={"div-block-148"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-1x1-global"}
                      content={
                        '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M31.1654 33.4228V36.6668H1.83203C1.83203 36.1551 1.83203 33.8614 1.83203 33.4045C1.83203 30.855 2.01722 29.265 4.56351 28.3786C4.91536 28.2689 5.27648 28.1593 5.72092 28.0679C9.84129 27.1723 13.8876 26.3773 11.9524 23.0054C6.1561 12.9991 10.295 7.3335 16.4894 7.3335C22.5728 7.3335 26.8228 12.7981 21.0543 23.0145C19.1654 26.3682 23.0728 27.1815 27.2857 28.077C27.6931 28.1684 28.0357 28.2598 28.3505 28.3694C30.9617 29.2467 31.1654 30.8367 31.1654 33.4228Z" fill="#21537C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M32.9996 33H42.168V30.567C42.168 28.6274 42.0152 27.4349 40.0569 26.7769C39.8208 26.6947 39.5638 26.6262 39.2583 26.5576L39.215 26.5484C36.0719 25.8804 33.1745 25.2645 34.5847 22.7607C38.911 15.0984 35.7235 11 31.161 11C26.5152 11 23.411 15.2492 27.7583 22.7539C28.7558 24.492 27.6342 25.3172 25.8319 25.8814C26.4006 26.0138 27.0058 26.1425 27.643 26.2779L27.6896 26.2878C28.131 26.3869 28.5444 26.4951 28.9466 26.6346C30.5857 27.1872 31.7672 28.0845 32.4088 29.4968C32.911 30.6018 32.9885 31.8584 32.9996 33Z" fill="#21537C"/>\n</svg>'
                      }
                    />
                  </Block>
                  <Block tag={"div"}>{"Core HR"}</Block>
                </TabsLink>
              </TabsMenu>
              <TabsContent className={"tabs_content"} tag={"div"}>
                <TabsPane data-w-tab={"Time & Attendence"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block
                      animation-features={"component"}
                      className={"features_layout"}
                      tag={"div"}
                    >
                      <Block className={"features_list-container"} tag={"div"}>
                        <Block
                          animation-features={"list"}
                          className={"features_list"}
                          tag={"div"}
                        >
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Presence overview"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Different methods to track time"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Time tracking abnormalities"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Time project tracking"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Timesheet approvals"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Time clock app"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        animation-features={"assets"}
                        className={"features_preview_container"}
                        tag={"div"}
                      >
                        <Image
                          alt={"Preview of employees presence in Calamari app"}
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6679458a8b5e014c61e2b4b1_Presence%20overview.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Calamari list of seven different time tracking methods"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6679458986fe50ce6b6a518d_Different%20methods%20to%20track%20time.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={"Time tracking abnormalities"}
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/67349ebcf36fc19dbf301617_Time%20tracking%20abnormalities.avif"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={"Preview of project time spent on timeheet view"}
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6679458a992dbca483ea2b9e_Time%20project%20tracking.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={"Preview of Timesheet approval drawer"}
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/667945892650439ec8fa305b_Timesheet%20approvals.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Calamari Kiosk APP for scaning QR codes to clock in/out"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6679458d0b8302c5d1fc6820_Time%20clock%20app.webp"
                          }
                          width={"1800"}
                        />
                      </Block>
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"spacer-xhuge"} tag={"div"} />
                      <ElementPrice textPrice={"$2.5"} />
                    </Block>
                  </Block>
                </TabsPane>
                <TabsPane data-w-tab={"Time Off"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block
                      animation-features={"component"}
                      className={"features_layout"}
                      tag={"div"}
                    >
                      <Block className={"features_list-container"} tag={"div"}>
                        <Block
                          animation-features={"list"}
                          className={"features_list"}
                          tag={"div"}
                        >
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Transparent time off approval dashboard"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Various types of absences"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Automatic calculation of time off"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Email, Slack & MS Teams notifications"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Multi-stage approval process"}
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Holiday calendars"}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        animation-features={"assets"}
                        className={"features_preview_container"}
                        tag={"div"}
                      >
                        <Image
                          alt={
                            "Transparent Calamari time off approval dashboard"
                          }
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66743584347386ebc2ceeb0e_Transparent%20time%20off%20approval%20dashboard.webp"
                          }
                          width={"1350"}
                        />
                        <Image
                          alt={"Various types of absences in Calamari"}
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66743583274232d1db2723d1_Various%20types%20of%20absences.webp"
                          }
                          width={"1350"}
                        />
                        <Image
                          alt={
                            "Automatic calculation of time off. Calamari Entitlement tab."
                          }
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/667435838d074ea4b0a91d25_Automatic%20calculation%20of%20time%20off.webp"
                          }
                          width={"1350"}
                        />
                        <Image
                          alt={
                            "Email, Slack, MS Teams notifications directly from Calamari"
                          }
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66743583b98c84efe3b79766_Email%2C%20Slack%20%26%20MS%20Teams%20notifications.webp"
                          }
                          width={"1350"}
                        />
                        <Image
                          alt={"Multi step approval proccess"}
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66743583150d752766811df0_Multi-stage%20approval%20process.webp"
                          }
                          width={"1350"}
                        />
                        <Image
                          alt={"Holidays Calendar import asset"}
                          className={"features_preview_image"}
                          height={"1836"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/667435841f4928d1cacc8e84_Holiday%20calendars.webp"
                          }
                          width={"1350"}
                        />
                      </Block>
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"spacer-xhuge"} tag={"div"} />
                      <ElementPrice />
                    </Block>
                  </Block>
                </TabsPane>
                <TabsPane data-w-tab={"Core HR"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block
                      animation-features={"component"}
                      className={"features_layout"}
                      tag={"div"}
                    >
                      <Block className={"features_list-container"} tag={"div"}>
                        <Block
                          animation-features={"list"}
                          className={"features_list"}
                          tag={"div"}
                        >
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Configurable access restrictions"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.95003 15.752C3.45885 15.752 2.25 14.5431 2.25 13.0519L2.25 4.95182C2.25 3.46063 3.45885 2.25179 4.95003 2.25179L12 2.25179L15.7502 6.00044L15.7502 13.0519C15.7502 14.5431 14.5413 15.752 13.0501 15.752L4.95003 15.752ZM11.3626 6.69581C11.3626 6.85102 11.4884 6.97685 11.6437 6.97685L14.4554 6.97685C14.7058 6.97685 14.8311 6.67413 14.6541 6.49709L11.8424 3.68536C11.6653 3.50832 11.3626 3.6337 11.3626 3.88408L11.3626 6.69581Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"Documents"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Full history of changes"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.95003 15.752C3.45885 15.752 2.25 14.5431 2.25 13.0519L2.25 4.95182C2.25 3.46063 3.45885 2.25179 4.95003 2.25179L12 2.25179L15.7502 6.00044L15.7502 13.0519C15.7502 14.5431 14.5413 15.752 13.0501 15.752L4.95003 15.752ZM11.3626 6.69581C11.3626 6.85102 11.4884 6.97685 11.6437 6.97685L14.4554 6.97685C14.7058 6.97685 14.8311 6.67413 14.6541 6.49709L11.8424 3.68536C11.6653 3.50832 11.3626 3.6337 11.3626 3.88408L11.3626 6.69581Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"Documents"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Custom document directory structure"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.95003 15.752C3.45885 15.752 2.25 14.5431 2.25 13.0519L2.25 4.95182C2.25 3.46063 3.45885 2.25179 4.95003 2.25179L12 2.25179L15.7502 6.00044L15.7502 13.0519C15.7502 14.5431 14.5413 15.752 13.0501 15.752L4.95003 15.752ZM11.3626 6.69581C11.3626 6.85102 11.4884 6.97685 11.6437 6.97685L14.4554 6.97685C14.7058 6.97685 14.8311 6.67413 14.6541 6.49709L11.8424 3.68536C11.6653 3.50832 11.3626 3.6337 11.3626 3.88408L11.3626 6.69581Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"Documents"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Different workflows for documents"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.95003 15.752C3.45885 15.752 2.25 14.5431 2.25 13.0519L2.25 4.95182C2.25 3.46063 3.45885 2.25179 4.95003 2.25179L12 2.25179L15.7502 6.00044L15.7502 13.0519C15.7502 14.5431 14.5413 15.752 13.0501 15.752L4.95003 15.752ZM11.3626 6.69581C11.3626 6.85102 11.4884 6.97685 11.6437 6.97685L14.4554 6.97685C14.7058 6.97685 14.8311 6.67413 14.6541 6.49709L11.8424 3.68536C11.6653 3.50832 11.3626 3.6337 11.3626 3.88408L11.3626 6.69581Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"Documents"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Advanced search options"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.9035 46.5381V50.6668H7.28809C7.28809 50.0155 7.28809 47.0963 7.28809 46.5148C7.28809 43.2699 7.51924 41.2463 10.6977 40.1181C11.1369 39.9786 11.5876 39.839 12.1424 39.7227C17.2857 38.5829 22.3365 37.5711 19.9209 33.2795C12.6856 20.5443 17.852 13.3335 25.5842 13.3335C33.1778 13.3335 38.4828 20.2884 31.2823 33.2911C28.9244 37.5595 33.8019 38.5946 39.0607 39.7343C39.5693 39.8506 39.9969 39.9669 40.3899 40.1065C43.6492 41.223 43.9035 43.2467 43.9035 46.5381Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 46H57.6343V42.9034C57.6343 40.4349 57.4436 38.9171 54.9991 38.0798C54.7044 37.9751 54.3836 37.8879 54.0022 37.8006L53.9482 37.7889C50.0248 36.9387 46.4081 36.1549 48.1684 32.9682C53.5688 23.2162 49.59 18 43.8948 18C38.0957 18 34.2209 23.4081 39.6473 32.9595C40.8925 35.1717 39.4925 36.2219 37.2428 36.94C37.9526 37.1085 38.708 37.2723 39.5034 37.4446L39.5616 37.4573C40.1126 37.5833 40.6286 37.721 41.1306 37.8986C43.1766 38.6019 44.6514 39.7439 45.4524 41.5413C46.0792 42.9478 46.176 44.547 46.1898 46Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"People"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Work with me manual"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.9035 46.5381V50.6668H7.28809C7.28809 50.0155 7.28809 47.0963 7.28809 46.5148C7.28809 43.2699 7.51924 41.2463 10.6977 40.1181C11.1369 39.9786 11.5876 39.839 12.1424 39.7227C17.2857 38.5829 22.3365 37.5711 19.9209 33.2795C12.6856 20.5443 17.852 13.3335 25.5842 13.3335C33.1778 13.3335 38.4828 20.2884 31.2823 33.2911C28.9244 37.5595 33.8019 38.5946 39.0607 39.7343C39.5693 39.8506 39.9969 39.9669 40.3899 40.1065C43.6492 41.223 43.9035 43.2467 43.9035 46.5381Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 46H57.6343V42.9034C57.6343 40.4349 57.4436 38.9171 54.9991 38.0798C54.7044 37.9751 54.3836 37.8879 54.0022 37.8006L53.9482 37.7889C50.0248 36.9387 46.4081 36.1549 48.1684 32.9682C53.5688 23.2162 49.59 18 43.8948 18C38.0957 18 34.2209 23.4081 39.6473 32.9595C40.8925 35.1717 39.4925 36.2219 37.2428 36.94C37.9526 37.1085 38.708 37.2723 39.5034 37.4446L39.5616 37.4573C40.1126 37.5833 40.6286 37.721 41.1306 37.8986C43.1766 38.6019 44.6514 39.7439 45.4524 41.5413C46.0792 42.9478 46.176 44.547 46.1898 46Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"People"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Custom fields & sections"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.9035 46.5381V50.6668H7.28809C7.28809 50.0155 7.28809 47.0963 7.28809 46.5148C7.28809 43.2699 7.51924 41.2463 10.6977 40.1181C11.1369 39.9786 11.5876 39.839 12.1424 39.7227C17.2857 38.5829 22.3365 37.5711 19.9209 33.2795C12.6856 20.5443 17.852 13.3335 25.5842 13.3335C33.1778 13.3335 38.4828 20.2884 31.2823 33.2911C28.9244 37.5595 33.8019 38.5946 39.0607 39.7343C39.5693 39.8506 39.9969 39.9669 40.3899 40.1065C43.6492 41.223 43.9035 43.2467 43.9035 46.5381Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 46H57.6343V42.9034C57.6343 40.4349 57.4436 38.9171 54.9991 38.0798C54.7044 37.9751 54.3836 37.8879 54.0022 37.8006L53.9482 37.7889C50.0248 36.9387 46.4081 36.1549 48.1684 32.9682C53.5688 23.2162 49.59 18 43.8948 18C38.0957 18 34.2209 23.4081 39.6473 32.9595C40.8925 35.1717 39.4925 36.2219 37.2428 36.94C37.9526 37.1085 38.708 37.2723 39.5034 37.4446L39.5616 37.4573C40.1126 37.5833 40.6286 37.721 41.1306 37.8986C43.1766 38.6019 44.6514 39.7439 45.4524 41.5413C46.0792 42.9478 46.176 44.547 46.1898 46Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"People"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Employee online directory"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M43.9035 46.5381V50.6668H7.28809C7.28809 50.0155 7.28809 47.0963 7.28809 46.5148C7.28809 43.2699 7.51924 41.2463 10.6977 40.1181C11.1369 39.9786 11.5876 39.839 12.1424 39.7227C17.2857 38.5829 22.3365 37.5711 19.9209 33.2795C12.6856 20.5443 17.852 13.3335 25.5842 13.3335C33.1778 13.3335 38.4828 20.2884 31.2823 33.2911C28.9244 37.5595 33.8019 38.5946 39.0607 39.7343C39.5693 39.8506 39.9969 39.9669 40.3899 40.1065C43.6492 41.223 43.9035 43.2467 43.9035 46.5381Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.1898 46H57.6343V42.9034C57.6343 40.4349 57.4436 38.9171 54.9991 38.0798C54.7044 37.9751 54.3836 37.8879 54.0022 37.8006L53.9482 37.7889C50.0248 36.9387 46.4081 36.1549 48.1684 32.9682C53.5688 23.2162 49.59 18 43.8948 18C38.0957 18 34.2209 23.4081 39.6473 32.9595C40.8925 35.1717 39.4925 36.2219 37.2428 36.94C37.9526 37.1085 38.708 37.2723 39.5034 37.4446L39.5616 37.4573C40.1126 37.5833 40.6286 37.721 41.1306 37.8986C43.1766 38.6019 44.6514 39.7439 45.4524 41.5413C46.0792 42.9478 46.176 44.547 46.1898 46Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"People"}</Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block className={"features_item"} tag={"div"}>
                            <Block
                              className={"features_item_header"}
                              tag={"div"}
                            >
                              <Block
                                className={"features_item_dot"}
                                tag={"div"}
                              />
                              <Block
                                className={"features_item_label"}
                                tag={"div"}
                              >
                                {"Mobile app access"}
                              </Block>
                            </Block>
                            <Block
                              className={"features_item_badge-container"}
                              tag={"div"}
                            >
                              <Block
                                className={"badge-simple_component"}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={"icon-small"}
                                  content={
                                    '<svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6 7.33984V5.83984H12V7.33984H6ZM5.25 17.8398C4.8375 17.8398 4.48438 17.693 4.19063 17.3992C3.89688 17.1055 3.75 16.7523 3.75 16.3398V2.83984C3.75 2.42734 3.89688 2.07422 4.19063 1.78047C4.48438 1.48672 4.8375 1.33984 5.25 1.33984H12.75C13.1625 1.33984 13.5156 1.48672 13.8094 1.78047C14.1031 2.07422 14.25 2.42734 14.25 2.83984V16.3398C14.25 16.7523 14.1031 17.1055 13.8094 17.3992C13.5156 17.693 13.1625 17.8398 12.75 17.8398H5.25ZM5.25 15.5898V16.3398H12.75V15.5898H5.25ZM5.25 14.0898H12.75V5.08984H5.25V14.0898ZM5.25 3.58984H12.75V2.83984H5.25V3.58984Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block tag={"div"}>{"Mobile App"}</Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        animation-features={"assets"}
                        className={"features_preview_container"}
                        tag={"div"}
                      >
                        <Image
                          alt={
                            "Configurable access restrictions HR software Calamari"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf95a6fe54c23f599f10_Configurable%20access%20restrictions%C2%A0.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={"Full history of changes Calamari Core HR app"}
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf959e76d2f6c9693075_Full%20history%20of%20changes.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Custom employee document directory structure Core HR Calamari HR software"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf9505ef9767a4a8e9cf_Custom%20document%20directory%20structure.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Different workflows for employee documents Core HR Calamari HR software"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf951a16ca260aabca05_Different%20workflows%20for%20uploading%20%26%20requesting%20documents.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Easy-to-use search engine in HR system - Calamari Core HR "
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf95035a7d89c6459b8a_Advanced%20search%20options.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Work with me collaboration guideline - manual for employees with Calamari Core HR software"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf956d8c0d86f3432f0e_Work%20with%20me%20manual.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Custom fields & sections HRIS Calamari Core HR software "
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf951eb35325bae324e7_Custom%20fields%20%26%20sections.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Employee online directory Calamari HRIS Software"
                          }
                          className={"features_preview_image"}
                          height={"2448"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf9575c252f87cdfc53b_Employee%20online%20directory.webp"
                          }
                          width={"1800"}
                        />
                        <Image
                          alt={
                            "Document Scanning HR Mobile App Calamari HR software"
                          }
                          className={"features_preview_image is-bottom"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/665ddf9559dd08b539f5fdaa_Mobile%20App.webp"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"spacer-xhuge"} tag={"div"} />
                      <ElementPrice />
                    </Block>
                  </Block>
                </TabsPane>
              </TabsContent>
            </TabsWrapper>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

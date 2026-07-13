"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798134},"e-190":{"id":"e-190","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798135},"e-205":{"id":"e-205","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ec148f44-e23e-f27b-1345-b3a8bb74c19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ec148f44-e23e-f27b-1345-b3a8bb74c19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713269238024}},"actionLists":{"a-49":{"id":"a-49","title":"Blog Search Open","actionItemGroups":[{"actionItems":[{"id":"a-49-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-49-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]},{"actionItems":[{"id":"a-49-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"flex"}},{"id":"a-49-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706883810491},"a-50":{"id":"a-50","title":"Blog Search Close","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-50-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706883810491},"a-27":{"id":"a-27","title":"Preferences Popup [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":"none"}},{"id":"a-27-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":"flex"}}]},{"actionItems":[{"id":"a-27-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":250,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615393118761}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"section_logos"} tag={"footer"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={
                "content-box_default is-grey is-bgshape-ver1 radius-medium"
              }
              tag={"div"}
            >
              <Block className={"layout-row gap-xlarge"} tag={"div"}>
                <Block className={"layout-column"} tag={"div"}>
                  <Block className={"footer-logo"} tag={"div"}>
                    <Image
                      alt={"Calamari logo"}
                      className={"image-height-fill"}
                      height={"36"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6512ee4f5fef0b05cd9af7b0_logo_horizontal.svg"
                      }
                      width={"167"}
                    />
                  </Block>
                </Block>
                <Block
                  className={
                    "layout-column-desktop gap-xxlarge text-size-regular"
                  }
                  tag={"div"}
                >
                  <Block className={"sizing-grow"} tag={"div"}>
                    <Block
                      className={
                        "layout-column-desktop gap-large footer_tablet-gap-increased max-width-full"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"layout-column sizing-grow"}
                        tag={"div"}
                      >
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-row gap-small is-align-start"}
                            tag={"div"}
                          >
                            <Block
                              className={"layout-row gap-medium is-align-start"}
                              tag={"div"}
                            >
                              <Block className={"text-weight-bold"} tag={"div"}>
                                {"Product"}
                              </Block>
                              <Block
                                className={"layout-row gap-small"}
                                tag={"div"}
                              >
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Time Off"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Time & Attendance"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Core HR"}
                                </Link>
                                <Block
                                  className={"footer_placeholder-of-link"}
                                  tag={"div"}
                                />
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Pricing"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Customers"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Security"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "https://news.eu.intercom.com/calamari",
                                  }}
                                >
                                  {"What’s new"}
                                </Link>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-row gap-medium is-align-start"}
                            tag={"div"}
                          >
                            <Block className={"text-weight-bold"} tag={"div"}>
                              {"Integrations"}
                            </Block>
                            <Block
                              className={"layout-row gap-small"}
                              tag={"div"}
                            >
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Slack"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Google"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Microsoft 365"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"MS Teams"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Basecamp"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Asana"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Jira"}
                              </Link>
                              <Link
                                button={false}
                                className={"link-style-default"}
                                options={{
                                  href: "https://developers.calamari.io/",
                                }}
                              >
                                {"API"}
                              </Link>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                      <Block
                        className={"layout-column sizing-grow"}
                        tag={"div"}
                      >
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"layout-row gap-medium"}
                            tag={"div"}
                          >
                            <Block
                              className={"layout-row gap-medium"}
                              tag={"div"}
                            >
                              <Block
                                className={"layout-row gap-small"}
                                tag={"div"}
                              >
                                <Block
                                  className={"text-weight-bold"}
                                  tag={"div"}
                                >
                                  {"Company"}
                                </Block>
                                <Block
                                  className={
                                    "layout-row gap-medium is-align-start"
                                  }
                                  tag={"div"}
                                >
                                  <Block
                                    className={"layout-row gap-small"}
                                    tag={"div"}
                                  >
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"Career"}
                                      </Link>
                                      <Block
                                        className={"badge is-career-counter"}
                                        tag={"div"}
                                      >
                                        <Block className={"hide"} tag={"div"}>
                                          <NotSupported
                                            _atom={"Collection List"}
                                          />
                                        </Block>
                                        <Block
                                          fs-countitems-element={"value"}
                                          tag={"div"}
                                        >
                                          {"0"}
                                        </Block>
                                      </Block>
                                    </Block>
                                    <Link
                                      button={false}
                                      className={"link-style-default"}
                                      options={{
                                        href: "#",
                                      }}
                                    >
                                      {"Blog"}
                                    </Link>
                                  </Block>
                                </Block>
                              </Block>
                              <Block className={"text-weight-bold"} tag={"div"}>
                                {"Support"}
                              </Block>
                              <Block
                                className={"layout-row gap-small"}
                                tag={"div"}
                              >
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "https://help.calamari.io/",
                                  }}
                                >
                                  {"Help Center"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "https://status.calamari.io/",
                                  }}
                                >
                                  {"System Status"}
                                </Link>
                                <Link
                                  button={false}
                                  className={"link-style-default"}
                                  options={{
                                    href: "#",
                                  }}
                                >
                                  {"Contact Us"}
                                </Link>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block className={"layout-row"} tag={"div"}>
                            <Block
                              className={
                                "layout-row gap-small footer_tablet-layout-swap-column"
                              }
                              tag={"div"}
                            >
                              <Block
                                className={"sizing-grow-tablet"}
                                tag={"div"}
                              >
                                <Block
                                  className={
                                    "layout-row gap-medium is-align-start"
                                  }
                                  tag={"div"}
                                >
                                  <Block
                                    className={"text-weight-bold"}
                                    tag={"div"}
                                  >
                                    {"Industries"}
                                  </Block>
                                  <Block
                                    className={"layout-row gap-small"}
                                    tag={"div"}
                                  >
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"SaaS & Technology"}
                                      </Link>
                                    </Block>
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"Universities & Colleges"}
                                      </Link>
                                    </Block>
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"Software Agencies"}
                                      </Link>
                                    </Block>
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"Game Studios"}
                                      </Link>
                                    </Block>
                                    <Block tag={"div"}>
                                      <Link
                                        button={false}
                                        className={"link-style-default"}
                                        options={{
                                          href: "#",
                                        }}
                                      >
                                        {"Nonprofits"}
                                      </Link>
                                    </Block>
                                  </Block>
                                </Block>
                              </Block>
                              <Block
                                className={
                                  "footer_placeholder-of-link hide-tablet"
                                }
                                tag={"div"}
                              />
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block tag={"div"}>
                  <Block className={"spacer-large hide-tablet"} tag={"div"} />
                  <Block
                    className={"layout-column-desktop gap-large"}
                    tag={"div"}
                  >
                    <Block
                      className={"layout-column gap-medium is-align-center"}
                      tag={"div"}
                    >
                      <Link
                        aria-label={"facebook"}
                        block={"inline"}
                        button={false}
                        className={"link-style-default"}
                        options={{
                          href: "https://www.facebook.com/calamarihr",
                          target: "_blank",
                        }}
                      >
                        <HtmlEmbed
                          className={"icon-medium"}
                          content={
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_2582_14027)">\n<path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#21537C"/>\n</g>\n<defs>\n<clipPath id="clip0_2582_14027">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>\n</svg>'
                          }
                        />
                      </Link>
                      <Link
                        aria-label={"linkedin"}
                        block={"inline"}
                        button={false}
                        className={"link-style-default"}
                        options={{
                          href: "https://www.linkedin.com/company/calamarihr",
                          target: "_blank",
                        }}
                      >
                        <HtmlEmbed
                          className={"icon-medium"}
                          content={
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_2582_14033)">\n<path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#21537C"/>\n</g>\n<defs>\n<clipPath id="clip0_2582_14033">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>\n</svg>'
                          }
                        />
                      </Link>
                    </Block>
                    <Block className={"sizing-grow-desktop"} tag={"div"}>
                      <Block
                        className={"text-size-regular text-weight-bold"}
                        tag={"div"}
                      >
                        <Block
                          className={"layout-column gap-large"}
                          tag={"div"}
                        >
                          <Link
                            button={false}
                            className={"link-style-default"}
                            options={{
                              href: "#",
                            }}
                          >
                            {"Polices"}
                          </Link>
                          <Link
                            button={false}
                            className={"link-style-default"}
                            options={{
                              href: "#",
                            }}
                          >
                            {"Terms of Service"}
                          </Link>
                          <DOM
                            className={"link-style-default"}
                            data-w-id={"ec148f44-e23e-f27b-1345-b3a8bb74c19d"}
                            id={"cookiebot-renew"}
                            tag={"button"}
                          >
                            {"Cookies"}
                          </DOM>
                        </Block>
                      </Block>
                    </Block>
                    <HtmlEmbed
                      content={
                        '<style>\n.heart-icon {\n\tvertical-align: middle;\n}\n</style>\n\n\t<p class="text-size-regular">Made with &nbsp; \n\t<svg class="heart-icon" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M9.77066 3.98698C9.77066 3.98698 8.31112 0 5.31782 0C2.32452 0 0.635269 1.99526 0.0981002 4.90869C-0.439068 7.82212 0.942725 15.1852 11.5341 22.474C11.5341 22.474 17.1391 14.1893 18.5951 8.59197C20.0511 2.99465 17.9802 1.30663 16.9058 0.921703C15.8315 0.536777 12.9159 -0.459086 9.76713 3.99052L9.77066 3.98698Z" fill="#27A082"/>\n\t</svg>\n\t&nbsp;in Poland\n\t</p>'
                      }
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DropdownList from "./webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "./webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "./webflow_modules/Dropdown/components/DropdownWrapper";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Span from "./webflow_modules/Basic/components/Span";
import * as _interactions from "./webflow_modules/interactions";
import { MobileMenuLinkItem } from "./MobileMenuLinkItem";

const _interactionsData = JSON.parse(
  '{"events":{"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dropdown_component","originalId":"62eab44ae6ee0fabfdfa39f1|ada78670-8dab-6fd8-6deb-a8c39fb89ba6","appliesTo":"CLASS"},"targets":[{"selector":".dropdown_component","originalId":"62eab44ae6ee0fabfdfa39f1|ada78670-8dab-6fd8-6deb-a8c39fb89ba6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661953026560},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dropdown_component","originalId":"62eab44ae6ee0fabfdfa39f1|ada78670-8dab-6fd8-6deb-a8c39fb89ba6","appliesTo":"CLASS"},"targets":[{"selector":".dropdown_component","originalId":"62eab44ae6ee0fabfdfa39f1|ada78670-8dab-6fd8-6deb-a8c39fb89ba6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661953026561},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"CLASS"},"targets":[{"id":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697541581335},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"CLASS"},"targets":[{"id":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697541581335},"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798134},"e-190":{"id":"e-190","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798135},"e-372":{"id":"e-372","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-373"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"},"targets":[{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730719572744},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-95","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-372"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"},"targets":[{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730719572744}},"actionLists":{"a-7":{"id":"a-7","title":"Dropdown / Opens","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":0,"unit":""}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_icon","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8d0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-7-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":"none"}}]},{"actionItems":[{"id":"a-7-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":"block"}}]},{"actionItems":[{"id":"a-7-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":1,"unit":""}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_icon","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8d0"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1661953033877},"a-8":{"id":"a-8","title":"Dropdown / Close","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"selector":".dropdown_icon","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8d0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_content","selectorGuids":["d1b54c78-838d-67b2-652b-f9a79e9ec8ce"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661953033877},"a-29":{"id":"a-29","title":"mobile menu / open","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}},{"id":"a-29-n-6","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"block"}},{"id":"a-29-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-30":{"id":"a-30","title":"mobile menu / close","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445},"a-49":{"id":"a-49","title":"Blog Search Open","actionItemGroups":[{"actionItems":[{"id":"a-49-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-49-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]},{"actionItems":[{"id":"a-49-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"flex"}},{"id":"a-49-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706883810491},"a-50":{"id":"a-50","title":"Blog Search Close","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-50-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706883810491},"a-94":{"id":"a-94","title":"mobile menu / open 2","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}},{"id":"a-94-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-94-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"block"}},{"id":"a-94-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-94-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-95":{"id":"a-95","title":"mobile menu / close 2","actionItemGroups":[{"actionItems":[{"id":"a-95-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-95-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-95-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MobileMenu({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block
      className={"mobile-menu_component"}
      fs-scrolldisable-element={"when-visible"}
      tag={"div"}
    >
      <Block className={"padding-global height-fill"} tag={"div"}>
        <Block className={"layout-row height-fill"} tag={"div"}>
          <Block className={"sizing-grow overflow-auto"} tag={"div"}>
            <Block tag={"div"}>
              <Block tag={"div"}>
                <Block className={"spacer-large"} tag={"div"} />
                <Block
                  className={"layout-column is-align-center gap-xlarge"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "text-size-small text-weight-bold text-style-allcaps"
                    }
                    tag={"div"}
                  >
                    {"Product"}
                  </Block>
                  <Block className={"divider-horizontal"} tag={"div"} />
                </Block>
                <Block className={"spacer-small"} tag={"div"} />
              </Block>
              <Block tag={"div"}>
                <MobileMenuLinkItem
                  ariaLabel={"Leave Management"}
                  link={{
                    href: "#",
                  }}
                  text={"Time Off"}
                />
                <MobileMenuLinkItem
                  ariaLabel={"Attendance Management"}
                  link={{
                    href: "#",
                  }}
                  text={"Time & Attendance"}
                />
                <MobileMenuLinkItem
                  link={{
                    href: "#",
                  }}
                  text={"Core HR"}
                />
                <DropdownWrapper
                  className={"dropdown_component"}
                  delay={0}
                  hover={false}
                  tag={"div"}
                >
                  <DropdownToggle className={"dropdown_trigger"} tag={"div"}>
                    <Block
                      className={"padding-vertical padding-small"}
                      tag={"div"}
                    >
                      <Block
                        className={"layout-column is-align-center"}
                        tag={"div"}
                      >
                        <Block className={"sizing-grow"} tag={"div"}>
                          <Block
                            className={"text-size-medium text-weight-bold"}
                            tag={"div"}
                          >
                            {"Integrations"}
                          </Block>
                        </Block>
                        <HtmlEmbed
                          className={"icon-medium dropdown_icon"}
                          content={
                            '<svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.8299 14.4656V6.26562C11.8299 5.98229 11.9257 5.74479 12.1174 5.55312C12.309 5.36146 12.5465 5.26562 12.8299 5.26562C13.1132 5.26562 13.3507 5.36146 13.5424 5.55312C13.734 5.74479 13.8299 5.98229 13.8299 6.26562V14.4656L16.7299 11.5656C16.9132 11.3823 17.1465 11.2906 17.4299 11.2906C17.7132 11.2906 17.9465 11.3823 18.1299 11.5656C18.3132 11.749 18.4049 11.9823 18.4049 12.2656C18.4049 12.549 18.3132 12.7823 18.1299 12.9656L13.5299 17.5656C13.3299 17.7656 13.0965 17.8656 12.8299 17.8656C12.5632 17.8656 12.3299 17.7656 12.1299 17.5656L7.52988 12.9656C7.34655 12.7823 7.25488 12.549 7.25488 12.2656C7.25488 11.9823 7.34655 11.749 7.52988 11.5656C7.71322 11.3823 7.94655 11.2906 8.22988 11.2906C8.51322 11.2906 8.74655 11.3823 8.92988 11.5656L11.8299 14.4656Z" fill="currentColor"/>\n</svg>'
                          }
                        />
                      </Block>
                    </Block>
                  </DropdownToggle>
                  <DropdownList className={"dropdown_content"} tag={"nav"}>
                    <Block
                      className={"padding-vertical padding-small"}
                      tag={"div"}
                    >
                      <Block
                        className={"layout-row gap-xsmall text-size-regular"}
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
                          {"MSTeams"}
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
                      </Block>
                    </Block>
                  </DropdownList>
                </DropdownWrapper>
                <MobileMenuLinkItem
                  link={{
                    href: "#",
                  }}
                  text={"Pricing"}
                />
                <MobileMenuLinkItem
                  link={{
                    href: "#",
                  }}
                  text={"Customers"}
                />
              </Block>
            </Block>
            <Block tag={"div"}>
              <Block tag={"div"}>
                <Block className={"spacer-xlarge"} tag={"div"} />
                <Block
                  className={"layout-column is-align-center gap-xlarge"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "text-size-small text-weight-bold text-style-allcaps"
                    }
                    tag={"div"}
                  >
                    {"Resources"}
                  </Block>
                  <Block className={"divider-horizontal"} tag={"div"} />
                </Block>
                <Block className={"spacer-small"} tag={"div"} />
              </Block>
              <Block tag={"div"}>
                <MobileMenuLinkItem
                  link={{
                    href: "#",
                  }}
                  text={"Blog"}
                />
                <MobileMenuLinkItem
                  link={{
                    href: "https://help.calamari.io/?_gl=1*1gxae9c*_ga*MTA4Mjg0ODI3LjE2OTc1NTMwMTE.*_ga_QLW0FX6LL1*MTcwMDQ4Nzk0OC41Ni4wLjE3MDA0ODc5NDguMC4wLjA.",
                  }}
                  text={"Help Center"}
                />
                <MobileMenuLinkItem
                  link={{
                    href: "https://news.eu.intercom.com/calamari",
                  }}
                  text={"What’s New"}
                />
              </Block>
            </Block>
            <Block className={"spacer-medium"} tag={"div"} />
          </Block>
          <Block tag={"div"}>
            <Block className={"spacer-medium top-shadow"} tag={"div"} />
            <Link
              button={false}
              className={"text-size-regular link-default"}
              options={{
                href: "https://app.calamari.io/o/sign-in",
              }}
            >
              {"Already a customer?"}
              <Span className={"text-style-link"}>{"Log in."}</Span>
            </Link>
            <Block className={"spacer-medium"} tag={"div"} />
            <Block className={"divider-horizontal"} tag={"div"} />
            <Block className={"spacer-large"} tag={"div"} />
            <Link
              button={true}
              className={"button-delete width-fill"}
              options={{
                href: "https://app.calamari.io/o/sign-up-company",
              }}
            >
              {"Start free trial"}
            </Link>
            <Block className={"spacer-large"} tag={"div"} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

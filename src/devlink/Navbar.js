"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"CLASS"},"targets":[{"id":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697541581335},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"CLASS"},"targets":[{"id":"72f7f145-bd51-7c99-da4b-410addf36eb1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697541581335},"e-224":{"id":"e-224","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c8569b74-f6ab-f48b-6502-bc1405938186","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c8569b74-f6ab-f48b-6502-bc1405938186","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715006542009},"e-227":{"id":"e-227","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c8569b74-f6ab-f48b-6502-bc1405938186","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c8569b74-f6ab-f48b-6502-bc1405938186","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715006542010},"e-372":{"id":"e-372","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-373"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"},"targets":[{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730719572744},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-95","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-372"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"},"targets":[{"selector":".navbar_mobile-button","originalId":"6564bce7fb51f80f232d59ad|eaf95081-2311-c1c7-6a25-51cbcfdc3c20","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1730719572744},"e-454":{"id":"e-454","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6501ff9925fe6fa44b67fc68|fbbca250-71e8-4da9-5a17-9bba00490b9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6501ff9925fe6fa44b67fc68|fbbca250-71e8-4da9-5a17-9bba00490b9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765910963377},"e-455":{"id":"e-455","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-454"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6501ff9925fe6fa44b67fc68|fbbca250-71e8-4da9-5a17-9bba00490b9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6501ff9925fe6fa44b67fc68|fbbca250-71e8-4da9-5a17-9bba00490b9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765910963377}},"actionLists":{"a-29":{"id":"a-29","title":"mobile menu / open","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}},{"id":"a-29-n-6","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"block"}},{"id":"a-29-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-29-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-30":{"id":"a-30","title":"mobile menu / close","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445},"a-68":{"id":"a-68","title":"v2 mobile menu [OPEN] 2","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"none"}},{"id":"a-68-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c8569b74-f6ab-f48b-6502-bc1405938182"},"value":1,"unit":""}},{"id":"a-68-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-68-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"block"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutExpo","duration":250,"target":{"id":"c8569b74-f6ab-f48b-6502-bc1405938182"},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-68-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-71":{"id":"a-71","title":"v2 / mobile menu / [CLOSE] 2","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-71-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutExpo","duration":250,"target":{"id":"c8569b74-f6ab-f48b-6502-bc1405938182"},"value":1,"unit":""}},{"id":"a-71-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-71-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445},"a-94":{"id":"a-94","title":"mobile menu / open 2","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}},{"id":"a-94-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-94-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"block"}},{"id":"a-94-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-94-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-95":{"id":"a-95","title":"mobile menu / close 2","actionItemGroups":[{"actionItems":[{"id":"a-95-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-95-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-95-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component","selectorGuids":["738333b1-996c-fa8a-d2ae-a33b93eb38c5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445},"a-108":{"id":"a-108","title":"v2 mobile menu [OPEN] 4","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"none"}},{"id":"a-108-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"652e38f9880255cb0a294653|c8569b74-f6ab-f48b-6502-bc1405938182"},"value":1,"unit":""}},{"id":"a-108-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-108-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"block"}},{"id":"a-108-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutExpo","duration":250,"target":{"id":"652e38f9880255cb0a294653|c8569b74-f6ab-f48b-6502-bc1405938182"},"value":0,"unit":""}},{"id":"a-108-n-7","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":50}},{"id":"a-108-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":750,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1697541584445},"a-109":{"id":"a-109","title":"v2 / mobile menu / [CLOSE] 4","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_mobile-menu-icon","selectorGuids":["8e440ad3-c243-2443-19dd-a6982d075219"]},"value":0}},{"id":"a-109-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutExpo","duration":250,"target":{"id":"652e38f9880255cb0a294653|c8569b74-f6ab-f48b-6502-bc1405938182"},"value":1,"unit":""}},{"id":"a-109-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"xValue":null,"yValue":-100,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-109-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mobile-menu_component-v2","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4638a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1697541584445}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({
  languageSwitcher = true,

  slugCurrentLangauge = {
    href: "https://calamari-en.webflow.io/leave-management",
  },

  urlAlternateLanguage = {
    href: "https://calamari-pl.webflow.io/elektroniczne-wnioski-urlopowe",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"navbar_component"} tag={"header"}>
      <Block className={"padding-global height-fill"} tag={"div"}>
        <Block className={"container-large height-fill"} tag={"div"}>
          <Block
            className={"layout-column gap-xlarge is-align-center height-fill"}
            tag={"div"}
          >
            <Link
              block={"inline"}
              button={false}
              className={"navbar_logo"}
              options={{
                href: "#",
              }}
            >
              <Image
                alt={"Calamari logo"}
                className={"image-height-fill"}
                height={"36"}
                loading={"eager"}
                src={
                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6512ee4f5fef0b05cd9af7b0_logo_horizontal.svg"
                }
                width={"167"}
              />
            </Link>
            <Block className={"sizing-grow hide-tablet"} tag={"div"}>
              <Block
                className={"layout-column is-justify-sb is-align-center"}
                tag={"nav"}
              >
                <Block className={"layout-column gap-xxlarge"} tag={"div"}>
                  <Block className={"position-relative"} tag={"div"}>
                    <Block
                      className={"navbar_drawer-trigger is-products"}
                      tag={"div"}
                    >
                      <Block
                        className={
                          "layout-column is-align-center link-style-default position-relative"
                        }
                        // @ts-ignore - User-defined custom attribute(s)
                        role={"button"}
                        tag={"div"}
                      >
                        <Block className={"navbar_text"} tag={"div"}>
                          {"Product"}
                        </Block>
                        <HtmlEmbed
                          className={"icon-1x1-small navbar-link-chevron"}
                          content={
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>'
                          }
                        />
                      </Block>
                    </Block>
                    <Block className={"navbar_drawer is-products"} tag={"div"}>
                      <Block
                        className={
                          "navbar_drawer-container shadow-modal is-dark-2"
                        }
                        tag={"div"}
                      >
                        <Block className={"layout-column"} tag={"div"}>
                          <Block className={"max-width-small"} tag={"div"}>
                            <Block className={"padding-small"} tag={"div"}>
                              <Link
                                aria-label={"Leave Management"}
                                block={"inline"}
                                button={false}
                                className={"navbar_drawer-link"}
                                options={{
                                  href: "#",
                                }}
                              >
                                <Block className={"padding-small"} tag={"div"}>
                                  <Block
                                    className={"layout-column gap-small"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"icon-circle is-navy"}
                                      tag={"div"}
                                    >
                                      <HtmlEmbed
                                        className={"icon-1x1-global"}
                                        content={
                                          '<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M17.8431 10.6428C17.0282 9.78198 16.0188 9.44875 15.0743 9.36544L17.2782 8.68973L17.6487 7.74559L18.2784 8.43056L19.5378 7.90295C19.5378 7.90295 18.6025 5.29267 15.5651 5.89433C14.6298 6.07946 13.9537 6.5145 13.4815 7.03285C13.3796 6.31086 13.074 5.5611 12.4073 4.84837C10.2496 2.53429 8.03633 4.11712 8.03633 4.11712L8.7679 5.30193L9.6569 5.1168L9.44391 6.10722L10.9163 8.04179C10.0551 7.44013 8.87903 7.07914 7.34179 7.57898C4.86 8.40279 3.96173 10.6336 3.99878 11.4389L5.2582 11.3093L5.72122 10.5502L6.13794 11.1427L7.80482 11.0408L8.30488 10.0782L8.68456 10.865L11.2775 10.4855C10.2588 11.6888 9.14758 13.6511 9.12906 16.4743C9.15684 16.465 9.18462 16.465 9.22166 16.4558C9.59208 16.4002 9.97176 16.3725 10.3514 16.3725C10.87 16.3725 11.3793 16.428 11.8794 16.5298C11.9072 16.5391 11.9257 16.5391 11.9535 16.5483C11.8424 15.1599 11.9998 12.5959 13.0555 10.7354L15.4539 13.0587L16.1855 12.8088L16.167 13.7344L17.5098 14.8637L18.158 14.5953L18.0283 15.4468L19.0748 16.3725C19.7323 14.91 20.0471 12.9569 17.8431 10.6428Z" fill="white"/>\n<path d="M10.3419 16.8906C9.98078 16.8906 9.62889 16.9184 9.28625 16.9739C7.11005 17.3072 5.3413 18.6401 4.62825 20.3988H16.0556C15.3889 18.7419 13.7776 17.4645 11.7773 17.0387C11.3235 16.9369 10.842 16.8906 10.3419 16.8906Z" fill="white"/>\n</svg>'
                                        }
                                      />
                                    </Block>
                                    <Block tag={"div"}>
                                      <Block
                                        className={
                                          "text-size-regular text-weight-bold"
                                        }
                                        tag={"div"}
                                      >
                                        {"Time Off"}
                                      </Block>
                                      <Block
                                        className={"spacer-xsmall"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={"text-size-regular"}
                                        tag={"div"}
                                      >
                                        {
                                          "Plan time off and automate entitlementcalculation"
                                        }
                                      </Block>
                                    </Block>
                                  </Block>
                                </Block>
                              </Link>
                              <Link
                                aria-label={"Attendance Management"}
                                block={"inline"}
                                button={false}
                                className={"navbar_drawer-link"}
                                options={{
                                  href: "#",
                                }}
                              >
                                <Block className={"padding-small"} tag={"div"}>
                                  <Block
                                    className={"layout-column gap-small"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"icon-circle is-brand"}
                                      tag={"div"}
                                    >
                                      <HtmlEmbed
                                        className={"icon-1x1-global"}
                                        content={
                                          '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3574 4.0529H28.3135V0.400879H17.3574V4.0529Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M30.4373 31.5883C26.3224 35.705 19.6494 35.705 15.5336 31.5883C14.7822 30.8358 14.1697 29.997 13.6935 29.1055L22.9859 24.1352V13.5932C25.6831 13.5932 28.3794 14.6228 30.4373 16.6812C34.553 20.7979 34.553 27.4716 30.4373 31.5883ZM41.0964 12.9555L38.2667 8.87497L35.3739 10.8814C28.2182 4.1058 16.9355 4.20775 9.92425 11.2197C2.79348 18.3521 2.79348 29.9173 9.92425 37.0498C17.0559 44.1822 28.6175 44.1822 35.7483 37.0498C41.7941 31.0035 42.6937 21.7803 38.489 14.7646L41.0964 12.9555Z" fill="white"/>\n</svg>'
                                        }
                                      />
                                    </Block>
                                    <Block tag={"div"}>
                                      <Block
                                        className={
                                          "text-size-regular text-weight-bold"
                                        }
                                        tag={"div"}
                                      >
                                        {"Time & Attendance"}
                                      </Block>
                                      <Block
                                        className={"spacer-xsmall"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={"text-size-regular"}
                                        tag={"div"}
                                      >
                                        {
                                          "Track attendance and work time ofemployees"
                                        }
                                      </Block>
                                    </Block>
                                  </Block>
                                </Block>
                              </Link>
                              <Link
                                block={"inline"}
                                button={false}
                                className={"navbar_drawer-link"}
                                options={{
                                  href: "#",
                                }}
                              >
                                <Block className={"padding-small"} tag={"div"}>
                                  <Block
                                    className={"layout-column gap-small"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"icon-circle is-yellow"}
                                      tag={"div"}
                                    >
                                      <HtmlEmbed
                                        className={"icon-1x1-global"}
                                        content={
                                          '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6767 15.1325V16.5906H1.49239C1.49239 16.3606 1.49239 15.3297 1.49239 15.1243C1.49239 13.9784 1.57562 13.2637 2.7201 12.8653C2.87824 12.816 3.04055 12.7667 3.24031 12.7257C5.09228 12.3232 6.91096 11.9658 6.04116 10.4502C3.43591 5.95276 5.29621 3.40625 8.08041 3.40625C10.8147 3.40625 12.7249 5.8624 10.1321 10.4543C9.28314 11.9617 11.0394 12.3273 12.933 12.7298C13.1161 12.7708 13.2701 12.8119 13.4116 12.8612C14.5852 13.2555 14.6767 13.9702 14.6767 15.1325Z" fill="#21537C"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14.943H19.6209V13.8494C19.6209 12.9776 19.5522 12.4416 18.672 12.1459C18.5659 12.1089 18.4504 12.0781 18.313 12.0473L18.2936 12.0432C16.8809 11.7429 15.5786 11.4661 16.2124 10.3408C18.157 6.8968 16.7243 5.05469 14.6736 5.05469C12.5855 5.05469 11.1902 6.96457 13.1442 10.3377C13.5925 11.1189 13.0884 11.4898 12.2783 11.7434C12.5339 11.8029 12.8059 11.8607 13.0923 11.9216L13.1133 11.9261C13.3117 11.9706 13.4975 12.0192 13.6783 12.0819C14.415 12.3303 14.946 12.7336 15.2345 13.3684C15.4601 13.8651 15.495 14.4298 15.5 14.943Z" fill="#21537C"/>\n</svg>'
                                        }
                                      />
                                    </Block>
                                    <Block tag={"div"}>
                                      <Block
                                        className={
                                          "text-size-regular text-weight-bold"
                                        }
                                        tag={"div"}
                                      >
                                        {"Core HR"}
                                      </Block>
                                      <Block
                                        className={"spacer-xsmall"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={"text-size-regular"}
                                        tag={"div"}
                                      >
                                        {
                                          "Store employee documents and browse peopledirectory"
                                        }
                                      </Block>
                                    </Block>
                                  </Block>
                                </Block>
                              </Link>
                            </Block>
                          </Block>
                          <Block
                            className={"padding-vertical padding-small"}
                            tag={"div"}
                          >
                            <Block className={"divider-vertical"} tag={"div"} />
                          </Block>
                          <Block className={"padding-medium"} tag={"div"}>
                            <Block
                              className={"text-size-regular text-weight-bold"}
                              tag={"div"}
                            >
                              {"Integrations"}
                            </Block>
                            <Block className={"spacer-xsmall"} tag={"div"} />
                            <Block
                              className={"layout-row gap-xsmall is-align-start"}
                              tag={"div"}
                            >
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Slack"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Google"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Microsoft 365"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Basecamp"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Asana"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
                                options={{
                                  href: "#",
                                }}
                              >
                                {"Jira"}
                              </Link>
                              <Link
                                button={false}
                                className={
                                  "text-size-regular link-style-default"
                                }
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
                    </Block>
                  </Block>
                  <Link
                    button={false}
                    className={"navbar_text link-style-default"}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pricing"}
                  </Link>
                  <Link
                    button={false}
                    className={"navbar_text link-style-default"}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Customers"}
                  </Link>
                  <Link
                    button={false}
                    className={"navbar_text link-style-default"}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog"}
                  </Link>
                </Block>
                <Block
                  className={"layout-column gap-large is-align-center"}
                  tag={"div"}
                >
                  <Block
                    className={"layout-column layout-align-center gap-xxlarge"}
                    tag={"div"}
                  >
                    {languageSwitcher ? (
                      <Block className={"position-relative"} tag={"div"}>
                        <Block
                          className={"navbar_drawer-trigger is-languages"}
                          data-drawer-trigger={"true"}
                          // @ts-ignore - User-defined custom attribute(s)
                          role={"button"}
                          tag={"div"}
                        >
                          <Block
                            className={
                              "layout-column is-align-center link-style-default"
                            }
                            // @ts-ignore - User-defined custom attribute(s)
                            role={"button"}
                            tag={"div"}
                          >
                            <Block className={"navbar_text"} tag={"div"}>
                              {"EN"}
                            </Block>
                            <HtmlEmbed
                              className={"icon-1x1-small navbar-link-chevron"}
                              content={
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>'
                              }
                            />
                          </Block>
                        </Block>
                        <Block
                          className={"navbar_drawer is-languages"}
                          tag={"div"}
                        >
                          <Block
                            className={
                              "navbar_drawer-container shadow-modal is-dark-2"
                            }
                            tag={"div"}
                          >
                            <Block className={"padding-xsmall"} tag={"div"}>
                              <Link
                                block={"inline"}
                                button={false}
                                className={"navbar_drawer-link"}
                                options={slugCurrentLangauge}
                              >
                                <Block className={"padding-xsmall"} tag={"div"}>
                                  <Block
                                    className={
                                      "layout-column gap-xsmall is-align-center"
                                    }
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"navbar_text"}
                                      tag={"div"}
                                    >
                                      {"EN"}
                                    </Block>
                                    <Block
                                      className={"icon-height-medium"}
                                      tag={"div"}
                                    >
                                      <Image
                                        alt={""}
                                        className={"image-height-fill"}
                                        height={"64"}
                                        loading={"eager"}
                                        src={
                                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/652d7bd2081a3e87fb6fd3a1_united-states_330459.png"
                                        }
                                        width={"64"}
                                      />
                                    </Block>
                                  </Block>
                                </Block>
                              </Link>
                              <Link
                                block={"inline"}
                                button={false}
                                className={"navbar_drawer-link"}
                                options={urlAlternateLanguage}
                              >
                                <Block className={"padding-xsmall"} tag={"div"}>
                                  <Block
                                    className={
                                      "layout-column gap-xsmall is-align-center"
                                    }
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"navbar_text"}
                                      tag={"div"}
                                    >
                                      {"PL"}
                                    </Block>
                                    <Block
                                      className={"icon-height-medium"}
                                      tag={"div"}
                                    >
                                      <Image
                                        alt={""}
                                        className={"image-height-fill"}
                                        height={"64"}
                                        loading={"eager"}
                                        src={
                                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/652d7bd22fbf8b6b576c0110_poland_330474.png"
                                        }
                                        width={"64"}
                                      />
                                    </Block>
                                  </Block>
                                </Block>
                              </Link>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    ) : null}
                    <Link
                      button={false}
                      className={"navbar_text link-style-default"}
                      data-cta={"login"}
                      options={{
                        href: "https://app.calamari.io/o/sign-in",
                      }}
                    >
                      {"Login"}
                    </Link>
                  </Block>
                  <Link
                    button={true}
                    className={"button-delete"}
                    data-cta={"signup"}
                    options={{
                      href: "https://app.calamari.io/o/sign-up-company",
                    }}
                  >
                    {"Start free trial"}
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={"navbar_mobile-container"} tag={"div"}>
              <Link
                block={"inline"}
                button={false}
                className={"navbar_drawer-link"}
                options={urlAlternateLanguage}
              >
                <Block className={"padding-xsmall"} tag={"div"}>
                  <Block
                    className={"layout-column gap-xsmall is-align-center"}
                    tag={"div"}
                  >
                    <Block className={"navbar_text"} tag={"div"}>
                      {"PL"}
                    </Block>
                    <Block className={"icon-height-medium"} tag={"div"}>
                      <Image
                        alt={""}
                        className={"image-height-fill"}
                        height={"64"}
                        loading={"eager"}
                        src={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/652d7bd22fbf8b6b576c0110_poland_330474.png"
                        }
                        width={"64"}
                      />
                    </Block>
                  </Block>
                </Block>
              </Link>
              <Block
                className={"navbar_mobile-button"}
                data-w-id={"72f7f145-bd51-7c99-da4b-410addf36eb1"}
                tag={"div"}
              >
                <NotSupported _atom={"Animation"} />
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-207":{"id":"e-207","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main"],"target":{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf4a1","appliesTo":"CLASS"},"targets":[{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf4a1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715802928472},"e-217":{"id":"e-217","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-207"}},"mediaQueries":["main"],"target":{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf4a1","appliesTo":"CLASS"},"targets":[{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf4a1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715802928473},"e-225":{"id":"e-225","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004350},"e-223":{"id":"e-223","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-225"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004351},"e-218":{"id":"e-218","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f331","appliesTo":"CLASS"},"targets":[{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f331","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715802928472},"e-226":{"id":"e-226","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-218"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f331","appliesTo":"CLASS"},"targets":[{"selector":".card-product_component","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f331","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715802928473}},"actionLists":{"a-61":{"id":"a-61","title":"v2 / Card Product / Hover [IN]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-61-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuint","duration":250,"target":{},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715802935888},"a-64":{"id":"a-64","title":"v2 / Card Product / Hover [OUT]","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuint","duration":250,"target":{},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715802935888},"a-73":{"id":"a-73","title":"Integration Tool / Hover / IN 2","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-8fb1a400-c300-c274-0b0c-aea511175c08","rValue":44,"bValue":128,"gValue":188,"aValue":1}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-74":{"id":"a-74","title":"Integration Tool / Hover / OUT 2","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-282d33ce-e629-c24b-a2ba-fac037ae97ae","rValue":13,"bValue":68,"gValue":29,"aValue":1}},{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-69":{"id":"a-69","title":"v2 / Card Product / Hover [IN] 2","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".asset_with-stroke_outer.is-card-product-asset","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4639d","faeadd1c-442e-f43b-9c5a-372537d463f0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-69-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuint","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".asset_with-stroke_outer.is-card-product-asset","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4639d","faeadd1c-442e-f43b-9c5a-372537d463f0"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1715802935888},"a-72":{"id":"a-72","title":"v2 / Card Product / Hover [OUT] 2","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutQuint","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".asset_with-stroke_outer.is-card-product-asset","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d4639d","faeadd1c-442e-f43b-9c5a-372537d463f0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1715802935888}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ElementProductCardsArchive({
  visibilityCoreHr = true,
  visibilityTA = true,
  visibilityTimeOff = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"card-product_layout"} tag={"div"}>
      {visibilityTimeOff ? (
        <Link
          block={"inline"}
          button={false}
          className={"card-product_component"}
          options={{
            href: "#",
          }}
        >
          <Block className={"card-product_content"} tag={"div"}>
            <Block className={"max-width-medium"} tag={"div"}>
              <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                {"Time Off"}
              </Heading>
              <Block className={"spacer-medium"} tag={"div"} />
              <Paragraph className={"text-size-medium"}>
                {
                  "Easily manage absences and holidays, automate PTO calculations, and use flexible multi-level approval processes. See your employees' availability at aglance with sharedcalendars."
                }
              </Paragraph>
              <Block className={"spacer-content-box"} tag={"div"} />
            </Block>
            <Block className={"button-tertiary"} tag={"div"}>
              <Block tag={"div"}>{"Get details"}</Block>
              <HtmlEmbed
                className={"icon-medium-v2 text-color-brand-v2"}
                content={
                  '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                }
              />
            </Block>
          </Block>
          <Block className={"card-product_asset"} tag={"div"}>
            <Block
              className={"asset_with-stroke_outer is-card-product-asset"}
              tag={"div"}
            >
              <Block
                className={"asset_with-stroke_inner is-card-product-asset"}
                tag={"div"}
              >
                <Image
                  alt={
                    "Time Off Management HR System - Replace emails and spreadsheets with a flexible, easy-to-use tool Calamari"
                  }
                  height={"1080"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10f31_Product%20Asset-1.webp"
                  }
                  width={"1920"}
                />
              </Block>
            </Block>
          </Block>
        </Link>
      ) : null}
      {visibilityTa ? (
        <Link
          block={"inline"}
          button={false}
          className={"card-product_component"}
          options={{
            href: "#",
          }}
        >
          <Block className={"card-product_content"} tag={"div"}>
            <Block className={"max-width-medium"} tag={"div"}>
              <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                {"Time & Attendance"}
              </Heading>
              <Block className={"spacer-medium"} tag={"div"} />
              <Paragraph className={"text-size-medium"}>
                {
                  "Let employees clock in & clock out using iBeacons, QR codes, and other useful clocking methods. Thiseasy-to-use tool offers timesheets, manual time entry, approval flows, andmore."
                }
              </Paragraph>
              <Block className={"spacer-content-box"} tag={"div"} />
            </Block>
            <Block className={"button-tertiary"} tag={"div"}>
              <Block tag={"div"}>{"Get details"}</Block>
              <HtmlEmbed
                className={"icon-medium-v2 text-color-brand-v2"}
                content={
                  '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                }
              />
            </Block>
          </Block>
          <Block className={"card-product_asset"} tag={"div"}>
            <Block
              className={"asset_with-stroke_outer is-card-product-asset"}
              tag={"div"}
            >
              <Block
                className={"asset_with-stroke_inner is-card-product-asset"}
                tag={"div"}
              >
                <Image
                  alt={
                    "Clock in & clock out using iBeacons, QR codes, and other useful methods. Use Calamari for timesheets, manual & automatic time entry, approval flows, and more."
                  }
                  height={"1080"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10ef0_Product%20Asset.webp"
                  }
                  width={"1920"}
                />
              </Block>
            </Block>
          </Block>
        </Link>
      ) : null}
      {visibilityCoreHr ? (
        <Link
          block={"inline"}
          button={false}
          className={"card-product_component"}
          options={{
            href: "#",
          }}
        >
          <Block className={"card-product_content"} tag={"div"}>
            <Block className={"max-width-medium"} tag={"div"}>
              <Heading className={"heading-style-h3-v2"} tag={"h3"}>
                {"Core HR"}
              </Heading>
              <Block className={"spacer-medium"} tag={"div"} />
              <Paragraph className={"text-size-medium"}>
                {
                  "Instead of worrying about paperwork andworkflows, focus on your employees with asafe and well-organized space. Get access toaneasy approval process, document history, andnotifications about any changes."
                }
              </Paragraph>
              <Block className={"spacer-content-box"} tag={"div"} />
            </Block>
            <Block className={"button-tertiary"} tag={"div"}>
              <Block tag={"div"}>{"Get details"}</Block>
              <HtmlEmbed
                className={"icon-medium-v2 text-color-brand-v2"}
                content={
                  '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                }
              />
            </Block>
          </Block>
          <Block className={"card-product_asset"} tag={"div"}>
            <Block
              className={"asset_with-stroke_outer is-card-product-asset"}
              tag={"div"}
            >
              <Block
                className={"asset_with-stroke_inner is-card-product-asset"}
                tag={"div"}
              >
                <Image
                  alt={"CoreHR product simplified asset"}
                  height={"1080"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c2195ccc79cdffc6429a0_40535e5a6c2e14c734a6d5980609f085_Product%20Asset.webp"
                  }
                  width={"1920"}
                />
              </Block>
            </Block>
          </Block>
        </Link>
      ) : null}
    </Block>
  );
}

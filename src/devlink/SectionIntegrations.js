"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-216":{"id":"e-216","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-221"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004350},"e-212":{"id":"e-212","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-216"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004351},"e-225":{"id":"e-225","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004350},"e-223":{"id":"e-223","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-225"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004351}},"actionLists":{"a-65":{"id":"a-65","title":"Integration Tool / Hover / IN","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{},"globalSwatchId":"@var_variable-8fb1a400-c300-c274-0b0c-aea511175c08","rValue":44,"bValue":128,"gValue":188,"aValue":1}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6"},"yValue":0.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-66":{"id":"a-66","title":"Integration Tool / Hover / OUT","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{},"globalSwatchId":"@var_variable-282d33ce-e629-c24b-a2ba-fac037ae97ae","rValue":13,"bValue":68,"gValue":29,"aValue":1}},{"id":"a-66-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|2e9f6920-41b1-9d2f-158b-29ecfdecf2e6"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-73":{"id":"a-73","title":"Integration Tool / Hover / IN 2","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-8fb1a400-c300-c274-0b0c-aea511175c08","rValue":44,"bValue":128,"gValue":188,"aValue":1}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-74":{"id":"a-74","title":"Integration Tool / Hover / OUT 2","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-282d33ce-e629-c24b-a2ba-fac037ae97ae","rValue":13,"bValue":68,"gValue":29,"aValue":1}},{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionIntegrations({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Section className={"section"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"layout-center-all max-width-xlarge"} tag={"div"}>
              <Block className={"section-content-column-title"} tag={"div"}>
                {"Synchronized Automatically"}
              </Block>
              <Block className={"spacer-large"} tag={"div"} />
              <Heading className={"section-header-heading"} tag={"h2"}>
                {"Keep HR Data Synchronized "}
                <br />
                {"with Your"}
                <Span className={"heading-style-italic"}>
                  {"Favorite Tools"}
                </Span>
              </Heading>
              <Block className={"spacer-medium"} tag={"div"} />
              <Paragraph className={"text-size-medium"}>
                {
                  "Calamari connects to the apps you use every day, allowing you tofocus on your work."
                }
              </Paragraph>
            </Block>
            <Block className={"spacer-huge"} tag={"div"} />
            <Block className={"asset-layout_v1"} tag={"div"}>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e53e648acd08c2d12a1_ic_slack.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Slack"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b40e-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6734d3f83762dfb54eeed84b_microsoft_364.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Microsoft 365"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b3f2-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e500b51e2ea8657d935_ic_google.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Google"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b3f9-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651442e25d178dac35380367_jira.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Jira"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b400-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e501ef615ba0f8909f6_asana-logo%202.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Asana"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b407-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e533fb67ea7f31eaea6_Component%202.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"Basecamp"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"asset-container_integration_v1"}
                id={"w-node-d013ef76-2240-53a0-9d97-1d121801b415-1801b3d4"}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={"integration-tool_logo-container"}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={"image-height-fill"}
                    height={"64"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651442cb05d87140233c8bfe_Frame%203.svg"
                    }
                    width={"64"}
                  />
                </Block>
                <Block className={"button-tertiary"} tag={"div"}>
                  <Block tag={"div"}>{"API"}</Block>
                  <HtmlEmbed
                    className={"icon-medium-v2 text-color-brand-v2"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
              </Link>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

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
  '{"events":{"e-225":{"id":"e-225","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004350},"e-223":{"id":"e-223","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-225"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"},"targets":[{"selector":".asset-container_integration_v1","originalId":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716292004351},"e-456":{"id":"e-456","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".product-showcase-card","originalId":"652e38f9880255cb0a294653|04a47108-3689-c146-245e-528e1070d125","appliesTo":"CLASS"},"targets":[{"selector":".product-showcase-card","originalId":"652e38f9880255cb0a294653|04a47108-3689-c146-245e-528e1070d125","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1767793760834},"e-457":{"id":"e-457","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".product-showcase-card","originalId":"652e38f9880255cb0a294653|04a47108-3689-c146-245e-528e1070d125","appliesTo":"CLASS"},"targets":[{"selector":".product-showcase-card","originalId":"652e38f9880255cb0a294653|04a47108-3689-c146-245e-528e1070d125","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1767793760835}},"actionLists":{"a-73":{"id":"a-73","title":"Integration Tool / Hover / IN 2","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-8fb1a400-c300-c274-0b0c-aea511175c08","rValue":44,"bValue":128,"gValue":188,"aValue":1}},{"id":"a-73-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-74":{"id":"a-74","title":"Integration Tool / Hover / OUT 2","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":50,"target":{"useEventTarget":"CHILDREN","selector":".button-tertiary","selectorGuids":["faeadd1c-442e-f43b-9c5a-372537d463b5"]},"globalSwatchId":"@var_variable-282d33ce-e629-c24b-a2ba-fac037ae97ae","rValue":13,"bValue":68,"gValue":29,"aValue":1}},{"id":"a-74-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutSine","duration":150,"target":{"useEventTarget":true,"id":"6554b5b31fe5c3f430ef91bb|05308197-97e1-a55e-3ea3-976c2446f176"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716292007326},"a-110":{"id":"a-110","title":"Product Card Hover In","actionItemGroups":[{"actionItems":[{"id":"a-110-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"value":"none"}},{"id":"a-110-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".product-showcase-asset","selectorGuids":["29507b0d-839a-381b-2669-5670f665dd8d"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-110-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-svg","selectorGuids":["1c39c000-4c6a-9fd9-98fa-b3312cfea5cf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-110-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-110-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"value":"block"}}]},{"actionItems":[{"id":"a-110-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-110-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".product-showcase-asset","selectorGuids":["29507b0d-839a-381b-2669-5670f665dd8d"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-110-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-svg","selectorGuids":["1c39c000-4c6a-9fd9-98fa-b3312cfea5cf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1767793763702},"a-111":{"id":"a-111","title":"Product Card Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-111-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-111-n-7","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".product-showcase-asset","selectorGuids":["29507b0d-839a-381b-2669-5670f665dd8d"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-111-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-svg","selectorGuids":["1c39c000-4c6a-9fd9-98fa-b3312cfea5cf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-111-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".overflow-hidden","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27116"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1767793763702}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionCalamariProduct({
  integrationVisibility = true,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    "Header Center": "w-variant-71cbef25-d92a-ab64-8e4d-41345a45c20e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Section
      className={`section theme-dark ${_activeStyleVariant}`}
      tag={"section"}
    >
      <Block
        className={`padding-section-large ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`padding-global-v2 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`container-large ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`section-header is-center ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`section-header-subheading ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"Calamari Product"}
              </Block>
              <Heading
                className={`section-header-heading ${_activeStyleVariant}`}
                tag={"h2"}
              >
                {"Eliminate the Friction ofthe "}
                <Span className={`heading-style-italic ${_activeStyleVariant}`}>
                  {"Hybrid Workplace"}
                </Span>
              </Heading>
              <Paragraph
                className={`section-header-paragraph ${_activeStyleVariant}`}
              >
                {
                  "Automate everyday processes and focus on what matters most — your people."
                }
              </Paragraph>
            </Block>
            <Block
              className={`product-showcase-component ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`product-showcase-card ${_activeStyleVariant}`}
                id={"w-node-_9fd58f59-d57e-27b2-739f-cd888010ee08-8010edfa"}
                tag={"div"}
              >
                <Block
                  className={`product-showcase-asset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={`image-cover image-position-top-left a ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/69a80b2dd2d53621961f7d18_0e66d9a13a0aeae1763012bb69d1b9da_leave-main-en.jpg"
                    }
                    width={"auto"}
                  />
                </Block>
                <Block
                  className={`product-showcase-content ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`product-showcase-header ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`product-showcase-heading ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                        tag={"h3"}
                      >
                        {"Time Off"}
                      </Heading>
                    </Block>
                    <Block
                      className={`product-showcase-icon-container ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={`product-showcase-icon ${_activeStyleVariant}`}
                        content={
                          '<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>'
                        }
                      />
                    </Block>
                  </Block>
                  <Block
                    className={`overflow-hidden ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`text-size-regular spacer-bottom-1 ${_activeStyleVariant}`}
                    >
                      {
                        "Replace email requests and spreadsheets with a flexible tool for leave requests"
                      }
                    </Paragraph>
                    <Link
                      button={false}
                      className={`button width-fill spacer-bottom-1p5 ${_activeStyleVariant}`}
                      data-click={"module-cart"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Check this module"}
                    </Link>
                  </Block>
                </Block>
              </Block>
              <Block
                className={`product-showcase-card ${_activeStyleVariant}`}
                id={"w-node-_9fd58f59-d57e-27b2-739f-cd888010ee16-8010edfa"}
                tag={"div"}
              >
                <Block
                  className={`product-showcase-asset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={`image-cover image-position-top-left a ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/69a80b2d84b28081b5ec4006_be2705e44b8a2de767fbb0a8c4972bde_t%26a-main-en.jpg"
                    }
                    width={"auto"}
                  />
                </Block>
                <Block
                  className={`product-showcase-content ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`product-showcase-header ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`product-showcase-heading ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                        tag={"h3"}
                      >
                        {"Time &Attendance"}
                      </Heading>
                    </Block>
                    <Block
                      className={`product-showcase-icon-container ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={`product-showcase-icon ${_activeStyleVariant}`}
                        content={
                          '<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>'
                        }
                      />
                    </Block>
                  </Block>
                  <Block
                    className={`overflow-hidden ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`text-size-regular spacer-bottom-1 ${_activeStyleVariant}`}
                    >
                      {
                        "Simple time logging, timesheet management, approval workflows, and accurate reports."
                      }
                    </Paragraph>
                    <Link
                      button={false}
                      className={`button width-fill spacer-bottom-1p5 ${_activeStyleVariant}`}
                      data-click={"module-cart"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Check this module"}
                    </Link>
                  </Block>
                </Block>
              </Block>
              <Block
                className={`product-showcase-card ${_activeStyleVariant}`}
                id={"w-node-_9fd58f59-d57e-27b2-739f-cd888010ee24-8010edfa"}
                tag={"div"}
              >
                <Block
                  className={`product-showcase-asset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={`image-cover image-position-top-left a ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/69a80b2d6adadc087fa65430_core-main-en.jpg"
                    }
                    width={"auto"}
                  />
                </Block>
                <Block
                  className={`product-showcase-content ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`product-showcase-header ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`product-showcase-heading ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                        tag={"h3"}
                      >
                        {"Core HR"}
                      </Heading>
                    </Block>
                    <Block
                      className={`product-showcase-icon-container ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={`product-showcase-icon ${_activeStyleVariant}`}
                        content={
                          '<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>'
                        }
                      />
                    </Block>
                  </Block>
                  <Block
                    className={`overflow-hidden ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`text-size-regular spacer-bottom-1 ${_activeStyleVariant}`}
                    >
                      {
                        "Store employee information and documents in a secure, well-organized online space."
                      }
                    </Paragraph>
                    <Link
                      button={false}
                      className={`button width-fill spacer-bottom-1p5 ${_activeStyleVariant}`}
                      data-click={"module-cart"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Check this module"}
                    </Link>
                  </Block>
                </Block>
              </Block>
              <Block
                className={`product-showcase-card ${_activeStyleVariant}`}
                id={"w-node-_9fd58f59-d57e-27b2-739f-cd888010ee32-8010edfa"}
                tag={"div"}
              >
                <Block
                  className={`product-showcase-asset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={`image-cover image-position-top-left a ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/69a80b2e6f8e7bdf9567a6bc_performance-main-en.jpg"
                    }
                    width={"auto"}
                  />
                </Block>
                <Block
                  className={`product-showcase-content ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`product-showcase-header ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`product-showcase-heading ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Heading
                        className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                        tag={"h3"}
                      >
                        {"Performance"}
                      </Heading>
                    </Block>
                    <Block
                      className={`product-showcase-icon-container ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={`product-showcase-icon ${_activeStyleVariant}`}
                        content={
                          '<svg xmlns="http://www.w3.org/2000/svg" class="icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>'
                        }
                      />
                    </Block>
                  </Block>
                  <Block
                    className={`overflow-hidden ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`text-size-regular spacer-bottom-1 ${_activeStyleVariant}`}
                    >
                      {
                        "Easily configure surveys, collect team feedback, and monitor the entire process in one place."
                      }
                    </Paragraph>
                    <Link
                      button={false}
                      className={`button width-fill spacer-bottom-1p5 ${_activeStyleVariant}`}
                      data-click={"module-cart"}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Check this module"}
                    </Link>
                  </Block>
                </Block>
              </Block>
            </Block>
            {integrationVisibility ? (
              <Block
                className={`core-features_dot_header_component ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`core-features-dot_wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`core-features-dot_inner ${_activeStyleVariant}`}
                    data-dots={"container"}
                    tag={"div"}
                  >
                    <Block
                      className={`dot active ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`dot ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                  </Block>
                </Block>
                <Block
                  className={`layout-center-all max-width-xlarge ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`core-features_dot_header ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Heading
                      className={`heading-style-h2-v2 ${_activeStyleVariant}`}
                      tag={"h2"}
                    >
                      {"Connect to apps you use "}
                      <Span
                        className={`heading-style-italic ${_activeStyleVariant}`}
                      >
                        {"every day"}
                      </Span>
                    </Heading>
                  </Block>
                  <Block
                    className={`max-width-large ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                </Block>
              </Block>
            ) : null}
            {integrationVisibility ? (
              <Block
                className={`integrations_layout   ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e53e648acd08c2d12a1_ic_slack.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Slack"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6734d3f83762dfb54eeed84b_microsoft_364.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Microsoft 365"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e500b51e2ea8657d935_ic_google.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Google"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651442e25d178dac35380367_jira.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Jira"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e501ef615ba0f8909f6_asana-logo%202.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Asana"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65143e533fb67ea7f31eaea6_Component%202.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"Basecamp"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={`asset-container_integration-dark ${_activeStyleVariant}`}
                  options={{
                    href: "https://developers.calamari.io/",
                  }}
                >
                  <Block
                    className={`integration-tool_logo-container ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`image-height-fill ${_activeStyleVariant}`}
                      height={"64"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651442cb05d87140233c8bfe_Frame%203.svg"
                      }
                      width={"64"}
                    />
                  </Block>
                  <Block
                    className={`button-tertiary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block tag={"div"}>{"API"}</Block>
                    <HtmlEmbed
                      className={`icon-medium-v2 text-color-brand-v2 ${_activeStyleVariant}`}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1191 10.2135L6.11914 15.7731L7.37098 16.9516L13.6191 10.2135L7.37098 3.61833L6.11914 4.79684L11.1191 10.2135Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </Block>
                </Link>
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

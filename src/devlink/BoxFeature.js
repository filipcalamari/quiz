"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import RichText from "./webflow_modules/Basic/components/RichText";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-93":{"id":"e-93","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700669657467}},"actionLists":{"a-33":{"id":"a-33","title":"Box Feature / Strip Color / Slack","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".box-feature_stripe-bottom-color","selectorGuids":["0c0c4ceb-458c-f5b2-3ef7-bb3e82f9c5bb"]},"globalSwatchId":"","rValue":61,"bValue":63,"gValue":18,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1700669660715}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BoxFeature({
  body = "",
  bottomStripeForAsset = false,
  bottomStripeWithoutAsset = true,
  heading = "Heading",
  image = "",
  imageVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"box-feature_component"} tag={"div"}>
      <Block
        className={
          "padding-vertical padding-xxlarge sizing-grow-desktop z-index-1"
        }
        tag={"div"}
      >
        <Block
          className={
            "padding-horizontal padding-content-box height-fill-desktop"
          }
          tag={"div"}
        >
          <Block className={"layout-row height-fill-desktop"} tag={"div"}>
            <Block className={"sizing-grow"} tag={"div"}>
              <Heading className={"heading-style-h4"} tag={"h3"}>
                {heading}
              </Heading>
              <Block className={"spacer-medium"} tag={"div"} />
              <RichText
                className={"text-rich-text text-size-regular"}
                tag={"div"}
              >
                {body}
              </RichText>
            </Block>
            {imageVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-medium"} tag={"div"} />
                <Block className={"box-feature_image-container"} tag={"div"}>
                  <Image
                    alt={""}
                    className={"image-width-fill"}
                    height={"140"}
                    loading={"lazy"}
                    src={image}
                    width={"140"}
                  />
                </Block>
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
      {bottomStripeWithoutAsset ? (
        <Block className={"box-feature_stripe-bottom-color"} tag={"div"} />
      ) : null}
      {bottomStripeForAsset ? (
        <Block
          className={"box-feature_stripe-bottom-color is-absolute"}
          tag={"div"}
        />
      ) : null}
    </Block>
  );
}

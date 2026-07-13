"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ElementCustomerReview({
  lastStarPercentage = "",
  logo = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/669e75c65336fb72ed6386cf_getapp-vector-logo%201.svg",
  reviewCounter = "0",
  reviewNumber = "0.0",
  testimonialName = "Full name",
  testimonialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"awards_reviews_item"} tag={"div"}>
      <Block className={"awards_reviews_logo"} tag={"div"}>
        <Image
          alt={""}
          className={"image-height-fill"}
          height={"72"}
          loading={"lazy"}
          src={logo}
          width={"auto"}
        />
      </Block>
      <Block className={"awards_reviews_bar"} tag={"div"}>
        <Block className={"awards_reviews_bar_star_mask"} tag={"div"}>
          <Block className={"awards_reviews_bar_star_fill"} tag={"div"} />
        </Block>
        <Block className={"awards_reviews_bar_star_mask"} tag={"div"}>
          <Block className={"awards_reviews_bar_star_fill"} tag={"div"} />
        </Block>
        <Block className={"awards_reviews_bar_star_mask"} tag={"div"}>
          <Block className={"awards_reviews_bar_star_fill"} tag={"div"} />
        </Block>
        <Block className={"awards_reviews_bar_star_mask"} tag={"div"}>
          <Block className={"awards_reviews_bar_star_fill"} tag={"div"} />
        </Block>
        <Block className={"awards_reviews_bar_star_mask"} tag={"div"}>
          <Block
            className={`awards_reviews_bar_star_fill ${lastStarPercentage}`}
            tag={"div"}
          />
        </Block>
        <Block className={"awards_review_bar_number"} tag={"div"}>
          {reviewNumber}
        </Block>
      </Block>
      <Block className={"awards_reviews_counter"} tag={"div"}>
        <DOM tag={"span"}>{"+"}</DOM>
        <DOM tag={"span"}>{reviewCounter}</DOM>
        <DOM tag={"span"}>{"reviews"}</DOM>
      </Block>
      <Block className={"awards_reviews_testimonial_component"} tag={"div"}>
        <Block className={"max-width-medium align-center"} tag={"div"}>
          <Paragraph>{testimonialText}</Paragraph>
          <Block className={"spacer-medium"} tag={"div"} />
          <Block className={"text-color-grey"} tag={"div"}>
            <DOM tag={"span"}>{"— "}</DOM>
            <DOM tag={"span"}>{testimonialName}</DOM>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

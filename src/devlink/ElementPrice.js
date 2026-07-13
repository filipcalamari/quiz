"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Span from "./webflow_modules/Basic/components/Span";
import { StartFreeTrial } from "./StartFreeTrial";

export function ElementPrice({ textPrice = "$2" }) {
  return (
    <Block className={"cta-price_component"} tag={"div"}>
      <Block className={"cta-price_text-container"} tag={"div"}>
        <Heading className={"heading-style-h2-v2"} tag={"h2"}>
          {"Simple HR & "}
          <Span className={"heading-style-italic"}>{"Transparent"}</Span>
          {"Pricing"}
        </Heading>
        <Block className={"spacer-small"} tag={"div"} />
        <Paragraph className={"text-size-large max-width-medium"}>
          {"Quick onboarding. Free 14-days trial. Nocredit cardrequired."}
        </Paragraph>
        <Block className={"spacer-medium"} tag={"div"} />
        <Block className={"margin-auto-top-desktop"} tag={"div"}>
          <StartFreeTrial
            ariaLabel={"signup-price"}
            variant={"Secondary Reversed"}
          />
        </Block>
      </Block>
      <Block className={"cta-price_price-container"} tag={"div"}>
        <Block className={"cta-price_price-container_inner"} tag={"div"}>
          <Block className={"text-size-xlarge-v2"} tag={"div"}>
            {"Starts From"}
          </Block>
          <Block className={"spacer-medium"} tag={"div"} />
          <Block className={"huge-price"} tag={"div"}>
            {textPrice}
          </Block>
          <Block className={"spacer-medium"} tag={"div"} />
          <Block className={"text-size-xlarge-v2"} tag={"div"}>
            {"per employee per month"}
          </Block>
          <Block className={"spacer-medium"} tag={"div"} />
          <Link
            button={false}
            className={"text-style-link-v2"}
            options={{
              href: "#",
            }}
          >
            {"View full pricing"}
          </Link>
        </Block>
      </Block>
    </Block>
  );
}

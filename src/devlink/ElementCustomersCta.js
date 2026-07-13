"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Span from "./webflow_modules/Basic/components/Span";
import { ElementButtonDemoV2 } from "./ElementButtonDemoV2";
import { StartFreeTrial } from "./StartFreeTrial";

export function ElementCustomersCta({}) {
  return (
    <Block className={"box_green_center"} tag={"div"}>
      <Heading className={"heading-style-h2-v2"} tag={"h2"}>
        {"Let’s create a new "}
        <Span className={"heading-style-italic"}>{"successstory"}</Span>
        {". "}
        <br />
        {"Together."}
      </Heading>
      <Block className={"button-group is-centered"} tag={"div"}>
        <StartFreeTrial
          ariaLabel={"signup-cta"}
          variant={"Secondary Reversed"}
        />
        <ElementButtonDemoV2 />
      </Block>
    </Block>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Strong from "./webflow_modules/Basic/components/Strong";

export function SocialProofCapterra({}) {
  return (
    <Block className={"home-social-proof"} tag={"div"}>
      <Image
        alt={""}
        className={"social-proof_stars"}
        height={"58"}
        loading={"eager"}
        src={
          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b3e5ffe74760380f9f61_home-social-proof_stars.svg"
        }
        width={"300"}
      />
      <Block className={"text-size-small"} tag={"div"}>
        <Strong>{"4,7 rating"}</Strong>
        {" from 600+ reviews on"}
      </Block>
      <Block tag={"div"}>
        <Image
          alt={""}
          className={"social-proof_arrow"}
          height={"150"}
          loading={"eager"}
          src={
            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b3e5ffe74760380f9fa4_home-social-proof_arrow.svg"
          }
          width={"147"}
        />
      </Block>
      <Block className={"text-size-small"} tag={"div"}>
        {"Capterra"}
      </Block>
    </Block>
  );
}

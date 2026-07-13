"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function TestimonialCardV2({
  avatar = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3605d4bb044fe1a11382_image%2082.jpg",
  head = "Support in 10 minutes",
  text = "There is always someone from our team who understands your needs. We will quickly answer all of your questions and doubts. We will also guide you through the entire onboarding process and provide daily assistance.",
  theme = "",
}) {
  return (
    <Block
      animation-slider={"card"}
      className={`slider-testimonial_card-v2 ${theme}`}
      tag={"div"}
    >
      <Block className={"support-avatar"} tag={"div"}>
        <Image
          alt={""}
          className={"image-cover"}
          height={"264"}
          loading={"lazy"}
          src={avatar}
          width={"264"}
        />
      </Block>
      <Heading className={"section-content-column-heading"} tag={"h3"}>
        {head}
      </Heading>
      <Paragraph className={"text-size-large"}>{text}</Paragraph>
    </Block>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function NewsletterBlogInline({
  paragraphVisibility = true,
  spacerTop1P5,
  text = "Join the waitlist for Calamari's Performance module – the system that automates reminders, collects feedback, and gives you real-time progresstracking.",
  title = "Run performance reviews without the chaos",
}) {
  return (
    <Block
      className={"blog-newsletter-body-component"}
      data-component={""}
      tag={"div"}
    >
      <Heading className={"blog-newsletter-body-heading"} tag={"h2"}>
        {title}
      </Heading>
      {paragraphVisibility ? (
        <Paragraph
          className={"text-size-medium text-color-secondary spacer-top-1"}
        >
          {text}
        </Paragraph>
      ) : null}
      {spacerTop1P5}
    </Block>
  );
}

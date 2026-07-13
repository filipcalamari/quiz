"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function TestimonialCard({
  avatar = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6512e1d777b4a6f925c267c2_Micha%C5%82.svg",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  fullName = "Full name",
  jobTitle = "Job Title",
  logo = "",
}) {
  return (
    <Block className={"radius-medium shadow-style-light"} tag={"div"}>
      <Block className={"padding-vertical padding-xxlarge"} tag={"div"}>
        <Block className={"padding-horizontal padding-xlarge"} tag={"div"}>
          <Block className={"layout-column"} tag={"div"}>
            <Block className={"testimonial_logo"} tag={"div"}>
              <Image
                alt={""}
                height={"auto"}
                loading={"lazy"}
                src={logo}
                width={"auto"}
              />
            </Block>
          </Block>
          <Block className={"spacer-medium"} tag={"div"} />
          <Paragraph className={"text-size-regular"}>{body}</Paragraph>
          <Block className={"spacer-xlarge"} tag={"div"} />
          <Block className={"layout-column gap-small"} tag={"div"}>
            <Block className={"avatar"} tag={"div"}>
              <Image
                alt={""}
                height={"auto"}
                loading={"lazy"}
                src={avatar}
                width={"auto"}
              />
            </Block>
            <Block tag={"div"}>
              <Paragraph className={"text-size-regular text-weight-bold"}>
                {fullName}
              </Paragraph>
              <Paragraph className={"text-size-regular"}>{jobTitle}</Paragraph>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

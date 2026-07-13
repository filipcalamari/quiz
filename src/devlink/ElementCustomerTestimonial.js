"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function ElementCustomerTestimonial({
  logo = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/669e6ce4273d9d499511d04c_avatar-calamari.svg",
  role = "Regional HR and Administration Manager, Thailand",
  text = "Definitely the customer support issomething that stands out. Excellent communication, and they always make it work. Even at the tasks that we would be able to figure out ourselves. I have never experienced it anywhere else.",
  title = "Calamari",
}) {
  return (
    <Block className={"customer_testimonial_item"} tag={"div"}>
      <Block className={"customer_testimonial_header"} tag={"div"}>
        <Block className={"customer_testimonial_avatar"} tag={"div"}>
          <Image
            alt={""}
            className={"image-cover"}
            height={"auto"}
            loading={"lazy"}
            src={logo}
            width={"auto"}
          />
        </Block>
        <Block tag={"div"}>
          <Block className={"text-size-medium text-weight-bold"} tag={"div"}>
            {title}
          </Block>
          <Block className={"text-size-small text-style-muted-v2"} tag={"div"}>
            {role}
          </Block>
        </Block>
      </Block>
      <Paragraph className={"text-size-medium"}>{text}</Paragraph>
    </Block>
  );
}

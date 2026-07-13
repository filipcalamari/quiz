"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";

export function ElementCustomerCard({
  customerLogoOrientation = "",

  link = {
    href: "#",
  },

  logo = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/669e5e107b263f60a998e2e3_Virgin_Hotels_logo%201.svg",
  tags,
  title = "How Calamari has become the source of truth about holidays and absence",
}) {
  return (
    <Block
      className={"customer_item"}
      id={"w-node-_42d48e13-807f-2a3f-8f42-da0edaa8279a-daa8279a"}
      tag={"div"}
    >
      <Link
        block={"inline"}
        button={false}
        className={"customer_item_link"}
        options={link}
      />
      <Block className={"customer_item_image"} tag={"div"}>
        <Image
          alt={""}
          className={`customer-logo ${customerLogoOrientation}`}
          height={"auto"}
          loading={"lazy"}
          src={logo}
          width={"auto"}
        />
      </Block>
      <Block className={"customer_item_logo hide"} tag={"div"}>
        <Image
          alt={""}
          className={"image-height-fill"}
          height={"auto"}
          loading={"lazy"}
          src={logo}
          width={"auto"}
        />
      </Block>
      <Heading className={"heading-style-h5-v2"} tag={"h3"}>
        {title}
      </Heading>
      {tags}
    </Block>
  );
}

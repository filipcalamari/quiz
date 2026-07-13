"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function SectionCustomersHeader({
  aspectRatio = "",
  body = "Text",
  coverImage = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6501ff9925fe6fa44b67fc70_image.svg",
  coverVisibility = false,
  customerAvatar = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6501ff9925fe6fa44b67fc70_image.svg",
  customerAvatarVisibility = false,
  customerFullName = "Full Name",
  customerNameVisability = true,
  customerTitle = "Title",
  customerTitleVisibility = true,
  heading = (
    <>
      {"Title"}
      <br />
    </>
  ),
  logo = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6512ee4f5fef0b05cd9af7b0_logo_horizontal.svg",
  logoOrientation = "",
  logoVisibility = true,
}) {
  return (
    <Block
      className={"section_logos page-header position-relative"}
      tag={"header"}
    >
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"customer_header_component"} tag={"div"}>
              <Block className={"customer_header_text-container"} tag={"div"}>
                <Heading className={"heading-style-h2-v2"} tag={"h1"}>
                  {heading}
                </Heading>
                <Block className={"max-width-large"} tag={"div"}>
                  <Paragraph className={"hero-paragraph"}>{body}</Paragraph>
                </Block>
                <Block className={"spacer-large"} tag={"div"} />
                <Block className={"customer_signature_component"} tag={"div"}>
                  {customerAvatarVisibility ? (
                    <Block className={"customer_signature_avatar"} tag={"div"}>
                      <Image
                        alt={""}
                        height={"64"}
                        src={customerAvatar}
                        width={"64"}
                      />
                    </Block>
                  ) : null}
                  <Block className={"customer_signature_content"} tag={"div"}>
                    {customerTitleVisibility ? (
                      <Block className={"text-weight-bold"} tag={"div"}>
                        {customerTitle}
                      </Block>
                    ) : null}
                    {customerNameVisability ? (
                      <Block tag={"div"}>{customerFullName}</Block>
                    ) : null}
                  </Block>
                </Block>
              </Block>
              <Block className={"customer_header_image-container"} tag={"div"}>
                <Block
                  className={`customer_header_image ${aspectRatio}`}
                  tag={"div"}
                >
                  {coverVisibility ? (
                    <Image
                      alt={""}
                      className={"image-cover position-absolute z-index-2"}
                      height={"1947"}
                      loading={"eager"}
                      src={coverImage}
                      width={"2606"}
                    />
                  ) : null}
                  {logoVisibility ? (
                    <Image
                      alt={""}
                      className={`customer-logo ${logoOrientation}`}
                      height={"auto"}
                      loading={"lazy"}
                      src={logo}
                      width={"auto"}
                    />
                  ) : null}
                  <Image
                    alt={""}
                    className={"customers_waves-bg"}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c49fa396f33436ba263af9_customer-wave.svg"
                    }
                    width={"auto"}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

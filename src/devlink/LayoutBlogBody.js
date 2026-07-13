"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";
import RichText from "./webflow_modules/Basic/components/RichText";

export function LayoutBlogBody({ content = "" }) {
  return (
    <Block className={"blog-layout"} tag={"div"}>
      <Block className={"blog-toc"} tag={"div"}>
        <Block className={"div-block-170"} tag={"div"}>
          <Block tag={"div"}>
            <Block
              className={"text-size-regular text-weight-semibold"}
              tag={"div"}
            >
              {"Contents"}
            </Block>
            <Block className={"spacer-small"} tag={"div"} />
          </Block>
          <Block className={"layout-row"} tag={"div"}>
            <Block className={"blos-post-toc_link-container"} tag={"div"}>
              <Link
                button={false}
                className={"blog-post-toc_link"}
                fs-toc-element={"link"}
                options={{
                  href: "#",
                }}
              >
                {"H2 Heading"}
              </Link>
              <Block
                className={"blog-post-toc_animation"}
                fs-toc-element={"ix-trigger"}
                tag={"div"}
              />
            </Block>
          </Block>
        </Block>
      </Block>
      <Block className={"blog-post-body"} tag={"div"}>
        <RichText
          className={"text-rich-text is-article"}
          fs-toc-element={"contents"}
          fs-toc-offsettop={"8rem"}
          tag={"div"}
        >
          {content}
        </RichText>
      </Block>
    </Block>
  );
}

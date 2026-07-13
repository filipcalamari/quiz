"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";

export function ModalDrawer({
  heading = "Excel, Drive, emails... and still not sure who has completed their feedback?",
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/68f61da49d0db49ef8a34a6a_d2a81ec3926b28d3ce448c81358bce0e_Frame%20636981.webp",

  link = {
    href: "#",
  },

  linkLabel = "Learn more",
  visibility = true,
}) {
  return visibility ? (
    <Block
      className={"modal-drawer-component"}
      data-animation={"modal-drawer-component"}
      tag={"div"}
    >
      <Block className={"padding-global"} tag={"div"}>
        <Block className={"modal-drawer-container"} tag={"div"}>
          <Block className={"modal-drawer-slot"} tag={"div"}>
            <Block className={"modal-drawer-header"} tag={"div"}>
              <Image
                alt={""}
                height={"auto"}
                loading={"lazy"}
                src={image}
                width={"auto"}
              />
            </Block>
            <Block
              className={"modal-drawer-body"}
              data-animation={"feedback-body"}
              tag={"div"}
            >
              <Block className={"heading-style-h6 spacer-bottom-1"} tag={"div"}>
                {heading}
              </Block>
              <Link
                button={false}
                className={"button width-fill button_small"}
                id={"modal-ad-link"}
                options={link}
              >
                {linkLabel}
              </Link>
            </Block>
            <DOM
              className={"modal-close is-modal-drawer"}
              data-animation={"modal-drawer-close"}
              tag={"button"}
            >
              <HtmlEmbed
                className={"icon-1x1"}
                content={
                  '<svg class="icon-svg" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>'
                }
              />
            </DOM>
          </Block>
        </Block>
      </Block>
    </Block>
  ) : null;
}

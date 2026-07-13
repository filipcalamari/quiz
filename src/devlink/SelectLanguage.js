"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";

export function SelectLanguage({
  alternativeSiteLink = {
    href: "#",
  },

  currentSiteLink = {
    href: "#",
  },
}) {
  return (
    <Block className={"footer-language"} tag={"div"}>
      <DOM
        animation-trigger={"navbar-menu"}
        className={"footer-select"}
        tag={"button"}
      >
        <HtmlEmbed
          className={"icon-small"}
          content={
            '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z" fill="currentColor"/>\n</svg>'
          }
        />
        <Block className={"text-size-small"} tag={"div"}>
          {"English"}
        </Block>
        <HtmlEmbed
          animation-element={"chevron"}
          className={"select_chevron"}
          content={
            '<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05647 9.33338L4.88812 6.61279L3.94531 7.61427L8.05646 11.3334L12.0532 7.61428L11.1104 6.61281L8.05647 9.33338Z" fill="currentColor"/>\n</svg>'
          }
        />
      </DOM>
      <Block
        animation-element={"language"}
        animation-target={"navbar-menu"}
        className={"navbar_drawer-v2 is-language"}
        tag={"div"}
      >
        <Block className={"navbar_drawer-container-v2"} tag={"div"}>
          <Block className={"navbar_drawer_menu"} tag={"div"}>
            <Block className={"navbar_drawer_menu_active"} tag={"div"}>
              <Link
                block={"inline"}
                button={false}
                className={"select_link"}
                options={currentSiteLink}
              >
                <Block tag={"div"}>{"English"}</Block>
              </Link>
              <Link
                block={"inline"}
                button={false}
                className={"select_link"}
                options={alternativeSiteLink}
              >
                <Block tag={"div"}>{"Polish"}</Block>
              </Link>
            </Block>
          </Block>
        </Block>
        <DOM
          className={"navbar_drawer_pointer is-opening-above"}
          height={"100%"}
          tag={"svg"}
          viewBox={"0 0 16 8"}
          width={"100%"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <DOM
            className={"shape"}
            d={
              "M0 8L16 8L9.41421 1.41421C8.63316 0.633165 7.36683 0.633165 6.58579 1.41421L0 8Z"
            }
            fill={"currentColor"}
            tag={"path"}
          />
        </DOM>
      </Block>
    </Block>
  );
}

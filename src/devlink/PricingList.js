"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";

export function PricingList({
  excluded = false,
  included = true,
  text = "Support with onboarding",
}) {
  return (
    <Block className={"layout-column"} tag={"div"}>
      <Block className={"sizing-grow"} tag={"div"}>
        <Block className={"padding-right padding-small"} tag={"div"}>
          <Block className={"padding-vertical padding-medium"} tag={"div"}>
            <Block className={"text-size-medium"} tag={"div"}>
              {text}
            </Block>
          </Block>
        </Block>
      </Block>
      <Block className={" div-block-11 is-standard"} tag={"div"}>
        {included ? (
          <HtmlEmbed
            className={"icon-1x1-large"}
            content={
              '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="mask0_15_52" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">\n<rect width="40" height="40" fill="#D9D9D9"/>\n</mask>\n<g mask="url(#mask0_15_52)">\n<path d="M15.8055 24.6667L29.9861 10.5139C30.425 10.0787 30.9444 9.86115 31.5444 9.86115C32.1444 9.86115 32.662 10.0792 33.0972 10.5154C33.5324 10.9515 33.75 11.4728 33.75 12.0793C33.75 12.6857 33.5324 13.2102 33.0972 13.6528L17.375 29.375C16.933 29.8102 16.4082 30.0278 15.8005 30.0278C15.1927 30.0278 14.6713 29.8102 14.2361 29.375L6.87496 22.0139C6.43977 21.5701 6.22217 21.0448 6.22217 20.438C6.22217 19.8312 6.44025 19.3102 6.87642 18.875C7.31259 18.4399 7.83388 18.2223 8.44029 18.2223C9.04674 18.2223 9.57125 18.4399 10.0138 18.875L15.8055 24.6667Z" fill="currentColor"/>\n</g>\n</svg>'
            }
          />
        ) : null}
        {excluded ? (
          <HtmlEmbed
            className={"icon-1x1-large text-style-muted"}
            content={
              '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.0139 22.1805C10.4074 22.1805 9.8924 21.9683 9.46879 21.5437C9.04518 21.1192 8.83337 20.603 8.83337 19.9951C8.83337 19.3873 9.04518 18.8727 9.46879 18.4514C9.8924 18.0301 10.4074 17.8195 11.0139 17.8195H28.9862C29.5926 17.8195 30.1123 18.0317 30.5452 18.4563C30.9781 18.8808 31.1945 19.397 31.1945 20.0049C31.1945 20.6127 30.9781 21.1273 30.5452 21.5486C30.1123 21.9699 29.5926 22.1805 28.9862 22.1805H11.0139Z" fill="currentColor"/>\n</svg>'
            }
          />
        ) : null}
      </Block>
      <Block className={"padding-right padding-small"} tag={"div"} />
      <Block className={" div-block-11 is-premium"} tag={"div"}>
        <HtmlEmbed
          className={"icon-1x1-large"}
          content={
            '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="mask0_15_52" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">\n<rect width="40" height="40" fill="#D9D9D9"/>\n</mask>\n<g mask="url(#mask0_15_52)">\n<path d="M15.8055 24.6667L29.9861 10.5139C30.425 10.0787 30.9444 9.86115 31.5444 9.86115C32.1444 9.86115 32.662 10.0792 33.0972 10.5154C33.5324 10.9515 33.75 11.4728 33.75 12.0793C33.75 12.6857 33.5324 13.2102 33.0972 13.6528L17.375 29.375C16.933 29.8102 16.4082 30.0278 15.8005 30.0278C15.1927 30.0278 14.6713 29.8102 14.2361 29.375L6.87496 22.0139C6.43977 21.5701 6.22217 21.0448 6.22217 20.438C6.22217 19.8312 6.44025 19.3102 6.87642 18.875C7.31259 18.4399 7.83388 18.2223 8.44029 18.2223C9.04674 18.2223 9.57125 18.4399 10.0138 18.875L15.8055 24.6667Z" fill="currentColor"/>\n</g>\n</svg>'
          }
        />
      </Block>
    </Block>
  );
}

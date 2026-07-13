"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import RichText from "./webflow_modules/Basic/components/RichText";

export function ModalSlotCartWithText({ text = "" }) {
  return (
    <Block className={"modal-cart-text"} tag={"div"}>
      <RichText className={"text-rich-text"} tag={"div"}>
        {text}
      </RichText>
    </Block>
  );
}

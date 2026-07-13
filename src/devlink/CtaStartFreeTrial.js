"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import { StartFreeTrial } from "./StartFreeTrial";

export function CtaStartFreeTrial({
  infoBelowCta = "No card required. Trial ends automatically.",
  startFreeTrialAriaLabel = "signup-cta",
  startFreeTrialButtonCtaLabel = "Start free trial",

  startFreeTrialLink = {
    href: "https://auth.calamari.io/sign-up/start?v=v1",
  },

  startFreeTrialVariant = "Primary",
  startFreeTrialVisibility = true,
}) {
  return startFreeTrialVisibility ? (
    <Block className={"section-cta"} tag={"div"}>
      <StartFreeTrial
        ariaLabel={startFreeTrialAriaLabel}
        label={startFreeTrialButtonCtaLabel}
        link={startFreeTrialLink}
        variant={startFreeTrialVariant}
      />
      <Block className={"spacer-small"} tag={"div"} />
      <Block className={"text-size-small text-color-secondary"} tag={"div"}>
        {infoBelowCta}
      </Block>
    </Block>
  ) : null;
}

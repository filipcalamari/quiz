import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CtaStartFreeTrial(props: {
  infoBelowCta?: React.ReactNode;
  startFreeTrialAriaLabel?: string;
  startFreeTrialButtonCtaLabel?: React.ReactNode;
  startFreeTrialLink?: Types.Basic.Link;
  startFreeTrialVariant?:
    | "Primary"
    | "Secondary"
    | "Secondary Reversed"
    | "Full width"
    | "Small";
  startFreeTrialVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

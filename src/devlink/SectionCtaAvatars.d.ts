import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SectionCtaAvatars(props: {
  actionComponentSlotVisibility?: Types.Boolean.Boolean;
  bookADemoVisibility?: Types.Visibility.VisibilityConditions;
  emailVisibility?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  infoBelowCta?: React.ReactNode;
  paragraph?: React.ReactNode;
  sectionCta?: React.ReactNode;
  startFreeTrialButtonCtaLabel?: React.ReactNode;
  startFreeTrialVisibility?: Types.Visibility.VisibilityConditions;
  subheading?: React.ReactNode;
  verticalSpace?: "Base" | "Double Bottom";
}): React.JSX.Element;

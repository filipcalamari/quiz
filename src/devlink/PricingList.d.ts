import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function PricingList(props: {
  excluded?: Types.Visibility.VisibilityConditions;
  included?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
}): React.JSX.Element;

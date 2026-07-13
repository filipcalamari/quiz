import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function StartFreeTrial(props: {
  ariaLabel?: string;
  label?: React.ReactNode;
  link?: Types.Basic.Link;
  variant?:
    | "Primary"
    | "Secondary"
    | "Secondary Reversed"
    | "Full width"
    | "Small";
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function BookADemo(props: {
  buttonHref?: Types.Basic.Link;
  buttonLabel?: React.ReactNode;
  variant?:
    | "Primary"
    | "Secondary"
    | "Secondary Reversed"
    | "Full width"
    | "Small";
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Button(props: {
  analyticsClickValue?: string;
  ariaLabel?: string;
  dataCta?: string;
  href?: Types.Basic.Link;
  label?: React.ReactNode;
  rel?: string;
  unknownProp1977De6E98B1B693E17CFc74A98B3893?: Types.Builtin.Boolean;
  variant?:
    | "Primary"
    | "Secondary"
    | "Secondary Reversed"
    | "Full width"
    | "Small";
}): React.JSX.Element;

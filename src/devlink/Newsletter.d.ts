import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Newsletter(props: {
  ctaInputSlot?: React.ReactNode;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  variant?: "Base" | "Small Heading";
}): React.JSX.Element;

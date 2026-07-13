import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function BannerInfo(props: {
  cta?: Types.Boolean.Boolean;
  text?: React.ReactNode;
  variant?: "Base" | "CTA Bottom";
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SectionPageHeaderSimple(props: {
  description?: React.ReactNode;
  link?: Types.Basic.Link;
  name?: React.ReactNode;
  previousPageName?: React.ReactNode;
  updatedDate?: React.ReactNode;
  variant?: "Base" | "Bottom Border";
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ElementDropdownV2(props: {
  classesContentPadding?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textBody?: Types.Basic.RichTextChildren;
  textHeading?: React.ReactNode;
  visibilityLeadingIcon?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

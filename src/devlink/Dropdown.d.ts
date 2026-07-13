import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Dropdown(props: {
  dropdownContent?: Types.Basic.RichTextChildren;
  dropdownHeader?: React.ReactNode;
  dropdownVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

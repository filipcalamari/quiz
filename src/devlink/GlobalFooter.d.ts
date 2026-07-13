import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function GlobalFooter(props: {
  alternativeLanguage?: Types.Basic.Link;
  currentLanguage?: Types.Basic.Link;
  variant?: "Base" | "Padding Off";
  visibilityLanguage?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

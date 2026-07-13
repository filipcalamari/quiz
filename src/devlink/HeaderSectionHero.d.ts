import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function HeaderSectionHero(props: {
  header?: React.ReactNode;
  paragraph?: React.ReactNode;
  subheader?: React.ReactNode;
  subheaderVisibility?: Types.Visibility.VisibilityConditions;
  supportTextVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

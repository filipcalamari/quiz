import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ModalDrawer(props: {
  heading?: React.ReactNode;
  image?: Types.Asset.Image;
  link?: Types.Basic.Link;
  linkLabel?: React.ReactNode;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

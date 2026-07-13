import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function GlobalNavbar(props: {
  allLinksVisibility?: Types.Visibility.VisibilityConditions;
  highlightCustomerBody?: React.ReactNode;
  highlightCustomerHeading?: React.ReactNode;
  highlightCustomerImage?: Types.Asset.Image;
  highlightCustomerLink?: Types.Basic.Link;
  onlyCta?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

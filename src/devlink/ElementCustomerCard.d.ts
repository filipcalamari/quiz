import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ElementCustomerCard(props: {
  customerLogoOrientation?: string;
  link?: Types.Basic.Link;
  logo?: Types.Asset.Image;
  tags?: React.ReactNode;
  title?: React.ReactNode;
}): React.JSX.Element;

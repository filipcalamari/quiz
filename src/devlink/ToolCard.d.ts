import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ToolCard(props: {
  image?: Types.Asset.Image;
  integrationLink?: Types.Basic.Link;
  name?: React.ReactNode;
}): React.JSX.Element;

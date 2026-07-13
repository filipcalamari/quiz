import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function BoxFeature(props: {
  body?: Types.Basic.RichTextChildren;
  bottomStripeForAsset?: Types.Visibility.VisibilityConditions;
  bottomStripeWithoutAsset?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  image?: Types.Asset.Image;
  imageVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

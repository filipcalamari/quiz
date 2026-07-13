import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function LayoutColumnDefault(props: {
  classesImage?: string;
  classesTextBox?: string;
  imageAltText?: Types.Basic.AltText;
  imageFile?: Types.Asset.Image;
  textBody?: Types.Basic.RichTextChildren;
  textHeading?: React.ReactNode;
  visibilityButton?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

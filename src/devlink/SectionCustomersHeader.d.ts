import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SectionCustomersHeader(props: {
  aspectRatio?: string;
  body?: React.ReactNode;
  coverImage?: Types.Asset.Image;
  coverVisibility?: Types.Visibility.VisibilityConditions;
  customerAvatar?: Types.Asset.Image;
  customerAvatarVisibility?: Types.Visibility.VisibilityConditions;
  customerFullName?: React.ReactNode;
  customerNameVisability?: Types.Visibility.VisibilityConditions;
  customerTitle?: React.ReactNode;
  customerTitleVisibility?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  logo?: Types.Asset.Image;
  logoOrientation?: string;
  logoVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

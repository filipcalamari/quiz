import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ElementCustomerSidePaneDetails(props: {
  employeesBodyEmployees?: React.ReactNode;
  employeesVisibilityEmployees?: Types.Visibility.VisibilityConditions;
  foundedBodyFounded?: React.ReactNode;
  foundedVisibilityFounded?: Types.Visibility.VisibilityConditions;
  headquarterBodyHeadquarter?: React.ReactNode;
  headquarterVisibilityHeadquarter?: Types.Visibility.VisibilityConditions;
  industryBodyIndustry?: React.ReactNode;
  industryVisibilityIndustry?: Types.Visibility.VisibilityConditions;
  logo?: Types.Asset.Image;
  modulesUsedCoreHr?: Types.Visibility.VisibilityConditions;
  modulesUsedTA?: Types.Visibility.VisibilityConditions;
  modulesUsedTimeOff?: Types.Visibility.VisibilityConditions;
  webisteLabel?: React.ReactNode;
  websiteLink?: Types.Basic.Link;
  websiteVisibility?: Types.Boolean.Boolean;
  withCalamariSinceText?: React.ReactNode;
  withCalamariSinceVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;

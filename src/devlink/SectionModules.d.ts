import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SectionModules(props: {
  coreHrVisibility?: Types.Visibility.VisibilityConditions;
  firstDividerVisibility?: Types.Visibility.VisibilityConditions;
  secondDividerVisibility?: Types.Visibility.VisibilityConditions;
  sectionHeading?: React.ReactNode;
  sectionSubheading?: React.ReactNode;
  sectionSubheadingVisibility?: Types.Visibility.VisibilityConditions;
  timeAttendanceVisibility?: Types.Visibility.VisibilityConditions;
  timeOffVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

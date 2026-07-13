import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Navbar(props: {
  languageSwitcher?: Types.Visibility.VisibilityConditions;
  slugCurrentLangauge?: Types.Basic.Link;
  urlAlternateLanguage?: Types.Basic.Link;
}): React.JSX.Element;

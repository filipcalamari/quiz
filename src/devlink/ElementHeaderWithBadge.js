"use client";
import React from "react";
import DOM from "./webflow_modules/Builtin/components/DOM";

export function ElementHeaderWithBadge({
  badgeIcon = 'Paste path\'s "d" attribute here',
  badgeText = "example",
  textMain = "Example",
}) {
  return (
    <DOM className={"heading_with_badge"} tag={"h2"}>
      <DOM tag={"span"}>{textMain}</DOM>
      <DOM className={"heading-badge_component"} tag={"span"}>
        <DOM
          className={"heading-badge_icon"}
          fill={"currentColor"}
          height={"100%"}
          tag={"svg"}
          viewBox={"0 0 24 24"}
          width={"100%"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <DOM d={badgeIcon} tag={"path"} />
        </DOM>
        <DOM tag={"span"}>{badgeText}</DOM>
      </DOM>
    </DOM>
  );
}

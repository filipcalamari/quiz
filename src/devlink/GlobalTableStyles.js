"use client";
import React from "react";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";

export function GlobalTableStyles({}) {
  return (
    <HtmlEmbed
      className={"table-styles"}
      content={
        "<style>\n   table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      border: 1px solid var(--_colors---color-shade--blue-100, var(--calamari-en_colors---color-shade--blue-100));\n      border-radius: 1rem;\n      overflow: hidden;\n      font-size: 1rem;\n    }\n\n    thead th {\n      background-color: var(--_colors---color-shade--blue-50, var(--calamari-en_colors---color-shade--blue-50));\n    }\n    \n    thead tr th {\n      border-bottom: 1px solid var(--_colors---color-shade--blue-100, var(--calamari-en_colors---color-shade--blue-100));\n    }\n    \n    thead tr th:not(:last-child) {\n    \tborder-right: 1px solid var(--_colors---color-shade--blue-100, var(--calamari-en_colors---color-shade--blue-100));\n    }\n    \n\n    th,\n    td {\n      padding: 0.75rem;\n      text-align: left;\n    }\n    \n    tbody th {\n    \tfont-weight: 500;\n    }\n\n    tbody tr:not(:last-child) td,\n    tbody tr:not(:last-child) th {\n      border-bottom: 1px solid var(--_colors---color-shade--blue-100, var(--calamari-en_colors---color-shade--blue-100));\n    }\n\n    th:not(:last-child),\n    td:not(:last-child) {\n      border-right: 1px solid var(--_colors---color-shade--blue-100, var(--calamari-en_colors---color-shade--blue-100));\n    } \n\n</style>"
      }
    />
  );
}

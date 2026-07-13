"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";

export function Modal({ modalComponentName = "", slot }) {
  return (
    <Block
      className={"modal-component"}
      data-animation={"modal-component"}
      data-modal-component={modalComponentName}
      tag={"div"}
    >
      <Block className={"modal-content"} tag={"div"}>
        <Block
          className={"modal-slot"}
          data-animation={"modal-slot"}
          tag={"div"}
        >
          {slot}
          <DOM
            className={"modal-close"}
            data-animation={"modal-close"}
            tag={"button"}
          >
            <HtmlEmbed
              className={"icon-1x1"}
              content={
                '<svg class="icon-svg" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>'
              }
            />
          </DOM>
        </Block>
      </Block>
      <Block
        className={"modal-overlay"}
        data-animation={"modal-overlay"}
        tag={"div"}
      />
    </Block>
  );
}

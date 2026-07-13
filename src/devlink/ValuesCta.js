"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798134},"e-190":{"id":"e-190","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798135}},"actionLists":{"a-49":{"id":"a-49","title":"Blog Search Open","actionItemGroups":[{"actionItems":[{"id":"a-49-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-49-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]},{"actionItems":[{"id":"a-49-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"flex"}},{"id":"a-49-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706883810491},"a-50":{"id":"a-50","title":"Blog Search Close","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-50-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706883810491}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ValuesCta({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={"layout-column-desktop gap-medium"} tag={"div"}>
      <Block className={"layout-column gap-xsmall"} tag={"div"}>
        <HtmlEmbed
          className={"icon-medium text-color-accent"}
          content={
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3454 9.84942C15.4009 11.3257 12.7347 14.1103 11.0448 16.445L10.0128 17.8707L4.44676 12.3909L6.56668 10.2459L9.69184 13.3227C11.6111 11.0195 14.4124 8.50571 18.3174 7.04423L19.3454 9.84942Z" fill="#FFEB7C"/>\n</svg>'
          }
        />
        <Block className={"text-size-regular text-weight-bold"} tag={"div"}>
          {"Easy & quick setup"}
        </Block>
      </Block>
      <Block className={"layout-column gap-xsmall"} tag={"div"}>
        <HtmlEmbed
          className={"icon-medium text-color-accent"}
          content={
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3454 9.84942C15.4009 11.3257 12.7347 14.1103 11.0448 16.445L10.0128 17.8707L4.44676 12.3909L6.56668 10.2459L9.69184 13.3227C11.6111 11.0195 14.4124 8.50571 18.3174 7.04423L19.3454 9.84942Z" fill="#FFEB7C"/>\n</svg>'
          }
        />
        <Block className={"text-size-regular text-weight-bold"} tag={"div"}>
          {"No tech skills needed"}
        </Block>
      </Block>
      <Block className={"layout-column gap-xsmall"} tag={"div"}>
        <HtmlEmbed
          className={"icon-medium text-color-accent"}
          content={
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3454 9.84942C15.4009 11.3257 12.7347 14.1103 11.0448 16.445L10.0128 17.8707L4.44676 12.3909L6.56668 10.2459L9.69184 13.3227C11.6111 11.0195 14.4124 8.50571 18.3174 7.04423L19.3454 9.84942Z" fill="#FFEB7C"/>\n</svg>'
          }
        />
        <Block className={"text-size-regular text-weight-bold"} tag={"div"}>
          {"Support from firstday"}
        </Block>
      </Block>
    </Block>
  );
}

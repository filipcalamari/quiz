"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import RichText from "./webflow_modules/Basic/components/RichText";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798134},"e-190":{"id":"e-190","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798135}},"actionLists":{"a-49":{"id":"a-49","title":"Blog Search Open","actionItemGroups":[{"actionItems":[{"id":"a-49-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-49-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]},{"actionItems":[{"id":"a-49-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"flex"}},{"id":"a-49-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706883810491},"a-50":{"id":"a-50","title":"Blog Search Close","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-50-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706883810491}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ElementDropdownV2({
  classesContentPadding = "",
  headingTag = "h3",
  textBody = "",
  textHeading = "Heading",
  visibilityLeadingIcon = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block
      animation-dropdown={"component"}
      className={"dropdown_component_v2"}
      tag={"div"}
    >
      <Block
        animation-dropdown={"trigger"}
        className={"dropdown_trigger_v2"}
        // @ts-ignore - User-defined custom attribute(s)
        role={"button"}
        tag={"div"}
      >
        {visibilityLeadingIcon ? (
          <HtmlEmbed
            className={"dropdown_leading-icon"}
            content={
              '<svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24ZM18.0968 10.4735L19.5684 11.9451L13.1748 18.3388L13.1743 18.3384L13.006 18.5067L8.61151 14.1123L10.0831 12.6406L13.0064 15.5639L18.0968 10.4735Z" fill="currentColor"/>\n</svg>'
            }
          />
        ) : null}
        <Block className={"sizing-grow"} tag={"div"}>
          <Heading
            className={
              "text-size-medium text-color-primary text-weight-semibold"
            }
            tag={headingTag}
          >
            {textHeading}
          </Heading>
        </Block>
        <HtmlEmbed
          animation-dropdown={"arrow"}
          className={"icon-medium"}
          content={
            '<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0858 14.5L5.41424 8.5L4.00002 10.0022L12.0858 17.5L20 10.0022L18.5858 8.5L12.0858 14.5Z" fill="currentColor"/>\n</svg>'
          }
        />
      </Block>
      <Block
        animation-dropdown={"content"}
        className={"dropdown_content_v2"}
        tag={"div"}
      >
        <Block
          className={`dropdown_content-paddings_v2 ${classesContentPadding}`}
          tag={"div"}
        >
          <RichText className={"text-rich-text"} tag={"div"}>
            {textBody}
          </RichText>
        </Block>
      </Block>
    </Block>
  );
}

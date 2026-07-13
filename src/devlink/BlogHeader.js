"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import SearchButton from "./webflow_modules/Search/components/SearchButton";
import SearchForm from "./webflow_modules/Search/components/SearchForm";
import SearchInput from "./webflow_modules/Search/components/SearchInput";
import Section from "./webflow_modules/Layout/components/Section";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798134},"e-190":{"id":"e-190","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-icon.is-blog-nav-search-trigger","originalId":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"CLASS"},"targets":[{"id":"5c2d4f1a-ed5c-711a-e5ac-53e88926db41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706883798135}},"actionLists":{"a-49":{"id":"a-49","title":"Blog Search Open","actionItemGroups":[{"actionItems":[{"id":"a-49-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-49-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]},{"actionItems":[{"id":"a-49-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"flex"}},{"id":"a-49-n-12","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-49-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1706883810491},"a-50":{"id":"a-50","title":"Blog Search Close","actionItemGroups":[{"actionItems":[{"id":"a-50-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-close","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","9f4a4c81-0028-d25d-4c83-732c30823de6"]},"value":"none"}},{"id":"a-50-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"selector":".blog-search-component","selectorGuids":["7e832f6a-eaf0-1a46-0c3e-8161980fd16a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-50-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon-medium.is-blog-nav-icon-search","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2710b","d469a235-19bc-0b0c-945f-6ba7e8765012"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1706883810491}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogHeader({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Section
      className={"blog-header"}
      data-animation-navbar={"trigger"}
      tag={"section"}
    >
      <Block className={"padding-global"} tag={"div"}>
        <Block className={"container-large"} tag={"div"}>
          <Block className={"blog-header-text"} tag={"div"}>
            <Block className={"blog-header-mask"} tag={"div"}>
              <Heading className={"blog-header-heading"} tag={"h1"}>
                {"HRBlog"}
              </Heading>
            </Block>
            <Block className={"blog-header-mask"} tag={"div"}>
              <Paragraph className={"blog-header-par"}>
                {
                  "We share what actually works in HR — no buzzwords, just insights that matter for growing companies."
                }
              </Paragraph>
            </Block>
            <SearchForm action={"/search"} className={"blog-search-component"}>
              <Block className={"blog-search-container"} tag={"div"}>
                <Block className={"div-block-167"} tag={"div"}>
                  <SearchInput
                    autoFocus={true}
                    className={"blog-search-input"}
                    disabled={false}
                    id={"search"}
                    maxLength={256}
                    name={"query"}
                    placeholder={"Start typing..."}
                    required={true}
                    type={"search"}
                  />
                  <SearchButton
                    className={"blog-search-submit"}
                    type={"submit"}
                    value={"Search"}
                  />
                </Block>
                <Block className={"blog-search-border"} tag={"div"} />
              </Block>
            </SearchForm>
          </Block>
        </Block>
      </Block>
      <Block className={"blog-categories-component"} tag={"div"}>
        <Block className={"blog-categories-container-outer"} tag={"div"}>
          <Block className={"blog-categories-container"} tag={"div"}>
            <Block
              className={"blog-categories-item"}
              data-animation={"blog-category-tab"}
              tag={"div"}
            >
              <Link
                button={false}
                className={"blog-categories-link"}
                options={{
                  href: "#",
                }}
              >
                {"Latest Articles"}
              </Link>
            </Block>
          </Block>
          <NotSupported _atom={"Collection List"} />
          <Block className={"blog-categories-container aaa"} tag={"div"}>
            <Block
              className={"blog-categories-item is-search"}
              data-animation={"blog-category-tab"}
              tag={"div"}
            >
              <DOM
                className={"blog-search-trigger blog-categories-link"}
                tag={"button"}
              >
                <HtmlEmbed
                  className={"icon-size-dynamic"}
                  content={
                    '<svg width="24" height="24" class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>'
                  }
                />
              </DOM>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

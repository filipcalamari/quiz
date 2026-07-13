"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function SectionClientsSlider({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={
                "content-box_default background-color-dark background-shape-1"
              }
              tag={"div"}
            >
              <Block className={"text-align-center"} tag={"div"}>
                <Heading className={"heading-style-h2"} tag={"h2"}>
                  {"Stories of "}
                  <Span className={"text-color-brand"}>{"our clients"}</Span>
                </Heading>
              </Block>
              <Block className={"spacer-xxlarge"} tag={"div"} />
              <Block className={"slider-test_component"} tag={"div"}>
                <Block className={"slider-test_container"} tag={"div"}>
                  <HtmlEmbed
                    content={
                      "<style>\n\n.slider-test_cart {\n    box-sizing: border-box;\n    flex: 0 0 100%;\n}\n\n@media (min-width: 992px) {\n    .slider-test_cart {\n        flex: 0 0 calc(100% / 3 - 1rem);\n    }\n}\n</style>"
                    }
                  />
                  <NotSupported _atom={"Collection List"} />
                </Block>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Block className={"slider-test_navigation"} tag={"div"}>
                  <DOM
                    aria-label={"previous slide"}
                    className={"slider-test_button is-light"}
                    id={"slider-button-previous"}
                    tag={"button"}
                  >
                    <HtmlEmbed
                      className={"icon-height-small"}
                      content={
                        '<svg height="100%" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M36 9L37 9L37 7L36 7L36 9ZM0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538405 7.04738 0.538405 6.65686 0.92893L0.292893 7.29289ZM36 7L1 7L1 9L36 9L36 7Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </DOM>
                  <DOM
                    aria-label={"next slide"}
                    className={"slider-test_button is-light"}
                    id={"slider-button-next"}
                    tag={"button"}
                  >
                    <HtmlEmbed
                      className={"icon-height-small"}
                      content={
                        '<svg height="100%" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 7H0L0 9H1L1 7ZM36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM1 9L36 9V7L1 7L1 9Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                  </DOM>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

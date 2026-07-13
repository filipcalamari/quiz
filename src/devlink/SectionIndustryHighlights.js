"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function SectionIndustryHighlights({}) {
  return (
    <Section className={"section"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"highlights-component"} tag={"div"}>
              <Block className={"highlights-header"} tag={"div"}>
                <Heading className={"highlights-heading"} tag={"h2"}>
                  <Span className={"heading-style-italic"}>{"Simplify"}</Span>
                  {" Your HR withUs"}
                </Heading>
              </Block>
              <Block className={"highlights-content is-3"} tag={"div"}>
                <Block
                  className={"highlighs-content-item"}
                  id={"w-node-e6c12c70-04be-8a8d-39b7-0ea51bd87779-1bd8776e"}
                  tag={"div"}
                >
                  <Block className={"highlights-content-icon"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-inner-brand"}
                      content={
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"></path></svg>'
                      }
                    />
                  </Block>
                  <Heading className={"highlights-title"} tag={"h3"}>
                    {"Choose only what youneed"}
                  </Heading>
                  <RichText className={"highlights-paragraph"} tag={"div"}>
                    <Paragraph>
                      {
                        "You can start with only one module (e.g. PTO tracking) in just a few days of quick onboarding process. Pay only for the number of employees."
                      }
                    </Paragraph>
                  </RichText>
                </Block>
                <Block
                  className={"highlighs-content-item"}
                  id={"w-node-e6c12c70-04be-8a8d-39b7-0ea51bd87781-1bd8776e"}
                  tag={"div"}
                >
                  <Block className={"highlights-content-icon"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-inner-brand"}
                      content={
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path></svg>'
                      }
                    />
                  </Block>
                  <Heading className={"highlights-title"} tag={"h3"}>
                    {"Self-service for your employees"}
                  </Heading>
                  <RichText className={"highlights-paragraph"} tag={"div"}>
                    <Paragraph>
                      {
                        "Make it simple for your employees to request absences, track time, engage with HR document, and see the directory of team members."
                      }
                    </Paragraph>
                  </RichText>
                </Block>
                <Block
                  className={"highlighs-content-item"}
                  id={"w-node-e6c12c70-04be-8a8d-39b7-0ea51bd87789-1bd8776e"}
                  tag={"div"}
                >
                  <Block className={"highlights-content-icon"} tag={"div"}>
                    <HtmlEmbed
                      className={"icon-inner-brand"}
                      content={
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"></path></svg>'
                      }
                    />
                  </Block>
                  <Heading className={"highlights-title"} tag={"h3"}>
                    {"Integrations & mobileapps"}
                  </Heading>
                  <RichText className={"highlights-paragraph"} tag={"div"}>
                    <Paragraph>
                      {
                        "Connect to your favourite apps with Slack, MS Teams, Google, Jira and more. Use iOS & Android mobile apps on thego."
                      }
                    </Paragraph>
                  </RichText>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

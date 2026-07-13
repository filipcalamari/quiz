"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import { ValuesCta } from "./ValuesCta";

export function IndustryCta({
  headline = "Tired of repetitive HRtasks?",
  paragraph = "See for yourself how much time you can save by automating time-off management, easy time tracking, and having one place for all HRdocuments.",
}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={"content-box_default is-cta radius-medium"}
              tag={"div"}
            >
              <Block
                className={"layout-column-desktop gap-xxlarge"}
                tag={"div"}
              >
                <Block className={"width-60--desktop"} tag={"div"}>
                  <Heading className={"heading-style-h2"} tag={"h2"}>
                    {headline}
                  </Heading>
                  <Block className={"spacer-medium"} tag={"div"} />
                  <Block className={"max-width-medium"} tag={"div"}>
                    <Paragraph className={"text-size-medium"}>
                      {paragraph}
                    </Paragraph>
                  </Block>
                  <Block className={"hide-tablet"} tag={"div"}>
                    <Block className={"spacer-large"} tag={"div"} />
                    <ValuesCta />
                  </Block>
                </Block>
                <Block
                  className={"width-40--desktop layout-row is-justify-center"}
                  tag={"div"}
                >
                  <Block tag={"div"}>
                    <FormWrapper className={"form_component"}>
                      <FormForm
                        className={"form_form"}
                        data-name={"Email Form"}
                        data-signup={"form"}
                        method={"get"}
                        name={"email-form"}
                      >
                        <Block
                          className={"layout-column-desktop is-gap-small"}
                          tag={"div"}
                        >
                          <Block className={"sizing-grow"} tag={"div"}>
                            <FormTextInput
                              // @ts-ignore - User-defined custom attribute(s)
                              autoComplete={"email"}
                              autoFocus={false}
                              className={"form-input"}
                              data-name={"email"}
                              data-signup={"email"}
                              disabled={false}
                              maxLength={256}
                              name={"email"}
                              placeholder={"name@company.com"}
                              required={true}
                              type={"email"}
                            />
                          </Block>
                          <FormButton
                            className={"button-delete is-reverse"}
                            data-cta={"signup"}
                            data-wait={"Please wait..."}
                            id={"signup-industry-footer"}
                            type={"submit"}
                            value={"Start free trial"}
                          />
                        </Block>
                        <Block className={"layer-simple"} tag={"div"}>
                          <Block className={"spacer-xsmall"} tag={"div"} />
                          <Block className={"text-size-regular"} tag={"div"}>
                            {"No card required. Trial ends automatically."}
                          </Block>
                        </Block>
                      </FormForm>
                      <FormSuccessMessage>
                        <Block tag={"div"}>
                          {"Thank you! Your submission has been received!"}
                        </Block>
                      </FormSuccessMessage>
                      <FormErrorMessage>
                        <Block tag={"div"}>
                          {
                            "Oops! Something went wrong while submitting the form."
                          }
                        </Block>
                      </FormErrorMessage>
                    </FormWrapper>
                  </Block>
                </Block>
                <Block className={"hide-desktop"} tag={"div"}>
                  <ValuesCta />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

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
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function IndustryHero({
  headline = (
    <>
      {"Simple HR solution for "}
      {" companies"}
    </>
  ),
  image = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65fd5f57d1c6bd4fcf81b33c_TinyPNG.png",
  subheadline = "Replace spreadsheets with easy-to-use tools for leave management, time & attendance tracking, employee document storage, and more.",
}) {
  return (
    <Block className={"section_logos page-header"} tag={"header"}>
      <Block
        className={"padding-section-small page-header-content-box"}
        tag={"div"}
      >
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={
                "content-box_default is-grey is-bgshape-ver1 radius-medium"
              }
              tag={"div"}
            >
              <Block className={"spacer-xxlarge"} tag={"div"} />
              <Block
                className={"layout-column-desktop gap-xxlarge"}
                tag={"div"}
              >
                <Block
                  className={"column-half-desktop child-align-center"}
                  tag={"div"}
                >
                  <Heading className={"heading-style-h1"} tag={"h1"}>
                    {headline}
                  </Heading>
                  <Block className={"spacer-medium"} tag={"div"} />
                  <Block className={"max-width-medium"} tag={"div"}>
                    <Paragraph className={"text-size-medium"}>
                      {subheadline}
                    </Paragraph>
                  </Block>
                  <Block className={"spacer-xxlarge"} tag={"div"} />
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
                            className={"button-delete"}
                            data-cta={"signup"}
                            data-wait={"Please wait..."}
                            id={"signup-industry-hero"}
                            type={"submit"}
                            value={"Start free trial"}
                          />
                        </Block>
                        <Block tag={"div"}>
                          <Block className={"spacer-small"} tag={"div"} />
                          <Block className={"text-size-tiny"} tag={"div"}>
                            {
                              "By Signing Up, you agree to our Terms and Conditions."
                            }
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
                <Block className={"column-half-desktop"} tag={"div"}>
                  <Block tag={"div"}>
                    <Image
                      alt={""}
                      className={"image-cover"}
                      height={"1136"}
                      loading={"lazy"}
                      src={image}
                      width={"1920"}
                    />
                  </Block>
                </Block>
              </Block>
              <Block className={"spacer-xxlarge"} tag={"div"} />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

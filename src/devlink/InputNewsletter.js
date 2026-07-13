"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function InputNewsletter({
  idForm = "newsletter-standalone-form",
  idInput = "newsletter-standalone-input",
  idSubmit = "newsletter-standalone-submit",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Grey background": "w-variant-36d0ad1e-f915-265d-8d21-8e771322c5d6",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <FormWrapper className={`form_component ${_activeStyleVariant}`}>
      <FormForm
        action={
          "https://assets.mailerlite.com/jsonp/1935587/forms/172677147919385706/subscribe"
        }
        className={`form_form ${_activeStyleVariant}`}
        fs-formsubmit-element={"form"}
        fs-formsubmit-enhance={"true"}
        id={idForm}
        method={"post"}
        name={"wf-form-"}
      >
        <Block className={`input-container ${_activeStyleVariant}`} tag={"div"}>
          <FormTextInput
            // @ts-ignore - User-defined custom attribute(s)
            autoComplete={"email"}
            autoFocus={false}
            className={`form-input is-merged ${_activeStyleVariant}`}
            data-name={"fields[email]"}
            disabled={false}
            id={idInput}
            maxLength={256}
            name={"fields[email]"}
            placeholder={"name@company.com"}
            required={true}
            type={"email"}
          />
          <FormButton
            className={`button is-merged is-reversed ${_activeStyleVariant}`}
            data-wait={"Please wait..."}
            id={idSubmit}
            type={"submit"}
            value={"Subscribe"}
          />
        </Block>
        <Block
          className={`position-relative text-size-xsmall text-color-tertiary text-style-2lines spacer-top-0p5 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Paragraph
            className={`text-color-secondary padding-right-4 ${_activeStyleVariant}`}
          >
            {
              "By entering your email, you consent to receiving commercial information via email from Calamari sp. z o.o. sp.k., with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw."
            }
          </Paragraph>
          <DOM
            className={`button-read-more is-reversed ${_activeStyleVariant}`}
            data-modal-trigger={"rodo"}
            tag={"button"}
            type={"button"}
          >
            {"Read more"}
          </DOM>
        </Block>
      </FormForm>
      <FormSuccessMessage
        className={`form-message-success on-newsletter ${_activeStyleVariant}`}
      >
        <Block tag={"div"}>
          {"Thank you! Your submission has been received!"}
        </Block>
      </FormSuccessMessage>
      <FormErrorMessage className={`form_message-error ${_activeStyleVariant}`}>
        <Block tag={"div"}>
          {"Oops! Something went wrong while submitting the form."}
        </Block>
      </FormErrorMessage>
    </FormWrapper>
  );
}

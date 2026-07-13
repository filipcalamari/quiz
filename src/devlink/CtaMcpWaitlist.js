"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import Strong from "./webflow_modules/Basic/components/Strong";

export function CtaMcpWaitlist({}) {
  return (
    <FormWrapper className={"form_component"}>
      <FormForm
        action={
          "https://assets.mailerlite.com/jsonp/1935587/forms/181828086614983748/subscribe"
        }
        className={"form_form"}
        fs-formsubmit-element={"form"}
        fs-formsubmit-enhance={"true"}
        id={"newsletter-standalone-form"}
        method={"post"}
        name={"wf-form-"}
      >
        <Block className={"input-label"} tag={"div"}>
          <Strong>{"Join the waitlist"}</Strong>
        </Block>
        <Block className={"input-container"} tag={"div"}>
          <FormTextInput
            // @ts-ignore - User-defined custom attribute(s)
            autoComplete={"email"}
            autoFocus={false}
            className={"form-input is-merged border"}
            data-name={"fields[email]"}
            disabled={false}
            id={"newsletter-standalone-input"}
            maxLength={256}
            name={"fields[email]"}
            placeholder={"name@company.com"}
            required={true}
            type={"email"}
          />
          <FormButton
            className={"button is-merged"}
            data-wait={"Please wait..."}
            id={"newsletter-standalone-submit"}
            type={"submit"}
            value={"Join"}
          />
        </Block>
      </FormForm>
      <FormSuccessMessage className={"form-message-success theme-dark"}>
        <Block tag={"div"}>
          {"Thank you! Your submission has been received!"}
        </Block>
      </FormSuccessMessage>
      <FormErrorMessage className={"form_message-error"}>
        <Block tag={"div"}>
          {"Oops! Something went wrong while submitting the form."}
        </Block>
      </FormErrorMessage>
    </FormWrapper>
  );
}

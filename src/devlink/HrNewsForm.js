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
import RichText from "./webflow_modules/Basic/components/RichText";

export function HrNewsForm({
  id = "webinar-email-desktop",
  variant = "Desktop",
}) {
  const _styleVariantMap = {
    Desktop: "",
    Mobile: "w-variant-94f8c228-6ccf-6cfc-cbd9-9ec8531d7f02",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <FormWrapper className={`webinar-form-component ${_activeStyleVariant}`}>
      <FormForm
        className={`webinar-form-container ${_activeStyleVariant}`}
        data-form={"ml-subscribe"}
        data-name={"Webinar form"}
        id={"wf-form-webinar-form-desktop"}
        method={"get"}
        name={"wf-form-Webinar-form-2"}
      >
        <Block
          className={`webinar-form-heading ${_activeStyleVariant}`}
          tag={"div"}
        >
          {"HR News"}
        </Block>
        <Block tag={"div"}>
          {"Leave your email to receive amonthly dose ofknowledge"}
        </Block>
        <Block
          className={`webinar-form-input ${_activeStyleVariant}`}
          tag={"div"}
        >
          <FormTextInput
            aria-label={"email"}
            // @ts-ignore - User-defined custom attribute(s)
            autoComplete={"email"}
            autoFocus={false}
            className={`form_input-v2 is-white ${_activeStyleVariant}`}
            data-name={"fields[email]"}
            disabled={false}
            id={id}
            maxLength={256}
            name={"fields[email]"}
            placeholder={"Your e-mail"}
            required={true}
            type={"email"}
          />
          <FormButton
            className={`button ${_activeStyleVariant}`}
            data-wait={"One moment..."}
            type={"submit"}
            value={"I want to receive HR news!"}
          />
        </Block>
        <Block
          className={`webinar-form-legal-component ${_activeStyleVariant}`}
          tag={"div"}
        >
          <RichText
            className={`webinar-form-legal ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Paragraph>
              {
                "By filling out the form, you agree to receive commercial information via email from CALAMARI Sp. z o.o. sp.k. with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw."
              }
            </Paragraph>
            <Paragraph>
              {
                "You have the right to withdraw your consent at any time by writing to dpo@calamari.io or by using the unsubscribe option available in the newsletter. The withdrawal of consent does not affect the legality of information sent based on consent before its withdrawal."
              }
            </Paragraph>
            <Paragraph>
              {
                "The administrator of your personal data is CALAMARI Spółka z ograniczoną odpowiedzialnością sp.k. with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw, which processes the data for the purpose of carrying out marketing activities in the form of sending a newsletter. More information on the processing of personal data, including the rights you are entitled to under the GDPR, is available in the Privacy Policy."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
          </RichText>
          <DOM
            className={`webinar-form-legal-button ${_activeStyleVariant}`}
            tag={"button"}
            type={"button"}
          >
            {"Read more"}
          </DOM>
        </Block>
      </FormForm>
      <FormSuccessMessage
        className={`webinar-form-success ${_activeStyleVariant}`}
      >
        <Block tag={"div"}>{"Thank you for registering!"}</Block>
      </FormSuccessMessage>
      <FormErrorMessage className={`webinar-form-error ${_activeStyleVariant}`}>
        <Block tag={"div"}>{"Ups!Coś poszło nie tak. Spróbuj ponownie."}</Block>
      </FormErrorMessage>
    </FormWrapper>
  );
}

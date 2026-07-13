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
import Section from "./webflow_modules/Layout/components/Section";
import { BookADemo } from "./BookADemo";
import { CtaStartFreeTrial } from "./CtaStartFreeTrial";

export function SectionCtaAvatars({
  actionComponentSlotVisibility = false,
  bookADemoVisibility = false,
  emailVisibility = false,
  heading = (
    <>
      {"Join 130.000+ "}
      {" from 106countries"}
    </>
  ),
  infoBelowCta = "No card required. Trial ends automatically.",
  paragraph = "See for yourself how much time you can save by automating time off management, easy time tracking or having one place for all HR documents.",
  sectionCta,
  startFreeTrialButtonCtaLabel = "Start free trial",
  startFreeTrialVisibility = true,
  subheading = "Powering Fast Growing Companies",
  verticalSpace = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Double Bottom": "w-variant-e4e3f095-e450-e78f-5d39-ff3265fcc37b",
  };

  const _activeStyleVariant = _styleVariantMap[verticalSpace];

  return (
    <Section className={`section ${_activeStyleVariant}`} tag={"section"}>
      <Block
        className={`padding-section-large ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`padding-global-v2 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`container-large ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block className={`team_layout ${_activeStyleVariant}`} tag={"div"}>
              <Block
                className={`team_avatar_layout ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`team-avatar-circle ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Kamil Wojewoda"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"264"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc914d5c7deb10f99414_1576507737548-removebg-preview%201.webp"
                      }
                      width={"264"}
                    />
                  </Block>
                </Block>
                <Block
                  className={`team-avatar-circle is-left ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar is-middle ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Kasia Dobrzańska"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"264"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc90aad7838ce537bfec_image%20285.webp"
                      }
                      width={"264"}
                    />
                  </Block>
                </Block>
                <Block
                  className={`team-avatar-circle ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Małgorzata Kiryłowicz"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"264"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc9112e7ab5133a49f42_image%20288.webp"
                      }
                      width={"264"}
                    />
                  </Block>
                </Block>
              </Block>
              <Block
                className={`page-cta-content ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`text_content-title ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {subheading}
                </Block>
                <Block
                  className={`spacer-large ${_activeStyleVariant}`}
                  tag={"div"}
                />
                <Heading
                  className={`section-header-heading ${_activeStyleVariant}`}
                  tag={"h2"}
                >
                  {heading}
                </Heading>
                <Paragraph
                  className={`section-header-paragraph ${_activeStyleVariant}`}
                >
                  {paragraph}
                </Paragraph>
                {emailVisibility ? (
                  <FormWrapper>
                    <FormForm
                      className={`form_form ${_activeStyleVariant}`}
                      data-form={"ml-subscribe"}
                      data-name={"Email Form"}
                      method={"get"}
                      name={"email-form"}
                    >
                      <Block
                        className={`form-input-group ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"email"}
                          autoFocus={false}
                          className={`form_input-v2 is-waiting-list ${_activeStyleVariant}`}
                          data-name={"fields[email]"}
                          disabled={false}
                          id={"fields[email]-2"}
                          maxLength={256}
                          name={"fields[email]"}
                          pattern={"[^@\\s]+@[^@\\s]+\\.[^@\\s]+"}
                          placeholder={"name@company.com"}
                          required={true}
                          type={"email"}
                        />
                        <FormButton
                          className={`button ${_activeStyleVariant}`}
                          data-cta={"signup"}
                          data-wait={"Please wait..."}
                          type={"submit"}
                          value={"I want early access"}
                        />
                      </Block>
                    </FormForm>
                    <FormSuccessMessage
                      className={`webinar-form-success ${_activeStyleVariant}`}
                    >
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
                ) : null}
                {sectionCta}
                <CtaStartFreeTrial
                  infoBelowCta={infoBelowCta}
                  startFreeTrialButtonCtaLabel={startFreeTrialButtonCtaLabel}
                  startFreeTrialVisibility={startFreeTrialVisibility}
                />
                {bookADemoVisibility ? (
                  <Block
                    className={`section-cta ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <BookADemo variant={"Primary"} />
                  </Block>
                ) : null}
              </Block>
              <Block
                className={`team_avatar_layout ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`team-avatar-circle ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Agnieszka Popławska"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"264"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc90f3a8a2c4d42d7519_image%20286.webp"
                      }
                      width={"264"}
                    />
                  </Block>
                </Block>
                <Block
                  className={`team-avatar-circle is-right ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar is-middle ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Paweł Gonczaruk"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"264"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc90ec71fc5bef58c660_IMG_0838%201.webp"
                      }
                      width={"264"}
                    />
                  </Block>
                </Block>
                <Block
                  className={`team-avatar-circle ${_activeStyleVariant}`}
                  data-animation={"avatar-circle"}
                  tag={"div"}
                >
                  <Block
                    className={`team-avatar ${_activeStyleVariant}`}
                    data-animation={"avatar"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Ewelina Filipiuk"}
                      className={`image-cover ${_activeStyleVariant}`}
                      height={"240"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/691dbc910e19604d53f05c57_image%20287.webp"
                      }
                      width={"240"}
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

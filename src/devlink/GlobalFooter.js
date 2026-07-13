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
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import VFlex from "./webflow_modules/Layout/components/VFlex";
import { Modal } from "./Modal";
import { ModalSlotCartWithText } from "./ModalSlotCartWithText";
import { SelectLanguage } from "./SelectLanguage";

export function GlobalFooter({
  alternativeLanguage,
  currentLanguage,
  variant = "Base",
  visibilityLanguage = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "Padding Off": "w-variant-7d2a94c9-5f92-b375-952c-408acb9b144f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Block className={`footer-component ${_activeStyleVariant}`} tag={"footer"}>
      <Block
        className={`circle-radial-container ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`circle-radial is-bottom ${_activeStyleVariant}`}
          tag={"div"}
        />
      </Block>
      <Block
        className={`padding-global z-index-1 ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block className={`container-large ${_activeStyleVariant}`} tag={"div"}>
          <Block className={`footer-top ${_activeStyleVariant}`} tag={"div"}>
            <Link
              block={"inline"}
              button={false}
              className={`footer-logo ${_activeStyleVariant}`}
              id={"w-node-_0989df6c-1450-bb1d-bd8d-1ec0ff2fb781-507a601f"}
              options={{
                href: "#",
              }}
            >
              <Image
                alt={"Calamari"}
                className={`image-height-fill ${_activeStyleVariant}`}
                height={"32"}
                src={
                  "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f3d4bb044fe1a0f7dc_Vector.svg"
                }
                width={"168"}
              />
            </Link>
          </Block>
          <Block className={`footer-ctas ${_activeStyleVariant}`} tag={"div"}>
            <Block
              className={`footer-ctas-container ${_activeStyleVariant}`}
              tag={"div"}
            >
              <FormWrapper className={`form-block ${_activeStyleVariant}`}>
                <Block
                  className={`footer-form-label ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"Join our newsletter"}
                </Block>
                <FormForm
                  action={
                    "https://assets.mailerlite.com/jsonp/1935587/forms/172677147919385706/subscribe"
                  }
                  data-name={"Email Form"}
                  fs-formsubmit-element={"form"}
                  fs-formsubmit-enhance={"true"}
                  id={"newsletter-footer-form"}
                  method={"post"}
                  name={"email-form"}
                >
                  <Block
                    className={`footer-newsletter-element ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <FormTextInput
                      autoFocus={false}
                      className={`text-field ${_activeStyleVariant}`}
                      data-name={"fields[email]"}
                      disabled={false}
                      id={"newsletter-footer-input"}
                      maxLength={256}
                      name={"fields[email]"}
                      placeholder={"your@company.com"}
                      required={true}
                      type={"email"}
                    />
                    <FormButton
                      className={`submit-button ${_activeStyleVariant}`}
                      data-wait={"Please wait..."}
                      type={"submit"}
                    />
                  </Block>
                  <Block
                    className={`position-relative text-size-xsmall text-color-tertiary text-style-2lines spacer-top-0p5 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`padding-right-4 ${_activeStyleVariant}`}
                    >
                      {
                        "By entering your email, you consent to receiving commercial information via email from Calamari sp. z o.o. sp.k., with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw."
                      }
                    </Paragraph>
                    <DOM
                      className={`button-read-more ${_activeStyleVariant}`}
                      data-modal-trigger={"rodo"}
                      tag={"button"}
                      type={"button"}
                    >
                      {"Read more"}
                    </DOM>
                  </Block>
                </FormForm>
                <FormSuccessMessage
                  className={`footer-form-success ${_activeStyleVariant}`}
                >
                  <Block tag={"div"}>
                    {"Thank you! Your submission has been received!"}
                  </Block>
                </FormSuccessMessage>
                <FormErrorMessage>
                  <Block tag={"div"}>
                    {"Oops! Something went wrong while submitting the form."}
                  </Block>
                </FormErrorMessage>
              </FormWrapper>
            </Block>
            <Block
              className={`footer-socials ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`text-weight-semibold ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"Follow us: "}
              </Block>
              <Link
                aria-label={"Linkedin"}
                block={"inline"}
                button={false}
                className={`icon-style-link ${_activeStyleVariant}`}
                options={{
                  href: "https://www.linkedin.com/company/calamarihr",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={`icon-1x1-large ${_activeStyleVariant}`}
                  content={
                    '<svg width="24" height="24" class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M18.3372 18.339H15.6717V14.1622C15.6717 13.1662 15.6515 11.8845 14.2827 11.8845C12.893 11.8845 12.6807 12.9683 12.6807 14.0887V18.339H10.0152V9.75H12.5757V10.9207H12.6102C12.968 10.2457 13.838 9.53325 15.1377 9.53325C17.8385 9.53325 18.338 11.3108 18.338 13.6245L18.3372 18.339ZM7.0047 8.57475C6.1467 8.57475 5.45745 7.88025 5.45745 7.026C5.45745 6.1725 6.14745 5.47875 7.0047 5.47875C7.8597 5.47875 8.5527 6.1725 8.5527 7.026C8.5527 7.88025 7.85895 8.57475 7.0047 8.57475ZM8.3412 18.339H5.6682V9.75H8.3412V18.339ZM19.6707 3H4.3302C3.59595 3 3.00195 3.5805 3.00195 4.29675V19.7033C3.00195 20.4202 3.59595 21 4.3302 21H19.6685C20.402 21 21.002 20.4202 21.002 19.7033V4.29675C21.002 3.5805 20.402 3 19.6685 3H19.6707Z" fill="currentColor"/>\n</svg>'
                  }
                />
              </Link>
              <Link
                aria-label={"YouTube"}
                block={"inline"}
                button={false}
                className={`icon-style-link ${_activeStyleVariant}`}
                options={{
                  href: "https://www.youtube.com/@CalamariHR",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={`icon-1x1-large ${_activeStyleVariant}`}
                  content={
                    '<svg class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.3253 5.3335C17.0374 5.33742 18.8191 5.35464 20.7122 5.43047L21.3834 5.45974C23.2894 5.54998 25.1938 5.70414 26.1383 5.9675C27.3982 6.32143 28.3885 7.35416 28.7231 8.66326C29.2561 10.742 29.3227 14.7994 29.331 15.7812L29.3322 15.9847V15.999C29.3322 15.999 29.3322 16.0039 29.3322 16.0134L29.331 16.2168C29.3227 17.1987 29.2561 21.256 28.7231 23.3348C28.3838 24.6487 27.3935 25.6815 26.1383 26.0306C25.1938 26.2939 23.2894 26.448 21.3834 26.5383L20.7122 26.5675C18.8191 26.6434 17.0374 26.6606 16.3253 26.6646L16.0127 26.6656H15.9989C15.9989 26.6656 15.9942 26.6656 15.985 26.6656L15.6727 26.6646C14.1655 26.6563 7.86371 26.5882 5.85943 26.0306C4.59955 25.6766 3.60931 24.6439 3.27457 23.3348C2.74168 21.256 2.67507 17.1987 2.66675 16.2168V15.7812C2.67507 14.7994 2.74168 10.742 3.27457 8.66326C3.61395 7.34931 4.60419 6.31659 5.85943 5.9675C7.86371 5.4098 14.1655 5.34179 15.6727 5.3335H16.3253ZM13.3322 11.3323V20.6656L21.3322 15.999L13.3322 11.3323Z" fill="currentColor"/>\n</svg>'
                  }
                />
              </Link>
              <Link
                aria-label={"Facebook"}
                block={"inline"}
                button={false}
                className={`icon-style-link ${_activeStyleVariant}`}
                options={{
                  href: "https://www.facebook.com/calamariHR/",
                  target: "_blank",
                }}
              >
                <HtmlEmbed
                  className={`icon-1x1-large ${_activeStyleVariant}`}
                  content={
                    '<svg width="24" height="24" viewBox="0 0 24 24" class="icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z" fill="currentColor"/>\n</svg>'
                  }
                />
              </Link>
            </Block>
          </Block>
          <Block tag={"div"}>
            <Block className={`separator ${_activeStyleVariant}`} tag={"div"} />
            <Block
              className={`footer-links ${_activeStyleVariant}`}
              tag={"nav"}
            >
              <DOM
                className={`footer-grid-main ${_activeStyleVariant}`}
                tag={"ul"}
              >
                <DOM
                  id={"w-node-_1c986645-c4f6-560c-6ef7-8ee4e3a59128-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Product"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Time Off"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Time &Attendance"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Core HR"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Performance"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Pricing"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_0ab4cde1-7a25-e4d7-64c3-83bc6d42f388-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Integrations"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        className={_activeStyleVariant}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Google"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Slack"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Microsoft 365"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Basecamp"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Asana"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Jira"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"API"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_836b4111-952d-181e-1fea-b214470da26b-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Industries"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"SaaS&Startups"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Universities & Colleges"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Software Agencies"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Marketing Agencies"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Cleaning Services"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Game Studios"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Nonprofits"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_452c999b-729b-3fb9-3b5a-c9c33f9cb5cc-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Resources"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Blog"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Academy"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "https://eu.intercom.news/calamari",
                        }}
                      >
                        {"What’s New"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "https://status.calamari.dev",
                        }}
                      >
                        {"System Status"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "https://help.calamari.io/en/",
                        }}
                      >
                        {"Help Center"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Security"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-ac51b44b-d36a-e62c-fdb4-2263659441f4-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Company"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Customers"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Become a Partner"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <DOM tag={"span"}>
                        <Link
                          button={false}
                          options={{
                            href: "#",
                          }}
                        >
                          {"Careers"}
                        </Link>
                        <Block
                          className={`badge-v2 margin-left-0p5 ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`hide ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <NotSupported _atom={"Collection List"} />
                          </Block>
                          <Block fs-countitems-element={"value"} tag={"div"}>
                            {"0"}
                          </Block>
                          <Block data-career-badge={""} tag={"div"}>
                            {" Role"}
                          </Block>
                        </Block>
                      </DOM>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Contact Us 👋🏻"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_21f1cca4-74ba-bbac-936d-5a662dc85d69-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Platform Features"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Mobile App"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Work With Me"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"AIOverview"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Reports"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_418f9ed9-d99d-b0e7-2147-8126733a59e7-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Time &Attendance"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Kiosk App"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Time Rounding"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Timesheet Report"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Timesheet Overview"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Geofencing"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_8f21ae4b-68ab-c8e9-52a3-39fe176f67f1-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Time Off"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Online Vacation Calendar"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Employee Time Off Request"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Leave Approval Policy"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_4ea1046a-9141-5652-b458-a73920226506-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Core HR"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Employee Directory"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Employee Requests "}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Smart Tables"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Reminders"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
                <DOM
                  id={"w-node-_9b4b3319-9209-fd12-4026-ee49750e7814-507a601f"}
                  tag={"li"}
                >
                  <Block
                    className={`footer-links-title ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Performance"}
                  </Block>
                  <DOM className={`ul ${_activeStyleVariant}`} tag={"ul"}>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Employee Evaluation Form"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Anonymous Reviews"}
                      </Link>
                    </DOM>
                    <DOM className={`li ${_activeStyleVariant}`} tag={"li"}>
                      <Link
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        {"External Feedback"}
                      </Link>
                    </DOM>
                  </DOM>
                </DOM>
              </DOM>
            </Block>
            <Block className={`separator ${_activeStyleVariant}`} tag={"div"} />
          </Block>
          <Block className={`footer-bottom ${_activeStyleVariant}`} tag={"div"}>
            <Block
              className={`div-block-197 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`footer-signature ${_activeStyleVariant}`}
                tag={"div"}
              >
                <DOM tag={"span"}>{"Made with"}</DOM>
                <DOM className={`span ${_activeStyleVariant}`} tag={"span"}>
                  <DOM
                    className={`footer_heart ${_activeStyleVariant}`}
                    height={"100%"}
                    tag={"svg"}
                    viewBox={"0 0 22 21"}
                    width={"100%"}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <DOM
                      d={
                        "M10.9999 2.30598C12.203 1.19464 13.7699 0.570312 15.4054 0.570312C17.1716 0.570312 18.8576 1.29828 20.092 2.58133C21.3177 3.85422 22 5.57011 22 7.35208C22 9.13411 21.3176 10.8501 20.092 12.1228C19.2771 12.9696 18.4634 13.8355 17.6455 14.706C15.9843 16.4741 14.3052 18.2611 12.5611 19.9447L12.557 19.9486C11.6575 20.8041 10.2331 20.773 9.372 19.8784L1.90734 12.1227C-0.63578 9.48047 -0.63578 5.22372 1.90734 2.58144C4.39596 -0.00421077 8.40338 -0.0960259 10.9999 2.30598Z"
                      }
                      fill={"currentColor"}
                      tag={"path"}
                    />
                  </DOM>
                </DOM>
                <DOM tag={"span"}>{"in Poland"}</DOM>
              </Block>
              <Block tag={"div"}>
                <Block
                  className={`footer_legal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Link
                    button={false}
                    className={`footer_link ${_activeStyleVariant}`}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Policies"}
                  </Link>
                  <Block
                    className={`divider-dot ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Link
                    button={false}
                    className={`footer_link ${_activeStyleVariant}`}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Terms of Service"}
                  </Link>
                  <Block
                    className={`divider-dot ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <DOM
                    className={`footer_link ${_activeStyleVariant}`}
                    id={"cookiebot-renew"}
                    tag={"button"}
                  >
                    {"Cookies"}
                  </DOM>
                </Block>
              </Block>
            </Block>
            {visibilityLanguage ? (
              <Block
                className={`div-block-198 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <SelectLanguage
                  alternativeSiteLink={alternativeLanguage}
                  currentSiteLink={currentLanguage}
                />
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
      <Modal
        modalComponentName={"rodo"}
        slot={
          <ModalSlotCartWithText
            text={
              <>
                <Paragraph>
                  {
                    "By entering your email, you consent to receiving commercial information via email from Calamari sp. z o.o. sp.k., with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw. You have the right to withdraw your consent at any time by using the unsubscribe option available in the newsletter. Withdrawing consent does not affect the lawfulness of sending information based on consent before its withdrawal."
                  }
                </Paragraph>
                <Paragraph>
                  {
                    "The personal data controller is Calamari sp. z o.o. sp.k., with its registered office in Warsaw, ul. Chmielna 2/31, 00-020 Warsaw, which processes the data for the purpose of sending the newsletter. More information on the processing of personal data, including your rights under the GDPR, is available in the "
                  }
                  <Link
                    button={false}
                    options={{
                      href: "https://www.calamari.io/privacy-policy",
                    }}
                  >
                    {"Privacy Policy"}
                  </Link>
                  {"."}
                </Paragraph>
              </>
            }
          />
        }
      />
    </Block>
  );
}

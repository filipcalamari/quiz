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
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function SectionCtaInput({ classesSection = "" }) {
  return (
    <Section className={`section ${classesSection}`} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"layout-center-all"} tag={"div"}>
              <Block
                className={"layout-center-all position-relative"}
                tag={"div"}
              >
                <Heading className={"heading-style-h1-v2"} tag={"h2"}>
                  {"Get Ready for "}
                  <Span className={"heading-style-italic"}>{"Efficiency"}</Span>
                </Heading>
                <Block className={"spacer-medium-v2"} tag={"div"} />
                <Block className={"max-width-large-v2"} tag={"div"}>
                  <Paragraph className={"text-size-medium"}>
                    {
                      "Stop being a bottleneck. Try Calamari free for 14 days and regain focus."
                    }
                  </Paragraph>
                </Block>
                <Block className={"spacer-large"} tag={"div"} />
                <FormWrapper className={"form_component"}>
                  <FormForm
                    className={"form_form"}
                    data-name={"Email Form"}
                    data-signup={"form"}
                    method={"get"}
                    name={"email-form"}
                  >
                    <Block className={"form-input-group"} tag={"div"}>
                      <FormTextInput
                        // @ts-ignore - User-defined custom attribute(s)
                        autoComplete={"email"}
                        autoFocus={false}
                        className={"form-input is-grey is-merged"}
                        data-name={"email"}
                        data-signup={"email"}
                        disabled={false}
                        maxLength={256}
                        name={"email"}
                        pattern={"[^@\\s]+@[^@\\s]+\\.[^@\\s]+"}
                        placeholder={"name@company.com"}
                        required={true}
                        type={"email"}
                      />
                      <FormButton
                        className={"button is-merged"}
                        data-cta={"signup"}
                        data-wait={"Please wait..."}
                        type={"submit"}
                        value={"Start free trial"}
                      />
                    </Block>
                    <Block tag={"div"}>
                      <Block className={"spacer-small"} tag={"div"} />
                      <Block
                        className={"text-size-regular text-style-muted-v2"}
                        tag={"div"}
                      >
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
                      {"Oops! Something went wrong while submitting the form."}
                    </Block>
                  </FormErrorMessage>
                </FormWrapper>
                <Block
                  className={"badges-on-asset_container hide-tablet"}
                  tag={"div"}
                >
                  <Block className={"badge_component b1"} tag={"div"}>
                    <HtmlEmbed
                      className={"asset-badge_symbol"}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.5 12C9.76752 12 12.5 9.36306 12.5 3C12.5 9.36306 15.2134 12 21.5 12C15.2134 12 12.5 14.7134 12.5 21C12.5 14.7134 9.76752 12 3.5 12Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3C13.25 6.09606 13.9131 8.10432 15.1711 9.35408C16.4301 10.6048 18.4397 11.25 21.5 11.25C21.9142 11.25 22.25 11.5858 22.25 12C22.25 12.4142 21.9142 12.75 21.5 12.75C18.4447 12.75 16.4337 13.412 15.1729 14.6729C13.912 15.9337 13.25 17.9447 13.25 21C13.25 21.4142 12.9142 21.75 12.5 21.75C12.0858 21.75 11.75 21.4142 11.75 21C11.75 17.9459 11.0838 15.9346 9.82042 14.6733C8.55684 13.4118 6.54516 12.75 3.5 12.75C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25C6.55016 11.25 8.56043 10.6051 9.82216 9.35365C11.0827 8.10343 11.75 6.09482 11.75 3C11.75 2.58579 12.0858 2.25 12.5 2.25ZM12.4983 7.87298C12.1185 8.86745 11.5855 9.7174 10.8785 10.4186C10.1782 11.1132 9.33433 11.635 8.35346 12.0069C9.3356 12.3845 10.1799 12.9126 10.8802 13.6118C11.5861 14.3165 12.1187 15.168 12.4983 16.1605C12.8765 15.1684 13.4075 14.3169 14.1122 13.6122C14.8116 12.9128 15.6556 12.3845 16.6382 12.0069C15.6568 11.6349 14.8133 11.113 14.1139 10.4182C13.4081 9.71698 12.8767 8.86714 12.4983 7.87298Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                    <Block tag={"div"}>{"Support from day one"}</Block>
                  </Block>
                  <Block className={"badge_component b2"} tag={"div"}>
                    <HtmlEmbed
                      className={"asset-badge_symbol"}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.5 12C9.76752 12 12.5 9.36306 12.5 3C12.5 9.36306 15.2134 12 21.5 12C15.2134 12 12.5 14.7134 12.5 21C12.5 14.7134 9.76752 12 3.5 12Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3C13.25 6.09606 13.9131 8.10432 15.1711 9.35408C16.4301 10.6048 18.4397 11.25 21.5 11.25C21.9142 11.25 22.25 11.5858 22.25 12C22.25 12.4142 21.9142 12.75 21.5 12.75C18.4447 12.75 16.4337 13.412 15.1729 14.6729C13.912 15.9337 13.25 17.9447 13.25 21C13.25 21.4142 12.9142 21.75 12.5 21.75C12.0858 21.75 11.75 21.4142 11.75 21C11.75 17.9459 11.0838 15.9346 9.82042 14.6733C8.55684 13.4118 6.54516 12.75 3.5 12.75C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25C6.55016 11.25 8.56043 10.6051 9.82216 9.35365C11.0827 8.10343 11.75 6.09482 11.75 3C11.75 2.58579 12.0858 2.25 12.5 2.25ZM12.4983 7.87298C12.1185 8.86745 11.5855 9.7174 10.8785 10.4186C10.1782 11.1132 9.33433 11.635 8.35346 12.0069C9.3356 12.3845 10.1799 12.9126 10.8802 13.6118C11.5861 14.3165 12.1187 15.168 12.4983 16.1605C12.8765 15.1684 13.4075 14.3169 14.1122 13.6122C14.8116 12.9128 15.6556 12.3845 16.6382 12.0069C15.6568 11.6349 14.8133 11.113 14.1139 10.4182C13.4081 9.71698 12.8767 8.86714 12.4983 7.87298Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                    <Block tag={"div"}>{"Start for free"}</Block>
                  </Block>
                  <Block className={"badge_component b3"} tag={"div"}>
                    <HtmlEmbed
                      className={"asset-badge_symbol"}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.5 12C9.76752 12 12.5 9.36306 12.5 3C12.5 9.36306 15.2134 12 21.5 12C15.2134 12 12.5 14.7134 12.5 21C12.5 14.7134 9.76752 12 3.5 12Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3C13.25 6.09606 13.9131 8.10432 15.1711 9.35408C16.4301 10.6048 18.4397 11.25 21.5 11.25C21.9142 11.25 22.25 11.5858 22.25 12C22.25 12.4142 21.9142 12.75 21.5 12.75C18.4447 12.75 16.4337 13.412 15.1729 14.6729C13.912 15.9337 13.25 17.9447 13.25 21C13.25 21.4142 12.9142 21.75 12.5 21.75C12.0858 21.75 11.75 21.4142 11.75 21C11.75 17.9459 11.0838 15.9346 9.82042 14.6733C8.55684 13.4118 6.54516 12.75 3.5 12.75C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25C6.55016 11.25 8.56043 10.6051 9.82216 9.35365C11.0827 8.10343 11.75 6.09482 11.75 3C11.75 2.58579 12.0858 2.25 12.5 2.25ZM12.4983 7.87298C12.1185 8.86745 11.5855 9.7174 10.8785 10.4186C10.1782 11.1132 9.33433 11.635 8.35346 12.0069C9.3356 12.3845 10.1799 12.9126 10.8802 13.6118C11.5861 14.3165 12.1187 15.168 12.4983 16.1605C12.8765 15.1684 13.4075 14.3169 14.1122 13.6122C14.8116 12.9128 15.6556 12.3845 16.6382 12.0069C15.6568 11.6349 14.8133 11.113 14.1139 10.4182C13.4081 9.71698 12.8767 8.86714 12.4983 7.87298Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                    <Block tag={"div"}>{"Easy & quick setup"}</Block>
                  </Block>
                  <Block className={"badge_component b4"} tag={"div"}>
                    <HtmlEmbed
                      className={"asset-badge_symbol"}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.5 12C9.76752 12 12.5 9.36306 12.5 3C12.5 9.36306 15.2134 12 21.5 12C15.2134 12 12.5 14.7134 12.5 21C12.5 14.7134 9.76752 12 3.5 12Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.25C12.9142 2.25 13.25 2.58579 13.25 3C13.25 6.09606 13.9131 8.10432 15.1711 9.35408C16.4301 10.6048 18.4397 11.25 21.5 11.25C21.9142 11.25 22.25 11.5858 22.25 12C22.25 12.4142 21.9142 12.75 21.5 12.75C18.4447 12.75 16.4337 13.412 15.1729 14.6729C13.912 15.9337 13.25 17.9447 13.25 21C13.25 21.4142 12.9142 21.75 12.5 21.75C12.0858 21.75 11.75 21.4142 11.75 21C11.75 17.9459 11.0838 15.9346 9.82042 14.6733C8.55684 13.4118 6.54516 12.75 3.5 12.75C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25C6.55016 11.25 8.56043 10.6051 9.82216 9.35365C11.0827 8.10343 11.75 6.09482 11.75 3C11.75 2.58579 12.0858 2.25 12.5 2.25ZM12.4983 7.87298C12.1185 8.86745 11.5855 9.7174 10.8785 10.4186C10.1782 11.1132 9.33433 11.635 8.35346 12.0069C9.3356 12.3845 10.1799 12.9126 10.8802 13.6118C11.5861 14.3165 12.1187 15.168 12.4983 16.1605C12.8765 15.1684 13.4075 14.3169 14.1122 13.6122C14.8116 12.9128 15.6556 12.3845 16.6382 12.0069C15.6568 11.6349 14.8133 11.113 14.1139 10.4182C13.4081 9.71698 12.8767 8.86714 12.4983 7.87298Z" fill="currentColor"/>\n</svg>'
                      }
                    />
                    <Block tag={"div"}>{"Manage from Mobile App"}</Block>
                  </Block>
                </Block>
              </Block>
              <Block className={"spacer-xhuge"} tag={"div"} />
              <Block className={"max-width-medium"} tag={"div"}>
                <HtmlEmbed
                  className={"asset-container_stars"}
                  content={
                    '<svg width="100%" height="100%" viewBox="0 0 132 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.99985 15.3703L4.12197 18.6605L5.43475 12.0536L0.489258 7.48015L7.17846 6.68703L9.99985 0.570312L12.8212 6.68703L19.5103 7.48015L14.5649 12.0536L15.8777 18.6605L9.99985 15.3703Z" fill="#F7B91E"/>\n<path d="M37.9998 15.3703L32.122 18.6605L33.4347 12.0536L28.4893 7.48015L35.1785 6.68703L37.9998 0.570312L40.8212 6.68703L47.5103 7.48015L42.5649 12.0536L43.8777 18.6605L37.9998 15.3703Z" fill="#F7B91E"/>\n<path d="M65.9998 15.3703L60.122 18.6605L61.4347 12.0536L56.4893 7.48015L63.1785 6.68703L65.9998 0.570312L68.8212 6.68703L75.5103 7.48015L70.5649 12.0536L71.8777 18.6605L65.9998 15.3703Z" fill="#F7B91E"/>\n<path d="M93.9998 15.3703L88.122 18.6605L89.4347 12.0536L84.4893 7.48015L91.1785 6.68703L93.9998 0.570312L96.8212 6.68703L103.51 7.48015L98.5649 12.0536L99.8777 18.6605L93.9998 15.3703Z" fill="#F7B91E"/>\n<path d="M122 15.3703L116.122 18.6605L117.435 12.0536L112.489 7.48015L119.178 6.68703L122 0.570312L124.821 6.68703L131.51 7.48015L126.565 12.0536L127.878 18.6605L122 15.3703Z" fill="#F7B91E"/>\n</svg>'
                  }
                />
                <Block className={"spacer-small"} tag={"div"} />
                <Paragraph className={"text-size-regular"}>
                  {
                    "“In the 2+ years our company has used Calamari, we have heard nothing but positive feedback from employees and managers.”"
                  }
                </Paragraph>
                <Block className={"spacer-small"} tag={"div"} />
                <Paragraph className={"text-size-regular is-cta-testimonial"}>
                  <Span>{"– Parker R."}</Span>
                  <Span className={"text-style-muted-v2"}>
                    {"VP, People, Mission & Culture at Brightspot"}
                  </Span>
                </Paragraph>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

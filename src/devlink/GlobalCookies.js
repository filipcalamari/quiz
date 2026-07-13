"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Strong from "./webflow_modules/Basic/components/Strong";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cookies_banner-trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".cookies_banner-trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220024},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cookies_banner-trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".cookies_banner-trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220027},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cookes_prefs-trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".cookes_prefs-trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cookes_prefs-trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".cookes_prefs-trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699},"e-199":{"id":"e-199","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7104af0f-b529-5472-e6b5-b73e9f648690","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7104af0f-b529-5472-e6b5-b73e9f648690","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713266625631},"e-201":{"id":"e-201","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"48da2520-11a6-4024-935e-ccc8ffc3079a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"48da2520-11a6-4024-935e-ccc8ffc3079a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713267595657},"e-203":{"id":"e-203","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"27a114ce-c5fe-1576-98ab-af436b6f7ec8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27a114ce-c5fe-1576-98ab-af436b6f7ec8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713267608721},"e-205":{"id":"e-205","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ec148f44-e23e-f27b-1345-b3a8bb74c19d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ec148f44-e23e-f27b-1345-b3a8bb74c19d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713269238024}},"actionLists":{"a-21":{"id":"a-21","title":"Cookie Banner [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cookies_component.is-banner","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","e7320874-2e1b-e2be-109d-6f2867f91a27"]},"value":"none"}},{"id":"a-21-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_overlay","selectorGuids":["a09c26dc-405b-b01a-ff89-6b2ba9796801"]},"value":0,"unit":""}},{"id":"a-21-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-21-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cookies_component.is-banner","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","e7320874-2e1b-e2be-109d-6f2867f91a27"]},"value":"flex"}}]},{"actionItems":[{"id":"a-21-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_overlay","selectorGuids":["a09c26dc-405b-b01a-ff89-6b2ba9796801"]},"value":1,"unit":""}},{"id":"a-21-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"value":1,"unit":""}},{"id":"a-21-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615288223878},"a-22":{"id":"a-22","title":"Cookie Banner [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-22-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-22-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_overlay","selectorGuids":["a09c26dc-405b-b01a-ff89-6b2ba9796801"]},"value":0,"unit":""}},{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cookies_component.is-banner","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","e7320874-2e1b-e2be-109d-6f2867f91a27"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615288223878},"a-27":{"id":"a-27","title":"Preferences Popup [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":"none"}},{"id":"a-27-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":"flex"}}]},{"actionItems":[{"id":"a-27-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":250,"target":{"selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615393118761},"a-28":{"id":"a-28","title":"Preferences Popup [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-28-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_overlay","selectorGuids":["a09c26dc-405b-b01a-ff89-6b2ba9796801"]},"value":0,"unit":""}},{"id":"a-28-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-28-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".cookies_container","selectorGuids":["07e311de-7bfa-e1d9-aa17-3da9b8fb84cc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cookies_component.is-prefs","selectorGuids":["57178e0e-0345-d66f-3a81-be63cbd967ce","5c6ebf83-c75e-b30f-7c26-8104e7980c24"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615393118761}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GlobalCookies({}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <Block className={""} tag={"div"}>
      <Block
        className={"cookies_component is-banner"}
        fs-scrolldisable-element={"when-visible"}
        tag={"div"}
      >
        <Block className={"cookies_container"} tag={"div"}>
          <Block className={"padding-medium"} tag={"div"}>
            <Block className={"text-size-small"} tag={"div"}>
              {
                "We use cookies to make our site work and also for analytics and advertising purposes. You can enable or disable optional cookies as desired. See our "
              }
              <Link
                button={false}
                className={"text-style-link"}
                options={{
                  href: "#",
                }}
              >
                {"Privacy Policy"}
              </Link>
              {" for more details."}
            </Block>
            <Block className={"spacer-medium"} tag={"div"} />
            <Block className={"layout-column gap-small"} tag={"div"}>
              <DOM
                className={"button-delete sizing-grow"}
                data-cookies={"allow-all"}
                tag={"button"}
              >
                {"Accept"}
              </DOM>
              <DOM
                className={"button-delete is-secondary sizing-grow"}
                data-cookies={"open-preferences"}
                data-w-id={"7104af0f-b529-5472-e6b5-b73e9f648690"}
                tag={"button"}
              >
                {"Preferences"}
              </DOM>
            </Block>
          </Block>
        </Block>
        <Block className={"cookies_overlay"} tag={"div"} />
      </Block>
      <FormWrapper
        className={"cookies_component is-prefs"}
        data-cookies={"preferences"}
        fs-scrolldisable-element={"when-visible"}
      >
        <FormForm
          className={"cookies_container"}
          data-name={"Cookie Preferences"}
          id={"cookie-preferences"}
          method={"get"}
          name={"wf-form-Cookie-Preferences"}
        >
          <Block className={"padding-medium"} tag={"div"}>
            <Block className={"layout-row aa"} tag={"div"}>
              <Block className={"sizing-grow overflow-auto"} tag={"div"}>
                <Block className={"layout-column gap-xsmall"} tag={"div"}>
                  <Block tag={"div"}>
                    <Block className={"heading-style-h5"} tag={"div"}>
                      {"Manage Consent Preferences by Category"}
                    </Block>
                  </Block>
                </Block>
                <Block className={"spacer-medium"} tag={"div"} />
                <Block className={"cookies_prefs-item"} tag={"div"}>
                  <Block
                    className={"padding-vertical padding-medium"}
                    tag={"div"}
                  >
                    <Block
                      className={"layout-column is-justify-sb"}
                      tag={"div"}
                    >
                      <Block
                        className={"text-color-brand text-weight-semibold"}
                        tag={"div"}
                      >
                        {"Essential"}
                      </Block>
                      <Block className={"fs-cc-prefs_text"} tag={"div"}>
                        <Strong className={"text-size-small"}>
                          {"Always Active"}
                        </Strong>
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Block className={"text-size-small"} tag={"div"}>
                      {
                        "These items are required to enable basic website functionality."
                      }
                    </Block>
                  </Block>
                </Block>
                <Block className={"cookies_prefs-item"} tag={"div"}>
                  <Block
                    className={"padding-vertical padding-medium"}
                    tag={"div"}
                  >
                    <Block
                      className={"layout-column is-justify-sb"}
                      tag={"div"}
                    >
                      <Block
                        className={"text-color-brand text-weight-semibold"}
                        tag={"div"}
                      >
                        {"Marketing"}
                      </Block>
                      <Block className={"input_ratio_group"} tag={"div"}>
                        <DOM
                          className={"input-radio"}
                          id={"cookies_pref_marketing_on"}
                          name={"cookies_pref_marketing"}
                          tag={"input"}
                          type={"radio"}
                          value={"on"}
                        />
                        <DOM
                          className={"input_radio_label"}
                          htmlFor={"cookies_pref_marketing_on"}
                          tag={"label"}
                        >
                          {"On"}
                        </DOM>
                        <DOM
                          className={"input-radio"}
                          id={"cookies_pref_marketing_off"}
                          name={"cookies_pref_marketing"}
                          tag={"input"}
                          type={"radio"}
                          value={"off"}
                        />
                        <DOM
                          className={"input_radio_label"}
                          htmlFor={"cookies_pref_marketing_off"}
                          tag={"label"}
                        >
                          {"Off"}
                        </DOM>
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Block className={"text-size-small"} tag={"div"}>
                      {
                        "These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission."
                      }
                    </Block>
                  </Block>
                </Block>
                <Block className={"cookies_prefs-item"} tag={"div"}>
                  <Block
                    className={"padding-vertical padding-medium"}
                    tag={"div"}
                  >
                    <Block
                      className={"layout-column is-justify-sb"}
                      tag={"div"}
                    >
                      <Block
                        className={"text-color-brand text-weight-semibold"}
                        tag={"div"}
                      >
                        {"Analytics"}
                      </Block>
                      <Block className={"input_ratio_group"} tag={"div"}>
                        <DOM
                          className={"input-radio"}
                          id={"cookies_pref_analytics_on"}
                          name={"cookies_pref_analytics"}
                          tag={"input"}
                          type={"radio"}
                          value={"on"}
                        />
                        <DOM
                          className={"input_radio_label"}
                          htmlFor={"cookies_pref_analytics_on"}
                          tag={"label"}
                        >
                          {"On"}
                        </DOM>
                        <DOM
                          className={"input-radio"}
                          id={"cookies_pref_analytics_off"}
                          name={"cookies_pref_analytics"}
                          tag={"input"}
                          type={"radio"}
                          value={"off"}
                        />
                        <DOM
                          className={"input_radio_label"}
                          htmlFor={"cookies_pref_analytics_off"}
                          tag={"label"}
                        >
                          {"Off"}
                        </DOM>
                      </Block>
                    </Block>
                    <Block className={"spacer-small"} tag={"div"} />
                    <Block className={"text-size-small"} tag={"div"}>
                      {
                        "These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor."
                      }
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block tag={"div"}>
                <Block className={"spacer-medium"} tag={"div"} />
                <Block className={"layout-row"} tag={"div"}>
                  <DOM
                    className={"button-delete is-secondary"}
                    data-cookies={"submit"}
                    data-w-id={"48da2520-11a6-4024-935e-ccc8ffc3079a"}
                    tag={"button"}
                    type={"submit"}
                  >
                    {"Save and close"}
                  </DOM>
                  <Block className={"spacer-xsmall"} tag={"div"} />
                  <DOM
                    className={"button-delete"}
                    data-cookies={"allow-all"}
                    data-w-id={"27a114ce-c5fe-1576-98ab-af436b6f7ec8"}
                    tag={"button"}
                  >
                    {"Accept all and close"}
                  </DOM>
                </Block>
                <FormButton
                  className={"fs-cc-prefs_submit-hide"}
                  data-wait={"Please wait..."}
                  type={"submit"}
                  value={"Submit"}
                />
                <HtmlEmbed
                  content={
                    "<style>\n/* smooth scrolling on iOS devices */\n.fs-cc-prefs_content{-webkit-overflow-scrolling: touch}\n</style>"
                  }
                />
              </Block>
            </Block>
          </Block>
        </FormForm>
        <Block className={"cookies_overlay"} tag={"div"} />
        <FormSuccessMessage />
        <FormErrorMessage />
        <Block
          className={"cookes_prefs-trigger"}
          fs-cc={"interaction"}
          tag={"div"}
        />
      </FormWrapper>
    </Block>
  );
}

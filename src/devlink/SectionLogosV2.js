"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function SectionLogosV2({ variant = "Light Mode" }) {
  const _styleVariantMap = {
    "Light Mode": "",
    "Dark Mode": "w-variant-b6994dba-5d5f-a58b-1839-1cc2ab50e8d5",
    "Hide on Desktop": "w-variant-7585f55a-ed52-644b-db0e-8cede082112a",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Section className={`section_logos ${_activeStyleVariant}`} tag={"section"}>
      <HtmlEmbed
        className={`style ${_activeStyleVariant}`}
        content={
          "<style>\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n</style>"
        }
      />
      <Block
        className={`padding-section-large ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`padding-global-v2 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`layout-center-all ${_activeStyleVariant}`}
            tag={"div"}
          >
            <DOM
              className={`hero_heading-with-image ${_activeStyleVariant}`}
              tag={"h2"}
            >
              <DOM
                className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                tag={"span"}
              >
                <Block tag={"div"}>
                  {"Join "}
                  <Span
                    className={`text-color-brand text-weight-semibold ${_activeStyleVariant}`}
                  >
                    {"130,000+"}
                  </Span>
                </Block>
              </DOM>
              <Block
                className={`hero_persons-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Image
                  alt={""}
                  className={`hero-person_image ${_activeStyleVariant}`}
                  height={"156"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b4b4e5618d701e6b11ff_Parl-Sec_standing_formal_1-e1604301172833%201.webp"
                  }
                  width={"156"}
                />
                <Image
                  alt={""}
                  className={`hero-person_image is-next ${_activeStyleVariant}`}
                  height={"156"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b4b4e5618d701e6b121c_Zrzut%20ekranu%202024-07-16%20o%2013.23.53%201.webp"
                  }
                  width={"156"}
                />
                <Image
                  alt={""}
                  className={`hero-person_image is-next ${_activeStyleVariant}`}
                  height={"156"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b4b5e5618d701e6b1276_wiberg.webp"
                  }
                  width={"156"}
                />
                <Image
                  alt={""}
                  className={`hero-person_image is-next ${_activeStyleVariant}`}
                  height={"156"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/66c4b4b4e5618d701e6b1256_1550503402387%201.webp"
                  }
                  width={"156"}
                />
              </Block>
              <DOM
                className={`heading-style-h5-v2 ${_activeStyleVariant}`}
                tag={"span"}
              >
                <Block tag={"div"}>
                  {"relaxed employees from "}
                  <Span
                    className={`text-color-brand text-weight-semibold ${_activeStyleVariant}`}
                  >
                    {"106countries"}
                  </Span>
                </Block>
              </DOM>
            </DOM>
          </Block>
        </Block>
        <Block className={`spacer-large ${_activeStyleVariant}`} tag={"div"} />
        <Block
          className={`padding-global-v2 off-tablet ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`layout-center-all ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              animation-logos={"container"}
              className={`layout-column ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`animation-loop_container-first ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Jest brains - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa95_Frame%20634495.svg"
                    }
                    width={"40"}
                  />
                  <Image
                    alt={"Jet Brains logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e2b93e825cb8edaca_Frame%20634551.svg"
                    }
                    width={"40"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Brand 24 - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa70_Frame%20634496.svg"
                    }
                    width={"114"}
                  />
                  <Image
                    alt={"Brand 24 logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e7a982dcee8573263_Frame%20634550.svg"
                    }
                    width={"113"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Unicef - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa1a_Frame%20634497.svg"
                    }
                    width={"150"}
                  />
                  <Image
                    alt={"Unicef logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e1c6e167a7c4bc7f7_Frame%20634549.svg"
                    }
                    width={"149"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Virgin hotels - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa41_Virgin_Hotels_logo%201.svg"
                    }
                    width={"107"}
                  />
                  <Image
                    alt={"Virgin hotels logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095efd3caa5ba12c07f2_Virgin_Hotels_logo%201.svg"
                    }
                    width={"106"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Netguru - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa74_Frame%20634498.svg"
                    }
                    width={"112"}
                  />
                  <Image
                    alt={"Netguru logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095ec2748d6a4be7abcf_Frame%20634547.svg"
                    }
                    width={"111"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Sonar - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0faa9_Frame%20634499.svg"
                    }
                    width={"123"}
                  />
                  <Image
                    alt={"Sonar logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e10f9b77d970efc5e_Frame%20634548.svg"
                    }
                    width={"123"}
                  />
                </Block>
              </Block>
              <Block
                className={`animation-loop_container-second ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Jest brains - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa95_Frame%20634495.svg"
                    }
                    width={"40"}
                  />
                  <Image
                    alt={"Jet Brains logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e2b93e825cb8edaca_Frame%20634551.svg"
                    }
                    width={"40"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Brand 24 - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa70_Frame%20634496.svg"
                    }
                    width={"114"}
                  />
                  <Image
                    alt={"Brand 24 logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e7a982dcee8573263_Frame%20634550.svg"
                    }
                    width={"113"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Unicef - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa1a_Frame%20634497.svg"
                    }
                    width={"150"}
                  />
                  <Image
                    alt={"Unicef logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e1c6e167a7c4bc7f7_Frame%20634549.svg"
                    }
                    width={"150"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Virgin hotels - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa41_Virgin_Hotels_logo%201.svg"
                    }
                    width={"107"}
                  />
                  <Image
                    alt={"Virgin hotels logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095efd3caa5ba12c07f2_Virgin_Hotels_logo%201.svg"
                    }
                    width={"106"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Netguru - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0fa74_Frame%20634498.svg"
                    }
                    width={"112"}
                  />
                  <Image
                    alt={"Netguru logo white"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095ec2748d6a4be7abcf_Frame%20634547.svg"
                    }
                    width={"111"}
                  />
                </Block>
                <Block
                  className={`asset-container_client-logo ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    alt={"Sonar - calamari client logo"}
                    className={`image-height-fill logos_image_light ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f35f4d4bb044fe1a0faa9_Frame%20634499.svg"
                    }
                    width={"123"}
                  />
                  <Image
                    alt={"Sonar logo"}
                    className={`image-height-fill logos_image_dark ${_activeStyleVariant}`}
                    height={"54"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c095e10f9b77d970efc5e_Frame%20634548.svg"
                    }
                    width={"123"}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function SectionTestimonials({}) {
  return (
    <Section className={"section"} tag={"section"}>
      <Block className={"padding-section-large"} tag={"div"}>
        <Block className={"padding-global-v2"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block className={"slider-testimonials_component"} tag={"div"}>
              <Block className={"slider-testimonials_slides"} tag={"div"}>
                <Block className={"slider-testimonials_slide"} tag={"div"}>
                  <Block
                    className={"slider-testimonial_text-container"}
                    tag={"div"}
                  >
                    <Block className={"layout-row height-fill"} tag={"div"}>
                      <Heading className={"heading-style-h2-v2"} tag={"h2"}>
                        {"Growing Companies Attracted by"}
                        <Span className={"heading-style-italic"}>
                          {"Simplicity"}
                        </Span>
                      </Heading>
                      <Block className={"spacer-xlarge"} tag={"div"} />
                      <Block className={"max-width-large-v2"} tag={"div"}>
                        <DOM className={"text-size-large"} tag={"q"}>
                          {
                            "The tool is extremely convenient and helpful since our company's offices are spread around different locations. We can instantly know who is out of the office and who is present thanks to the Slack integration."
                          }
                        </DOM>
                      </Block>
                      <Block className={"spacer-xlarge"} tag={"div"} />
                      <Block
                        className={
                          "display-inlineflex gap-large layout-align-center margin-auto-top"
                        }
                        tag={"div"}
                      >
                        <Paragraph
                          className={"text-size-large text-weight-bold"}
                        >
                          {"Michał Sadowski"}
                        </Paragraph>
                        <Block
                          className={"slider-testimonial_logo"}
                          tag={"div"}
                        >
                          <Image
                            alt={"Brand 24 - calamari client logo"}
                            className={"image-height-fill"}
                            height={"Auto"}
                            loading={"lazy"}
                            src={
                              "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10eb1_brand24.svg"
                            }
                            width={"Auto"}
                          />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={"slider-testimonial_image-container_outer"}
                    tag={"div"}
                  >
                    <Block
                      className={"slider_testimonial_image-container_inner"}
                      tag={"div"}
                    >
                      <Image
                        alt={"Brand 24 CEO - Michał Sadowski "}
                        className={"image-cover"}
                        height={"1500"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/666c2db26b9bfd46a190c218_brand24.webp"
                        }
                        width={"1350"}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block className={"slider-testimonials_slide"} tag={"div"}>
                  <Block
                    className={"slider-testimonial_text-container"}
                    tag={"div"}
                  >
                    <Heading className={"heading-style-h2-v2"} tag={"h2"}>
                      {"Nothing but "}
                      <Span className={"heading-style-italic"}>
                        {"positive"}
                      </Span>
                      {" feedback"}
                    </Heading>
                    <Block className={"spacer-xlarge"} tag={"div"} />
                    <Block className={"max-width-large-v2"} tag={"div"}>
                      <DOM className={"text-size-large"} tag={"q"}>
                        {
                          "In the 2+ years our company has used Calamari, we have heard nothing but positive feedback from employees and managers."
                        }
                      </DOM>
                    </Block>
                    <Block className={"spacer-xlarge"} tag={"div"} />
                    <Block
                      className={
                        "display-inlineflex gap-large layout-align-center margin-auto-top"
                      }
                      tag={"div"}
                    >
                      <Paragraph className={"text-size-large text-weight-bold"}>
                        {"Parker Ramsdell"}
                      </Paragraph>
                      <Block className={"slider-testimonial_logo"} tag={"div"}>
                        <Image
                          alt={"Brightspot - Calamari client logo"}
                          className={"image-height-fill"}
                          height={"53"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10e9f_brightspot.svg"
                          }
                          width={"Auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={"slider-testimonial_image-container_outer"}
                    tag={"div"}
                  >
                    <Block
                      className={"slider_testimonial_image-container_inner"}
                      tag={"div"}
                    >
                      <Image
                        alt={
                          "Parker Ramsdell positive feedback Calamari HR software"
                        }
                        className={"image-cover"}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3600d4bb044fe1a10e5d_Frame%20634478.webp"
                        }
                        width={"auto"}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block className={"slider-testimonials_slide"} tag={"div"}>
                  <Block
                    className={"slider-testimonial_text-container"}
                    tag={"div"}
                  >
                    <Heading className={"heading-style-h2-v2"} tag={"h2"}>
                      <Span className={"heading-style-italic"}>
                        {"Crucial"}
                      </Span>
                      {" integrations"}
                    </Heading>
                    <Block className={"spacer-xlarge"} tag={"div"} />
                    <Block className={"max-width-large-v2"} tag={"div"}>
                      <DOM className={"text-size-large"} tag={"q"}>
                        {
                          "Integration with Slack and G Suite was crucial for us. Calamari turned out to be a great solution that allowed us to make the process more agreeable and helped both Employees and Team Leaders better plan their work!"
                        }
                      </DOM>
                    </Block>
                    <Block className={"spacer-xlarge"} tag={"div"} />
                    <Block
                      className={
                        "display-inlineflex gap-large layout-align-center margin-auto-top"
                      }
                      tag={"div"}
                    >
                      <Paragraph className={"text-size-large text-weight-bold"}>
                        {"Karolina Latos"}
                      </Paragraph>
                      <Block className={"slider-testimonial_logo"} tag={"div"}>
                        <Image
                          alt={"Freshmail - Calamari client logo"}
                          className={"image-height-fill"}
                          height={"53"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10ec7_freshmail.svg"
                          }
                          width={"Auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={"slider-testimonial_image-container_outer"}
                    tag={"div"}
                  >
                    <Block
                      className={"slider_testimonial_image-container_inner"}
                      tag={"div"}
                    >
                      <Image
                        alt={
                          "Karolina Latos crucial integrations with HR system Calamari"
                        }
                        className={"image-cover"}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/664f3601d4bb044fe1a10e86_Frame%20634522.webp"
                        }
                        width={"auto"}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block
                className={"slider-testimonials_navigation_container"}
                tag={"div"}
              >
                <Block
                  className={"slider-testimonials_navigation_step_container"}
                  // @ts-ignore - User-defined custom attribute(s)
                  role={"button"}
                  tag={"div"}
                >
                  <Block
                    className={"slider-testimonials_navigation_step_progress"}
                    tag={"div"}
                  />
                </Block>
                <Block
                  className={"slider-testimonials_navigation_step_container"}
                  tag={"div"}
                >
                  <Block
                    className={"slider-testimonials_navigation_step_progress"}
                    tag={"div"}
                  />
                </Block>
                <Block
                  className={"slider-testimonials_navigation_step_container"}
                  tag={"div"}
                >
                  <Block
                    className={"slider-testimonials_navigation_step_progress"}
                    tag={"div"}
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

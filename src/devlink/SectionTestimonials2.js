"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Icon from "./webflow_modules/Icon/components/Icon";
import Link from "./webflow_modules/Basic/components/Link";
import Section from "./webflow_modules/Layout/components/Section";
import SliderArrow from "./webflow_modules/Slider/components/SliderArrow";
import SliderMask from "./webflow_modules/Slider/components/SliderMask";
import SliderNav from "./webflow_modules/Slider/components/SliderNav";
import SliderSlide from "./webflow_modules/Slider/components/SliderSlide";
import SliderWrapper from "./webflow_modules/Slider/components/SliderWrapper";
import { HeaderSectionGroupCenter } from "./HeaderSectionGroupCenter";
import { TestimonialCard } from "./TestimonialCard";

export function SectionTestimonials2({ ctaVisibility = true }) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <HeaderSectionGroupCenter
              paragraf={"Check how our clients describe us"}
              title={"Simplicity that attracts fastcompanies"}
            />
            <Block className={"hide-tablet"} tag={"div"}>
              <Block className={"layout-column gap-large"} tag={"div"}>
                <Block className={"child-align-center sizing-grow"} tag={"div"}>
                  <TestimonialCard
                    avatar={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525d99d50e32485088e7_gian-cescon-00ByEXKcSkA-unsplash%201-1.webp"
                    }
                    body={
                      "„We can not imagine how we made it work before finding Calamari. It is a very flexible and efficient tool that saves us time. We can not say enough about how fast and supportive the Calamari team is!”"
                    }
                    fullName={"Erin A"}
                    jobTitle={"Personnel OPS & admin"}
                    logo={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65144e08599e7053fc82895c_platformsh.svg"
                    }
                  />
                </Block>
                <Block
                  className={"layout-row gap-large sizing-grow"}
                  tag={"div"}
                >
                  <TestimonialCard
                    avatar={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525ce1006c235b6ea672_image%2059.webp"
                    }
                    body={
                      "„The tool is extremely convenient and helpful since our company's offices are spread around different locat ions. We can instantly know who is out of the office and who is present thanks to the Slack integration.”"
                    }
                    fullName={"Michał S"}
                    jobTitle={"Founder & CEO"}
                    logo={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dbba09aab974ef605d_logo_brand24_black_small%201.svg"
                    }
                  />
                  <TestimonialCard
                    avatar={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525dddc71f8f04a9f4b9_image%2058.webp"
                    }
                    body={
                      "„Integration with Slack and GSuit was crucial for us. Calamari turned out to be a great solution that allowed us to make the process more agreeable and helped both Employees and Team Leaders better plan their work!”"
                    }
                    fullName={"Karolina G"}
                    jobTitle={"HR Manager"}
                    logo={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dcfd7e679b81144dc3_image%2057.svg"
                    }
                  />
                </Block>
                <Block className={"child-align-center sizing-grow"} tag={"div"}>
                  <TestimonialCard
                    avatar={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525d2174a0aa21df6d52_gian-cescon-00ByEXKcSkA-unsplash%201.webp"
                    }
                    body={
                      "„With Calamari we forgot about all the fuss with counting hours, different allowances for different teams and employees. Amazing functionalities with countless options of adjusting the settings to fit our needs."
                    }
                    fullName={"Grace K"}
                    jobTitle={"Operations manager"}
                    logo={
                      "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dc02bb2f83f40832a1_image%2061.svg"
                    }
                  />
                </Block>
              </Block>
            </Block>
            <Block className={"hide-desktop"} tag={"div"}>
              <Block className={"margin-global"} tag={"div"}>
                <SliderWrapper
                  animation={"slide"}
                  autoMax={0}
                  autoplay={false}
                  className={"slider_component"}
                  delay={4000}
                  disableSwipe={false}
                  duration={300}
                  easing={"ease-in-out-circ"}
                  fs-sliderdots-element={"slider-2"}
                  hideArrows={false}
                  iconArrows={true}
                  infinite={true}
                  navInvert={false}
                  navNumbers={false}
                  navRound={true}
                  navShadow={false}
                  navSpacing={3}
                >
                  <SliderMask className={"slider_mask overflow-visible"}>
                    <SliderSlide
                      className={"slider_slide padding-global"}
                      tag={"div"}
                    >
                      <TestimonialCard
                        avatar={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525dddc71f8f04a9f4b9_image%2058.webp"
                        }
                        body={
                          "„We can not imagine how we made it work before finding Calamari. It is a very flexible and efficient tool that saves us time. We can not say enough about how fast and supportive the Calamari team is!”"
                        }
                        fullName={"Erin A"}
                        jobTitle={"Personnel OPS & admin"}
                        logo={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/65144e08599e7053fc82895c_platformsh.svg"
                        }
                      />
                    </SliderSlide>
                    <SliderSlide
                      className={"slider_slide padding-global"}
                      tag={"div"}
                    >
                      <TestimonialCard
                        avatar={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525ce1006c235b6ea672_image%2059.webp"
                        }
                        body={
                          "„The tool is extremely convenient and helpful since our company's offices are spread around different locations. We can instantly know who is out of the office and who is present thanks to the Slack integration.”"
                        }
                        fullName={"Michał S"}
                        jobTitle={"Founder & CEO"}
                        logo={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dbba09aab974ef605d_logo_brand24_black_small%201.svg"
                        }
                      />
                    </SliderSlide>
                    <SliderSlide
                      className={"slider_slide padding-global"}
                      tag={"div"}
                    >
                      <TestimonialCard
                        avatar={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525d99d50e32485088e7_gian-cescon-00ByEXKcSkA-unsplash%201-1.webp"
                        }
                        body={
                          "„Integration with Slack and GSuit was crucial for us. Calamari turned out to be a great solution that allowed us to make the process more agreeable and helped both Employees and Team Leaders better plan their work!”"
                        }
                        fullName={"Karolina G"}
                        jobTitle={"HR Manager"}
                        logo={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dcfd7e679b81144dc3_image%2057.svg"
                        }
                      />
                    </SliderSlide>
                    <SliderSlide
                      className={"slider_slide padding-global"}
                      tag={"div"}
                    >
                      <TestimonialCard
                        avatar={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6514525d2174a0aa21df6d52_gian-cescon-00ByEXKcSkA-unsplash%201.webp"
                        }
                        body={
                          "„With Calamari we forgot about all the fuss with counting hours, different allowances for different teams and employees. Amazing functionalities with countless options of adjusting the settings to fit our needs."
                        }
                        fullName={"Grace K"}
                        jobTitle={"Operations manager"}
                        logo={
                          "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/651450dc02bb2f83f40832a1_image%2061.svg"
                        }
                      />
                    </SliderSlide>
                  </SliderMask>
                  <Block className={"spacer-xxlarge"} tag={"div"} />
                  <Block className={"slider_nav gap-medium"} tag={"div"}>
                    <DOM
                      aria-label={"previous slide"}
                      className={"slider-test_button"}
                      fs-mirrorclick-element={"trigger-3"}
                      tag={"button"}
                    >
                      <HtmlEmbed
                        className={"icon-height-small"}
                        content={
                          '<svg width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M36 9L37 9L37 7L36 7L36 9ZM0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538405 7.04738 0.538405 6.65686 0.92893L0.292893 7.29289ZM36 7L1 7L1 9L36 9L36 7Z" fill="#21537C"/>\n</svg>'
                        }
                      />
                    </DOM>
                    <DOM
                      aria-label={"next slide"}
                      className={"slider-test_button"}
                      fs-mirrorclick-element={"trigger-4"}
                      tag={"button"}
                    >
                      <HtmlEmbed
                        className={"icon-height-small"}
                        content={
                          '<svg width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 7H0L0 9H1L1 7ZM36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM1 9L36 9V7L1 7L1 9Z" fill="#21537C"/>\n</svg>'
                        }
                      />
                    </DOM>
                  </Block>
                  <SliderArrow
                    className={"hide"}
                    dir={"left"}
                    fs-mirrorclick-element={"target-3"}
                  >
                    <Icon
                      widget={{
                        type: "icon",
                        icon: "slider-left",
                      }}
                    />
                  </SliderArrow>
                  <SliderArrow
                    className={"hide"}
                    dir={"right"}
                    fs-mirrorclick-element={"target-4"}
                  >
                    <Icon
                      widget={{
                        type: "icon",
                        icon: "slider-right",
                      }}
                    />
                  </SliderArrow>
                  <SliderNav
                    className={"hide"}
                    fs-sliderdots-element={"slider-nav-2"}
                  />
                </SliderWrapper>
              </Block>
            </Block>
            {ctaVisibility ? (
              <Block tag={"div"}>
                <Block className={"spacer-xxlarge"} tag={"div"} />
                <Block
                  className={"layout-column is-justify-center"}
                  tag={"div"}
                >
                  <Link
                    button={true}
                    className={"button-delete is-secondary"}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Read more testimonials"}
                  </Link>
                </Block>
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

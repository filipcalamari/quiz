"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Span from "./webflow_modules/Basic/components/Span";

export function GlobalTestimonial({
  avatar = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6512e1d777b4a6f925c267c2_Micha%C5%82.svg",
  fullName = "Parker Ramsdell",
  jobPosition = "VP, People, Mission & Culture at Brightspot",
  quote = "Quote",
}) {
  return (
    <Block className={"layout-column-desktop gap-xxlarge"} tag={"div"}>
      <Block className={"width-50--desktop"} tag={"div"}>
        <HtmlEmbed
          content={
            '<svg width="98" height="14" viewBox="0 0 98 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_101_10880)">\n<path d="M7.65518 0.425658L9.25251 3.81135C9.35798 4.0373 9.56381 4.19208 9.80196 4.22944L13.3743 4.77208C13.973 4.86282 14.2112 5.63318 13.7791 6.07441L11.1935 8.7093C11.0216 8.88544 10.9434 9.13807 10.9842 9.38537L11.5949 13.1055C11.697 13.73 11.071 14.205 10.5351 13.9097L7.34048 12.1537C7.12784 12.0363 6.87438 12.0363 6.66174 12.1537L3.46709 13.9097C2.93124 14.2033 2.30524 13.7282 2.40731 13.1055L3.018 9.38537C3.05883 9.13807 2.98058 8.88544 2.80876 8.7093L0.221401 6.07441C-0.212378 5.63318 0.0274767 4.86282 0.626262 4.77208L4.19856 4.22944C4.43671 4.19386 4.64254 4.0373 4.74801 3.81135L6.34534 0.425658C6.61241 -0.141886 7.38641 -0.141886 7.65518 0.425658Z" fill="#F7B91E"/>\n</g>\n<g clip-path="url(#clip1_101_10880)">\n<path d="M28.202 0.425658L29.9134 3.81135C30.0264 4.0373 30.2469 4.19208 30.5021 4.22944L34.3296 4.77208C34.9711 4.86282 35.2263 5.63318 34.7633 6.07441L31.993 8.7093C31.8089 8.88544 31.7251 9.13807 31.7688 9.38537L32.4231 13.1055C32.5325 13.73 31.8618 14.205 31.2876 13.9097L27.8648 12.1537C27.637 12.0363 27.3654 12.0363 27.1376 12.1537L23.7147 13.9097C23.1406 14.2033 22.4699 13.7282 22.5793 13.1055L23.2336 9.38537C23.2773 9.13807 23.1935 8.88544 23.0094 8.7093L20.2372 6.07441C19.7725 5.63318 20.0294 4.86282 20.671 4.77208L24.4985 4.22944C24.7536 4.19386 24.9742 4.0373 25.0872 3.81135L26.7986 0.425658C27.0847 -0.141886 27.914 -0.141886 28.202 0.425658Z" fill="#F7B91E"/>\n</g>\n<g clip-path="url(#clip2_101_10880)">\n<path d="M48.6552 0.425658L50.2525 3.81135C50.358 4.0373 50.5638 4.19208 50.802 4.22944L54.3743 4.77208C54.973 4.86282 55.2112 5.63318 54.7791 6.07441L52.1935 8.7093C52.0216 8.88544 51.9434 9.13807 51.9842 9.38537L52.5949 13.1055C52.697 13.73 52.071 14.205 51.5351 13.9097L48.3405 12.1537C48.1278 12.0363 47.8744 12.0363 47.6617 12.1537L44.4671 13.9097C43.9312 14.2033 43.3052 13.7282 43.4073 13.1055L44.018 9.38537C44.0588 9.13807 43.9806 8.88544 43.8088 8.7093L41.2214 6.07441C40.7876 5.63318 41.0275 4.86282 41.6263 4.77208L45.1986 4.22944C45.4367 4.19386 45.6425 4.0373 45.748 3.81135L47.3453 0.425658C47.6124 -0.141886 48.3864 -0.141886 48.6552 0.425658Z" fill="#F7B91E"/>\n</g>\n<g clip-path="url(#clip3_101_10880)">\n<path d="M69.202 0.425658L70.9134 3.81135C71.0264 4.0373 71.2469 4.19208 71.5021 4.22944L75.3296 4.77208C75.9711 4.86282 76.2263 5.63318 75.7633 6.07441L72.993 8.7093C72.8089 8.88544 72.7251 9.13807 72.7688 9.38537L73.4231 13.1055C73.5325 13.73 72.8618 14.205 72.2876 13.9097L68.8648 12.1537C68.637 12.0363 68.3654 12.0363 68.1376 12.1537L64.7147 13.9097C64.1406 14.2033 63.4699 13.7282 63.5793 13.1055L64.2336 9.38537C64.2773 9.13807 64.1935 8.88544 64.0094 8.7093L61.2372 6.07441C60.7725 5.63318 61.0294 4.86282 61.671 4.77208L65.4985 4.22944C65.7536 4.19386 65.9742 4.0373 66.0872 3.81135L67.7986 0.425658C68.0847 -0.141886 68.914 -0.141886 69.202 0.425658Z" fill="#F7B91E"/>\n</g>\n<g clip-path="url(#clip4_101_10880)">\n<path d="M91.6552 0.425658L93.2525 3.81135C93.358 4.0373 93.5638 4.19208 93.802 4.22944L97.3743 4.77208C97.973 4.86282 98.2112 5.63318 97.7791 6.07441L95.1935 8.7093C95.0216 8.88544 94.9434 9.13807 94.9842 9.38537L95.5949 13.1055C95.697 13.73 95.071 14.205 94.5351 13.9097L91.3405 12.1537C91.1278 12.0363 90.8744 12.0363 90.6617 12.1537L87.4671 13.9097C86.9312 14.2033 86.3052 13.7282 86.4073 13.1055L87.018 9.38537C87.0588 9.13807 86.9806 8.88544 86.8088 8.7093L84.2214 6.07441C83.7876 5.63318 84.0275 4.86282 84.6263 4.77208L88.1986 4.22944C88.4367 4.19386 88.6425 4.0373 88.748 3.81135L90.3453 0.425658C90.6124 -0.141886 91.3864 -0.141886 91.6552 0.425658Z" fill="#F7B91E"/>\n</g>\n<defs>\n<clipPath id="clip0_101_10880">\n<rect width="14" height="14" fill="white"/>\n</clipPath>\n<clipPath id="clip1_101_10880">\n<rect width="15" height="14" fill="white" transform="translate(20)"/>\n</clipPath>\n<clipPath id="clip2_101_10880">\n<rect width="14" height="14" fill="white" transform="translate(41)"/>\n</clipPath>\n<clipPath id="clip3_101_10880">\n<rect width="15" height="14" fill="white" transform="translate(61)"/>\n</clipPath>\n<clipPath id="clip4_101_10880">\n<rect width="14" height="14" fill="white" transform="translate(84)"/>\n</clipPath>\n</defs>\n</svg>'
          }
        />
        <Block className={"spacer-small"} tag={"div"} />
        <Block className={"layout-column gap-small"} tag={"div"}>
          <Block className={"avatar"} tag={"div"}>
            <Image
              alt={""}
              className={"image-cover"}
              height={"48"}
              loading={"eager"}
              src={avatar}
              width={"48"}
            />
          </Block>
          <Block tag={"div"}>
            <Paragraph className={"text-size-medium text-weight-semibold"}>
              {fullName}
            </Paragraph>
            <Paragraph className={"text-size-small"}>{jobPosition}</Paragraph>
          </Block>
        </Block>
        <Block className={"spacer-small"} tag={"div"} />
        <Block className={"max-width-medium"} tag={"div"}>
          <DOM className={"text-size-regular text-style-italic"} tag={"q"}>
            {quote}
          </DOM>
        </Block>
      </Block>
      <Block className={"width-50--desktop"} tag={"div"}>
        <Block
          className={
            "height-fill-desktop layout-row gap-medium layout-justify-sb-desktop"
          }
          tag={"div"}
        >
          <Block className={"heading-style-h4"} tag={"div"}>
            {"Join "}
            <Span className={"text-color-brand"}>{"125K+"}</Span>
            {" relaxed employees from fast growing companies in"}
            <Span className={"text-color-brand"}>{"106"}</Span>
            {"countries."}
          </Block>
          <Block tag={"div"}>
            <Block
              className={"layout-column gap-xlarge layout-justify-sb-desktop"}
              tag={"div"}
            >
              <Block className={"home-hero-logo_container"} tag={"div"}>
                <Image
                  alt={"Brand24"}
                  className={"image-height-fill"}
                  height={"40"}
                  loading={"eager"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655b443c558d5a885076532a_logo-brand24-light.svg"
                  }
                  width={"84"}
                />
              </Block>
              <Block className={"home-hero-logo_container"} tag={"div"}>
                <Image
                  alt={"People Can Fly"}
                  className={"image-height-fill"}
                  height={"40"}
                  loading={"eager"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655e069179d28728ccf13cae_logo-pcf-light.svg"
                  }
                  width={"40"}
                />
              </Block>
              <Block className={"home-hero-logo_container"} tag={"div"}>
                <Image
                  alt={"Netguru"}
                  className={"image-height-fill"}
                  height={"40"}
                  loading={"eager"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655b443c16e2bf4033270c23_logo-netguru-light.svg"
                  }
                  width={"83"}
                />
              </Block>
              <Block className={"home-hero-logo_container"} tag={"div"}>
                <Image
                  alt={"Growbots"}
                  className={"image-height-fill"}
                  height={"40"}
                  loading={"eager"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/655b443c9505467496338b9c_logo-growbots-light.svg"
                  }
                  width={"87"}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

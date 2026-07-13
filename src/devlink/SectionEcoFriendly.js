"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Strong from "./webflow_modules/Basic/components/Strong";

export function SectionEcoFriendly({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <Block
              className={
                "content-box_default background-color-white shadow-style-light position-relative"
              }
              tag={"div"}
            >
              <Block className={"padding-global z-index-2"} tag={"div"}>
                <Block
                  className={"padding-vertical padding-xxlarge"}
                  tag={"div"}
                >
                  <Block
                    className={"max-width-large align-center text-align-center"}
                    tag={"div"}
                  >
                    <HtmlEmbed
                      className={"icon-height-xxlarge"}
                      content={
                        '<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.1772 5.81888L31.1846 12.3165L28.9037 11.8017C27.8991 11.5729 26.9056 12.225 26.6861 13.2545C26.4665 14.2841 27.0991 15.3022 28.1037 15.5272L34.7456 17.0296C34.7828 17.0372 34.8237 17.041 34.8609 17.0486C34.8832 17.0486 34.9056 17.0562 34.9316 17.0601C35.006 17.0677 35.0767 17.0753 35.1474 17.0753C35.1511 17.0753 35.1549 17.0753 35.1586 17.0753C35.2479 17.0753 35.3372 17.0677 35.4302 17.0524C35.46 17.0486 35.4897 17.041 35.5232 17.0334C35.5865 17.0219 35.646 17.0067 35.7093 16.9876C35.7428 16.9762 35.7763 16.9647 35.8097 16.9495C35.8656 16.9266 35.9177 16.9037 35.9697 16.877C36.0032 16.858 36.0404 16.8389 36.0739 16.8198C36.0963 16.8046 36.1223 16.797 36.1446 16.7817C36.1632 16.7703 36.1744 16.755 36.193 16.7436C36.26 16.6978 36.3195 16.6482 36.379 16.5949C36.4088 16.5682 36.4386 16.5453 36.4646 16.5186C36.5316 16.45 36.5949 16.3737 36.6507 16.2936C36.6618 16.2784 36.673 16.2669 36.6804 16.2555C36.7437 16.164 36.7958 16.0648 36.8442 15.9581C36.859 15.9199 36.8702 15.8818 36.8851 15.8475C36.9074 15.7903 36.9297 15.7369 36.9446 15.6797L38.6897 9.18589C38.9614 8.17159 38.3809 7.12298 37.3911 6.8408C36.4014 6.56244 35.3744 7.15729 35.1028 8.17159L34.4739 10.5052L30.3139 3.76358C28.8032 1.40324 26.2656 0 23.5195 0C20.7735 0 18.2395 1.40324 16.7326 3.75596L10.8901 13.3194C10.3283 14.2002 10.5664 15.3823 11.4259 15.9581C12.2855 16.5338 13.439 16.2898 14.0008 15.409L19.847 5.84557C20.673 4.55291 22.0126 3.81316 23.5195 3.81316C25.0265 3.81316 26.3661 4.55291 27.1772 5.81888Z" fill="#27A082"/>\n<path d="M46.6692 29.9447L40.825 20.7397C40.2631 19.8589 39.1059 19.6148 38.2501 20.1906C37.3906 20.7664 37.1524 21.9485 37.7143 22.8293L43.5585 32.0343C44.4589 33.4375 44.5147 35.1878 43.711 36.7092C42.885 38.2803 41.3557 39.2145 39.6217 39.2145H31.7668L33.4822 37.5253C34.2226 36.7969 34.245 35.5882 33.5343 34.8293C32.8236 34.0705 31.644 34.0438 30.9036 34.776L25.8543 39.7445C25.8543 39.7445 25.8468 39.756 25.8431 39.7598C25.7836 39.8208 25.7315 39.8894 25.6794 39.9581C25.6571 39.9886 25.6273 40.0153 25.6087 40.0458C25.5417 40.1449 25.4859 40.2517 25.4375 40.3622C25.4375 40.3661 25.4338 40.3699 25.4301 40.3737C25.3333 40.6025 25.2812 40.8541 25.2812 41.1211C25.2812 41.388 25.3333 41.6397 25.4301 41.8684C25.4301 41.8723 25.4338 41.8761 25.4375 41.8799C25.4859 41.9905 25.5417 42.0972 25.6087 42.1964C25.631 42.2269 25.6571 42.2536 25.6794 42.2841C25.7315 42.3527 25.7836 42.4214 25.8431 42.4824C25.8468 42.4862 25.8506 42.4938 25.8543 42.4976L30.9036 47.4662C31.2645 47.8208 31.7296 47.9962 32.191 47.9962C32.6785 47.9962 33.1659 47.8017 33.5343 47.409C34.245 46.6501 34.2226 45.4414 33.4822 44.7131L31.7668 43.0238H39.6217C42.7436 43.0238 45.4971 41.3384 46.9854 38.5167C48.4478 35.7407 48.3324 32.5338 46.6729 29.9371L46.6692 29.9447Z" fill="#27A082"/>\n<path d="M19.428 39.2184H8.2026C6.56539 39.2184 5.10679 38.307 4.30306 36.7856C3.47702 35.2145 3.54772 33.3919 4.49283 31.92L8.824 25.2622L9.24818 27.573C9.41562 28.4881 10.197 29.1288 11.0752 29.1288C11.1905 29.1288 11.3059 29.1173 11.4212 29.0944C12.4296 28.9 13.0956 27.9047 12.9059 26.8675L11.6407 19.9543C11.6407 19.9543 11.6407 19.9467 11.6407 19.9429C11.6221 19.8513 11.5924 19.7598 11.5626 19.6721C11.5514 19.6454 11.5477 19.6149 11.5366 19.5882C11.4398 19.348 11.2947 19.1268 11.1049 18.94C11.0268 18.8599 10.9412 18.7875 10.8482 18.7226C10.8035 18.6921 10.7552 18.6731 10.7105 18.6464C10.6473 18.6121 10.5877 18.5701 10.5207 18.5434C10.4203 18.5015 10.3161 18.471 10.2082 18.4481C10.1933 18.4481 10.1821 18.4405 10.1673 18.4367C10.0445 18.4138 9.92539 18.4023 9.8026 18.4023C9.68353 18.4023 9.56074 18.4176 9.44539 18.4405C9.44539 18.4405 9.44167 18.4405 9.43795 18.4405L2.59144 19.9047C1.58679 20.1183 0.939343 21.1288 1.15144 22.1621C1.35981 23.1917 2.34585 23.8552 3.35423 23.6378L5.75051 23.1268L1.38958 29.8151C-0.322052 32.492 -0.456005 35.7751 1.03237 38.5968C2.49469 41.3728 5.17748 43.0315 8.20632 43.0315H19.428C20.455 43.0315 21.2885 42.1774 21.2885 41.1249C21.2885 40.0725 20.455 39.2184 19.428 39.2184Z" fill="#27A082"/>\n</svg>'
                      }
                    />
                    <Block className={"spacer-large"} tag={"div"} />
                    <Heading className={"heading-style-h2"} tag={"h2"}>
                      {"Work efficiency and"}
                      <br />
                      {"eco-friendly solution"}
                    </Heading>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Paragraph className={"text-size-medium"}>
                      {
                        "By choosing Calamari, you not only optimize your work, but you can also take care of the environment. Give up on printable timesheets to "
                      }
                      <Strong>{"help the Earth"}</Strong>
                      {
                        "! Thanks to eliminating paper timesheets, your employee attendance tracking will be simple, transparent, and modern."
                      }
                    </Paragraph>
                    <Block className={"spacer-huge"} tag={"div"} />
                  </Block>
                </Block>
              </Block>
              <Block className={"content-box_bg-shape-2"} tag={"div"}>
                <Image
                  alt={""}
                  className={"image-cover is-content-box-bg-shape-2"}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6567482279468dbc69ca262f_background-shape-2.svg"
                  }
                  width={"auto"}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

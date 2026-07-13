"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import { HeaderSectionGroupCenter } from "./HeaderSectionGroupCenter";

export function SectionHowToStart2({}) {
  return (
    <Section className={"section_logos"} tag={"section"}>
      <Block className={"padding-section-small"} tag={"div"}>
        <Block className={"padding-global"} tag={"div"}>
          <Block className={"container-large"} tag={"div"}>
            <HeaderSectionGroupCenter
              paragraf={
                "Do you feel frustrated with current HR processes? We were too, which is why we know exactly what you need in order to avoid repetitive work and focus on growing yourbusiness."
              }
              title={"How to start"}
            />
            <Block
              className={"content-box_default is-grey is-tablet-clean"}
              tag={"div"}
            >
              <Block
                className={"layout-column-desktop gap-medium-rows"}
                tag={"div"}
              >
                <Block
                  className={
                    "radius-medium sizing-grow-desktop background-color-light"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"padding-xlarge position-relative"}
                    tag={"div"}
                  >
                    <Block
                      className={
                        "layout-column is-justify-sb is-align-center gap-huge"
                      }
                      tag={"div"}
                    >
                      <Block className={"counter_component"} tag={"div"}>
                        <Block
                          className={"text-size-small text-weight-bold"}
                          tag={"div"}
                        >
                          {"1"}
                        </Block>
                      </Block>
                      <Block
                        className={"sizing-grow-desktop hide-tablet"}
                        tag={"div"}
                      >
                        <Block
                          className={
                            "layout-column sizing-grow is-align-center"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"arrow-howtostartcard"}
                            tag={"div"}
                          />
                          <HtmlEmbed
                            className={"icon-1x1-small"}
                            content={
                              '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8369 2.31819L19.6848 9.23182C20.1051 9.65607 20.1051 10.3439 19.6848 10.7682L12.8369 17.6818C12.4167 18.1061 11.7354 18.1061 11.3152 17.6818C10.8949 17.2576 10.8949 16.5697 11.3152 16.1454L17.4022 10L11.3152 3.85455C10.8949 3.4303 10.8949 2.74245 11.3152 2.31819C11.7354 1.89394 12.4167 1.89394 12.8369 2.31819Z" fill="#21537C"/>\n</svg>'
                            }
                          />
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Block
                      className={"layout-column is-align-center gap-small"}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"icon-large"}
                        content={
                          '<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M38.8571 8.18828H9.14286C5.98695 8.18828 3.42857 10.7166 3.42857 13.8353V27.0354H44.5714V13.8353C44.5714 10.7166 42.0131 8.18828 38.8571 8.18828ZM44.2378 30.4236H3.76221C4.55335 32.6046 6.66374 34.1648 9.14286 34.1648H38.8571C41.3363 34.1648 43.4466 32.6046 44.2378 30.4236ZM0.00688072 28.8715C0.194918 33.6976 4.21329 37.553 9.14286 37.553H22.2857V39.7722C22.2857 39.7854 22.2859 39.7986 22.2862 39.8118H18.8571C17.9103 39.8118 17.1428 40.5703 17.1428 41.5059C17.1428 42.4416 17.9103 43.2 18.8571 43.2H29.1428C30.0896 43.2 30.8571 42.4416 30.8571 41.5059C30.8571 40.5703 30.0896 39.8118 29.1428 39.8118H25.7138C25.7142 39.7986 25.7143 39.7854 25.7143 39.7722V37.553H38.8571C43.9066 37.553 48 33.5078 48 28.5177V13.8353C48 8.84529 43.9066 4.80005 38.8571 4.80005H9.14286C4.0934 4.80005 0 8.84529 0 13.8353V28.5177C0 28.5735 0.000511765 28.6292 0.00153091 28.6847C0.00114042 28.6996 0.000943973 28.7145 0.000943973 28.7295C0.000943973 28.7773 0.00294907 28.8247 0.00688072 28.8715ZM22 20.4909L26.5694 17.7305L22 14.97V20.4909ZM28.3576 20.6213C30.5447 19.3001 30.5447 16.1609 28.3576 14.8396L23.7883 12.0792C21.5037 10.699 18.5715 12.3238 18.5715 14.97V20.4909C18.5715 23.1371 21.5037 24.762 23.7883 23.3818L28.3576 20.6213Z" fill="#21537C"/>\n</svg>'
                        }
                      />
                      <Heading className={"heading-style-h4"} tag={"h3"}>
                        {"Trial & demo"}
                      </Heading>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Paragraph className={"text-size-medium"}>
                      {
                        "Try our time off system for free for 14 days, and book a demo with us, so we can answer all your questions and setup the systemtogether"
                      }
                    </Paragraph>
                  </Block>
                </Block>
                <Block
                  className={
                    "radius-medium sizing-grow-desktop background-color-brand is-howtostartcard-bgcolorswaptablet"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"padding-xlarge position-relative"}
                    tag={"div"}
                  >
                    <Block
                      className={
                        "layout-column is-justify-sb is-align-center gap-huge"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"counter_component is-onmiddledcard"}
                        tag={"div"}
                      >
                        <Block
                          className={"text-size-small text-weight-bold"}
                          tag={"div"}
                        >
                          {"2"}
                        </Block>
                      </Block>
                      <Block
                        className={
                          "layout-column sizing-grow is-align-center hide-tablet"
                        }
                        tag={"div"}
                      >
                        <Block
                          className={"arrow-howtostartcard is-onmiddlecard"}
                          tag={"div"}
                        />
                        <HtmlEmbed
                          className={"icon-1x1-small"}
                          content={
                            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8369 2.31819L19.6848 9.23182C20.1051 9.65607 20.1051 10.3439 19.6848 10.7682L12.8369 17.6818C12.4167 18.1061 11.7354 18.1061 11.3152 17.6818C10.8949 17.2576 10.8949 16.5697 11.3152 16.1454L17.4022 10L11.3152 3.85455C10.8949 3.4303 10.8949 2.74245 11.3152 2.31819C11.7354 1.89394 12.4167 1.89394 12.8369 2.31819Z" fill="#21537C"/>\n</svg>'
                          }
                        />
                      </Block>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Block
                      className={"layout-column is-align-center gap-small"}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"icon-large"}
                        content={
                          '<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M43.5595 10.8241C43.27 11.4807 43.0394 12.1716 42.6788 12.7842C42.2568 13.4996 41.7392 14.166 41.224 14.8201C40.9811 15.1288 41.0007 15.364 41.1577 15.6972C41.4767 16.3759 41.7711 17.0717 42.0164 17.7822C42.144 18.1521 42.3451 18.2795 42.7082 18.3334C43.6331 18.4706 44.558 18.6225 45.4755 18.8136C46.8346 19.0954 47.7938 19.9357 47.8993 21.2979C48.0416 23.1134 48.0342 24.9607 47.8699 26.7761C47.7448 28.1432 46.7267 28.9346 45.3896 29.2139C44.4746 29.405 43.5374 29.5054 42.6223 29.7014C42.4016 29.748 42.1415 29.966 42.0409 30.1743C41.6901 30.9044 41.381 31.659 41.0989 32.4209C41.0302 32.6047 41.0547 32.8962 41.1627 33.0555C41.6656 33.8199 42.2176 34.5549 42.7426 35.3046C43.719 36.7011 43.5889 38.323 42.3966 39.5357C41.4546 40.4961 40.5027 41.4467 39.541 42.3875C38.312 43.5929 36.7296 43.713 35.3141 42.7183C34.5806 42.2038 33.8642 41.6599 33.116 41.1699C32.9418 41.0547 32.6278 41.0229 32.429 41.0964C31.6636 41.3732 30.9105 41.6844 30.177 42.0298C29.9831 42.1205 29.7795 42.3606 29.7354 42.5664C29.5465 43.441 29.414 44.3255 29.2619 45.2075C28.9749 46.8906 27.7678 47.9441 26.0481 47.9735C24.8853 47.9956 23.72 47.9245 22.5596 47.9907C20.4547 48.1083 18.887 47.1209 18.6344 44.5288C18.6221 44.4063 18.6147 44.2838 18.5927 44.1662C18.47 43.5072 18.5387 42.6913 18.1658 42.2332C17.7953 41.7799 16.9293 41.7677 16.37 41.4149C15.607 40.9347 15.033 41.0523 14.3951 41.6158C13.8947 42.0592 13.3132 42.412 12.7588 42.7967C11.3433 43.7767 9.76337 43.6444 8.53183 42.4365C7.5726 41.4933 6.61829 40.5451 5.67378 39.5847C4.50112 38.394 4.36864 36.7819 5.32787 35.4099C5.85287 34.6578 6.40976 33.9301 6.91758 33.1657C7.02307 33.0065 7.04515 32.71 6.97401 32.5263C6.67962 31.7472 6.35333 30.9803 5.99761 30.2282C5.9142 30.0518 5.69095 29.8656 5.50205 29.8264C4.56491 29.6328 3.61795 29.4932 2.67589 29.3241C1.12298 29.0448 0.0386389 27.7855 0.0141063 26.2028C-0.00551984 24.8186 -0.00306658 23.4319 0.011653 22.0452C0.0288258 20.3816 1.15733 19.1027 2.80592 18.843C3.63021 18.7132 4.45451 18.5735 5.2788 18.4486C5.6517 18.3922 5.87249 18.233 5.99761 17.8385C6.21104 17.1623 6.47354 16.4935 6.79492 15.8638C7.0059 15.4498 6.94947 15.1754 6.68207 14.8299C6.15952 14.1537 5.67378 13.4481 5.18803 12.745C4.20182 11.3141 4.33185 9.75595 5.54376 8.52359C6.48826 7.56564 7.44258 6.61504 8.40426 5.67669C9.62353 4.48599 11.2378 4.36349 12.6312 5.34349C13.3157 5.82369 14.0001 6.30634 14.6601 6.81594C14.9864 7.06829 15.2489 7.12709 15.6463 6.91884C16.2743 6.59054 16.9392 6.31369 17.6138 6.09564C18.0677 5.95109 18.1977 5.67669 18.2566 5.26509C18.3719 4.43944 18.5043 3.61624 18.6515 2.79549C18.9214 1.29364 19.8168 0.230335 21.3256 0.100485C23.0821 -0.048965 24.873 -0.026915 26.6271 0.134785C28.0156 0.262185 28.9209 1.36959 29.1539 2.74894C29.2987 3.61134 29.468 4.46884 29.5833 5.33614C29.6299 5.69384 29.7844 5.85554 30.1107 5.97559C30.8737 6.25734 31.6342 6.55134 32.3653 6.90169C32.6964 7.05849 32.9099 7.02664 33.1847 6.82084C33.8863 6.29654 34.6026 5.79184 35.3214 5.28959C36.7296 4.30224 38.3291 4.42229 39.5484 5.61789C40.5248 6.57339 41.484 7.54604 42.4482 8.51379C43.0664 9.13365 43.3853 9.88335 43.3878 10.7653C43.4515 10.78 43.5055 10.8021 43.5595 10.8241ZM44.8057 26.0926C44.8057 24.6765 44.8057 23.2996 44.8057 21.8933C43.5251 21.6777 42.2666 21.4449 41.0007 21.2636C40.0857 21.1313 39.595 20.6462 39.3006 19.7667C38.8885 18.5392 38.388 17.3338 37.8115 16.1725C37.4092 15.3616 37.392 14.6976 37.9391 13.9675C38.7192 12.9287 39.4478 11.8531 40.1764 10.8241C39.1632 9.81475 38.1893 8.8421 37.1859 7.84249C36.1212 8.60689 35.032 9.38845 33.9427 10.1749C33.3368 10.611 32.7332 10.611 32.0488 10.3072C30.6946 9.7094 29.3208 9.15325 27.9371 8.6265C27.3091 8.38639 26.8896 8.01154 26.7399 7.36229C26.6663 7.04624 26.6295 6.72284 26.5756 6.40189C26.394 5.32634 26.21 4.25324 26.0309 3.19729C24.5909 3.19729 23.2293 3.19729 21.8432 3.19729C21.6224 4.48599 21.3697 5.74039 21.2029 7.00459C21.0729 7.98704 20.5405 8.47214 19.6255 8.78329C18.4381 9.18755 17.2654 9.67265 16.1492 10.2459C15.293 10.6869 14.5963 10.6747 13.8333 10.0965C12.8177 9.3272 11.7579 8.61425 10.7447 7.89394C9.72166 8.9058 8.75262 9.86375 7.75414 10.8511C8.5073 11.907 9.24082 12.985 10.0234 14.0239C10.5828 14.7638 10.5975 15.4449 10.1804 16.2828C9.61126 17.422 9.11816 18.6127 8.733 19.8279C8.4337 20.7712 7.9087 21.2514 6.94212 21.3812C5.69831 21.5503 4.46432 21.7928 3.19108 22.0084C3.19108 23.329 3.17636 24.5883 3.21071 25.85C3.21561 25.9946 3.4732 26.2249 3.64493 26.2592C4.8225 26.4895 6.00742 26.6953 7.1948 26.8741C8.04854 27.004 8.47295 27.494 8.75262 28.2927C9.17213 29.4981 9.6407 30.6986 10.2295 31.8256C10.6956 32.7174 10.7005 33.4426 10.0921 34.2413C9.32914 35.2409 8.62751 36.2846 7.92587 37.2719C8.93662 38.2838 9.90075 39.2466 10.9066 40.2511C11.9738 39.4916 13.0753 38.7248 14.1572 37.9334C14.8269 37.4459 15.4721 37.4385 16.2105 37.8134C17.1501 38.2911 18.102 38.8301 19.1127 39.0702C20.5405 39.4108 21.3722 40.0968 21.3869 41.6109C21.3894 41.7505 21.4237 41.8926 21.4482 42.0323C21.6028 42.951 21.7598 43.8698 21.9242 44.8302C23.1753 44.8302 24.3774 44.8081 25.5795 44.8424C26.0481 44.8547 26.161 44.6538 26.2198 44.2495C26.394 43.0833 26.6148 41.9245 26.7964 40.7607C26.919 39.9841 27.3753 39.5725 28.1089 39.3324C29.1294 38.9967 30.226 38.7321 31.1092 38.1613C32.5125 37.2499 33.6361 37.3895 34.8382 38.4626C35.5717 39.1168 36.4401 39.6239 37.1638 40.136C38.2065 39.1217 39.1829 38.1711 40.1912 37.1911C39.4282 36.1204 38.6701 35.04 37.8949 33.9693C37.4312 33.3299 37.3822 32.7051 37.7207 31.9726C38.312 30.6839 38.859 29.3731 39.3571 28.0452C39.6294 27.3225 40.0464 26.8864 40.8217 26.7663C42.1243 26.563 43.427 26.3278 44.8057 26.0926Z" fill="white"/>\n<path d="M24.0527 14.0004C29.6135 14.0495 34.0486 18.5542 33.9996 24.1086C33.9506 29.6349 29.401 34.0625 23.8331 33.9993C18.3751 33.9386 13.9376 29.3754 14.0007 23.8888C14.0661 18.3929 18.5783 13.9513 24.0527 14.0004ZM24.006 30.9697C27.8409 30.965 30.9704 27.8395 30.9728 24.0057C30.9751 20.1649 27.8712 17.0464 24.0247 17.03C20.1687 17.0137 17.0135 20.1626 17.0228 24.0174C17.0298 27.8419 20.1781 30.9744 24.006 30.9697Z" fill="white"/>\n</svg>'
                        }
                      />
                      <Heading className={"heading-style-h4"} tag={"h3"}>
                        {"Setup & import"}
                      </Heading>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Paragraph className={"text-size-medium"}>
                      {
                        "Configure time-off policies and upload employee HR data. Our Customer Success Team will help you out with the configuration in line with yourneeds."
                      }
                    </Paragraph>
                    <Block
                      className={"arrow-howtostart-tablet-container"}
                      tag={"div"}
                    >
                      <Block
                        className={"arrow-howtostart-tablet-layout"}
                        tag={"div"}
                      >
                        <Block
                          className={"arrow-howtostart-tablet-shaft"}
                          tag={"div"}
                        />
                        <HtmlEmbed
                          className={"icon-1x1-small"}
                          content={
                            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6818 11.8369L10.7682 18.6848C10.3439 19.1051 9.65607 19.1051 9.23182 18.6848L2.31819 11.8369C1.89393 11.4167 1.89393 10.7354 2.31819 10.3152C2.74244 9.89494 3.4303 9.89494 3.85455 10.3152L10 16.4022L16.1454 10.3152C16.5697 9.89494 17.2576 9.89494 17.6818 10.3152C18.1061 10.7354 18.1061 11.4167 17.6818 11.8369Z" fill="#21537C"/>\n</svg>'
                          }
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={
                    "radius-medium sizing-grow-desktop background-color-light"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"padding-xlarge position-relative"}
                    tag={"div"}
                  >
                    <Block
                      className={
                        "layout-column is-justify-sb is-align-center gap-huge"
                      }
                      tag={"div"}
                    >
                      <Block className={"counter_component"} tag={"div"}>
                        <Block
                          className={"text-size-small text-weight-bold"}
                          tag={"div"}
                        >
                          {"3"}
                        </Block>
                      </Block>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Block
                      className={"layout-column is-align-center gap-small"}
                      tag={"div"}
                    >
                      <HtmlEmbed
                        className={"icon-large"}
                        content={
                          '<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M29.9204 22.6905C31.1584 23.2471 32.2811 23.9008 33.3097 24.7301C36.9436 27.6617 39.1473 31.5483 39.8055 36.4368C40.1392 38.916 39.9338 41.4166 39.9717 43.9072C39.9717 43.9286 39.9586 43.9515 39.9429 44C29.3185 44 18.6862 44 8.03816 44C8.02769 43.9386 8.00544 43.8715 8.00675 43.803C8.01722 41.8205 7.96226 39.8337 8.05517 37.8555C8.24099 33.889 9.58492 30.405 11.9744 27.4105C13.5643 25.418 15.4827 23.9037 17.71 22.8603C17.816 22.8104 17.918 22.7518 18.0502 22.6819C15.5678 20.3683 14.2801 17.4894 14.4306 13.934C14.5484 11.1636 15.5495 8.79574 17.3998 6.89886C21.2026 2.99949 26.9905 3.03803 30.6833 6.99021C32.7274 9.17825 33.701 11.8716 33.5609 14.9959C33.4209 18.1217 32.149 20.6494 29.9204 22.6905ZM36.7303 40.5859C37.1386 35.7659 35.5618 30.3708 30.7213 27.018C26.2629 23.9308 20.2434 24.3005 16.12 27.8887C13.9909 29.7427 12.5175 32.0807 11.7284 34.9281C11.2154 36.7793 11.1539 38.6719 11.2285 40.5845C19.7579 40.5859 28.2454 40.5859 36.7303 40.5859ZM30.3837 14.4592C30.3784 10.627 27.5139 7.4969 24.0056 7.48976C20.4842 7.48263 17.6 10.6255 17.604 14.4692C17.6079 18.3187 20.4816 21.4387 24.0148 21.4302C27.5283 21.423 30.3876 18.293 30.3837 14.4592Z" fill="#21537C"/>\n<path d="M7.40948 21.8402C7.03577 21.3028 6.64074 20.8136 6.33098 20.279C3.57576 15.5241 6.14483 9.56526 11.5629 8.10304C12.3672 7.88591 13.072 7.98898 13.6133 8.63351C14.4034 9.57625 13.9259 10.9656 12.6968 11.2872C11.6524 11.5593 10.753 12.0431 10.024 12.8195C7.72777 15.2602 8.50219 19.2181 11.5558 20.6899C11.857 20.8356 12.1739 21.0088 12.3913 21.2479C13.2595 22.2016 12.7622 23.6501 11.4862 23.9565C6.672 25.1151 3.4976 29.0207 3.48197 33.8086C3.47913 34.6538 3.49334 35.5004 3.47487 36.3455C3.45782 37.1206 2.93917 37.7514 2.20738 37.9397C1.46138 38.1307 0.698334 37.8613 0.294785 37.2264C0.162636 37.0189 0.0404348 36.7619 0.0390139 36.5269C0.0290672 34.8036 -0.11587 33.0707 0.225158 31.3625C1.05783 27.1861 3.3953 24.0445 7.22475 21.946C7.28585 21.9144 7.34411 21.8773 7.40948 21.8402Z" fill="#21537C"/>\n<path d="M40.4679 21.7946C40.9617 22.089 41.4425 22.3448 41.8903 22.6489C45.7703 25.2874 47.806 28.8848 47.9802 33.4314C48.0162 34.3806 47.9932 35.3312 47.9874 36.2804C47.9817 37.2778 47.246 37.9972 46.2454 38C45.2462 38.0027 44.5005 37.2888 44.4832 36.2942C44.4645 35.2074 44.5048 34.1178 44.4458 33.0338C44.2111 28.7142 40.8335 24.9146 36.4122 23.9585C35.6232 23.7879 35.1395 23.2775 35.0459 22.5168C34.9567 21.7904 35.3195 21.1287 36.035 20.8041C36.8974 20.4134 37.6316 19.8838 38.1917 19.1423C40.3426 16.2905 38.9259 12.3396 35.3871 11.334C34.8113 11.1703 34.3765 10.8662 34.1476 10.3297C33.8783 9.69966 33.9791 9.10537 34.4369 8.59637C34.9178 8.06261 35.5513 7.88102 36.2582 8.07636C38.8698 8.79997 40.8148 10.3201 41.9119 12.6945C43.3689 15.8448 42.9024 18.8094 40.6953 21.5263C40.6219 21.613 40.547 21.6996 40.4679 21.7946Z" fill="#21537C"/>\n</svg>'
                        }
                      />
                      <Heading className={"heading-style-h4"} tag={"h3"}>
                        {"Invite & Go"}
                      </Heading>
                    </Block>
                    <Block className={"spacer-large"} tag={"div"} />
                    <Paragraph className={"text-size-medium"}>
                      {
                        "Quickly onboard your employees by sharing an invitation link, and you’re ready togo!"
                      }
                    </Paragraph>
                    <Block
                      className={"arrow-howtostart-tablet-container"}
                      tag={"div"}
                    >
                      <Block
                        className={"arrow-howtostart-tablet-layout"}
                        tag={"div"}
                      >
                        <Block
                          className={"arrow-howtostart-tablet-shaft"}
                          tag={"div"}
                        />
                        <HtmlEmbed
                          className={"icon-1x1-small"}
                          content={
                            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6818 11.8369L10.7682 18.6848C10.3439 19.1051 9.65607 19.1051 9.23182 18.6848L2.31819 11.8369C1.89393 11.4167 1.89393 10.7354 2.31819 10.3152C2.74244 9.89494 3.4303 9.89494 3.85455 10.3152L10 16.4022L16.1454 10.3152C16.5697 9.89494 17.2576 9.89494 17.6818 10.3152C18.1061 10.7354 18.1061 11.4167 17.6818 11.8369Z" fill="#21537C"/>\n</svg>'
                          }
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block className={"spacer-xxlarge"} tag={"div"} />
              <Block className={"max-width-large align-center"} tag={"div"}>
                <Paragraph className={"text-size-regular text-align-center"}>
                  {
                    "Usually the onboarding takes a new company in three to five business days. Our Customer Success Team is happy toguide you through the whole onboarding process, so feel free to drop us a line."
                  }
                </Paragraph>
              </Block>
            </Block>
            <Block tag={"div"}>
              <Block className={"spacer-xxlarge"} tag={"div"} />
              <Block className={"layout-row is-align-center"} tag={"div"}>
                <Link
                  button={true}
                  className={"button-delete is-secondary"}
                  data-cta={"signup"}
                  options={{
                    href: "https://app.calamari.io/o/sign-up-company",
                  }}
                >
                  {"Start free trial"}
                </Link>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}

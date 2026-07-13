"use client";
import React from "react";
import Block from "./webflow_modules/Basic/components/Block";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import { StartFreeTrial } from "./StartFreeTrial";

export function ElementCustomerSidePaneDetails({
  employeesBodyEmployees = "Text",
  employeesVisibilityEmployees = true,
  foundedBodyFounded = "Text",
  foundedVisibilityFounded = true,
  headquarterBodyHeadquarter = "Text",
  headquarterVisibilityHeadquarter = true,
  industryBodyIndustry = "Text",
  industryVisibilityIndustry = true,
  logo = "https://cdn.prod.website-files.com/6501ff9925fe6fa44b67fc6a/6501ff9925fe6fa44b67fc70_image.svg",
  modulesUsedCoreHr = true,
  modulesUsedTA = true,
  modulesUsedTimeOff = true,
  webisteLabel = "Text",

  websiteLink = {
    href: "#",
  },

  websiteVisibility = false,
  withCalamariSinceText = "Text",
  withCalamariSinceVisibility = false,
}) {
  return (
    <Block className={"customer_content_sidepane_inner"} tag={"div"}>
      <Block className={"customer_content_summary"} tag={"div"}>
        <Block
          className={"customer_content_summary_module-used_logo hide"}
          tag={"div"}
        >
          <Image
            alt={""}
            className={"image-height-fill"}
            height={"auto"}
            loading={"lazy"}
            src={logo}
            width={"auto"}
          />
        </Block>
        {headquarterVisibilityHeadquarter ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Headquarter"}
            </Block>
            <Block className={"text-size-regular"} tag={"div"}>
              {headquarterBodyHeadquarter}
            </Block>
          </Block>
        ) : null}
        {industryVisibilityIndustry ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Industry"}
            </Block>
            <Block className={"text-size-regular"} tag={"div"}>
              {industryBodyIndustry}
            </Block>
          </Block>
        ) : null}
        {employeesVisibilityEmployees ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Employees"}
            </Block>
            <Block className={"text-size-regular"} tag={"div"}>
              {employeesBodyEmployees}
            </Block>
          </Block>
        ) : null}
        {foundedVisibilityFounded ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Founded"}
            </Block>
            <Block className={"text-size-regular"} tag={"div"}>
              {foundedBodyFounded}
            </Block>
          </Block>
        ) : null}
        {withCalamariSinceVisibility ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"With Calamari since"}
            </Block>
            <Block className={"text-size-regular"} tag={"div"}>
              {withCalamariSinceText}
            </Block>
          </Block>
        ) : null}
        {websiteVisibility ? (
          <Block className={"customer_content_summary_section"} tag={"div"}>
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Website"}
            </Block>
            <Link
              button={false}
              className={"text-size-regular text-style-link"}
              options={websiteLink}
            >
              {webisteLabel}
            </Link>
          </Block>
        ) : null}
        <Block
          className={"customer_content_summary_module-used_component"}
          tag={"div"}
        >
          <Block
            className={"customer_content_summary_module-used_header"}
            tag={"div"}
          >
            <Block className={"customer_content_summary_label"} tag={"div"}>
              {"Modules used"}
            </Block>
          </Block>
          <Block
            className={"customer_content_summary_module-used_list"}
            tag={"div"}
          >
            {modulesUsedTimeOff ? (
              <Block
                className={"customer_content_summary_module-used_item"}
                tag={"div"}
              >
                <Block className={"icon-classic"} tag={"div"}>
                  <HtmlEmbed
                    className={"icon-1x1-global"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15.6085 8.79439C14.8813 8.02625 13.9806 7.72891 13.1378 7.65457L15.1045 7.05162L15.435 6.20914L15.9969 6.82035L17.1207 6.34955C17.1207 6.34955 16.2861 4.02034 13.5757 4.55722C12.7411 4.72241 12.1379 5.11061 11.7165 5.57315C11.6256 4.9289 11.3529 4.25987 10.758 3.62388C8.83261 1.55898 6.85768 2.97137 6.85768 2.97137L7.51048 4.0286L8.30376 3.86341L8.1137 4.74719L9.42757 6.47345C8.65908 5.93657 7.60964 5.61445 6.23793 6.06047C4.02337 6.79557 3.22183 8.78614 3.25488 9.50472L4.37869 9.38909L4.79186 8.7118L5.16371 9.24041L6.6511 9.14956L7.09732 8.29056L7.43611 8.99263L9.74984 8.65398C8.84087 9.72773 7.84928 11.4788 7.83275 13.9979C7.85754 13.9897 7.88233 13.9897 7.91538 13.9814C8.24592 13.9319 8.58471 13.9071 8.92351 13.9071C9.38625 13.9071 9.84073 13.9566 10.287 14.0475C10.3117 14.0558 10.3283 14.0558 10.3531 14.064C10.2539 12.8251 10.3944 10.5372 11.3364 8.87699L13.4766 10.9502L14.1294 10.7271L14.1129 11.5531L15.311 12.5608L15.8895 12.3212L15.7738 13.0811L16.7075 13.9071C17.2942 12.6021 17.5752 10.8593 15.6085 8.79439Z" fill="currentColor"/>\n<path d="M8.91486 14.3696C8.59259 14.3696 8.27859 14.3944 7.97285 14.444C6.03097 14.7413 4.45268 15.9307 3.81641 17.5H14.0133C13.4184 16.0216 11.9805 14.8817 10.1957 14.5018C9.79077 14.4109 9.36108 14.3696 8.91486 14.3696Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
                <Block
                  className={"text-size-regular text-weight-bold"}
                  tag={"div"}
                >
                  {"Time Off"}
                </Block>
              </Block>
            ) : null}
            {modulesUsedTa ? (
              <Block
                className={"customer_content_summary_module-used_item"}
                tag={"div"}
              >
                <Block className={"icon-classic"} tag={"div"}>
                  <HtmlEmbed
                    className={"icon-1x1-global"}
                    content={
                      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.66667H12.5V0H7.5V1.66667Z" fill="#0D1D44"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4682 14.233C11.5903 16.1117 8.54495 16.1117 6.66665 14.233C6.32372 13.8895 6.04421 13.5068 5.82687 13.0999L10.0676 10.8316V6.02055C11.2986 6.02055 12.5291 6.49044 13.4682 7.42981C15.3465 9.30856 15.3465 12.3542 13.4682 14.233ZM18.3327 5.72956L17.0413 3.86731L15.7212 4.783C12.4555 1.69081 7.30642 1.73734 4.10671 4.93737C0.85245 8.19239 0.85245 13.4704 4.10671 16.7254C7.36139 19.9804 12.6377 19.9804 15.892 16.7254C18.6511 13.9661 19.0617 9.75688 17.1428 6.55515L18.3327 5.72956Z" fill="#0D1D44"/>\n</svg>'
                    }
                  />
                </Block>
                <Block
                  className={"text-size-regular text-weight-bold"}
                  tag={"div"}
                >
                  {"Time &Attendance"}
                </Block>
              </Block>
            ) : null}
            {modulesUsedCoreHr ? (
              <Block
                className={"customer_content_summary_module-used_item"}
                tag={"div"}
              >
                <Block className={"icon-classic"} tag={"div"}>
                  <HtmlEmbed
                    className={"icon-1x1-global"}
                    content={
                      '<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1654 15.192V16.6666H0.832031C0.832031 16.434 0.832031 15.3914 0.832031 15.1837C0.832031 14.0248 0.916206 13.3021 2.07361 12.8992C2.23355 12.8493 2.39769 12.7995 2.59971 12.758C4.4726 12.3509 6.31183 11.9895 5.4322 10.4568C2.79752 5.90854 4.67883 3.33325 7.49449 3.33325C10.2596 3.33325 12.1915 5.81716 9.5694 10.461C8.71082 11.9854 10.4869 12.3551 12.4019 12.7621C12.5871 12.8037 12.7428 12.8452 12.8859 12.895C14.0728 13.2938 14.1654 14.0165 14.1654 15.192Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9992 15H19.168V13.8941C19.168 13.0125 19.0985 12.4704 18.2084 12.1713C18.101 12.134 17.9843 12.1028 17.8454 12.0717L17.8257 12.0675C16.397 11.7638 15.08 11.4839 15.721 10.3458C17.6875 6.86293 16.2387 5 14.1648 5C12.0531 5 10.6421 6.93146 12.6181 10.3427C13.0716 11.1329 12.5615 11.508 11.7419 11.7644C12.0002 11.8246 12.275 11.883 12.5644 11.9445L12.5856 11.949C12.7862 11.994 12.9741 12.0432 13.1569 12.1066C13.902 12.3578 14.439 12.7657 14.7307 13.4076C14.9589 13.9099 14.9942 14.4811 14.9992 15Z" fill="currentColor"/>\n</svg>'
                    }
                  />
                </Block>
                <Block
                  className={"text-size-regular text-weight-bold"}
                  tag={"div"}
                >
                  {"Core HR"}
                </Block>
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
      <Block className={"customer_content_sidepane_cta"} tag={"div"}>
        <Block tag={"div"}>{"Ready to get started?"}</Block>
        <Block className={"button-group"} tag={"div"}>
          <StartFreeTrial ariaLabel={"signup-hero"} />
          <Link
            button={false}
            className={"button-text-v2 is-small"}
            options={{
              href: "#",
            }}
          >
            {"Check pricing"}
          </Link>
        </Block>
      </Block>
    </Block>
  );
}

import { forwardRef } from "react";
import { basePath } from "@/basePath";
import styles from "./Certificate.module.css";

export type CertificateProps = {
  name: string;
  date: string;
};

// Simple, wide light waves along the bottom edge.
const WAVE_BACK = "M0 90 C 430 20 760 20 1440 96 L1440 240 L0 240 Z";
const WAVE_FRONT = "M0 150 C 500 88 940 208 1440 128 L1440 240 L0 240 Z";

/**
 * Fixed-size (A4 landscape ratio) certificate template. Rendered off-screen and
 * rasterized to a PDF client-side — never stored.
 */
const Certificate = forwardRef<HTMLDivElement, CertificateProps>(
  function Certificate({ name, date }, ref) {
    return (
      <div ref={ref} className={styles.certificate}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.logoRow}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.logo}
                src={`${basePath}/calamari-logo.png`}
                alt="Calamari"
              />
              <span className={styles.logoX} aria-hidden="true">
                ×
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={`${styles.logo} ${styles.logoTeamboost}`}
                src={`${basePath}/logo-teamboost.png`}
                alt="TeamBoost"
              />
            </div>
            <h1 className={styles.title}>
              Certyfikat ukończenia
              <br />
              <span className={`${styles.titleBrand} heading-style-italic`}>
                Akademii Ocen Pracowniczych
              </span>
            </h1>
            <div className={styles.recipient}>
              <p className={styles.subtitle}>
                Niniejszym zaświadcza się, że dnia {date}
              </p>
              <p className={styles.name}>{name}</p>
              <p className={styles.body}>
                ukończył(a) quiz wiedzy o procesie ocen okresowych.
              </p>
            </div>

            <div className={styles.signatures}>
              <div className={styles.signature}>
                <p className={styles.sigLine}>
                  <span className={styles.sigName}>Kamil Wojewoda</span> |
                  Co-founder w Calamari
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.sigImg}
                  src={`${basePath}/podpis-kamil-wojewoda.png`}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className={styles.signature}>
                <p className={styles.sigLine}>
                  <span className={styles.sigName}>Martyna Lempert</span> |
                  Founder w TeamBoost
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.sigImg}
                  src={`${basePath}/podpis-martyna-lempert.png`}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className={styles.waves} aria-hidden="true">
            <svg
              className={styles.waveBack}
              viewBox="0 0 1440 240"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={WAVE_BACK} fill="currentColor" />
            </svg>
            <svg
              className={styles.waveFront}
              viewBox="0 0 1440 240"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={WAVE_FRONT} fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    );
  },
);

export default Certificate;

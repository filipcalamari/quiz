"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { questions, type Question } from "@/data/questions";
import { basePath } from "@/basePath";
import Certificate from "./Certificate";
import styles from "./Quiz.module.css";

function formatPlDate(d: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

type Answer = {
  single: string | null;
  multiple: string[];
  truefalse: (boolean | null)[];
};

type Screen = "intro" | "quiz" | "results";

const AUTO_ADVANCE_MS = 320;

// Base (unscaled) certificate size, in rem — matches Certificate.module.css.
const CERT_W_REM = 70;
const CERT_H_REM = 49.5;

function emptyAnswer(q: Question): Answer {
  return {
    single: null,
    multiple: [],
    truefalse:
      q.type === "truefalse" ? q.statements.map(() => null) : [],
  };
}

function isComplete(q: Question, a: Answer): boolean {
  if (q.type === "single") return a.single !== null;
  if (q.type === "multiple") return a.multiple.length > 0;
  return a.truefalse.every((v) => v !== null);
}

function isCorrect(q: Question, a: Answer): boolean {
  if (q.type === "single") return a.single === q.correct;
  if (q.type === "multiple") {
    const want = [...q.correct].sort().join(",");
    const got = [...a.multiple].sort().join(",");
    return want === got;
  }
  return q.statements.every((s, i) => a.truefalse[i] === s.answer);
}

function LinkedInIcon() {
  return (
    <svg
      className={styles.linkedinIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() =>
    questions.map((q) => emptyAnswer(q)),
  );
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Certificate form (results screen)
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [certError, setCertError] = useState<string | null>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const certDate = useMemo(() => formatPlDate(new Date()), []);

  // Live certificate preview: scale the fixed-size certificate to fit the card.
  const previewBoxRef = useRef<HTMLDivElement>(null);
  const [certScale, setCertScale] = useState(0.5);

  const total = questions.length;
  const q = questions[step];
  const answer = answers[step];
  const complete = q ? isComplete(q, answer) : false;

  const score = useMemo(
    () => questions.reduce((n, qq, i) => n + (isCorrect(qq, answers[i]) ? 1 : 0), 0),
    [answers],
  );

  // Always start at the top when moving between steps or screens.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [step, screen]);

  // Fit the certificate preview to the available width (results screen only).
  useEffect(() => {
    if (screen !== "results") return;
    const el = previewBoxRef.current;
    if (!el) return;
    const certWidthPx = CERT_W_REM * 16;
    const fit = () => setCertScale(Math.min(1, el.clientWidth / certWidthPx));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [screen]);

  const updateAnswer = useCallback(
    (updater: (a: Answer) => Answer) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[step] = updater(prev[step]);
        return next;
      });
    },
    [step],
  );

  const goNext = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    if (step + 1 >= total) {
      setScreen("results");
    } else {
      setStep((s) => s + 1);
    }
  }, [step, total]);

  const goBack = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const selectSingle = useCallback(
    (key: string) => {
      updateAnswer((a) => ({ ...a, single: key }));
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      advanceTimer.current = setTimeout(() => {
        setStep((s) => {
          if (s + 1 >= total) {
            setScreen("results");
            return s;
          }
          return s + 1;
        });
      }, AUTO_ADVANCE_MS);
    },
    [total, updateAnswer],
  );

  const toggleMultiple = useCallback(
    (key: string) => {
      updateAnswer((a) => {
        const set = new Set(a.multiple);
        if (set.has(key)) set.delete(key);
        else set.add(key);
        return { ...a, multiple: [...set] };
      });
    },
    [updateAnswer],
  );

  const setTrueFalse = useCallback(
    (index: number, value: boolean) => {
      updateAnswer((a) => {
        const tf = [...a.truefalse];
        tf[index] = value;
        return { ...a, truefalse: tf };
      });
    },
    [updateAnswer],
  );

  // Default LinkedIn post text (Polish). Editable by the user in the LinkedIn
  // composer before publishing. The share URL points to the public /certyfikat
  // page, whose Open Graph image is the personalized certificate.
  const shareOnLinkedIn = useCallback(() => {
    const trimmedName = name.trim();
    const query = new URLSearchParams({ name: trimmedName, date: certDate });
    const shareUrl = `${window.location.origin}${basePath}/certyfikat?${query.toString()}`;
    const text =
      `Ukończyłem/am Akademię Ocen Pracowniczych i zdobyłem/am certyfikat! 🎓\n\n` +
      `Sprawdź, ile wiesz o procesie ocen okresowych:\n${shareUrl}`;
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
      text,
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  }, [name, certDate]);

  // Rasterize the off-screen certificate and save it as a PDF (client-side).
  const generateCertificate = useCallback(async () => {
    const node = certRef.current;
    if (!node) return;
    const [{ toPng }, { default: jsPDF }] = await Promise.all([
      import("html-to-image"),
      import("jspdf"),
    ]);
    const dataUrl = await toPng(node, { pixelRatio: 2, cacheBust: true });
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const w = pdf.internal.pageSize.getWidth();
    const h = pdf.internal.pageSize.getHeight();
    pdf.addImage(dataUrl, "PNG", 0, 0, w, h);
    pdf.save("certyfikat-akademia-ocen-pracowniczych.pdf");
  }, []);

  const submitCertificate = useCallback(() => {
    setCertError(null);
    if (!name.trim()) {
      setCertError("Podaj imię i nazwisko.");
      return;
    }
    // Open the LinkedIn composer synchronously, inside the click gesture, so
    // it is not blocked as a popup.
    shareOnLinkedIn();
    setSubmitted(true);
  }, [name, shareOnLinkedIn]);

  // ---- Intro screen ----
  if (screen === "intro") {
    return (
      <main className={`${styles.shell} ${styles.shellCentered}`}>
        <div className={styles.card}>
          <div className={styles.intro}>
            <p className={`${styles.brandLabel} text-color-brand`}>
              Akademia Ocen Pracowniczych
            </p>
            <h1 className={styles.introTitle}>Quiz wiedzy</h1>
            <p className={styles.introLead}>
              {total} pytań o projektowaniu i prowadzeniu procesu ocen
              okresowych. Kliknij „Rozpocznij quiz”, aby przejść dalej.
            </p>
            <button
              className={`button ${styles.primaryBtn}`}
              onClick={() => setScreen("quiz")}
            >
              Rozpocznij quiz
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ---- Results screen ----
  if (screen === "results") {
    const pct = Math.round((score / total) * 100);
    const displayName = name.trim() || "Imię i nazwisko";
    return (
      <main className={`${styles.shell} ${styles.shellCentered}`}>
        <div className={`${styles.card} ${styles.finish}`}>
          <span className={styles.scorePill}>
            Twój wynik: {score}/{total} · {pct}%
          </span>

          <h1 className={styles.finishTitle}>
            Gratulacje!
            <br />
            Oto Twój certyfikat.
          </h1>

          {submitted ? (
            <div className={styles.shareBlock}>
              <p className={styles.shareConfirm}>
                Gotowe — otworzyliśmy LinkedIn w nowej karcie. Dokończ publikację
                tam.
              </p>
              <button
                type="button"
                className={styles.downloadBtn}
                onClick={generateCertificate}
              >
                Pobierz certyfikat (PDF)
              </button>
              <button
                type="button"
                className={styles.textLink}
                onClick={shareOnLinkedIn}
              >
                Nie widzisz okna LinkedIn? Otwórz je jeszcze raz
              </button>
            </div>
          ) : (
            <div className={styles.shareBlock}>
              <label className={styles.nameLabel} htmlFor="cert-name">
                Wpisz imię i nazwisko, aby pochwalić się certyfikatem na LinkedIn
              </label>
              <input
                id="cert-name"
                className={styles.input}
                type="text"
                placeholder="Imię i nazwisko"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitCertificate();
                }}
                autoComplete="name"
              />
              {certError && <p className={styles.certErrorMsg}>{certError}</p>}
              <button
                type="button"
                className={`button ${styles.shareBtn}`}
                onClick={submitCertificate}
              >
                <LinkedInIcon />
                Udostępnij na LinkedIn
              </button>
              <button
                type="button"
                className={styles.textLink}
                onClick={generateCertificate}
              >
                Pobierz certyfikat (PDF)
              </button>
            </div>
          )}

          {/* Live, personalized preview of the real certificate. */}
          <div className={styles.certPreview}>
            <div ref={previewBoxRef} className={styles.certPreviewMeasure}>
              <div
                className={styles.certFrame}
                style={{
                  width: `${(CERT_W_REM * certScale).toFixed(3)}rem`,
                  height: `${(CERT_H_REM * certScale).toFixed(3)}rem`,
                }}
              >
                <div
                  className={styles.certScale}
                  style={{ transform: `scale(${certScale})` }}
                >
                  <Certificate ref={certRef} name={displayName} date={certDate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ---- Quiz screen ----
  const progress = (step / total) * 100;
  const hasScenario = !!(
    (q.context && q.context.length > 0) ||
    (q.mail && q.mail.length > 0) ||
    (q.bullets && q.bullets.length > 0)
  );

  return (
    <main className={styles.shell}>
      <div
        className={`${styles.quizCard} ${
          hasScenario ? styles.quizCardWithScenario : ""
        }`}
      >
        <header className={styles.topNav}>
          <span className={`${styles.brandLabel} text-color-brand`}>
            Akademia Ocen Pracowniczych - Quiz
          </span>
          <div className={styles.topNavRow}>
            <span className={styles.questionCount}>
              Pytanie {step + 1} z {total}
            </span>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={step + 1}
            >
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        <div className={styles.quizBody}>
        {hasScenario && (
          <aside className={styles.scenario}>
            <p className={styles.contextTitle}>Scenariusz</p>
            {q.context?.map((p, i) => (
              <p key={i} className={styles.contextPara}>
                {p}
              </p>
            ))}
            {q.mail && q.mail.length > 0 && (
              <div className={styles.mailBox}>
                {q.mail.map((p, i) => (
                  <p key={i} className={styles.mailPara}>
                    {p}
                  </p>
                ))}
              </div>
            )}
            {q.bulletsIntro && (
              <p className={styles.contextPara}>{q.bulletsIntro}</p>
            )}
            {q.bullets && q.bullets.length > 0 && (
              <ul className={styles.bulletList}>
                {q.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </aside>
        )}

        <div className={styles.quizMain}>
          <div key={step} className={styles.body}>
            <h2 className={styles.question}>{q.question}</h2>

          {q.type === "single" && (
            <ul className={styles.options}>
              {q.options.map((opt) => {
                const selected = answer.single === opt.key;
                return (
                  <li key={opt.key}>
                    <button
                      className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
                      onClick={() => selectSingle(opt.key)}
                      aria-pressed={selected}
                    >
                      <span className={styles.optKey}>{opt.key}</span>
                      <span className={styles.optLabel}>{opt.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {q.type === "multiple" && (
            <ul className={styles.options}>
              {q.options.map((opt) => {
                const selected = answer.multiple.includes(opt.key);
                return (
                  <li key={opt.key}>
                    <button
                      className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
                      onClick={() => toggleMultiple(opt.key)}
                      aria-pressed={selected}
                    >
                      <span className={`${styles.checkbox} ${selected ? styles.checkboxOn : ""}`} aria-hidden="true">
                        {selected && (
                          <svg className={styles.checkIcon} viewBox="0 0 24 24">
                            <use href="#check" />
                          </svg>
                        )}
                      </span>
                      <span className={styles.optLabel}>{opt.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {q.type === "truefalse" && (
            <ul className={styles.statements}>
              {q.statements.map((s, i) => (
                <li key={i} className={styles.statement}>
                  <span className={styles.statementText}>{s.text}</span>
                  <div className={styles.tfButtons}>
                    <button
                      className={`${styles.tfBtn} ${answer.truefalse[i] === true ? styles.tfBtnOn : ""}`}
                      onClick={() => setTrueFalse(i, true)}
                      aria-pressed={answer.truefalse[i] === true}
                    >
                      Prawda
                    </button>
                    <button
                      className={`${styles.tfBtn} ${answer.truefalse[i] === false ? styles.tfBtnOn : ""}`}
                      onClick={() => setTrueFalse(i, false)}
                      aria-pressed={answer.truefalse[i] === false}
                    >
                      Fałsz
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          </div>
        </div>
        </div>

        <footer className={styles.footer}>
          <button
            className={`button-secondary ${styles.ghostBtn}`}
            onClick={goBack}
            disabled={step === 0}
          >
            Wstecz
          </button>

          {q.type !== "single" && (
            <button
              className={`button ${styles.primaryBtn}`}
              onClick={goNext}
              disabled={!complete}
            >
              {step + 1 >= total ? "Zakończ" : "Dalej"}
            </button>
          )}
        </footer>
      </div>
    </main>
  );
}

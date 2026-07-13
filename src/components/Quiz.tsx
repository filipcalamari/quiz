"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { questions, type Question } from "@/data/questions";
import styles from "./Quiz.module.css";

type Answer = {
  single: string | null;
  multiple: string[];
  truefalse: (boolean | null)[];
};

type Screen = "intro" | "quiz" | "results";

const AUTO_ADVANCE_MS = 320;

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

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() =>
    questions.map((q) => emptyAnswer(q)),
  );
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const restart = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setAnswers(questions.map((qq) => emptyAnswer(qq)));
    setStep(0);
    setScreen("intro");
  }, []);

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
    return (
      <main className={`${styles.shell} ${styles.shellCentered}`}>
        <div className={styles.card}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Wynik</p>
            <h1 className={styles.introTitle}>
              {score} / {total}
            </h1>
            <p className={styles.introLead}>
              Poprawnie odpowiedziałeś na {score} z {total} pytań ({pct}%).
            </p>
            <button
              className={`button ${styles.primaryBtn}`}
              onClick={restart}
            >
              Rozpocznij od nowa
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ---- Quiz screen ----
  const progress = (step / total) * 100;
  const hasScenario = !!(
    (q.context && q.context.length > 0) ||
    (q.mail && q.mail.length > 0)
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

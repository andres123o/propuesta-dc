"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { cardTones } from "@/content/site";

export type Question = {
  id: string;
  title: string;
  type: "text" | "email" | "url" | "long" | "single" | "multi";
  options?: string[];
  placeholder?: string;
  optional?: boolean;
};

type Answer = string | string[];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(question: Question, answer: Answer = "") {
  if (question.optional) return true;
  if (Array.isArray(answer)) return answer.length > 0;
  if (question.type === "email") return EMAIL.test(answer);
  return answer.trim() !== "";
}

// Para que el navegador autocomplete los datos de contacto.
const AUTOCOMPLETE: Record<string, string> = {
  nombre: "name",
  correo: "email",
  agencia: "organization",
  marca: "organization",
};

const input =
  "w-full border-b-2 border-current/25 bg-transparent pb-3 font-display text-3xl tracking-[-0.03em] outline-none placeholder:opacity-60 focus:border-current md:text-5xl";

/*
  Una pregunta por pantalla dentro de una tarjeta que cambia de color con cada paso,
  como la del modelo de trabajo. Enter avanza; las opciones únicas avanzan solas.
  Solo interfaz: las respuestas no se guardan en ningún lado todavía.
*/
export function Questionnaire({
  label,
  questions,
  done,
}: {
  label: string;
  questions: Question[];
  done: { title: string; text: string };
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const answer = answers[question.id] ?? (question.type === "multi" ? [] : "");
  const last = index === questions.length - 1;
  const tone =
    cardTones[(finished ? questions.length : index) % cardTones.length];

  const set = (value: Answer) =>
    setAnswers((current) => ({ ...current, [question.id]: value }));
  const next = () => {
    if (!isValid(question, answer)) return;
    if (last) setFinished(true);
    else setIndex(index + 1);
  };
  const pick = (option: string) => {
    if (question.type === "single") {
      set(option);
      if (!last) setTimeout(() => setIndex((i) => i + 1), 250);
      return;
    }
    const list = answer as string[];
    set(
      list.includes(option)
        ? list.filter((item) => item !== option)
        : [...list, option],
    );
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  const progress = finished ? 1 : index / questions.length;

  return (
    <main
      data-theme="light"
      className="flex min-h-svh flex-col justify-center bg-cream px-6 pt-28 pb-12 text-ink md:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="flex items-center gap-6">
          <h1 className="shrink-0 text-sm text-ink/65">{label}</h1>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full origin-left rounded-full bg-magenta transition-transform duration-700"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className={`flex min-h-[min(66svh,36rem)] flex-col justify-between gap-12 rounded-[2rem] p-8 transition-colors duration-700 md:p-14 ${tone.card}`}
        >
          {finished ? (
            <div className="flex animate-fade-up flex-col gap-6">
              <h2 className="max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl">
                {done.title}
              </h2>
              <p className="max-w-md text-xl opacity-70">{done.text}</p>
            </div>
          ) : (
            <div
              key={question.id}
              className="flex animate-fade-up flex-col gap-10"
            >
              <h2
                id={`pregunta-${question.id}`}
                className="max-w-4xl font-display text-4xl leading-[1.05] font-medium tracking-[-0.04em] text-balance md:text-6xl"
              >
                {question.title}
              </h2>

              {question.type === "single" || question.type === "multi" ? (
                <div
                  role="group"
                  aria-labelledby={`pregunta-${question.id}`}
                  className="flex flex-wrap gap-3"
                >
                  {question.options!.map((option) => {
                    const on = Array.isArray(answer)
                      ? answer.includes(option)
                      : answer === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={on}
                        onClick={() => pick(option)}
                        className={`rounded-full px-6 py-3 text-lg transition-all duration-300 ${
                          on
                            ? tone.button
                            : "ring-1 ring-current/30 hover:ring-current"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : question.type === "long" ? (
                <textarea
                  autoFocus
                  name={question.id}
                  aria-labelledby={`pregunta-${question.id}`}
                  rows={2}
                  value={answer as string}
                  placeholder={question.placeholder}
                  onChange={(e) => set(e.target.value)}
                  className={`${input} resize-none`}
                />
              ) : (
                <input
                  autoFocus
                  type={question.type}
                  name={question.id}
                  aria-labelledby={`pregunta-${question.id}`}
                  autoComplete={AUTOCOMPLETE[question.id] ?? "off"}
                  spellCheck={question.type === "text"}
                  value={answer as string}
                  placeholder={question.placeholder}
                  onChange={(e) => set(e.target.value)}
                  className={input}
                />
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-6">
            {finished ? (
              <Link
                href="/"
                className={`rounded-full px-7 py-3.5 text-lg font-medium ${tone.button}`}
              >
                Volver al inicio
              </Link>
            ) : (
              <>
                {index > 0 ? (
                  <button
                    type="button"
                    onClick={() => setIndex(index - 1)}
                    className="text-sm opacity-60 transition-opacity hover:opacity-100"
                  >
                    ← Atrás
                  </button>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-5">
                  {question.optional && !last && (
                    <button
                      type="button"
                      onClick={next}
                      className="text-sm opacity-60 hover:opacity-100"
                    >
                      Omitir
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={!isValid(question, answer)}
                    className={`rounded-full px-7 py-3.5 text-lg font-medium transition-opacity duration-300 disabled:opacity-30 bg-ink text-white`}
                  >
                    {last ? "Enviar" : "Siguiente"}
                  </button>
                </div>
              </>
            )}
          </div>
        </form>

        {last && !finished && (
          <p className="text-sm text-ink/65">
            Al enviar aceptas la Política de Tratamiento de Datos.
          </p>
        )}
      </div>
    </main>
  );
}

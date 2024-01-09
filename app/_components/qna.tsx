"use client";

import { Greet } from "./greet";
import { Result } from "./result";
import { Question } from "./question";
import { useQuestion } from "@/store/use-question";

export const QnA = () => {
  const { stage } = useQuestion("stage");

  if (stage === "greet") {
    return <Greet />;
  }
  if (stage === "result") {
    return <Result />;
  }
  return <Question />;
};

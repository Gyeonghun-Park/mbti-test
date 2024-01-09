import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { answerTypeLength, qnaList, type QnaList } from "@/db/data";

import { createStoreHook } from "@/lib/store";

type Stage = "greet" | "questions" | "result";
type AnswerType = QnaList[number]["a"][number]["type"];

export type QuestionState = {
  questions: QnaList;
  answers: AnswerType;
  result: string;
  step: number;
  stage: Stage;
};
export type QuestionStore = QuestionState & {
  nextQuestion: () => void;
  appendAnswer: (answer: AnswerType) => void;
  setQuestion: (questions: QnaList) => void;
  setResult: (result: string) => void;
  setStage: (stage: Stage) => void;
};

const questionState: QuestionState = {
  questions: qnaList,
  answers: Array(answerTypeLength).fill(0),
  result: "",
  step: 0,
  stage: "greet",
};

export const questionStore = createWithEqualityFn<QuestionStore>(
  (set) => ({
    ...questionState,
    nextQuestion: () => set(({ step }) => ({ step: step + 1 })),
    appendAnswer: (answer: AnswerType) =>
      set(({ answers }) => {
        const newAnswers = answers;
        answer.forEach((ans) => {
          newAnswers[ans] += 1;
        });
        return { answers: newAnswers };
      }),
    setQuestion: (questions) => set(() => ({ questions })),
    setResult: (result) => set(() => ({ result })),
    setStage: (stage) => set(() => ({ stage })),
  }),
  shallow,
);
export const useQuestion = createStoreHook(questionStore);

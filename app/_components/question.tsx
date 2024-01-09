import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuestion } from "@/store/use-question";

export const Question = () => {
  const { questions, step, appendAnswer, nextQuestion, setStage } = useQuestion(
    "questions",
    "step",
    "appendAnswer",
    "nextQuestion",
    "setStage",
  );

  const progress = (step / questions.length) * 100;

  const handleAnswer = (type: number[]) => {
    appendAnswer(type);
    nextQuestion();

    if (step === questions.length - 1) {
      setStage("result");
    }
  };

  return (
    <div className="flex w-full flex-col gap-10">
      <Progress value={progress} className="h-4" />
      <p className="h-20 text-2xl leading-10 md:text-[2rem]">
        {questions[step].q}
      </p>

      <div className="flex flex-col gap-5">
        {questions[step].a.map(({ answer, type }) => (
          <Button size="lg" onClick={() => handleAnswer(type)}>
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

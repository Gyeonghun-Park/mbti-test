import { Avatar, AvatarImage } from "@/components/Avatar";

import { Button } from "@/components/ui/button";
import { useQuestion } from "@/store/use-question";

export const Greet = () => {
  const { setStage } = useQuestion("setStage");

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <p className="text-2xl font-semibold md:text-[2.5rem]">
        당신은 어떤 유형의 히어로/빌런일까요?
      </p>
      <Avatar>
        <AvatarImage src="/hok.jpeg" alt="hero logo" />
      </Avatar>

      <Button
        className="w-full"
        size="lg"
        onClick={() => setStage("questions")}
      >
        테스트 시작하기
      </Button>
    </div>
  );
};

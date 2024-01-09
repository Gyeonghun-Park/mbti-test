import { Avatar, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { resultList } from "@/db/data";
import { useQuestion } from "@/store/use-question";
import Image from "next/image";
import Link from "next/link";

export const Result = () => {
  const { answers } = useQuestion("answers");
  const idx = answers.indexOf(Math.max(...answers));
  const { name, desc } = resultList[idx];

  return (
    <div className="flex flex-col items-center gap-10 font-medium">
      <Avatar className="h-[18.75rem] w-[18.75rem]">
        <AvatarImage src={`/${idx}.jpeg`} alt="result image" />
      </Avatar>
      <p className="text-2xl md:text-3xl">{name}</p>
      <p className="text-lg">{desc}</p>

      <p>하단 히오클 로고를 눌러 오픈 카톡방에 입장하세요!</p>

      <Button asChild variant="link">
        <Link href="https://open.kakao.com/o/g0Q4QX1c">
          <Avatar className="h-[6.25rem] w-[6.25rem]">
            <AvatarImage
              src="/hok.jpeg"
              alt="hero logo"
              width={100}
              height={100}
            />
          </Avatar>
        </Link>
      </Button>
    </div>
  );
};

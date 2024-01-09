import { QnA } from "./_components/qna";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center text-pretty p-6 [contain:paint] md:p-10">
      <div className="w-full max-w-3xl">
        <QnA />
      </div>
    </main>
  );
}

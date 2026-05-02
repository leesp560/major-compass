import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IntroScreen } from "@/features/quiz/IntroScreen";
import { QuizScreen } from "@/features/quiz/QuizScreen";
import { ResultScreen } from "@/features/quiz/ResultScreen";
import { calculateResult, type MajorResult } from "@/features/quiz/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "나의 미래 전공은? · MZ세대 진로 심리테스트" },
      { name: "description", content: "24개의 일상 선택으로 알아보는 나의 적성 학과. 공학·의학·상경 9개 학과, 추천 대학과 2028 권장 이수과목, 초·중·고 학업 로드맵까지." },
      { property: "og:title", content: "나의 미래 전공은? · 진로 심리테스트" },
      { property: "og:description", content: "24개의 일상 선택으로 알아보는 적성 학과 + 추천 대학 + 학업 로드맵" },
    ],
  }),
  component: Index,
});

type Stage = "intro" | "quiz" | "result";

function Index() {
  const [stage, setStage] = useState<Stage>("intro");
  const [result, setResult] = useState<MajorResult | null>(null);

  return (
    <main className="relative mx-auto min-h-[100dvh] w-full max-w-md overflow-hidden">
      {stage === "intro" && (
        <IntroScreen onStart={() => setStage("quiz")} />
      )}
      {stage === "quiz" && (
        <QuizScreen
          onComplete={(selections) => {
            setResult(calculateResult(selections));
            setStage("result");
          }}
          onExit={() => setStage("intro")}
        />
      )}
      {stage === "result" && result && (
        <ResultScreen
          result={result}
          onRestart={() => {
            setResult(null);
            setStage("intro");
          }}
        />
      )}
    </main>
  );
}

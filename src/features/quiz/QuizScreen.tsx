import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { QUESTIONS } from "./data";

interface Props {
  onComplete: (selections: number[]) => void;
  onExit: () => void;
}

export function QuizScreen({ onComplete, onExit }: Props) {
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState<number[]>([]);
  const [picking, setPicking] = useState<number | null>(null);

  const q = QUESTIONS[current];
  const progress = ((current + (picking !== null ? 1 : 0)) / QUESTIONS.length) * 100;

  const handlePick = (optionIndex: number) => {
    if (picking !== null) return;
    setPicking(optionIndex);
    setTimeout(() => {
      const next = [...selections, optionIndex];
      if (current + 1 >= QUESTIONS.length) {
        onComplete(next);
      } else {
        setSelections(next);
        setCurrent(current + 1);
        setPicking(null);
      }
    }, 350);
  };

  const handleBack = () => {
    if (current === 0) {
      onExit();
      return;
    }
    setSelections(selections.slice(0, -1));
    setCurrent(current - 1);
    setPicking(null);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col px-6 py-6">
      {/* header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={handleBack}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white active:scale-95"
          aria-label="이전"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-white/60">
            <span>{current + 1} / {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="grad-primary h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* question */}
      <div key={current} className="animate-slide-up flex-1">
        <div className="grad-text mb-3 text-sm font-bold tracking-wider">
          {q.tag.toUpperCase()}
        </div>
        <h2 className="mb-8 text-2xl font-bold leading-snug text-white sm:text-[26px]">
          {q.text}
        </h2>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, idx) => {
            const isPicked = picking === idx;
            const isDimmed = picking !== null && picking !== idx;
            return (
              <button
                key={idx}
                onClick={() => handlePick(idx)}
                disabled={picking !== null}
                className={[
                  "group relative overflow-hidden rounded-2xl px-5 py-5 text-left text-white transition-all duration-300",
                  "glass hover:border-white/30",
                  isPicked ? "grad-primary scale-[1.02] border-transparent glow" : "",
                  isDimmed ? "opacity-40 scale-[0.98]" : "",
                  picking === null ? "active:scale-[0.98] hover:-translate-y-0.5" : "",
                ].join(" ")}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      isPicked ? "bg-white text-violet-600" : "bg-white/15 text-white/80",
                    ].join(" ")}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed">
                    {opt.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
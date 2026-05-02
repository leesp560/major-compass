import { Sparkles, Compass, GraduationCap } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function IntroScreen({ onStart }: Props) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-between px-6 py-10">
      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="animate-float absolute -right-20 top-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="animate-float absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center pt-12">
        <div className="glass animate-pop mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90">
          <Sparkles className="h-4 w-4" />
          MZ세대 진로 탐색 · 24문항
        </div>

        <h1 className="animate-slide-up text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          나의 미래
          <br />
          <span className="grad-text">대학 전공</span>은?
        </h1>

        <p className="animate-slide-up mt-5 text-center text-base leading-relaxed text-white/70" style={{ animationDelay: "120ms" }}>
          평범한 일상 속 24개의 선택이
          <br />
          당신의 적성과 어울리는 전공을 찾아드려요.
        </p>

        {/* feature cards */}
        <div className="animate-slide-up mt-10 grid w-full grid-cols-3 gap-3" style={{ animationDelay: "240ms" }}>
          <FeatureCard icon={<Compass className="h-5 w-5" />} label="성향 분석" />
          <FeatureCard icon={<GraduationCap className="h-5 w-5" />} label="대학·과목" />
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} label="학업 로드맵" />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-3 pb-4">
        <button
          onClick={onStart}
          className="grad-primary glow group relative w-full overflow-hidden rounded-2xl px-8 py-5 text-lg font-bold text-white transition-all active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            테스트 시작하기
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </button>
        <p className="text-xs text-white/50">약 3분 · 9개 학과 매칭 · 2028 권장과목 기준</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass flex flex-col items-center gap-2 rounded-2xl p-4 text-white/90">
      <div className="grad-primary flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-soft">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
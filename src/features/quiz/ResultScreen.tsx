import { RotateCcw, Share2, GraduationCap, BookOpen, Map, Briefcase, Sparkles } from "lucide-react";
import type { MajorResult } from "./data";

interface Props {
  result: MajorResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: Props) {
  const handleShare = async () => {
    const text = `나의 미래 전공은 「${result.name}」!\n${result.tagline}\n\n#미래전공탐색 #진로테스트`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "미래 전공 탐색", text, url: window.location.href });
      } catch { /* canceled */ }
    } else {
      await navigator.clipboard.writeText(text + "\n" + window.location.href);
      alert("결과가 클립보드에 복사되었어요!");
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col px-5 pb-8 pt-6">
      {/* Hero card */}
      <div className={`animate-pop relative overflow-hidden rounded-3xl bg-gradient-to-br ${result.gradient} p-7 text-white shadow-soft`}>
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/20 blur-2xl" />

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3 w-3" />
            {result.categoryLabel} · {result.type}
          </div>
          <div className="mb-2 text-6xl">{result.emoji}</div>
          <h1 className="text-3xl font-extrabold leading-tight">{result.name}</h1>
          <p className="mt-2 text-base font-medium text-white/90">{result.tagline}</p>

          <p className="mt-5 text-sm leading-relaxed text-white/85">{result.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {result.traits.map((t) => (
              <span key={t} className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section: similar majors */}
      <Section icon={<GraduationCap className="h-5 w-5" />} title="매칭 학과 TOP 3" delay={100}>
        <div className="grid grid-cols-1 gap-2">
          {result.similarMajors.map((m, i) => (
            <div
              key={m}
              className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-white/90"
            >
              <span className={`grad-primary flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white`}>
                {i + 1}
              </span>
              <span className="text-sm font-semibold">{m}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Section: careers */}
      <Section icon={<Briefcase className="h-5 w-5" />} title="추천 직업" delay={150}>
        <div className="flex flex-wrap gap-2">
          {result.careers.map((c) => (
            <span key={c} className="glass rounded-xl px-3 py-2 text-xs font-semibold text-white">
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Section: universities + subjects */}
      <Section icon={<BookOpen className="h-5 w-5" />} title="추천 대학 & 2028 권장 이수과목" delay={200}>
        <div className="space-y-2">
          {result.universities.map((u) => (
            <div key={u.name} className="rounded-xl bg-white/5 p-4">
              <div className="mb-1 text-sm font-bold text-white">{u.name}</div>
              <div className="text-xs text-white/65">{u.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-white/5 p-4">
          <div className="mb-2 text-xs font-bold text-fuchsia-300">핵심 과목</div>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {result.subjects.core.map((s) => (
              <span key={s} className="rounded-md bg-fuchsia-500/20 px-2.5 py-1 text-xs font-semibold text-white">
                {s}
              </span>
            ))}
          </div>
          <div className="mb-2 text-xs font-bold text-cyan-300">권장 과목</div>
          <div className="flex flex-wrap gap-1.5">
            {result.subjects.recommend.map((s) => (
              <span key={s} className="rounded-md bg-cyan-500/20 px-2.5 py-1 text-xs font-semibold text-white">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Section: roadmap */}
      <Section icon={<Map className="h-5 w-5" />} title="초·중·고 학업 로드맵" delay={250}>
        <div className="relative space-y-4 pl-1">
          {result.roadmap.map((r, i) => (
            <div key={r.stage} className="relative pl-8">
              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full grad-primary text-[10px] font-bold text-white">
                {i + 1}
              </div>
              {i < result.roadmap.length - 1 && (
                <div className="absolute left-[11px] top-7 h-full w-px bg-white/15" />
              )}
              <div className="rounded-xl bg-white/5 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/80">{r.stage}</span>
                  <span className="text-sm font-bold text-white">{r.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-white/65">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={onRestart}
          className="glass flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          <RotateCcw className="h-4 w-4" />
          다시 테스트
        </button>
        <button
          onClick={handleShare}
          className="grad-primary glow flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          <Share2 className="h-4 w-4" />
          결과 공유하기
        </button>
      </div>
    </div>
  );
}

function Section({
  icon, title, children, delay = 0,
}: { icon: React.ReactNode; title: string; children: React.ReactNode; delay?: number }) {
  return (
    <section className="animate-slide-up mt-6" style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-3 flex items-center gap-2 text-white">
        <div className="grad-primary flex h-8 w-8 items-center justify-center rounded-lg text-white">
          {icon}
        </div>
        <h3 className="text-base font-extrabold">{title}</h3>
      </div>
      {children}
    </section>
  );
}
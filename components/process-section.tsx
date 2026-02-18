import { FadeIn } from "./fade-in"

const steps = [
  {
    step: "01",
    title: "기획 방향 미팅",
    description: "제품/콘텐츠의 핵심 가치를 파악하고, 펀딩 전략의 큰 그림을 함께 그립니다.",
  },
  {
    step: "02",
    title: "스토리/리워드 구성 및 피드백",
    description: "소비자 관점에서 상세페이지를 설계하고, 전환율 높은 리워드 구조를 함께 만듭니다.",
  },
  {
    step: "03",
    title: "광고 진행 및 성과 해석",
    description: "마케팅 퍼널을 구축하고, 실시간 데이터를 기반으로 광고 성과를 최적화합니다.",
  },
  {
    step: "04",
    title: "런칭 후 브랜딩 설계",
    description: "펀딩 종료 후에도 지속 가능한 매출 구조와 브랜드 성장 전략을 설계합니다.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-card px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Process</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"협업 프로세스"}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 150}>
              <div className="flex h-full flex-col bg-background p-8 transition-colors hover:bg-muted/50">
                <span className="font-mono text-3xl font-bold text-primary/20">{item.step}</span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

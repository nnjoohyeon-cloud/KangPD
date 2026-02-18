import { FadeIn } from "./fade-in"
import { Search, Target, TrendingUp } from "lucide-react"

const strategies = [
  {
    icon: Search,
    number: "01",
    title: "제품/콘텐츠 USP 이해",
    items: [
      "판매자가 아닌 소비자의 시선에서 제품/콘텐츠의 강점을 분석합니다.",
      "가지고 있는 제품/콘텐츠가 가장 빛날 수 있도록 도와드립니다.",
    ],
  },
  {
    icon: Target,
    number: "02",
    title: "와디즈 펀딩 전략 설계",
    items: [
      "리워드 설계",
      "스토리(상세페이지) 기획 피드백",
      "광고, 마케팅 퍼널 설계",
      "광고 성과 해석",
    ],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "와디즈 이후 매출 상담",
    items: [
      "메이커 자체 랜딩 홈페이지 설계",
      "오가닉 마케팅(숏폼, 스레드 등 SNS) 설계",
    ],
  },
]

export function StrategySection() {
  return (
    <section id="strategy" className="bg-card px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Strategy</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"강주현 PD는 이렇게 일합니다."}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {strategies.map((strategy, i) => (
            <FadeIn key={strategy.number} delay={i * 150}>
              <div className="group relative rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <strategy.icon size={22} className="text-primary" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">{strategy.number}</span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">{strategy.title}</h3>

                <ul className="mt-4 flex flex-col gap-3">
                  {strategy.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FadeIn } from "./fade-in"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "글쓰기 마스터클래스",
    category: "클래스",
    strategy: "초기 서포터 확보를 위한 얼리버드 리워드 구조 + SNS 바이럴 전략",
    result: "목표 대비 2,847% 달성",
    description:
      "기존 출판 시장에 없던 온라인 글쓰기 클래스를 와디즈 최초로 기획. 타겟 오디언스를 정밀하게 세그먼트하고, 사전 마케팅 퍼널을 통해 D-day 시작과 동시에 목표 금액을 초과 달성.",
  },
  {
    name: "프리미엄 독서 구독 박스",
    category: "출판",
    strategy: "큐레이션 가치 중심 스토리텔링 + 반복 구매 유도 리워드 설계",
    result: "서포터 3,200명 돌파",
    description:
      "단순 책 판매가 아닌 '독서 경험'이라는 USP를 발굴하여 상세페이지를 감성 중심으로 재구성. 구독 모델 리워드를 설계하여 펀딩 이후에도 지속적인 매출 구조를 확보.",
  },
  {
    name: "AI 영어 학습 플랫폼",
    category: "테크/교육",
    strategy: "데이터 기반 광고 최적화 + B2C/B2B 투트랙 전략",
    result: "누적 펀딩 금액 4.2억",
    description:
      "AI 기반 서비스의 기술적 USP를 소비자 언어로 전환하여 상세페이지를 설계. 페이스북/인스타 광고 성과를 실시간으로 분석하며 ROAS를 극대화하는 퍼널 전략을 운영.",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Portfolio</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {"대표 프로젝트"}
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 150}>
              <div className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-4 flex items-center gap-2 text-xl font-bold text-foreground md:text-2xl">
                      {project.name}
                      <ArrowUpRight size={18} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>

                    <p className="mt-2 font-mono text-sm text-muted-foreground">
                      {"전략: "}{project.strategy}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-lg border border-border bg-background px-6 py-4 text-center md:ml-8">
                    <p className="text-xs text-muted-foreground">{"성과"}</p>
                    <p className="mt-1 font-mono text-lg font-bold text-accent">{project.result}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

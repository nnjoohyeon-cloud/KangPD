import { FadeIn } from "./fade-in"

const stats = [
  { value: "480+", label: "프로젝트 진행" },
  { value: "190억+", label: "누적 GMV" },
  { value: "1위", label: "출판·클래스 카테고리 PD" },
  { value: "50+", label: "억대 펀딩 경험" },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">About</p>
        </FadeIn>

        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          <div>
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                {"강주현 PD 소개"}
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {"와디즈에서 480+ 프로젝트를 진행하며 누적 GMV 190억+ 이상의 성과를 만들어 왔습니다. 출판·클래스 카테고리를 설립하고 1위 PD로 성장하며, 억대 펀딩을 다수 경험했습니다."}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="mt-6 border-l-2 border-primary pl-6 text-base font-medium leading-relaxed text-foreground md:text-lg">
                {"단순 프로젝트 진행이 아닌, 카테고리를 만들고 성장 구조를 설계해온 PD입니다."}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={100 + i * 100}>
                <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm">
                  <p className="font-mono text-2xl font-bold text-accent md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

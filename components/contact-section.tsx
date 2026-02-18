import { FadeIn } from "./fade-in"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Contact</p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"펀딩은 일회성이 아닌"}
            <br />
            <span className="text-accent">{"브랜딩 과정"}</span>
            {"입니다."}
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {"지속적인 성장을 향한"}
            <br />
            {"매출 구조를 설계해보세요."}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10">
            <a
              href="https://forms.gle/TBnSscaaFPu8debC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 font-mono text-sm font-medium text-primary-foreground tracking-wide transition-all hover:opacity-90"
            >
              {"지금 협업 문의하기"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

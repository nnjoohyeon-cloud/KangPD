"use client"

import { ArrowDown } from "lucide-react"
import { FadeIn } from "./fade-in"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="mb-6 font-mono text-sm tracking-widest text-primary uppercase">
            Strategic Funding Producer
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            {"펀딩을 넘어,"}
            <br />
            <span className="text-primary">{"브랜드의 성장"}</span>
            {"을"}
            <br />
            {"설계합니다."}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"펀딩은 감이 아닙니다."}
            <br />
            {"전략적으로 설계하고, 데이터를 바탕으로 운영됩니다."}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-accent md:text-4xl">480+</p>
              <p className="mt-1 text-sm text-muted-foreground">{"프로젝트 경험"}</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-accent md:text-4xl">190억+</p>
              <p className="mt-1 text-sm text-muted-foreground">{"누적 GMV"}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-12">
            <a
              href="https://forms.gle/TBnSscaaFPu8debC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-mono text-sm font-medium text-primary-foreground tracking-wide transition-all hover:opacity-90"
            >
              {"프로젝트 협업 문의하기"}
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  )
}

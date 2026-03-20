import { ArrowRight } from "lucide-react";
import Footer from "./components/Footer";
import HeroGraphic from "./components/HeroGraphic";
import { Gallery6 } from "@/components/blocks/gallery6";
import { siteContent } from "@/lib/site-content";

const { hero, projects, githubGuide } = siteContent;

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0052FF] pulse-dot" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0052FF]">
                  {hero.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em] text-[#0F172A] mb-6">
                {hero.headline}<br className="hidden sm:block" /> that{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">{hero.accent}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-gradient-to-r from-[#0052FF]/15 to-[#4D7CFF]/8" />
                </span>
              </h1>

              <p className="text-lg text-[#64748B] leading-relaxed mb-10 max-w-xl">
                {hero.body}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href={hero.cta.primary.href}
                  className="group inline-flex items-center gap-2 h-12 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] shadow-sm hover:-translate-y-0.5 hover:shadow-accent transition-all duration-200"
                >
                  {hero.cta.primary.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </a>
                <a
                  href={hero.cta.secondary.href}
                  className="inline-flex items-center h-12 px-6 rounded-xl font-medium text-[#0F172A] border border-[#E2E8F0] hover:border-[#0052FF]/30 hover:bg-[#F1F5F9] transition-all duration-200"
                >
                  {hero.cta.secondary.label}
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Gallery ───────────────────────────────────── */}
      <div id="projects" className="border-t border-[#E2E8F0]">
        <Gallery6
          heading={projects.heading}
          demoUrl={projects.cta.href}
          items={[...projects.items]}
        />
      </div>

      {/* ── GitHub Guide — Inverted ────────────────────────────── */}
      <section id="github-guide" className="bg-[#0F172A] py-28 relative overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#0052FF] opacity-[0.04] blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4D7CFF] pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#4D7CFF]">
              {githubGuide.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl lg:text-[3.25rem] text-white leading-[1.15] mb-16">
            {githubGuide.heading}{" "}
            <span className="gradient-text">{githubGuide.accent}</span>
          </h2>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {githubGuide.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-200"
              >
                <span className="font-mono text-3xl font-medium gradient-text block mb-4 leading-none">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold text-xl mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.code && (
                  <pre className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#94A3B8] overflow-x-auto">
                    <code className="font-mono">{item.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div className="mt-8 rounded-2xl border border-[#0052FF]/30 bg-[#0052FF]/10 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#4D7CFF] mb-2">
              Pro Tip
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              {githubGuide.proTip.split("`").map((part, i) =>
                i % 2 === 1 ? (
                  <code key={i} className={`font-mono ${part.includes("git branch") ? "text-[#4D7CFF]" : "text-white"}`}>
                    {part}
                  </code>
                ) : (
                  part
                ),
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

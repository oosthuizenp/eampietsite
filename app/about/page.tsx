import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import { siteContent } from "@/lib/site-content";

const { about, stack, principles, cta } = siteContent;

export default function About() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0052FF] pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0052FF]">
              {about.badge}
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-[-0.02em] text-[#0F172A] mb-8">
            {about.headline}{" "}
            <span className="relative inline-block">
              <span className="gradient-text">{about.accent}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-gradient-to-r from-[#0052FF]/15 to-[#4D7CFF]/8" />
            </span>
          </h1>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-[#64748B] leading-[1.75] ${i === 0 ? "text-lg mb-5" : "text-base"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Fast facts card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-md">
              <dl className="space-y-4">
                {about.facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 pb-4 border-b border-[#F1F5F9] last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#94A3B8] pt-0.5">
                      {label}
                    </dt>
                    <dd className="text-sm font-medium text-[#0F172A] text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack ───────────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0052FF]">
              {stack.badge}
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-[3.25rem] text-[#0F172A] leading-[1.15] mb-16">
            {stack.heading}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {stack.items.map(({ name, icon, desc }) => (
              <div
                key={name}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm group-hover:shadow-accent">
                  <span className="font-mono text-xs font-medium text-white">{icon}</span>
                </div>
                <p className="text-sm font-semibold text-[#0F172A] mb-1">{name}</p>
                <p className="text-xs text-[#94A3B8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles — Inverted ────────────────────────────────── */}
      <section className="bg-[#0F172A] py-28 relative overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#0052FF] opacity-[0.04] blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/10 px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4D7CFF]" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#4D7CFF]">
              {principles.badge}
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-[3.25rem] text-white leading-[1.15] mb-16">
            {principles.heading}{" "}
            <span className="gradient-text">{principles.accent}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {principles.items.map(({ number, title, body }) => (
              <div
                key={number}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-200"
              >
                <span className="font-mono text-3xl font-medium gradient-text block mb-5 leading-none">
                  {number}
                </span>
                <h3 className="text-white font-semibold text-xl mb-3 leading-tight">{title}</h3>
                <p className="text-[#94A3B8] text-sm leading-[1.75]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-28 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 px-5 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0052FF]">
                {cta.badge}
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-[3.25rem] text-[#0F172A] leading-[1.15] mb-5">
              {cta.heading}
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-10">{cta.body}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={cta.primary.href}
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] shadow-sm hover:-translate-y-0.5 hover:shadow-accent transition-all duration-200"
              >
                {cta.primary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>
              <a
                href={cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-6 rounded-xl font-medium text-[#0F172A] border border-[#E2E8F0] hover:border-[#0052FF]/30 hover:bg-[#F1F5F9] transition-all duration-200"
              >
                {cta.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

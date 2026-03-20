"use client";

import { motion } from "framer-motion";

export default function HeroGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto select-none" aria-hidden="true">
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,82,255,0.08),transparent_65%)]" />

      {/* Outer rotating dashed ring */}
      <motion.div
        className="absolute inset-6 rounded-full border-2 border-dashed border-[#0052FF]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute inset-20 rounded-full border border-[#4D7CFF]/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Center orb */}
      <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] opacity-20 blur-2xl" />

      {/* Corner accent block */}
      <div
        className="absolute top-8 right-8 w-11 h-11 rounded-xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF]"
        style={{ boxShadow: "0 8px 24px rgba(0,82,255,0.4)" }}
      />

      {/* Floating UI card */}
      <motion.div
        className="absolute top-[16%] left-[4%] bg-white rounded-2xl p-4 w-40 border border-[#E2E8F0]"
        style={{ boxShadow: "0 20px 40px rgba(15,23,42,0.10)" }}
        animate={{ y: [-7, 7, -7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] flex-shrink-0" />
          <div className="h-2 w-14 rounded-full bg-[#E2E8F0]" />
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="h-1.5 w-full rounded-full bg-[#F1F5F9]" />
          <div className="h-1.5 w-4/5 rounded-full bg-[#F1F5F9]" />
          <div className="h-1.5 w-3/5 rounded-full bg-[#F1F5F9]" />
        </div>
        <div className="h-6 w-full rounded-lg bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] opacity-80" />
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        className="absolute bottom-[20%] right-[3%] bg-white rounded-2xl p-4 w-36 border border-[#E2E8F0]"
        style={{ boxShadow: "0 20px 40px rgba(15,23,42,0.10)" }}
        animate={{ y: [7, -7, 7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-mono text-[9px] uppercase tracking-wider text-[#64748B] mb-1.5">
          Projects
        </p>
        <p className="font-display text-3xl text-[#0F172A] leading-none mb-2">5+</p>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <p className="text-xs text-[#64748B]">All shipped</p>
        </div>
      </motion.div>

      {/* Small floating badge */}
      <motion.div
        className="absolute top-[52%] right-[8%] bg-white rounded-xl px-3 py-2 border border-[#E2E8F0] flex items-center gap-2"
        style={{ boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#0052FF] pulse-dot" />
        <span className="font-mono text-[10px] text-[#0052FF] uppercase tracking-wide">
          Available
        </span>
      </motion.div>

      {/* Dot grid 3×3 */}
      <div className="absolute bottom-10 left-10 grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0052FF]/25" />
        ))}
      </div>
    </div>
  );
}

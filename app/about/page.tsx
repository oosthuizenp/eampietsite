export default function About() {
  const stack = [
    { name: "TypeScript", color: "sky" },
    { name: "React", color: "cyan" },
    { name: "Next.js", color: "violet" },
    { name: "Tailwind CSS", color: "teal" },
    { name: "Node.js", color: "emerald" },
    { name: "Git & GitHub", color: "orange" },
  ];

  const colorMap: Record<string, string> = {
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-zinc-700 text-xs text-zinc-400 uppercase tracking-widest">
          About Me
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
          The person{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            behind the code
          </span>
          .
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-6">
          Hey — I&apos;m Piet. I&apos;m a developer who loves building things that actually work.
          Not just technically correct things — things people enjoy using.
        </p>
        <p className="text-lg text-zinc-400 leading-relaxed">
          I&apos;ve been writing code long enough to know that the hard part is rarely
          the code itself. It&apos;s figuring out what to build, keeping it simple, and
          shipping it. I&apos;m obsessed with all three.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Stack */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-2">What I work with</h2>
        <p className="text-zinc-500 mb-10 text-sm">My current go-to stack.</p>
        <div className="flex flex-wrap gap-3">
          {stack.map(({ name, color }) => (
            <span
              key={name}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${colorMap[color]}`}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Values */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white mb-2">How I work</h2>
        <p className="text-zinc-500 mb-10 text-sm">Principles I actually follow, not just list.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: "⚡",
              title: "Ship fast",
              body: "A working thing beats a perfect idea. I bias toward action and iterate in the open.",
            },
            {
              icon: "🧹",
              title: "Keep it simple",
              body: "I write the least code that gets the job done — and delete it when it's no longer needed.",
            },
            {
              icon: "🔍",
              title: "Read the docs",
              body: "Seriously. Half the bugs in the world exist because someone didn't read the docs.",
            },
            {
              icon: "🤝",
              title: "Collaborate openly",
              body: "Good code is a team sport. I share early, ask questions, and review without ego.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <span className="text-2xl mb-4 block">{icon}</span>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Want to work together?</h2>
        <p className="text-zinc-400 mb-8">
          I&apos;m always open to interesting projects and conversations.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
        >
          Get in touch
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 text-center py-10 text-zinc-600 text-sm">
        Built by Piet &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

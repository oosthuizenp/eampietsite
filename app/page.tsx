export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <span className="text-lg font-bold tracking-tight text-white">piet.dev</span>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#github-guide" className="hover:text-white transition-colors">GitHub Guide</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-zinc-700 text-xs text-zinc-400 uppercase tracking-widest">
          Developer &amp; Builder
        </div>
        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tighter text-white leading-none mb-6">
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa, #38bdf8, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Piet
          </span>
          .
        </h1>
        <p className="max-w-xl text-xl text-zinc-400 leading-relaxed mb-10">
          I build things on the web. Clean code, bold ideas, and the occasional
          masterpiece shipped at 2 AM.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            See My Work
          </a>
          <a
            href="#github-guide"
            className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold transition-colors"
          >
            Push to GitHub
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <p className="text-zinc-400 mb-12">A few things I&apos;m proud of.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "This Website",
              description: "Built with Next.js, Tailwind, and way too much caffeine. You&apos;re looking at it.",
              tag: "Next.js",
              color: "violet",
            },
            {
              title: "Something Cool",
              description: "Replace this with your actual project. Make it sound rad.",
              tag: "TypeScript",
              color: "sky",
            },
            {
              title: "Another Banger",
              description: "Whatever you&apos;re building — it goes here. Ship it.",
              tag: "Open Source",
              color: "emerald",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-colors"
            >
              <span
                className={`inline-block mb-4 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  project.color === "violet"
                    ? "bg-violet-500/10 text-violet-400"
                    : project.color === "sky"
                    ? "bg-sky-500/10 text-sky-400"
                    : "bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {project.tag}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p
                className="text-sm text-zinc-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Guide */}
      <section id="github-guide" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-white mb-2">Push a Repo to GitHub</h2>
        <p className="text-zinc-400 mb-12">
          From zero to pushed — the steps that actually matter.
        </p>
        <ol className="space-y-8">
          {[
            {
              step: "01",
              title: "Create a new repo on GitHub",
              description:
                'Go to github.com, hit the + icon → "New repository". Give it a name, leave it empty (no README), then click Create.',
              code: null,
            },
            {
              step: "02",
              title: "Initialize git in your project",
              description: "Inside your project folder, run:",
              code: "git init",
            },
            {
              step: "03",
              title: "Stage all your files",
              description: "Add everything to the staging area:",
              code: "git add .",
            },
            {
              step: "04",
              title: "Make your first commit",
              description: "Commit with a message:",
              code: 'git commit -m "Initial commit"',
            },
            {
              step: "05",
              title: "Point to your GitHub remote",
              description:
                "Copy the repo URL from GitHub and add it as the remote origin:",
              code: "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git",
            },
            {
              step: "06",
              title: "Push it",
              description: "Send your code to GitHub:",
              code: "git push -u origin main",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-6">
              <span className="text-4xl font-black text-zinc-700 leading-none select-none w-10 shrink-0">
                {item.step}
              </span>
              <div className="flex-1 pt-1">
                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm mb-3">{item.description}</p>
                {item.code && (
                  <pre className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 text-sm text-emerald-400 overflow-x-auto font-mono">
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
          <p className="text-zinc-300 font-semibold mb-1">Pro tip</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            If your default branch is called <code className="text-violet-400 font-mono">master</code> instead of{" "}
            <code className="text-violet-400 font-mono">main</code>, rename it first:{" "}
            <code className="text-emerald-400 font-mono">git branch -M main</code>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 text-center py-10 text-zinc-600 text-sm">
        Built by Piet &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

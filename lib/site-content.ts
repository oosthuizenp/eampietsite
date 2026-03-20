export const siteContent = {

  // ── Global ────────────────────────────────────────────────────
  site: {
    name: "piet.dev",
    tagline: "At vero eos et accusamus.",
    email: "you@example.com",
    github: "https://github.com",
    twitter: "#",
    linkedin: "#",
  },

  // ── Metadata | Browser Tab (used in layout.tsx) ────────────────────────────
  metadata: {
    title:       "piet.dev — Dude, Developer & Builder",
    description: "p-Money. Writing code, shipping products, building things that matter.",
  },

  // ── Navigation ────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Home",  href: "/" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "GitHub ↗", href: "https://github.com" },
  },

  // ── Home — Hero ───────────────────────────────────────────────
  hero: {
    badge:    "Developer & Builder",
    headline: "Building things ",
    // The word that receives the gradient-text treatment
    accent:   "work.",
    body:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    cta: {
      primary:   { label: "View Projects", href: "#projects" },
      secondary: { label: "About Me",      href: "/about" },
    },
  },

  // ── Home — Projects section ───────────────────────────────────
  projects: {
    badge:   "Featured Work",
    heading: "Projects",
    cta:     { label: "View all", href: "#" },
    items: [
      {
        id:      "item-1",
        tag:     "Next.js",
        title:   "This Website",
        summary: "Built with Next.js, Tailwind CSS, and a deliberate design system. Clean code, shipped fast.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=800&q=80",
      },
      {
        id:      "item-2",
        tag:     "TypeScript",
        title:   "Something Cool",
        summary: "Replace this with your actual project. One punchy sentence that explains what it does and why it matters.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      },
      {
        id:      "item-3",
        tag:     "Open Source",
        title:   "Another Banger",
        summary: "Ship first, explain later. The work speaks. Add the description once the product earns it.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      },
      {
        id:      "item-4",
        tag:     "Node.js",
        title:   "A Fourth Thing",
        summary: "Four projects means you're serious. Or at least consistent. Fill this with something worth reading.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      },
      {
        id:      "item-5",
        tag:     "Full-Stack",
        title:   "The Big One",
        summary: "Every portfolio needs a showstopper. This is that slot. Make it count.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
      },
    ],
  },

  // ── Home — GitHub Guide ───────────────────────────────────────
  githubGuide: {
    badge:   "Git Guide",
    heading: "Push to",
    // Word that receives gradient-text
    accent:  "GitHub",
    proTip:  "If your default branch is `master` instead of `main`, rename it first: `git branch -M main`",
    steps: [
      {
        step:        "01",
        title:       "Create a repo on GitHub",
        description: 'Go to github.com → click + → "New repository". Name it, leave it empty (no README), click Create.',
        code:        null as string | null,
      },
      {
        step:        "02",
        title:       "Initialize git",
        description: "Inside your project folder:",
        code:        "git init",
      },
      {
        step:        "03",
        title:       "Stage your files",
        description: "Add everything to the staging area:",
        code:        "git add .",
      },
      {
        step:        "04",
        title:       "First commit",
        description: "Commit with a clear message:",
        code:        'git commit -m "Initial commit"',
      },
      {
        step:        "05",
        title:       "Add the remote",
        description: "Connect your local repo to GitHub:",
        code:        "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git",
      },
      {
        step:        "06",
        title:       "Push",
        description: "Send your code to GitHub:",
        code:        "git push -u origin main",
      },
    ],
  },

  // ── About — Hero ──────────────────────────────────────────────
  about: {
    badge:       "About Me",
    headline:    "The person",
    // Phrase that receives the gradient-text + underline treatment
    accent:      "behind the code.",
    bio: [
      "Hey — I'm Piet. I'm a developer who loves building things that actually work. Not just technically correct things — things people enjoy using.",
      "I've been writing code long enough to know that the hard part is rarely the code itself. It's figuring out what to build, keeping it simple, and shipping it. I'm obsessed with all three.",
    ],
    facts: [
      { label: "Name",       value: "Piet Oosthuizen" },
      { label: "Based",      value: "South Africa" },
      { label: "Specialty",  value: "Full-Stack Web" },
      { label: "Available",  value: "For hire" },
    ],
  },

  // ── About — Stack ─────────────────────────────────────────────
  stack: {
    badge:   "Tech Stack",
    heading: "What I work with",
    items: [
      { name: "TypeScript",  icon: "TS", desc: "Typed everything." },
      { name: "React",       icon: "Re", desc: "Component thinking." },
      { name: "Next.js",     icon: "N↑", desc: "Production React." },
      { name: "Tailwind CSS",icon: "TW", desc: "Utility-first." },
      { name: "Node.js",     icon: "No", desc: "Server-side JS." },
      { name: "Git & GitHub",icon: "Gi", desc: "Version control." },
    ],
  },

  // ── About — Principles ────────────────────────────────────────
  principles: {
    badge:   "How I Work",
    heading: "Principles I",
    // Word that receives gradient-text
    accent:  "actually follow",
    items: [
      {
        number: "01",
        title:  "Ship Fast",
        body:   "A working thing beats a perfect idea. I bias toward action and iterate in the open. Done and deployed beats theoretically elegant.",
      },
      {
        number: "02",
        title:  "Keep It Simple",
        body:   "I write the least code that gets the job done — and delete it when it's no longer needed. Complexity is a cost. Pay it deliberately.",
      },
      {
        number: "03",
        title:  "Read the Docs",
        body:   "Seriously. Half the bugs in the world exist because someone skimmed. I read actual documentation before writing a single line.",
      },
      {
        number: "04",
        title:  "Collaborate Openly",
        body:   "Good code is a team sport. I share early, ask questions without ego, and write code as if the next person who reads it is my future self.",
      },
    ],
  },

  // ── About — CTA ───────────────────────────────────────────────
  cta: {
    badge:    "Get in Touch",
    heading:  "Want to work together?",
    body:     "I'm always open to interesting projects and conversations. If you have something worth building, let's talk.",
    primary:  { label: "Email Me",  href: "mailto:you@example.com" },
    secondary:{ label: "GitHub ↗",  href: "https://github.com" },
  },

  // ── Footer ────────────────────────────────────────────────────
  footer: {
    logo:    { url: "/", title: "piet.dev" },
    tagline: "Writing code. Shipping products. Building things that matter.",
    menu: [
      {
        title: "Navigate",
        links: [
          { text: "Home",         url: "/" },
          { text: "About",        url: "/about" },
          { text: "Projects",     url: "/#projects" },
          { text: "GitHub Guide", url: "/#github-guide" },
        ],
      },
      {
        title: "Connect",
        links: [
          { text: "GitHub ↗",  url: "https://github.com" },
          { text: "Email",     url: "mailto:you@example.com" },
          { text: "Twitter ↗", url: "#" },
          { text: "LinkedIn ↗",url: "#" },
        ],
      },
      {
        title: "Stack",
        links: [
          { text: "Next.js",       url: "#" },
          { text: "Tailwind CSS",  url: "#" },
          { text: "TypeScript",    url: "#" },
          { text: "Framer Motion", url: "#" },
        ],
      },
      {
        title: "Projects",
        links: [
          { text: "This Website",  url: "#" },
          { text: "Something Cool",url: "#" },
          { text: "Another Banger",url: "#" },
        ],
      },
    ],
    bottomLinks: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Use",   url: "#" },
    ],
  },

} as const;

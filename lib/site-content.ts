export const siteContent = {

  // ── Global ────────────────────────────────────────────────────
  site: {
    name: "brad.dev",
    tagline: "Stories worth telling. Roles worth playing.",
    email: "contact@bradpitt.com",
    github: "https://github.com",           // placeholder — he doesn't really have one
    twitter: "https://x.com/bradpitt",      // placeholder
    linkedin: "#",
  },

  // ── Metadata | Browser Tab ─────────────────────────────────────
  metadata: {
    title:       "brad.dev — Actor, Producer, Storyteller",
    description: "Brad Pitt. Living the roles, producing the stories, chasing the real thing.",
  },

  // ── Navigation ────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Home",  href: "/" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "IMDb ↗", href: "https://www.imdb.com/name/nm0000093/" },
  },

  // ── Home — Hero ───────────────────────────────────────────────
  hero: {
    badge:    "Actor & Producer",
    headline: "Brad is still",
    accent:   "fighting.",
    body:     "From a hitchhiker in Thelma & Louise to Cliff Booth, from Tyler Durden's chaos to Billy Beane's quiet obsession — I've spent decades chasing characters that stay with you. Producing stories that matter through Plan B. Still learning, still working, still here.",
    cta: {
      primary:   { label: "View Films", href: "#projects" },
      secondary: { label: "About Me",   href: "/about" },
    },
  },

  // ── Home — Projects section (iconic films + recent) ───────────
  projects: {
    badge:   "Selected Work",
    heading: "Films",
    cta:     { label: "See Full Filmography", href: "https://www.imdb.com/name/nm0000093/" },
    items: [
      {
        id:      "item-1",
        tag:     "2019",
        title:   "Once Upon a Time in Hollywood",
        summary: "Cliff Booth — the coolest stuntman in Hollywood. Oscar for Best Supporting Actor. Still feels like yesterday.",
        url:     "https://www.imdb.com/title/tt7131622/",
        image:   "https://images.unsplash.com/photo-1594908900578-2d6a2a2c3d4e?w=800&q=80", // placeholder — imagine Cliff vibe
      },
      {
        id:      "item-2",
        tag:     "1999",
        title:   "Fight Club",
        summary: "Tyler Durden. First rule still applies. The film that broke rules and started conversations.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1588516903722-987b976cbedc?w=800&q=80",
      },
      {
        id:      "item-3",
        tag:     "2011",
        title:   "Moneyball",
        summary: "Billy Beane — changed how the game thinks about value. Produced it too. Numbers never lie.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      },
      {
        id:      "item-4",
        tag:     "2008",
        title:   "The Curious Case of Benjamin Button",
        summary: "A man aging backward. One of the most beautiful, heartbreaking things I've ever been part of.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80",
      },
      {
        id:      "item-5",
        tag:     "Upcoming",
        title:   "The Adventures of Cliff Booth",
        summary: "Back as Cliff. David Fincher directing, Tarantino script. Hitting Netflix in 2026. Buckle up.",
        url:     "#",
        image:   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
    ],
  },

  // ── Home — GitHub Guide (adapted to "Hollywood Guide" or keep light git joke?) ──
  githubGuide: {
    badge:   "Quick Tip",
    heading: "How to Survive",
    accent:  "Hollywood",
    proTip:  "Your best performance is the one no one sees coming. Prep hard, listen harder.",
    steps: [
      {
        step:        "01",
        title:       "Find the story",
        description: "The script chooses you as much as you choose it. Read everything.",
        code:        null,
      },
      {
        step:        "02",
        title:       "Commit fully",
        description: "No half-measures. Dive in — accent, physicality, truth.",
        code:        "be present",
      },
      {
        step:        "03",
        title:       "Collaborate",
        description: "Great directors, great co-stars, great crew. Ego checks at the door.",
        code:        null,
      },
      {
        step:        "04",
        title:       "Produce when you can",
        description: "Telling stories you believe in — Plan B was born from that.",
        code:        null,
      },
      {
        step:        "05",
        title:       "Stay grounded",
        description: "Oklahoma roots. Family. Real life outside the lights.",
        code:        null,
      },
    ],
  },

  // ── About — Hero ──────────────────────────────────────────────
  about: {
    badge:       "About Me",
    headline:    "The man",
    accent:      "behind the roles.",
    bio: [
      "Hey — I'm Brad. Born in Shawnee, Oklahoma. Raised in Springfield, Missouri. Left journalism school two credits shy to chase acting in LA.",
      "Been lucky enough to play cowboys, fighters, con men, astronauts, zombies, producers — and everything in between. The real win is when the work means something after the credits roll.",
    ],
    facts: [
      { label: "Name",      value: "William Bradley Pitt" },
      { label: "Born",      value: "December 18, 1963 — Shawnee, Oklahoma" },
      { label: "Based",     value: "Los Angeles" },
      { label: "Specialty", value: "Character acting & producing" },
      { label: "Status",    value: "Still working" },
    ],
  },

  // ── About — Stack (adapted to "tools of the trade") ───────────
  stack: {
    badge:   "Tools of the Trade",
    heading: "What I work with",
    items: [
      { name: "David Fincher",  icon: "DF", desc: "Precision. Intensity." },
      { name: "Quentin Tarantino", icon: "QT", desc: "Dialogue. Vision." },
      { name: "Plan B Ent.",   icon: "PБ", desc: "Producing stories that matter." },
      { name: "Method Acting", icon: "MA", desc: "Truth over comfort." },
      { name: "Scripts",       icon: "Sc", desc: "The starting point." },
      { name: "Collaborators", icon: "Co", desc: "Best part of the job." },
    ],
  },

  // ── About — Principles ────────────────────────────────────────
  principles: {
    badge:   "How I Work",
    heading: "Principles I",
    accent:  "actually live by",
    items: [
      {
        number: "01",
        title:  "Commit or Don't Bother",
        body:   "Half-in is worse than all-out. Go deep or go home.",
      },
      {
        number: "02",
        title:  "Story First",
        body:   "Character, visuals, box office — all matter. But the story is what lasts.",
      },
      {
        number: "03",
        title:  "Listen More Than You Talk",
        body:   "On set, in life. The best ideas usually come from someone else.",
      },
      {
        number: "04",
        title:  "Stay Curious",
        body:   "62 and still learning. New directors, new scripts, new ways to tell stories.",
      },
    ],
  },

  // ── About — CTA ───────────────────────────────────────────────
  cta: {
    badge:    "Let's Talk",
    heading:  "Got a story worth telling?",
    body:     "I'm always open to great scripts, interesting directors, and real conversations. If you've got something special, reach out.",
    primary:  { label: "Email Me",   href: "mailto:contact@bradpitt.com" },
    secondary:{ label: "IMDb ↗",     href: "https://www.imdb.com/name/nm0000093/" },
  },

  // ── Footer ────────────────────────────────────────────────────
  footer: {
    logo:    { url: "/", title: "brad.dev" },
    tagline: "Telling stories. Producing truth. Still chasing the next great role.",
    menu: [
      {
        title: "Navigate",
        links: [
          { text: "Home",         url: "/" },
          { text: "About",        url: "/about" },
          { text: "Films",        url: "/#projects" },
          { text: "Quick Tips",   url: "/#github-guide" },
        ],
      },
      {
        title: "Connect",
        links: [
          { text: "IMDb ↗",       url: "https://www.imdb.com/name/nm0000093/" },
          { text: "Email",        url: "mailto:contact@bradpitt.com" },
          { text: "X / Twitter ↗",url: "#" },
        ],
      },
      {
        title: "Collaborators",
        links: [
          { text: "Plan B",       url: "#" },
          { text: "David Fincher",url: "#" },
          { text: "Quentin Tarantino", url: "#" },
        ],
      },
      {
        title: "Iconic Roles",
        links: [
          { text: "Cliff Booth",  url: "#" },
          { text: "Tyler Durden", url: "#" },
          { text: "Billy Beane",  url: "#" },
        ],
      },
    ],
    bottomLinks: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Use",   url: "#" },
    ],
  },

} as const;
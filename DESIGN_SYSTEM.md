# Design Style: Newsprint

> **"All the News That's Fit to Print."**
> Apply this system to every page and component in this project.

---

## 1. Design Philosophy

This style is an ode to the golden age of print journalism, reimagined for the web. It embodies **absolute clarity, hierarchy, and structure** through its unwavering commitment to high-contrast typography, grid-based layouts, and sharp geometric precision.

### Core DNA
- **Stark Geometry**: Zero border radius. Every element is a perfect rectangle.
- **High Information Density**: Tight padding, collapsed grid borders, newspaper column layouts.
- **Typographic Drama**: Massive serif headlines paired with smaller legible body text.
- **Visible Structure**: Grid lines are celebrated, not hidden.
- **Editorial Authority**: Serious, timeless, trustworthy.
- **Paper Texture**: Subtle grain overlays simulate tactile newsprint.

---

## 2. Design Tokens

### Colors — Light Only (No Dark Mode)

| Token | Value | Usage |
|---|---|---|
| Background | `#F9F9F7` | All page backgrounds |
| Foreground | `#111111` | All text, borders |
| Accent | `#CC0000` | Hover states, badges, CTAs — use sparingly |
| Muted | `#E5E5E0` | Secondary borders, subtle backgrounds |
| Neutral 100 | `#F5F5F5` | Hover backgrounds |
| Neutral 500 | `#737373` | Metadata, captions |
| Neutral 600 | `#525252` | Body text variations |

### Typography

| Role | Font | Tailwind class |
|---|---|---|
| Headlines/Display | Playfair Display | `.font-serif` |
| Body/Long-form | Lora | `.font-body` |
| UI/Nav/Labels | Inter | `.font-sans` |
| Code/Data/Stats | JetBrains Mono | `.font-mono` |

**Scale:**
- Hero H1: `text-5xl sm:text-7xl lg:text-9xl` · `leading-[0.9]` · `tracking-tighter`
- Section H2: `text-4xl lg:text-5xl` · `font-black`
- Card H3: `text-2xl lg:text-3xl` · `font-bold`
- Body: `text-base` · `leading-relaxed` · Lora
- Labels: `text-xs uppercase tracking-widest` · Inter or JetBrains Mono

### Radius & Borders

- **Border Radius: `0px` everywhere. No exceptions.**
- Standard border: `1px solid #111111`
- Heavy divider: `4px solid #111111`
- Collapsed grids: `border-r` on children, `border-l border-t` on container

### Shadows

- **No soft shadows.**
- Hard offset hover shadow: `box-shadow: 4px 4px 0px 0px #111111` + `translate(-2px, -2px)`
- CSS class: `.hard-shadow-hover`

---

## 3. Custom Utilities (globals.css)

```css
/* All components must use sharp corners */
.sharp-corners { border-radius: 0px !important; }

/* Fine graph-paper line overlay for major sections */
.newsprint-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(0deg, transparent 98%, rgba(0,0,0,0.02) 100%),
    linear-gradient(90deg, transparent 98%, rgba(0,0,0,0.02) 100%);
  background-size: 3px 3px;
  pointer-events: none;
  opacity: 0.5;
}

/* Hard offset shadow on hover */
.hard-shadow-hover:hover {
  box-shadow: 4px 4px 0px 0px #111111;
  transform: translate(-2px, -2px);
}

/* 4×4px dot grid body background */
body {
  background-image: url("data:image/svg+xml,...");
}
```

---

## 4. Component Patterns

### Buttons

```tsx
// Primary
className="bg-[#111111] text-[#F9F9F7] border border-[#111111] px-6 py-3 uppercase tracking-widest text-sm font-sans transition-all duration-200 hover:bg-[#F9F9F7] hover:text-[#111111] min-h-[44px]"

// Outline
className="border border-[#111111] bg-transparent text-[#111111] px-6 py-3 uppercase tracking-widest text-sm font-sans transition-all duration-200 hover:bg-[#111111] hover:text-[#F9F9F7] min-h-[44px]"
```

### Cards

```tsx
className="border border-[#111111] bg-[#F9F9F7] p-6 hard-shadow-hover transition-all duration-200"
```

### Inputs

```tsx
className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[#F0F0F0] focus-visible:outline-none"
style={{ borderRadius: 0 }}
```

### Ornamental Divider

```tsx
<div className="py-8 text-center font-serif text-2xl text-neutral-400 tracking-[1em]">
  &#x2727; &#x2727; &#x2727;
</div>
```

---

## 5. Layout

- Max width: `max-w-screen-xl mx-auto px-4`
- Grid: `grid-cols-12` with `col-span-*`
- Preferred splits: 8/4, 5/7 (asymmetric editorial feel)
- Section padding: `py-16`
- Card padding: `p-6` to `p-8`

---

## 6. Bold/Editorial Choices (Required)

1. **Masthead metadata** in header: `Vol. 1 | [Date] | Developer Edition`
2. **Drop caps** on first paragraph of key sections
3. **Uppercase labels** everywhere (`uppercase tracking-widest text-xs font-mono`)
4. **Inverted sections** — at least one black background section per page
5. **Justified text** on multi-column body copy
6. **Collapsed grid borders** — share borders between adjacent cells
7. **Red accent** step numbers / badges — not more than 2–3 uses per page

---

## 7. What Never to Use

- ❌ Dark mode / dark backgrounds (except intentional inverted sections)
- ❌ Rounded corners / pills
- ❌ Soft drop shadows / blurs
- ❌ Gradient text (`background-clip: text`)
- ❌ Violet, sky, emerald color palette
- ❌ `zinc-*` Tailwind color tokens
- ❌ Bouncy/spring animations

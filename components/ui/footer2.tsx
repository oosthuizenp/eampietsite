import { siteContent } from "@/lib/site-content";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    /** If omitted, renders a gradient icon mark instead of an <img> */
    src?: string;
    alt?: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = siteContent.footer.logo,
  tagline = siteContent.footer.tagline,
  menuItems = siteContent.footer.menu.map((s) => ({ ...s, links: [...s.links] })),
  copyright = `© ${new Date().getFullYear()} ${siteContent.site.name} — All rights reserved.`,
  bottomLinks = [...siteContent.footer.bottomLinks],
}: Footer2Props) => {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0052FF] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {/* Brand column — spans 2 cols */}
          <div className="col-span-2 mb-8 lg:mb-0">
            <a
              href={logo.url}
              className="flex items-center gap-3 mb-4 group w-fit"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt ?? logo.title}
                  title={logo.title}
                  className="h-8 w-8 rounded-xl object-cover"
                />
              ) : (
                /* Gradient icon mark when no image provided */
                <div
                  className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  style={{ boxShadow: "0 4px 14px rgba(0,82,255,0.35)" }}
                />
              )}
              <span className="font-display text-xl text-white group-hover:text-[#4D7CFF] transition-colors duration-200">
                {logo.title}
              </span>
            </a>
            <p className="text-sm font-medium text-[#94A3B8] leading-relaxed max-w-[200px]">
              {tagline}
            </p>
          </div>

          {/* Link columns */}
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#475569]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 text-sm md:flex-row md:items-center">
          <p className="text-[#475569]">{copyright}</p>
          <ul className="flex flex-wrap gap-6">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx}>
                <a
                  href={link.url}
                  className="text-[#475569] underline underline-offset-4 decoration-[#475569]/40 hover:text-white hover:decoration-white/40 transition-colors duration-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer2 };

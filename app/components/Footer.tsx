import { Footer2 } from "@/components/ui/footer2";
import { siteContent } from "@/lib/site-content";

const { footer } = siteContent;

export default function Footer() {
  return (
    <Footer2
      logo={footer.logo}
      tagline={footer.tagline}
      menuItems={footer.menu as Parameters<typeof Footer2>[0]["menuItems"]}
      copyright={`© ${new Date().getFullYear()} ${footer.logo.title} — All rights reserved.`}
      bottomLinks={footer.bottomLinks as Parameters<typeof Footer2>[0]["bottomLinks"]}
    />
  );
}

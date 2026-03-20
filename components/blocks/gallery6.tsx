"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  tag?: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Projects",
  demoUrl = "#",
  items = [
    {
      id: "item-1",
      title: "This Website",
      tag: "Next.js",
      summary:
        "Built with Next.js, Tailwind CSS, and a deliberate design system. Clean code, shipped fast.",
      url: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=800&q=80",
    },
    {
      id: "item-2",
      title: "Something Cool",
      tag: "TypeScript",
      summary:
        "Replace this with your actual project. One punchy sentence that explains what it does and why it matters.",
      url: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    },
    {
      id: "item-3",
      title: "Another Banger",
      tag: "Open Source",
      summary:
        "Ship first, explain later. The work speaks. Add the description once the product earns it.",
      url: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
      id: "item-4",
      title: "A Fourth Thing",
      tag: "Node.js",
      summary:
        "Four projects means you're serious. Or at least consistent. Fill this with something worth reading.",
      url: "#",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    },
    {
      id: "item-5",
      title: "The Big One",
      tag: "Full-Stack",
      summary:
        "Every portfolio needs a showstopper. This is that slot. Make it count.",
      url: "#",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => { carouselApi.off("select", update); };
  }, [carouselApi]);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 px-5 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0052FF]">
                Featured Work
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-[3.25rem] text-[#0F172A] leading-[1.15]">
              {heading}
            </h2>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={demoUrl}
              className="group flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0052FF] transition-colors duration-200"
            >
              View all
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>

            {/* Nav controls — shared container */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Previous slide"
                className="disabled:opacity-30"
              >
                <ArrowLeft className="size-4" strokeWidth={1.5} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Next slide"
                className="disabled:opacity-30"
              >
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — bleeds past container */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent className="-mr-5 ml-4 md:ml-[max(1rem,calc(50vw-672px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-5 md:max-w-[420px]">
                <a
                  href={item.url}
                  className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {item.tag && (
                      <span className="inline-flex items-center gap-1.5 mb-3 self-start">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-[#0052FF] bg-[#0052FF]/8 border border-[#0052FF]/20">
                          {item.tag}
                        </span>
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-[#0F172A] leading-tight mb-2 tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6 flex-1 line-clamp-3">
                      {item.summary}
                    </p>
                    <div className="flex items-center text-sm font-medium text-[#0052FF] gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                      Read more
                      <ArrowRight className="size-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };

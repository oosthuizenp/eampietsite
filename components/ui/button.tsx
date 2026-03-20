import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Gradient blue → lifts with accent shadow on hover
        default:
          "bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] text-white shadow-sm hover:-translate-y-0.5 hover:shadow-accent",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:-translate-y-0.5",
        // Outline → fills on hover
        outline:
          "border border-[#E2E8F0] bg-transparent text-[#0F172A] hover:border-[#0052FF]/30 hover:bg-[#F1F5F9]",
        // Secondary — muted fill
        secondary:
          "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]",
        // Ghost — no border
        ghost:
          "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]",
        // Link — gradient underline on hover
        link:
          "text-[#0052FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 rounded-xl",
        sm:      "h-9  px-4 rounded-lg  text-xs",
        lg:      "h-14 px-8 rounded-xl  text-base",
        icon:    "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

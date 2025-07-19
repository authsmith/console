import { cn } from "@/lib/cn";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { JSX } from "solid-js";
import { splitProps, children as childrenFn } from "solid-js";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-[color,background-color,box-shadow] focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-light-50 text-dark-950 hover:bg-light-50/90",
        accent: "bg-accent-800 text-light-50 shadow hover:bg-accent-800/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-muted-800 bg-background shadow-sm hover:bg-white hover:text-dark-950",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2",
        sm: "h-6 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    class?: string;
  };

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, [
    "class",
    "variant",
    "size",
    "children",
  ]);
  const c = childrenFn(() => local.children);

  return (
    <button
      class={cn(
        buttonVariants({
          size: local.size,
          variant: local.variant,
        }),
        local.class,
      )}
      {...rest}
    >
      {c()}
    </button>
  );
};

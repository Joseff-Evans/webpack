import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "LogIT-inline-flex LogIT-items-center LogIT-justify-center LogIT-whitespace-nowrap LogIT-rounded-md LogIT-text-sm LogIT-font-medium LogIT-ring-offset-background LogIT-transition-colors focus-visible:LogIT-outline-none focus-visible:LogIT-ring-2 focus-visible:LogIT-ring-ring focus-visible:LogIT-ring-offset-2 disabled:LogIT-pointer-events-none disabled:LogIT-opacity-50",
  {
    variants: {
      variant: {
        default: "LogIT-bg-primary LogIT-text-primary-foreground hover:LogIT-bg-primary/90",
        destructive:
          "LogIT-bg-destructive LogIT-text-destructive-foreground hover:LogIT-bg-destructive/90",
        outline:
          "LogIT-border LogIT-border-input LogIT-bg-background hover:LogIT-bg-accent hover:LogIT-text-accent-foreground",
        secondary:
          "LogIT-bg-secondary LogIT-text-secondary-foreground hover:LogIT-bg-secondary/80",
        ghost: "hover:LogIT-bg-accent hover:LogIT-text-accent-foreground",
        link: "LogIT-text-primary LogIT-underline-offset-4 hover:LogIT-underline",
      },
      size: {
        default: "LogIT-h-10 LogIT-px-4 LogIT-py-2",
        sm: "LogIT-h-9 LogIT-rounded-md LogIT-px-3",
        lg: "LogIT-h-11 LogIT-rounded-md LogIT-px-8",
        icon: "LogIT-h-10 LogIT-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

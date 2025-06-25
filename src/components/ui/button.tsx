import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bs-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-bs-red text-bs-white-100 hover:bg-bs-red-dark focus-visible:ring-bs-red shadow-lg",
        destructive:
          "bg-bs-error text-bs-white-100 hover:bg-bs-error/90 focus-visible:ring-bs-error shadow-lg",
        outline:
          "border border-bs-black-300 bg-bs-black-200 text-bs-white-100 hover:bg-bs-black-300 focus-visible:ring-bs-white-100",
        secondary:
          "bg-bs-black-300 text-bs-white-100 border border-bs-black-400 hover:bg-bs-black-400 focus-visible:ring-bs-white-100",
        ghost: "text-bs-white-100 hover:bg-bs-black-300 focus-visible:ring-bs-white-100",
        link: "text-bs-white-100 hover:text-bs-red underline-offset-4 hover:underline focus-visible:ring-bs-red",
        success: "bg-bs-success text-bs-black hover:bg-bs-success/90 focus-visible:ring-bs-success shadow-lg",
        warning: "bg-bs-warning text-bs-black hover:bg-bs-warning/90 focus-visible:ring-bs-warning shadow-lg",
        info: "bg-bs-info text-bs-white-100 hover:bg-bs-info/90 focus-visible:ring-bs-info shadow-lg",
      },
      size: {
        default: "h-10 px-6 py-3 text-body-base",
        sm: "h-8 px-4 py-2 text-body-sm",
        lg: "h-12 px-8 py-4 text-body-lg",
        icon: "h-10 w-10",
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

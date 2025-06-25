import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full border rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bs-black disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-bs-black-200 border-bs-black-300 text-bs-white-100 placeholder:text-bs-white-400 focus-visible:ring-bs-red focus-visible:border-transparent",
        error: "bg-bs-black-200 border-bs-error text-bs-white-100 placeholder:text-bs-white-400 focus-visible:ring-bs-error focus-visible:border-transparent",
        success: "bg-bs-black-200 border-bs-success text-bs-white-100 placeholder:text-bs-white-400 focus-visible:ring-bs-success focus-visible:border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2 text-body-base",
        sm: "h-8 px-3 py-1 text-body-sm",
        lg: "h-12 px-4 py-3 text-body-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
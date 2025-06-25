import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-bs-red text-bs-white-100 hover:bg-bs-red-dark",
        secondary: "border-transparent bg-bs-black-200 text-bs-white-100 hover:bg-bs-black-300",
        destructive: "border-transparent bg-bs-error text-bs-white-100 hover:bg-bs-error/80",
        success: "border-transparent bg-bs-success text-bs-black hover:bg-bs-success/80",
        warning: "border-transparent bg-bs-warning text-bs-black hover:bg-bs-warning/80",
        info: "border-transparent bg-bs-info text-bs-white-100 hover:bg-bs-info/80",
        outline: "border-bs-black-300 text-bs-white-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
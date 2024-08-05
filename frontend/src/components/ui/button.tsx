import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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


// "use client";
// import React from "react";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";

// export function HoverBorderGradientDemo() {
//   return (
//     <div className="m-40 flex justify-center text-center">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
//       >
//         <AceternityLogo />
//         <span>Aceternity UI</span>
//       </HoverBorderGradient>
//     </div>
//   );
// }

// const AceternityLogo = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-black dark:text-white"
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };

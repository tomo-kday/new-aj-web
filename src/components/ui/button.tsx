import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gainsboro px-5 py-4",
	{
		variants: {
			variant: {
				default: "text-white bg-navy-blue hover:bg-dodger-blue",
				secondary:
					"text-night-rider bg-white border border-dim-gray hover:bg-white-smoke",
				cta: "text-white bg-cinnabar hover:bg-wild-watermelon",
			},
			// size has to be manually responsive
			// https://cva.style/docs/faqs#how-can-i-create-responsive-variants-like-stitchesjs
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3 text-red-400",
				lg: "h-11 rounded-md px-8",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
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
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };

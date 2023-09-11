import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const typographyVariants = cva("text-nero", {
	variants: {
		variant: {
			h1: "text-3xl font-bold leading-10 lg:text-5xl lg:leading-18",
			h2: "text-xl font-bold lg:text-2xl lg:leading-9",
			h3: "text-base font-bold lg:text-lg",
			h4: "text-sm font-bold lg:text-base",
			// h5: '',
			// h6: '',
			p: "text-sm font-normal lg:text-base",
			sm: "text-xs lg:text-sm",
			xs: "text-tiny lg:text-xs",
		},
	},
	defaultVariants: {
		variant: "p",
	},
});

type FormattingType =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "ul"
	| "li"
	| "span"
	| "div"
	| "pre"
	| "ol"
	| "dl"
	| "textarea"
	| "b"
	| "strong"
	| "i"
	| "em"
	| "mark"
	| "small"
	| "del"
	| "ins"
	| "sub"
	| "sup";

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
	NonNullable<VariantPropType["variant"]>,
	string
> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	// h5: 'h5',
	// h6: 'h6',
	p: "p",
	sm: "p",
	xs: "p",
};

export interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {
	asChild?: boolean;
	as?: FormattingType;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
	({ className, variant, as, asChild, ...props }, ref) => {
		const Comp = asChild
			? Slot
			: as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
		return (
			<Comp
				className={cn(typographyVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };

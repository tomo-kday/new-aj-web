type AngleBracketVariants = "left" | "right";

export const AngleBracket = (
	variant: AngleBracketVariants,
	className?: string,
	fill = "text-gray-200"
) => {
	switch (variant) {
		case "right":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					overflow="hidden"
					viewBox="0 0 1024 1024"
					className={className}
				>
					<path
						fill={fill}
						d="M682.667 533.333a21.333 21.333 0 01-15.147-6.186L368.853 228.48a21.333 21.333 0 0130.294-30.293l298.666 298.666a21.333 21.333 0 010 30.294 21.333 21.333 0 01-15.146 6.186z"
					></path>
					<path
						fill={fill}
						d="M384 832a21.333 21.333 0 01-15.147-6.187 21.333 21.333 0 010-30.293L667.52 496.853a21.333 21.333 0 0130.293 30.294L399.147 825.813A21.333 21.333 0 01384 832z"
					></path>
				</svg>
			);
		case "left":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					overflow="hidden"
					viewBox="0 0 1024 1024"
					className={className}
				>
					<path
						fill={fill}
						d="M640 832a21.333 21.333 0 01-15.147-6.187L326.187 527.147a21.333 21.333 0 0130.293-30.294L655.147 795.52a21.333 21.333 0 010 30.293A21.333 21.333 0 01640 832z"
					></path>
					<path
						fill={fill}
						d="M341.333 533.333a21.333 21.333 0 01-15.146-6.186 21.333 21.333 0 010-30.294l298.666-298.666a21.333 21.333 0 0130.294 30.293L356.48 527.147a21.333 21.333 0 01-15.147 6.186z"
					></path>
				</svg>
			);
		default:
			null;
	}
};

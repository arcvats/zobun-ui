import React, { FC } from "react";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import {
	baseStyle,
	variantStyle,
	sizeStyle,
	colorMap,
	ButtonProps,
} from "./consts";

export type { ButtonProps };

export const Button: FC<ButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			type = "button",
			variant = "contained",
			color = "primary",
			size = "medium",
			className,
			style,
			label,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				type={type}
				className={twMerge(
					clsx(
						baseStyle,
						variantStyle[variant],
						colorMap[variant][color],
						sizeStyle[size],
						className,
					),
				)}
				style={style}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

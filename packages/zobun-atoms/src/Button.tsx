import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

export type ButtonProps = {
	type?: "button" | "submit" | "reset";
	variant: "text" | "outlined" | "contained";
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantStyle: { [key in ButtonProps["variant"]]: string } = {
	text: "",
	outlined: "",
	contained: "",
};

export const Button: FC<ButtonProps> = ({
	type = "button",
	variant = "contained",
	primary = true,
	size = "medium",
	backgroundColor,
	label,
	...props
}) => {
	return (
		<button
			type={type}
			className={clsx("rounded px-2 py-1", variantStyle[variant])}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};

Button.displayName = "Button";

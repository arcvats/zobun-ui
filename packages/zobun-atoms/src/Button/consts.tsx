import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
	type?: "button" | "submit" | "reset";
	variant: "outlined" | "contained" | "text" | "neo" | "glass" | "circular";
	color:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger"
		| "info"
		| "light"
		| "dark";
	size: "small" | "medium" | "large";
	className?: string;
	style?: React.CSSProperties;
	asChild?: boolean;
	label: string;
	disabled?: boolean;
	onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const baseStyle =
	"inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const variantStyle: { [key in ButtonProps["variant"]]: string } = {
	contained: "rounded-md",
	outlined: "rounded-md border",
	text: "underline-offset-4 hover:underline",
	neo: "rounded-md border-2 border-neo-dark",
	glass: "rounded-md",
	circular: "rounded-full",
};

export const sizeStyle: { [key in ButtonProps["size"]]: string } = {
	small: "h-9 px-3",
	medium: "h-10 px-4 py-2",
	large: "h-11 px-8",
};

export const colorMap: {
	[key in ButtonProps["variant"]]: { [key in ButtonProps["color"]]: string };
} = {
	contained: {
		primary: "bg-primary hover:bg-primary/90 text-primary-foreground",
		secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
		success: "bg-success hover:bg-success/90 text-success-foreground",
		warning: "bg-warning hover:bg-warning/90 text-warning-foreground",
		danger: "bg-danger hover:bg-danger/90 text-danger-foreground",
		info: "bg-info hover:bg-info/90 text-info-foreground",
		light: "bg-light hover:bg-light/90 text-light-foreground",
		dark: "bg-dark hover:bg-dark/90 text-dark-foreground",
	},
	outlined: {
		primary:
			"text-primary border-primary hover:bg-primary hover:text-primary-foreground",
		secondary:
			"text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground",
		success:
			"text-success border-success hover:bg-success hover:text-success-foreground",
		warning:
			"text-warning border-warning hover:bg-warning hover:text-warning-foreground",
		danger:
			"text-danger border-danger hover:bg-danger hover:text-danger-foreground",
		info: "text-info border-info hover:bg-info hover:text-info-foreground",
		light: "text-light border-light hover:bg-light hover:text-light-foreground",
		dark: "text-dark border-dark hover:bg-dark hover:text-dark-foreground",
	},
	text: {
		primary: "text-primary",
		secondary: "text-secondary",
		success: "text-success",
		warning: "text-warning",
		danger: "text-danger",
		info: "text-info",
		light: "text-light",
		dark: "text-dark",
	},
	neo: {
		primary: "bg-neo-primary text-neo-primary-foreground",
		secondary: "bg-neo-secondary text-neo-secondary-foreground",
		success: "bg-neo-success text-neo-success-foreground",
		warning: "bg-neo-warning text-neo-warning-foreground",
		danger: "bg-neo-danger text-neo-danger-foreground",
		info: "bg-neo-info text-neo-info-foreground",
		light: "bg-neo-light text-neo-light-foreground",
		dark: "bg-neo-dark text-neo-dark-foreground",
	},
	glass: {
		primary: "bg-primary/70 text-primary",
		secondary: "bg-secondary/70 text-secondary",
		success: "bg-success/70 text-success",
		warning: "bg-warning/70 text-warning",
		danger: "bg-danger/70 text-danger",
		info: "bg-info/70 text-info",
		light: "bg-light/70 text-light",
		dark: "bg-dark/70 text-dark",
	},
	circular: {
		primary: "bg-primary hover:bg-primary/90 text-primary-foreground",
		secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
		success: "bg-success hover:bg-success/90 text-success-foreground",
		warning: "bg-warning hover:bg-warning/90 text-warning-foreground",
		danger: "bg-danger hover:bg-danger/90 text-danger-foreground",
		info: "bg-info hover:bg-info/90 text-info-foreground",
		light: "bg-light hover:bg-light/90 text-light-foreground",
		dark: "bg-dark hover:bg-dark/90 text-dark-foreground",
	},
};

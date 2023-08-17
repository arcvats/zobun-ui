import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    variant: "outlined" | "contained" | "text" | "neo" | "glass" | "circular";
    color: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark";
    size: "small" | "medium" | "large";
    className?: string;
    style?: React.CSSProperties;
    asChild?: boolean;
    label: string;
    disabled?: boolean;
    onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: FC<ButtonProps>;

export { Button, ButtonProps };

import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
declare function Button({ primary, size, backgroundColor, label, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
declare namespace Button {
    var displayName: string;
}

export { Button, ButtonProps };

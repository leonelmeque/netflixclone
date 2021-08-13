import React, { Ref } from 'react'

type ButtonProps = {
    label: string;
    variant: "primary" | "secondary" | "tertiary" | "text";
    size: "lg" | "md" | "sm";
    className?: string;
    icon?: string;
}

type CircleButtonProps = {
    icon: string
}

declare const Button = React.forwardRef<Ref, ButtonProps>((props,ref));
declare const CircleButton = React.forwardRef<Ref, CircleButtonProps>((props,ref));
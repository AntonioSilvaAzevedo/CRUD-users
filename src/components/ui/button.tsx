"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      type = "button",
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "px-4 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
      primary:
        "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
      secondary:
        "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary-dark)]",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

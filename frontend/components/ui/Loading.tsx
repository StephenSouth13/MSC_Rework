"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const loadingVariants = cva("animate-spin", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      success: "text-green-600",
      warning: "text-yellow-600",
      white: "text-white",
      gradient:
        "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text",
    },
    size: {
      sm: "w-4 h-4",
      default: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  text?: string;
  overlay?: boolean;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant, size, text, overlay, ...props }, ref) => {
    if (overlay) {
      return (
        <div
          ref={ref}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          {...props}
        >
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className={cn(loadingVariants({ variant, size }))} />
            {text && (
              <p className="text-sm text-muted-foreground animate-pulse">
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        <div className="flex flex-col items-center space-y-2">
          <Loader2 className={cn(loadingVariants({ variant, size }))} />
          {text && (
            <p className="text-sm text-muted-foreground animate-pulse">
              {text}
            </p>
          )}
        </div>
      </div>
    );
  },
);
Loading.displayName = "Loading";

// Skeleton Loading Component
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  avatar?: boolean;
  card?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, lines = 1, avatar, card, ...props }, ref) => {
    if (card) {
      return (
        <div
          ref={ref}
          className={cn("animate-pulse space-y-4", className)}
          {...props}
        >
          <div className="h-48 bg-muted rounded-lg"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      );
    }

    if (avatar) {
      return (
        <div
          ref={ref}
          className={cn("animate-pulse flex items-center space-x-3", className)}
          {...props}
        >
          <div className="rounded-full bg-muted h-10 w-10"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("animate-pulse space-y-2", className)}
        {...props}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-muted rounded",
              i === lines - 1 && lines > 1 && "w-3/4",
            )}
          />
        ))}
      </div>
    );
  },
);
Skeleton.displayName = "Skeleton";

// Dots Loading Component
export interface DotsLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bounce" | "pulse" | "fade";
  size?: "sm" | "default" | "lg";
  color?: string;
}

const DotsLoading = React.forwardRef<HTMLDivElement, DotsLoadingProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      color = "currentColor",
      ...props
    },
    ref,
  ) => {
    const dotSize = {
      sm: "w-1 h-1",
      default: "w-2 h-2",
      lg: "w-3 h-3",
    }[size];

    const getAnimation = (index: number) => {
      switch (variant) {
        case "bounce":
          return `animate-bounce-gentle`;
        case "pulse":
          return `animate-pulse-slow`;
        case "fade":
          return `animate-fade-in-up`;
        default:
          return `animate-pulse`;
      }
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-1", className)}
        {...props}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(dotSize, "rounded-full", getAnimation(i))}
            style={{
              backgroundColor: color,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    );
  },
);
DotsLoading.displayName = "DotsLoading";

// Spinner Component
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg" | "xl";
  variant?: "default" | "gradient" | "outline";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    const sizeClass = {
      sm: "w-4 h-4",
      default: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    }[size];

    const borderWidth = {
      sm: "border",
      default: "border-2",
      lg: "border-2",
      xl: "border-4",
    }[size];

    const variantClass = {
      default: "border-primary border-t-transparent",
      gradient:
        "border-transparent bg-gradient-to-r from-blue-600 to-purple-600",
      outline: "border-muted-foreground border-t-transparent",
    }[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full",
          sizeClass,
          borderWidth,
          variant === "gradient" ? "" : variantClass,
          className,
        )}
        style={
          variant === "gradient"
            ? {
                background: "conic-gradient(from 0deg, transparent, #3b82f6)",
                borderRadius: "50%",
              }
            : undefined
        }
        {...props}
      />
    );
  },
);
Spinner.displayName = "Spinner";

export { Loading, Skeleton, DotsLoading, Spinner, loadingVariants };

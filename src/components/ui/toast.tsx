"use client";

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "../utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "LogIT-fixed LogIT-top-0 LogIT-z-[100] LogIT-flex LogIT-max-h-screen LogIT-w-full LogIT-flex-col-reverse LogIT-p-4 sm:LogIT-bottom-0 sm:LogIT-right-0 sm:LogIT-top-auto sm:LogIT-flex-col md:LogIT-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "LogIT-group LogIT-pointer-events-auto LogIT-relative LogIT-flex LogIT-w-full LogIT-items-center LogIT-justify-between LogIT-space-x-4 LogIT-overflow-hidden LogIT-rounded-md LogIT-border LogIT-p-6 LogIT-pr-8 LogIT-shadow-lg LogIT-transition-all data-[swipe=cancel]:LogIT-translate-x-0 data-[swipe=end]:LogIT-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:LogIT-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:LogIT-transition-none data-[state=open]:LogIT-animate-in data-[state=closed]:LogIT-animate-out data-[swipe=end]:LogIT-animate-out data-[state=closed]:LogIT-fade-out-80 data-[state=closed]:LogIT-slide-out-to-right-full data-[state=open]:LogIT-slide-in-from-top-full data-[state=open]:sm:LogIT-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "LogIT-border LogIT-bg-background LogIT-text-foreground",
        destructive:
          "LogIT-destructive LogIT-group LogIT-border-destructive LogIT-bg-destructive LogIT-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "LogIT-inline-flex LogIT-h-8 LogIT-shrink-0 LogIT-items-center LogIT-justify-center LogIT-rounded-md LogIT-border LogIT-bg-transparent LogIT-px-3 LogIT-text-sm LogIT-font-medium LogIT-ring-offset-background LogIT-transition-colors hover:LogIT-bg-secondary focus:LogIT-outline-none focus:LogIT-ring-2 focus:LogIT-ring-ring focus:LogIT-ring-offset-2 disabled:LogIT-pointer-events-none disabled:LogIT-opacity-50 group-[.destructive]:LogIT-border-muted/40 group-[.destructive]:hover:LogIT-border-destructive/30 group-[.destructive]:hover:LogIT-bg-destructive group-[.destructive]:hover:LogIT-text-destructive-foreground group-[.destructive]:focus:LogIT-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "LogIT-absolute LogIT-right-2 LogIT-top-2 LogIT-rounded-md LogIT-p-1 LogIT-text-foreground/50 LogIT-opacity-0 LogIT-transition-opacity hover:LogIT-text-foreground focus:LogIT-opacity-100 focus:LogIT-outline-none focus:LogIT-ring-2 group-hover:LogIT-opacity-100 group-[.destructive]:LogIT-text-red-300 group-[.destructive]:hover:LogIT-text-red-50 group-[.destructive]:focus:LogIT-ring-red-400 group-[.destructive]:focus:LogIT-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="LogIT-h-4 LogIT-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("LogIT-text-sm LogIT-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("LogIT-text-sm LogIT-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

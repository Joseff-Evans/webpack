import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "../utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "LogIT-flex LogIT-cursor-default LogIT-select-none LogIT-items-center LogIT-rounded-sm LogIT-px-2 LogIT-py-1.5 LogIT-text-sm LogIT-outline-none focus:LogIT-bg-accent data-[state=open]:LogIT-bg-accent",
      inset && "LogIT-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="LogIT-ml-auto LogIT-h-4 LogIT-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "LogIT-z-50 LogIT-min-w-[8rem] LogIT-overflow-hidden LogIT-rounded-md LogIT-border LogIT-bg-popover LogIT-p-1 LogIT-text-popover-foreground LogIT-shadow-lg data-[state=open]:LogIT-animate-in data-[state=closed]:LogIT-animate-out data-[state=closed]:LogIT-fade-out-0 data-[state=open]:LogIT-fade-in-0 data-[state=closed]:LogIT-zoom-out-95 data-[state=open]:LogIT-zoom-in-95 data-[side=bottom]:LogIT-slide-in-from-top-2 data-[side=left]:LogIT-slide-in-from-right-2 data-[side=right]:LogIT-slide-in-from-left-2 data-[side=top]:LogIT-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (

    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "LogIT-z-50 LogIT-min-w-[8rem] LogIT-overflow-hidden LogIT-rounded-md LogIT-border LogIT-bg-popover LogIT-p-1 LogIT-text-popover-foreground LogIT-shadow-md data-[state=open]:LogIT-animate-in data-[state=closed]:LogIT-animate-out data-[state=closed]:LogIT-fade-out-0 data-[state=open]:LogIT-fade-in-0 data-[state=closed]:LogIT-zoom-out-95 data-[state=open]:LogIT-zoom-in-95 data-[side=bottom]:LogIT-slide-in-from-top-2 data-[side=left]:LogIT-slide-in-from-right-2 data-[side=right]:LogIT-slide-in-from-left-2 data-[side=top]:LogIT-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />

))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "LogIT-relative LogIT-flex LogIT-cursor-default LogIT-select-none LogIT-items-center LogIT-rounded-sm LogIT-px-2 LogIT-py-1.5 LogIT-text-sm LogIT-outline-none LogIT-transition-colors focus:LogIT-bg-accent focus:LogIT-text-accent-foreground data-[disabled]:LogIT-pointer-events-none data-[disabled]:LogIT-opacity-50",
      inset && "LogIT-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "LogIT-relative LogIT-flex LogIT-cursor-default LogIT-select-none LogIT-items-center LogIT-rounded-sm LogIT-py-1.5 LogIT-pl-8 LogIT-pr-2 LogIT-text-sm LogIT-outline-none LogIT-transition-colors focus:LogIT-bg-accent focus:LogIT-text-accent-foreground data-[disabled]:LogIT-pointer-events-none data-[disabled]:LogIT-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="LogIT-absolute LogIT-left-2 LogIT-flex LogIT-h-3.5 LogIT-w-3.5 LogIT-items-center LogIT-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="LogIT-h-4 LogIT-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "LogIT-relative LogIT-flex LogIT-cursor-default LogIT-select-none LogIT-items-center LogIT-rounded-sm LogIT-py-1.5 LogIT-pl-8 LogIT-pr-2 LogIT-text-sm LogIT-outline-none LogIT-transition-colors focus:LogIT-bg-accent focus:LogIT-text-accent-foreground data-[disabled]:LogIT-pointer-events-none data-[disabled]:LogIT-opacity-50",
      className
    )}
    {...props}
  >
    <span className="LogIT-absolute LogIT-left-2 LogIT-flex LogIT-h-3.5 LogIT-w-3.5 LogIT-items-center LogIT-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="LogIT-h-2 LogIT-w-2 LogIT-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "LogIT-px-2 LogIT-py-1.5 LogIT-text-sm LogIT-font-semibold",
      inset && "LogIT-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("LogIT--mx-1 LogIT-my-1 LogIT-h-px LogIT-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("LogIT-ml-auto LogIT-text-xs LogIT-tracking-widest LogIT-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

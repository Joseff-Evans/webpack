import * as React from 'react';

import { Moon, Sun } from "lucide-react"

import { Button } from "../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  const rootRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={rootRef}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="LogIT-h-[1.2rem] LogIT-w-[1.2rem] LogIT-rotate-0 LogIT-scale-100 LogIT-transition-all dark:LogIT--rotate-90 dark:LogIT-scale-0" />
            <Moon className="LogIT-absolute LogIT-h-[1.2rem] LogIT-w-[1.2rem] LogIT-rotate-90 LogIT-scale-0 LogIT-transition-all dark:LogIT-rotate-0 dark:LogIT-scale-100" />
            <span className="LogIT-sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
          <DropdownMenuContent className='radix-dropdown' align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}

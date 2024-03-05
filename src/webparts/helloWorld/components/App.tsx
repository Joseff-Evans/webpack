import * as React from "react";

import ToastyBoi from './toastyBoi';
import { ThemeProvider } from './ThemeProvider';
import { ModeToggle } from './ThemeToggle';
import Toaster from '../../../components/ui/toaster';

export default function App() {

    return (
      <div id='LogIT-root' className='LogIT-root LogIT-h-full LogIT-w-full'>
        <ThemeProvider defaultTheme="dark" storageKey="LogIT-ui-theme">
          <div className="LogIT-bg-background LogIT-text-foreground LogIT-w-full LogIT-h-full">
            <Toaster />
            <ModeToggle/>
            <ToastyBoi />
          </div>
        </ThemeProvider>
      </div>
    )

}
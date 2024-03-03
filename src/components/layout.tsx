"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

// Add type definition for ReactNode
type ReactNode = React.ReactElement | React.Fragment | string | number | null | undefined;

export function Layout({ children }: { children: ReactNode | undefined }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default Layout;

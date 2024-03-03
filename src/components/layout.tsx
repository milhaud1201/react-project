"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: ReactNode | undefined }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default Layout;

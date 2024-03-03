"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactNode } from "@types/react";

export function Layout({ children }: { children: ReactNode | undefined }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default Layout;

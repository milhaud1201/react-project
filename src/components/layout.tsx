"use client";

// import React from "react";
import { ReactNode } from 'react';
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;

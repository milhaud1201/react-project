"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  // children이 undefined일 경우 예외 처리
  if (!children) {
    throw new Error("`Layout` component requires a `children` prop.");
  }

export default Layout;

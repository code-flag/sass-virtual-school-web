"use client";

import { ThemeProvider } from "next-themes";
import QueryProvider from "@/providers/query-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <QueryProvider>
       {children}
      </QueryProvider>
    </ThemeProvider>
  );
}

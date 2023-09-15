'use client'

import { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({ children }: { children: ReactNode }) {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}

export default ThemeProvider

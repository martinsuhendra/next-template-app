'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

enum Themes {
  Light = 'light',
  Dark = 'dark',
}

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 btn btn-sm btn-square btn-ghost"
      onClick={() =>
        setTheme(resolvedTheme === Themes.Dark ? Themes.Light : Themes.Dark)
      }
    >
      {resolvedTheme === Themes.Dark ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  )
}

export default ThemeButton

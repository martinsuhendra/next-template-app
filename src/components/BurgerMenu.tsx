import { Bars2Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import AuthLink from './AuthLink'

function BurgerMenu() {
  return (
    <div>
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="drawer"
          className="btn btn-sm btn-square btn-ghost md:hidden transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
        >
          <Bars2Icon className="h-5 w-5" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-1">
          <li>
            <div
              id="logo"
              className="flex-1 sm:text-left md:text-center text-2xl font-extrabold"
            >
              blogdev
            </div>
          </li>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Abouth</Link>
          </li>
          <li>
            <AuthLink />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu

import Image from 'next/image'
import Link from 'next/link'

import AuthLink from './AuthLink'
import BurgerMenu from './BurgerMenu'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="flex container justify-between items-center h-24 sticky top-0 backdrop-blur-md w-full z-20">
      <div id="social" className="flex-1 gap-2 md:flex hidden">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div
        id="logo"
        className="flex-1 sm:text-left md:text-center text-2xl font-extrabold"
      >
        blogdev
      </div>
      <div
        id="links"
        className="flex flex-1 gap-2 md:gap-5 justify-end items-center"
      >
        <ThemeToggle />
        <Link className="hidden md:inline" href="/">
          Homepage
        </Link>
        <Link className="hidden md:inline" href="/">
          Contact
        </Link>
        <Link className="hidden md:inline" href="/">
          About
        </Link>
        <div className="hidden md:inline">
          <AuthLink />
        </div>
        <BurgerMenu />
      </div>
    </nav>
  )
}

export default Navbar

import Image from 'next/image'
import Link from 'next/link'

import AuthLink from './AuthLink'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <div className="flex justify-between items-center h-24">
      <div id="social" className="flex flex-1 gap-2">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div id="logo" className="flex-1 text-center text-2xl font-extrabold">
        blogdev
      </div>
      <div id="links" className="flex flex-1 gap-5 justify-end items-center">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLink />
      </div>
    </div>
  )
}

export default Navbar

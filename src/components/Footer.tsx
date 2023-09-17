import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="mt-12 py-5 flex flex-wrap gap-5 justify-between">
      <div className="flex flex-col gap-4 w-full lg:w-3/6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="sm:text-left md:text-center text-2xl font-extrabold">
            devblog
          </h1>
        </div>
        <p className="text-base text-stone-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-2">
          <Image src="/facebook.png" width={18} height={18} alt="facebook" />
          <Image src="/instagram.png" width={18} height={18} alt="instagram" />
          <Image src="/tiktok.png" width={18} height={18} alt="tiktok" />
          <Image src="/youtube.png" width={18} height={18} alt="youtube" />
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-lg font-bold">Links</span>
          <Link href="/" className="text-stone-500">
            Homepage
          </Link>
          <Link href="/" className="text-stone-500">
            Blog
          </Link>
          <Link href="/" className="text-stone-500">
            About
          </Link>
          <Link href="/" className="text-stone-500">
            Contact
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-lg font-bold">Tags</span>
          <Link href="/" className="text-stone-500">
            Style
          </Link>
          <Link href="/" className="text-stone-500">
            Fashion
          </Link>
          <Link href="/" className="text-stone-500">
            Coding
          </Link>
          <Link href="/" className="text-stone-500">
            Travel
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <span className="text-lg font-bold">Social</span>
          <Link href="/" className="text-stone-500">
            Facebook
          </Link>
          <Link href="/" className="text-stone-500">
            Instagram
          </Link>
          <Link href="/" className="text-stone-500">
            Tiktok
          </Link>
          <Link href="/" className="text-stone-500">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

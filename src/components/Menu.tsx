import Image from 'next/image'
import Link from 'next/link'

function Menu() {
  return (
    <div className="mt-12 col-span-2">
      <h4 className="text-gray-500">What&apos;s hot</h4>
      <h3 className="mb-12 text-3xl font-semibold">Most Popular</h3>
      <Link href="/" className="flex gap-5 items-center">
        <div className="relative w-20 h-20 aspect-square">
          <Image
            src="/post-hero.jpeg"
            fill
            className="object-cover rounded-full border-2 border-slate-400"
            alt=""
          />
        </div>
        <div className="flex-[5] flex flex-col gap-1">
          <span className="badge badge-lg bg-secondary-500 text-white">
            Travel
          </span>
          <h4 className="font-medium text-lg text-stone-500">
            Lorem Ipsum is simply dummy text of the printing.
          </h4>
          <div>
            <span className="text-xs font-medium">John Doe</span>
            <span className="text-xs text-stone-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Menu

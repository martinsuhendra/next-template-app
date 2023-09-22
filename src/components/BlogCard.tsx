import Image from 'next/image'
import Link from 'next/link'
import PostHeroImage from 'public/post-hero.jpeg'

function BlogCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-12 gap-12">
      <div className="relative w-full lg:flex-1 h-[240px] lg:h-[350px]">
        <Image
          src={PostHeroImage}
          fill
          alt="blog image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <div>
          <span className="text-gray-400">11.02.2023 - </span>
          <span className="text-[crimson] font-medium">CULTURE</span>
        </div>
        <h3 className="font-bold text-xl sm:text-2xl md:text-4xl">
          Lorem Ipsum is simply dummy text of the printing.
        </h3>
        <p className="text-sm md:text-base text-stone-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link className="link dark:text-white text-[crimson]" href="/">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard

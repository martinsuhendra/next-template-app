import Image from 'next/image'
import Link from 'next/link'

import { BlogCategory } from '@/types'

interface BlogCategoryCardProps {
  category: BlogCategory
}

function BlogCategoryCard({ category }: BlogCategoryCardProps) {
  const { imgUrl, label, color } = category

  return (
    <Link
      href="/blog?cat=style"
      className={`flex flex-1 flex-shrink-0 justify-center items-center gap-2 capitalize w-1/7 h-20 rounded-xl bg-${color} min-w-fit px-6`}
    >
      <div className="relative w-8 h-8">
        <Image
          src={imgUrl}
          alt="style category"
          fill
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      {label}
    </Link>
  )
}

export default BlogCategoryCard

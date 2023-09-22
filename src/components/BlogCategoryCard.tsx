import Image from 'next/image'
import Link from 'next/link'

import { BlogCategory, ColorVariations } from '@/types'

const colorVariations: Record<ColorVariations, string> = {
  primary: 'bg-primary-100',
  secondary: 'bg-secondary-100',
  info: 'bg-info-100',
  warning: 'bg-warning-100',
  success: 'bg-success-100',
  error: 'bg-error-100',
}
interface BlogCategoryCardProps {
  category: BlogCategory
}

function BlogCategoryCard({ category }: BlogCategoryCardProps) {
  const { imgUrl, label, color } = category

  return (
    <Link
      href="/blog?cat=style"
      className={`flex flex-1 flex-shrink-0 justify-center items-center gap-2 capitalize w-1/7 h-20 rounded-xl ${colorVariations[color]} min-w-fit px-8`}
    >
      <div className="relative w-8 h-8">
        <Image
          src={imgUrl}
          alt="style category"
          fill
          className="rounded-full object-cover"
        />
      </div>
      {label}
    </Link>
  )
}

export default BlogCategoryCard

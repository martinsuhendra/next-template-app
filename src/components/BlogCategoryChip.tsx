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
interface BlogCategoryChipProps {
  category: BlogCategory
}

function BlogCategoryChip({ category }: BlogCategoryChipProps) {
  const { label, color } = category
  return (
    <Link
      href="/blog?cat=style"
      className={`flex flex-1 font-medium justify-center items-center capitalize rounded-xl ${colorVariations[color]} h-10 min-w-fit max-w-fit px-5`}
    >
      {label}
    </Link>
  )
}

export default BlogCategoryChip

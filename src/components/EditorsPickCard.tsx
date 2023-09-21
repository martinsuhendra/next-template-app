import Image from 'next/image'
import Link from 'next/link'
import PostHeroImage from 'public/post-hero.jpeg'

import { BlogCategory, ColorVariations } from '@/types'

const colorVariations: Record<ColorVariations, string> = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  info: 'bg-info-500',
  warning: 'bg-warning-500',
  success: 'bg-success-500',
  error: 'bg-error-500',
}

interface EditorsPickCardProps {
  category: BlogCategory
  hideImage?: boolean
}

function EditorsPickCard({
  category,
  hideImage = false,
}: EditorsPickCardProps) {
  const { label, color } = category
  return (
    <Link href="/" className="flex gap-5 items-center mb-8">
      <div
        className={`relative w-20 h-20 aspect-square ${
          hideImage ? 'hidden' : undefined
        }`}
      >
        <Image
          src={PostHeroImage}
          fill
          className="object-cover rounded-full border-2 border-slate-400"
          alt=""
        />
      </div>
      <div className="flex-[5] flex flex-col gap-1">
        <span className={`badge ${colorVariations[color]} text-white`}>
          {label}
        </span>
        <h4 className="font-medium">Lorem Ipsum is simply dummy text.</h4>
        <div>
          <span className="text-xs font-medium">John Doe</span>
          <span className="text-xs text-stone-500"> - 10.03.2023</span>
        </div>
      </div>
    </Link>
  )
}

export default EditorsPickCard

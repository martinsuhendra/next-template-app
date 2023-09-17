import { CATEGORIES_LIST } from '@/constants'

import BlogCategoryChip from './BlogCategoryChip'
import EditorsPickCard from './EditorsPickCard'

function Menu() {
  return (
    <div className="mt-12 col-span-7 md:col-span-2">
      <h4 className="text-gray-500">What&apos;s hot?</h4>
      <h3 className="mb-12 text-3xl font-semibold">Most Popular</h3>
      {CATEGORIES_LIST.map(
        (category, idx) =>
          idx <= 2 && (
            <EditorsPickCard
              key={category.label}
              category={category}
              hideImage
            />
          ),
      )}
      <h4 className="text-gray-500">Discover by topic</h4>
      <h3 className="mb-12 text-3xl font-semibold">Categories</h3>
      <div className="mb-12 flex flex-wrap gap-3">
        {CATEGORIES_LIST.map((category) => (
          <BlogCategoryChip key={category.label} category={category} />
        ))}
      </div>
      <h4 className="text-gray-500">Chosen by the editor</h4>
      <h3 className="mb-12 text-3xl font-semibold">Editors Pick</h3>
      {CATEGORIES_LIST.map(
        (category, idx) =>
          idx <= 3 && (
            <EditorsPickCard key={category.label} category={category} />
          ),
      )}
    </div>
  )
}

export default Menu

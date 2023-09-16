import { CATEGORIES_LIST } from '@/constants'

import BlogCategoryCard from './BlogCategoryCard'

function CategoryList() {
  return (
    <div>
      <h3 className="my-12 text-3xl font-semibold">Popular Categories</h3>
      <div className="flex flex-wrap justify-between gap-5">
        {CATEGORIES_LIST.map((category) => (
          <BlogCategoryCard category={category} key={category.label} />
        ))}
      </div>
    </div>
  )
}

export default CategoryList

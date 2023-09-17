import BlogCard from './BlogCard'
import Pagination from './Pagination'

function CardList() {
  return (
    <div className="col-span-7 md:col-span-5">
      <h3 className="my-12 text-3xl font-semibold">Recent Posts</h3>
      <div id="posts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList

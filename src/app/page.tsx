import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-7 justify-between gap-12">
        <CardList />
        <Menu />
      </div>
    </main>
  )
}

import CardList from '@/components/CardList'
import CategoryList from '@/components/CategoryList'
import Featured from '@/components/Featured'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </main>
  )
}

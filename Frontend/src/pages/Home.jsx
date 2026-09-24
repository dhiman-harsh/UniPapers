import Categories from "../components/Categories.jsx"
import CategoryCard from "../components/CategoryCard.jsx"
import SearchBar from "../components/SearchBar.jsx"

const Home = () => {
  return (
    <div className="flex-1">
      <SearchBar />
      {/* <Categories title="My Saved Papers" /> */}
      <Categories title="Program Categories">
  <CategoryCard title="BA" subtitle="Bachelor of Arts" program="ba" />
  <CategoryCard title="BCA" subtitle="Bachelor of Computer Applications" program="bca" />
  <CategoryCard title="BCom" subtitle="Bachelor of Commerce" program="bcom" />
  <CategoryCard title="BSc" subtitle="Bachelor of Science" program="bsc" />
  <CategoryCard title="BTech" subtitle="Bachelor of Technology" program="btech" />
</Categories>
<Categories title="Course Categories">
  <CategoryCard title="AEC" subtitle="Ability Enhancement Course" course="aec" />
  <CategoryCard title="SEC" subtitle="Skill Enhancement Course" course="sec" />
  <CategoryCard title="VAC" subtitle="Value Added Course" course="vac" />
  <CategoryCard title="VOC" subtitle="Vocational Course" course="voc" />
  <CategoryCard title="MDC" subtitle="Multidisciplinary Course" course="mdc" />
</Categories>
      {/* <Categories title="Recent Papers" /> */}
    </div>
  )
}

export default Home
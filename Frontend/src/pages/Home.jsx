import Categories from "../components/Categories.jsx"
import CategoryCard from "../components/CategoryCard.jsx"
import SearchBar from "../components/SearchBar.jsx"

const Home = () => {
  return (
    <div className="flex-1">
      <SearchBar />
      {/* <Categories title="My Saved Papers" /> */}
      <Categories title="Program Categories">
        <CategoryCard title="BA" subtitle="Bachelor of Arts" />
        <CategoryCard title="BCA" subtitle="Bachelor of Computer Homelications" />
        <CategoryCard title="BCom" subtitle="Bachelor of Commerce" />
        <CategoryCard title="BSc" subtitle="Bachelor of Science" />
        <CategoryCard title="BTech" subtitle="Bachelor of Technology" />
      </Categories>
      <Categories title="Course Categories">
        <CategoryCard title="AEC" subtitle="Ability Enhacement Course" />
        <CategoryCard title="SEC" subtitle="Skill Enhacement Course" />
        <CategoryCard title="VAC" subtitle="Value Added Course" />
        <CategoryCard title="VOC" subtitle="Vocational Course" />
        <CategoryCard title="MDC" subtitle="Multi Disciplinary Course" />
      </Categories>
      {/* <Categories title="Recent Papers" /> */}
    </div>
  )
}

export default Home
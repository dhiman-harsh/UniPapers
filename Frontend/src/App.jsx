import Categories from "./components/Categories.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import SearchBar from "./components/SearchBar.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories title="My Saved Papers" />
      <Categories title="Program Categories" />
      <Categories title="Course Categories" />
      <Categories title="Recent Papers" />
      <Footer />
    </div>
  )
}

export default App
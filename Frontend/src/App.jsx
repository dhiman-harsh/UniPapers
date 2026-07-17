import Home from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import IndividualPaper from "./pages/IndividualPaper"
import NotFound from "./pages/NotFound"
import Papers from "./pages/Papers"

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/papers/:id" element={<IndividualPaper />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
import Home from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import IndividualPaper from "./pages/IndividualPaper"
import NotFound from "./pages/NotFound"
import Papers from "./pages/Papers"
import UploadPaper from "./pages/UploadPaper"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/papers/upload" element={<UploadPaper />} />
          <Route path="/papers/:id" element={<IndividualPaper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
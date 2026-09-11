import Home from "./pages/Home"
import { Routes, Route, BrowserRouter, Navigate } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import IndividualPaper from "./pages/IndividualPaper"
import NotFound from "./pages/NotFound"
import Papers from "./pages/Papers"
import UploadPaper from "./pages/UploadPaper"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import { authContext } from "../context/Auth"
import { useContext } from "react"

const App = () => {
  const { isLoggedIn } = useContext(authContext)
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/papers/upload" element={isLoggedIn ? <UploadPaper /> : <Navigate to="/login"/>} />
          <Route path="/papers/:id" element={<IndividualPaper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login"/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
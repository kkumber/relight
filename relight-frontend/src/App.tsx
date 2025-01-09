import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AuthProvider from "./utils/AuthProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import Details from "./pages/Details"


function App() {
  return (
  <BrowserRouter> 
  <AuthProvider>
    <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:slug" element={<Details />} />
        </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </AuthProvider>

  </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AuthProvider from "./utils/AuthProvider"
import ProtectedRoute from "./components/ProtectedRoute"



function App() {

  return (
  <BrowserRouter> 
    <Routes>
      <AuthProvider>
        <ProtectedRoute>

        </ProtectedRoute>
      </AuthProvider>



      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

    </Routes>



  </BrowserRouter>
  )
}

export default App

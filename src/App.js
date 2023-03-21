import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FAQ from './pages/faq/FAQ'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Subscription from './pages/subscription/Subscription'
import Category from './pages/category/Category'
import Services from './pages/services/Services'
import AllServices from './pages/allServices/AllServices'
import Forget from './pages/signup/Forget'

const App = () => {

// const [open, setOpen] = useState(false)

// const handle = ()=>{
//   setOpen(!open)
// }

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/category" element={<Category />} />
              <Route path="/sub-category" element={<Services />} />
              <Route path="/approve" element={<FAQ />} />
              <Route path="/all-services" element={<AllServices />} />
              <Route path='/forget' element={<Forget />} />
              <Route path="*" element={<h1> Page Not Found </h1>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FAQ from './pages/faq/FAQ'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Subscription from './pages/subscription/Subscription'
import Category from './pages/category/Category'
import AllServices from './pages/allServices/AllServices'
import Forget from './pages/signup/Forget'
import Reports from './pages/reports/Reports'
import SubCategorys from './pages/subCategory/SubCategorys'

const App = () => {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/category" element={<Category />} />
              <Route path="/sub-category" element={<SubCategorys />} />
              <Route path="/approve" element={<FAQ />} />
              <Route path="/all-posts" element={<AllServices />} />
              <Route path='/forget' element={<Forget />} />
              <Route path='/reports' element={<Reports />} />
              <Route path="*" element={<h1 style={{ color: "#fff", marginTop: "20%" }}> Page Not Found </h1>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
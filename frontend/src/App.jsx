import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import { Route, Router, Routes } from "react-router-dom"
import Result from "./pages/Result"
import { Toaster } from 'react-hot-toast';
import PrivateRoute from "./pages/PrivateRoute"

function App() {


  return (
    <div className=''>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/generate" element={<PrivateRoute />} >
          <Route index element={<Result />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App

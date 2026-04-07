import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Authentication from './pages/auth'
import Home from './pages/home'
import Checkout from './pages/checkout'
import Navbar from './components/navbar'
import AuthProvider from './context/authContext'
import ProductDetails from './pages/productDetails'
import CartProvider from './context/cartContext'
function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Authentication />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='*' element={<p>404 Not Found</p>} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App

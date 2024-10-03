import React from 'react'
import Navbar from './components/Client/Navbar'
import Footer from './components/Client/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      
      <Footer/>
    </div>
  )
}

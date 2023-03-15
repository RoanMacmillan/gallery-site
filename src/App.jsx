import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import './App.css'
import Gallery from './assets/components/Gallery/Gallery'
import Slideshow from './assets/components/Slideshow/Slideshow'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      


      <Header />
      <Gallery />
      
    </div>
  )
}

export default App

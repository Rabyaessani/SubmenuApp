import React from 'react'
import Navbar from './Navbar'
import { Hero } from './hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sidebar></Sidebar>
      <Submenu></Submenu>
    </main>
  )
}

export default App
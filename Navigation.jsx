import React from 'react'
import About from './About'
import Home from './Home'
import Store from './Store'
import { Routes, Route} from 'react-router-dom'

function Navigation() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default Navigation
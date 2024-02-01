import React, { useState } from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import SurpriseOne from './SurpriseOne'
import SurpriseTwo from './SurpriseTwo'
import SurpriseThree from './SurpriseThree'
import{Link} from 'react-router-dom'
import Levels from './Levels'
import Help from './Help'

const Router = () => {
  const [color, changeColor] = useState("#12afed")
  return (
  <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/surpriseone' element={<SurpriseOne/>}/>
        <Route path='/surprisetwo' element={<SurpriseTwo/>}/>
        <Route path='/surprisethree' element={<SurpriseThree/>}/>
        <Route path='/level' element={<Levels/>}/>
        <Route path='/help' element={<Help/>}/>

    </Routes>
    )
}

export default Router

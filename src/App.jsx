import { useState } from 'react'

import './App.css'
import Navbar from './Pages/Navbar'
import Slider from './Pages/Slider'
import Hero from './Pages/Hero'
function App() {

  return (

  <div >
<Navbar/>
{/* <TransparentSlider/> */}
<Slider/>
<div>
  <Hero/>
</div>
</div>

  )
}

export default App

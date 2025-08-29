import { useState } from 'react'

import './App.css'
import Navbar from './Pages/Navbar'
import Slider from './Pages/Slider'
function App() {

  return (
<div>
  <div className='bg-black'>
<Navbar/>
{/* <TransparentSlider/> */}
<Slider/>
</div>
</div>
  )
}

export default App

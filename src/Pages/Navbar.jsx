import React from 'react'
import { Search, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-white bg-transparent px-6 py-3 
                    font-[Amazon Ember,Arial,sans-serif] text-[20px] font-bold">
      
      <div className="flex justify-between items-center w-full mt-6">
        
       
        <div className="flex items-center space-x-20">
          
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime Logo"
            className="h-8 block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer"
          />

          
          <div className="hidden md:flex space-x-18">
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">For You</a>
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">Events</a>
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">Activities</a>
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">Plays</a>
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">Sports</a>
            <a href="#" className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">Feeds</a>
          </div>
        </div>

        
        <div className="flex items-center space-x-10 font-bold">
          
          <button className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <Search size={25} />
          </button>

          
          <button className="block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <User size={25} />
          </button>

          
          <button className=" block max-w-full overflow-hidden  
              hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <Menu size={26} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

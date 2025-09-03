import React, { useState, useEffect} from "react";
import { Search, User, Menu, MapPin, ChevronDown, Folders} from "lucide-react";
  import { FaRss } from 'react-icons/fa';
  
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("For You"); 
  const menuItems = ["For You", "Events", "Activities", "Plays", "Sports", "Feeds"];
  
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 items-center ">
      
      <div className="md:hidden bg-[#0a0a0a] text-white py-3 px-4">
        
        <div className="flex justify-between items-center">
          
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-white" />
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-lg">Patna</span>
                <ChevronDown size={18} />
              </div>
              <p className="text-sm text-gray-300">Bihar</p>
            </div>
          </div>

          
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
  <FaRss size={22} className="cursor-pointer" />
</div>
            <img
              src="https://i.pravatar.cc/50"
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-600"
            />
          </div>
        </div>

        
        <div className="mt-3">
          <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for any songs"
              className="bg-transparent outline-none text-gray-300 placeholder-gray-400 ml-2 w-full"
            />
          </div>
        </div>
      </div>

      
      <div
       className={`hidden md:flex justify-between items-center w-full px-6 py-3 text-white font-[Amazon Ember,Arial,sans-serif] text-[17px] font-medium 
    ${scrolled ? "bg-[#0a0a0a]/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
>
        <div className="flex items-center space-x-20">
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime Logo"
            className="h-12 block max-w-full overflow-hidden"
          />

        
          <div className="flex items-center space-x-6 whitespace-nowrap">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`px-2 py-2 rounded cursor-pointer transition 
                  ${
                    activeTab === item
                      ? "bg-[#4e5a65] bg-transparency text-white" 
                      : "hover:bg-white hover:text-black"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        
        <div className="flex items-center space-x-5 font-medium">
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded-4xl cursor-pointer">
            <Search size={22} />
          </button>
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <User size={22} />
          </button>
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Search, User, Menu, ChevronDown } from "lucide-react";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("For You");
  const menuItems = [
    "For You",
    "Events",
    "Activities",
    "Plays",
    "Sports",
    "Feeds",
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 50) {
        setMobileScrolled(true);
      } else {
        setMobileScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 items-center">

      <div className="md:hidden bg-[#0a0a0a] text-white px-4">

        {!mobileScrolled && (
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-2">
              <FaLocationDot size={20} className="text-white" />
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-lg">Patna</span>
                  <ChevronDown size={18} />
                </div>
                <p className="text-sm text-gray-300">Bihar</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <FaBell size={22} className="cursor-pointer" />
              <img
                src="https://i.pravatar.cc/50"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-600"
              />
            </div>
          </div>
        )}

        
        <div className="py-2 sticky top-0 bg-[#0a0a0a] z-50">
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
    ${
      scrolled
        ? "bg-[#0a0a0a]/70 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }`}
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
                      ? "bg-[#4e5a65] text-white"
                      : "hover:bg-white hover:text-black"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        
        <div className="flex items-center space-x-5 font-medium">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer"
          >
            <Search size={22} />
          </button>

          <button className="bg-gradient-to-r from-[#1A98FF] to-[#4facfe] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
            <User size={22} />
          </button>

          <button className="hover:bg-[rgb(26,152,255)] hover:text-black px-2 py-2 rounded cursor-pointer">
            <Menu size={22} />
          </button>
        </div>

        
        {isSearchOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setIsSearchOpen(false)}
            ></div>

            <div
              className="absolute top-full left-80 mt-2 flex items-center bg-[#0a0a0a] text-white rounded-xl shadow-lg px-6 py-4 w-[900px] h-[150px] z-50"
            >
              <input
                type="text"
                placeholder="Search movies, shows, events..."
                className="flex-1 bg-[#33373d] outline-none text-white placeholder-gray-400 rounded-2xl border-2 border-white text-[16px] font-normal px-4 py-2 w-[500px] h-[60px]"
              />

              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 text-gray-300 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

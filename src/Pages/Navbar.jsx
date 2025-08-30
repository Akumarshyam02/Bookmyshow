import React from "react";
import { Search, User, Menu, MapPin, ChevronDown, QrCode } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* ---------- Mobile Navbar ---------- */}
      <div className="md:hidden bg-[#0a0a0a] text-white py-3 px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          {/* Left Section - Location */}
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

          {/* Right Section - QR + Profile */}
          <div className="flex items-center space-x-4">
            <QrCode size={22} />
            <img
              src="https://i.pravatar.cc/50"
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-600"
            />
          </div>
        </div>

        {/* Search Bar */}
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

      {/* ---------- Desktop Navbar ---------- */}
      <div className="hidden md:flex justify-between items-center w-full mt-6 
                      px-6 py-3 backdrop-blur-md text-white font-[Amazon Ember,Arial,sans-serif] 
                      text-[20px] font-bold">
        {/* Left Section - Logo + Links */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime Logo"
            className="h-8 block max-w-full overflow-hidden hover:bg-white hover:text-black 
                       px-2 py-2 rounded cursor-pointer"
          />

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {["For You", "Events", "Activities", "Plays", "Sports", "Feeds"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block max-w-full overflow-hidden hover:bg-white hover:text-black 
                             px-2 py-2 rounded cursor-pointer"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-10 font-bold">
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <Search size={25} />
          </button>
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <User size={25} />
          </button>
          <button className="hover:bg-white hover:text-black px-2 py-2 rounded cursor-pointer">
            <Menu size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

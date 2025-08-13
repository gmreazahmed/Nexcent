import { useState } from "react";
import Logo from "./image/Logo.png";
import Hero from "./image/Hero.png";

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 bg-white border-b border-gray-200">
          
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className=" object-contain w-[140px] h-[70px]" />
          </div>

        
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Register Now →
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

       
        {menuOpen && (
          <div className="flex flex-col md:hidden px-4 py-2 space-y-2 bg-white border-b border-gray-200">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Register Now →
            </a>
          </div>
        )}
      </div>

      {/* Hero Section */}
     
      <div className="bacground p-10">
         <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-6 py-10 gap-8">
       
          <div className="text-center sm:text-left">
            <h1 className="htagg text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px]">Lessons and insights</h1>
            <h1 className="htag2 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px]">from 8 years</h1>
            <p className="mt-2 text-gray-600">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className=" mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
              Register
            </button>

          </div>
          

          
          <div className="flex justify-center lg:justify-end">
            <img
              src={Hero}
              alt="Hero"
              className="w-64 lg:w-[300px] lg:h-[300px] object-contain"
            />
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Section1;

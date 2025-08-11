
import Logo from './image/Logo.png';
import Hero from './image/Hero.png';

const Section1 = () => {
  return (
    <>
    <div>
       <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 px-45 py-5">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="" />
        
      </div>
      <div className="space-x-6 ">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
      
      <a href="#" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Register Now →</a>
      </div>
    </nav>
    </div>

    <div className='bacground'>
    <div className='flex items-center justify-between p-25 mx-25 '>
        <div>
        <h1 className="htagg ">Lessons and insights </h1>
        <h1 className="htag2">from 8 years</h1>
        <p className="mt-2 text-gray-600">Where to grow your business as a photographer: site or social media?</p>
        </div>
         <div className="">
        <img src={Hero} alt="Hero" className="w-[300px] h-[300px]" />
        
      </div>
    </div>
    </div>

    </>
  )
}

export default Section1;

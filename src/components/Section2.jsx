import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";

const Section2 = () => {
  return (
       <div className="bg-gray-100 py-8 text-center">
          <h2 className="text-3xl font-bold text-gray-700">Our Clients</h2>
          <p className="text-gray-600 mt-2">We have been working with some Fortune 500+ clients</p>
          <div className="grid grid-cols-2 gap-20 p-10 mx-10 sm:grid-cols-6 sm:gap-6">
            <img src={image1} alt="Logo" className=" mx-auto " />
            <img src={image2} alt="Logo" className=" mx-auto " />
            <img src={image3} alt="Logo" className=" mx-auto " />
            <img src={image4} alt="Logo" className=" mx-auto " />
            <img src={image5} alt="Logo" className=" mx-auto " />
            <img src={image6} alt="Logo" className=" mx-auto " />
          </div>
        </div>
  )
}

export default Section2

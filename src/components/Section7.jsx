import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";
import image9 from "./image/image9.png";

const Section7 = () => {

  return (
    <div className="">
        <div className="bg-gray-100  flex justify-center">
      <div className="flex flex-col md:flex-row  md:items-center gap-">
        
        <div className="">
          <img
            src={image9}
            alt="Tesla Logo"
            className="rounded-lg p-6 object-cover md:w-80 md:h-80"
          />
        </div>

       
        <div className="flex-1 p-6 pb-8 text-left">
          <p className="text-gray-600   text-sm md:text-base">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus <br />tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br />
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie <br /> mi blandit. Suspendisse cursus
            tellus sed augue ultricies, quis tristique nulla sodales.
            Suspendisse <br /> eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, <br /> vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum <br /> id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <h3 className="text-green-600 font-semibold mt-3">Tim Smith</h3>
          <p className="text-gray-400 text-sm mb-6">
            British Dragon Boat Racing Association
          </p>

          
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <img src={image1} alt="Logo 1" className="h-8 w-auto" />
            <img src={image2} alt="Logo 2" className="h-8 w-auto" />
            <img src={image3} alt="Logo 3" className="h-8 w-auto" />
            <img src={image4} alt="Logo 4" className="h-8 w-auto" />
            <img src={image5} alt="Logo 5" className="h-8 w-auto" />
            <img src={image6} alt="Logo 6" className="h-8 w-auto" />

           
            <a
              href="#"
              className="text-green-600 font-semibold whitespace-nowrap"
            >
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Section7

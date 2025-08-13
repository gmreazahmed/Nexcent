import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";

const Section2 = () => {
  // Duplicate the images array for infinite looping
  const images = [
    { src: image1, caption: "Image 1" },
    { src: image2, caption: "Image 2" },
    { src: image3, caption: "Image 3" },
    { src: image4, caption: "Image 4" },
    { src: image5, caption: "Image 5" },
    { src: image6, caption: "Image 6" },
    { src: image1, caption: "Image 1" },
    { src: image2, caption: "Image 2" },
    { src: image3, caption: "Image 3" },
    { src: image4, caption: "Image 4" },
    { src: image5, caption: "Image 5" },
    { src: image6, caption: "Image 6" },
  ];

  return (
    <div className="bg-gray-100 py-8 text-center">
      <h2 className="hatags text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]">Our Clients</h2>
          <p className="text-gray-600 mt-6">We have been working with some Fortune 500+ clients</p>
      <div className="py-[40px] md:py-[40px] lg:py-[60px] xl:py-[80px]">
        <div className="flex flex-row items-center overflow-hidden px-[24px] sm:px-0">
          <div className="flex animate-infinite-scroll items-center gap-[60px] lg:gap-[120px] 2xl:gap-[150px] whitespace-nowrap">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center w-[60px]">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="grayscale object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       <h1 className="text-[#4D4D4D] font-semibold mt-5 text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[3rem]">Manage your entire community <br /> in a single system</h1>
          
          <h2 className="text-gray-600 mt-4">Who is Nextcent suitable for?</h2>
    </div>
  );
};

export default Section2;
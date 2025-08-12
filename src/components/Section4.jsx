import image7 from "./image/image7.png";

const Section4 = () => {
  return (
    <div>
                <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="w-full sm:w-1/3">
                <img src={image7} alt="Logo" className=" w-full h-auto" />
              </div>
              <div className="w-full sm:w-2/4  sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  The unseen of spending three <br />years at Pixelgrade
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  sit amet justo ipsum. Sed <br />accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique laculis. Nullam pulvinar sit amet risus pretium auctor. Etiam  quis massa pulvinar, aliquet quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Section4

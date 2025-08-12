import icon4 from "./image/icon4.png";
import icon5 from "./image/icon5.png";
import icon6 from "./image/icon6.png";
import icon7 from "./image/icon7.png";

const Section5 = () => {
  const stats = [
    { icon: icon4, value: "2,245,341", label: "Members" },
    { icon: icon5, value: "46,328", label: "Clubs" },
    { icon: icon6, value: "828,867", label: "Event Bookings" },
    { icon: icon7, value: "1,926,436", label: "Payments" },
  ];

  return (
    <div className="bg-gray-100  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="w-full sm:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
              Helping a local <span className="text-green-600"> <br />business reinvent itself</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We reached here with our hard work and dedication
            </p>
          </div>
        <div className="w-full sm:w-1/2 grid grid-cols-2 gap-6">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      <div className="flex justify-center items-center gap-3 mb-2">
        <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
        <p className="text-2xl font-bold text-gray-600">{stat.value}</p>
      </div>
      <p className="text-gray-600 text-sm">{stat.label}</p>
    </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
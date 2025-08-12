import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";

const Section3 = () => {
          const cards = [
        {
          icon: icon1,
          title: "Membership Organisations",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
          icon: icon2,
          title: "National Associations",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
          icon: icon3,
          title: "Clubs And Groups",
          description: "Our membership management software provides full automation of membership renewals and payments",
        },
      ];
  return (
     <div className="">
          <div className="bg-gray-100 p-12 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-8xl  px-4 sm:px-10 ">
              {cards.map((card, index) => (
                <div key={index} className="bg-white p-4 py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img src={card.icon} alt={card.title} className="h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-600 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Section3

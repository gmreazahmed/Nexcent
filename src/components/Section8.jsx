import image18 from "./image/image18.png";
import image19 from "./image/image19.png";
import image20 from "./image/image20.png";

const Section8 = () => {
      const blogs = [
    {
      img: image18,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "#",
    },
    {
      img: image19,
      title: "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      img: image20,
      title: "Revamping the Membership Model with Triathlon about to Australia",
      link: "#",
    },
  ];
  return (
    <div>
        <div className="bg-gray-50 py-16 px-6">
      {/* Header */}
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
          Caring is the new marketing
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          The Nextcent blog is the best place to read about the latest membership insights,
          trends and more. See who's joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 ">
        {blogs.map((blog, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Image Card */}
            <div className="w-full bg-white rounded-t-lg overflow-hidden shadow-md">
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            </div>

            {/* Text Card */}
            <div className="w-11/12 -mt-8 bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-gray-600 font-semibold text-lg mb-4">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="text-green-500 font-medium flex items-center justify-center gap-2 hover:underline"
              >
                Readmore
                <span className="text-xl leading-none">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Section8

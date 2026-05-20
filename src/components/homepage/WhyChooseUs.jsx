import {
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaClock size={28} />,
    title: "Easy Booking",
    description:
      "Book your favorite sports facility anytime with a smooth and quick process.",
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt size={28} />,
    title: "Multiple Locations",
    description:
      "Find sports venues near your location with real-time availability.",
  },
  {
    id: 3,
    icon: <FaShieldAlt size={28} />,
    title: "Secure Payments",
    description:
      "Safe and reliable payment methods for hassle-free reservations.",
  },
  {
    id: 4,
    icon: <FaUsers size={28} />,
    title: "Trusted by Athletes",
    description:
      "Thousands of sports enthusiasts trust ArenaFlow every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black">
            Why Choose ArenaFlow
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a modern sports booking experience with premium
            facilities and seamless management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-black mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import { FaStar, FaUsers, FaFutbol, FaCalendarCheck } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers size={30} />,
    number: "10K+",
    title: "Active Users",
  },
  {
    id: 2,
    icon: <FaFutbol size={30} />,
    number: "150+",
    title: "Sports Facilities",
  },
  {
    id: 3,
    icon: <FaCalendarCheck size={30} />,
    number: "25K+",
    title: "Successful Bookings",
  },
  {
    id: 4,
    icon: <FaStar size={30} />,
    number: "4.9/5",
    title: "User Ratings",
  },
];

const PlatformStats = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Trusted by Sports Enthusiasts
          </h2>

          <p className="mt-4 max-w-2xl mx-auto">
            ArenaFlow helps players and teams easily discover and book
            premium sports facilities across multiple locations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-10 text-center border border-gray-100 hover:border-green-500 shadow-md transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-600">
                {stat.number}
              </h3>

              <p className="text-black mt-3 text-lg">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;
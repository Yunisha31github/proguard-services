import React from "react";
import { FaShieldAlt, FaUsers, FaClock, FaAward } from "react-icons/fa";
import leaderImage1 from "/images/leaderImage1.webp";
import leaderImage2 from "/images/leaderImage2.jpeg";
import leaderImage3 from "/images/leaderImage3.jpeg";

const icons = {
  FaShieldAlt: <FaShieldAlt className="w-8 h-8 text-red-600" />,
  FaUsers: <FaUsers className="w-8 h-8 text-red-600" />,
  FaClock: <FaClock className="w-8 h-8 text-red-600" />,
  FaAward: <FaAward className="w-8 h-8 text-red-600" />,
};

const AboutUs = ({ data }) => {
  return (
    <div className="text-gray-800 bg-gradient-to-r via-yellow-100 from-blue-400 to-red-400">
      
      <div className="px-4 py-16 text-center text-white bg-gradient-to-r from-blue-700 to-blue-500">
        <h1 className="text-4xl font-bold text-red-900 md:text-5xl">
          About Goldstar Securities
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Providing exceptional security services since 2008, ensuring safety
          and peace of mind for all.
        </p>
      </div>

      
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{icons[stat.icon]}</div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="container px-6 py-12 mx-auto">
        {data.sections
          .filter((section) => section.title !== "Leadership Profiles")
          .map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-blue-800">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-lg text-gray-900">{section.content}</p>
              )}
              {section.list && (
                <ul className="pl-6 text-gray-900 list-disc">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>

      
      <div className="py-12 bg-gray-100">
        <div className="container px-6 mx-auto">
          {data.sections
            .filter((section) => section.title === "Leadership Profiles")
            .map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-3xl font-bold text-blue-800">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {section.leaders.map((leader, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-32 h-32 mx-auto mb-4 rounded-full"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {leader.name}
                      </h3>
                      <p className="text-gray-900">{leader.role}</p>
                      <p className="mt-2 text-sm text-gray-900">
                        {leader.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

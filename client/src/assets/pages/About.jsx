import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  ShieldCheck,
  Lightbulb,
  Handshake,
  Trophy,
  TrendingUp,
} from "lucide-react";
import successimg from "../imgs/aboutpageimgs/success.jpg";
import goalimg from "../imgs/aboutpageimgs/goal.jpg";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const ValueCard = ({ icon, title, description }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-blue-500/30 transition-all`}
      style={{
        backgroundColor: theme ? "#ffffff0d" : "#111827",
      }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-gray-900"
        } text-sm sm:text-base`}
      >
        {description}
      </p>
    </div>
  );
};

export const CoreValues = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Integrity",
      description: "We uphold honesty and transparency in all our actions.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
      title: "Innovation",
      description: "We encourage creative ideas that drive meaningful change.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-green-400" />,
      title: "Collaboration",
      description: "We believe strong partnerships lead to greater success.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-purple-400" />,
      title: "Excellence",
      description:
        "We strive to deliver the highest standards in everything we do.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-pink-400" />,
      title: "Empowerment",
      description:
        "We create opportunities that enable people and businesses to reach their full potential.",
    },
  ];

  const { theme } = useTheme();

  return (
    <section
      className="py-12 sm:py-16"
      style={{ backgroundColor: theme ? "#006DFF1A" : "#000000" }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        Our <span className="text-blue-500">Core Values</span>
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};

export const About = () => {
  const { theme } = useTheme();
    const [employees, setEmployees] = useState([]);
   useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setEmployees(res.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };
    fetchEmployees();
  }, []);
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className={`py-8 transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex gap-1 justify-center text-center">
        <span className="text-blue-600">About</span>
        <span>Us</span>
      </h2>

      {/* Our Story */}
      <div
        className={`mt-8 sm:mt-10 px-4 sm:px-6 md:px-16 py-6 sm:py-10 max-w-6xl mx-auto rounded-xl transition-colors ${
          theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-white text-gray-700"
        }`}
      >
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Our Story
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          BizRolin was founded with a bold vision: to transform business
          journeys into stories that inspire and create impact. From humble
          beginnings, we have built a thriving community of innovators,
          entrepreneurs, and leaders. Today, BizRolin stands as a premier
          platform celebrating ambition, excellence, and the relentless pursuit
          of success, connecting ideas to opportunities and inspiring the next
          generation of changemakers.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mt-12 sm:mt-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={successimg}
              alt="Our Mission"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Mission
            </h3>
            <p
              className={`leading-relaxed text-sm sm:text-base md:text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We’re here to help people and businesses grow by connecting them
              with the right opportunities, stories, and support that truly
              matter.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="mt-12 sm:mt-16 mb-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Text */}
          <div>
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Vision
            </h3>
            <p
              className={`leading-relaxed text-sm sm:text-base md:text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              A community where every dreamer, doer, and leader finds the
              inspiration and confidence to go further than they ever imagined.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={goalimg}
              alt="Our Vision"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <CoreValues />

      {/* Meet Our Team */}
      <div
        className={`py-8 sm:py-10 px-4 transition-colors ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Meet Our Team */}
        <div
          className={`py-8 sm:py-10 px-4 transition-colors ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="max-w-6xl px-20 mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
              Meet Our Team
            </h2>

            <div className="relative">
              {/* Employees scroll container */}
              <div
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 scroll_X pb-4 overflow-x-auto scrollbar-hide"
              >
                {employees.map((employee) => (
                  <div
                    key={employee._id}
                    className="flex-shrink-0 text-center w-40 sm:w-56"
                  >
                    <div
                      className={`w-full h-40 sm:h-48 mx-auto rounded-lg overflow-hidden ${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <img
                        src={
                          employee.image || "https://via.placeholder.com/150"
                        }
                        alt={employee.employee_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mt-2 mb-1">
                      {employee.employee_name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {employee.role}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-end mt-6 text-white space-x-2">
                <button
                  onClick={() => scroll("left")}
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Collaborations */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center md:text-left">
            Partners & Collaborations
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12">
            {[
              "The Edit BUREAU",
              "Wings Sol",
              "Zobil",
              "Callrolin",
              "Devrolin",
            ].map((partner, index) => (
              <div
                key={index}
                className="text-blue-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-blue-400 transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

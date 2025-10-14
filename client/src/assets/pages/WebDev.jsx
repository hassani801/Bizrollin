import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function WebDev() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full flex flex-col items-center px-4 py-12 font-[Poppins] ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-10 max-w-[700px] w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Website Development
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          Growth deserves the spotlight
        </p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-[1200px] flex flex-col gap-12">
        {/* Top Text Block */}
        <div className="w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Your website is more than just a digital presence — it’s the
            foundation of your brand and business. Our Advanced Web Development
            services go beyond design to deliver fast, secure, and scalable
            platforms that drive real growth.
            <br />
            <br />
            We specialize in custom web applications, enterprise platforms, and
            e-commerce systems that are built with cutting-edge technologies.
            From sleek front-end interfaces to powerful back-end architecture,
            we ensure every project is optimized for performance, SEO, and user
            experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            <Link
              to="/services/proposal"
              className="
    w-full sm:w-[228px] h-[48px] sm:h-[54px] 
    flex items-center justify-center
    bg-[#006DFF] text-white font-semibold rounded-md
    hover:bg-blue-600 transition
  "
            >
              Get a Proposal
            </Link>
            <Link
              to="/stories"
              className="
                w-full sm:w-[228px] h-[48px] sm:h-[54px] 
                border-2 border-[#006DFF] text-[#006DFF] font-semibold rounded-md
                hover:bg-[#006DFF] hover:text-white transition
                flex justify-center items-center
              "
            >
              See Sample Stories
            </Link>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            What you get with us
          </h3>

          <ul className="flex flex-col gap-6">
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Full-Stack Expertise
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                React, Angular, Node.js, Django, Laravel, and more.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 API & Third-Party Integrations
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Seamlessly connect all your tools and services.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 E-Commerce Solutions
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Secure payment gateways and smooth checkout systems.
              </p>
            </li>
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Cloud Hosting & Scalability
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Reliable infrastructure, scalability, and long-term maintenance.
              </p>
            </li>
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Customer-Centric Digital Platforms
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Designed to convert visitors into loyal customers
              </p>
            </li>
          </ul>
        </div>

        {/* Why It Matters Section */}
        <div className="w-full max-w-4xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Why It Matters
          </h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Every funding story inspires confidence not just from investors, but
            from partners, customers, and the entire ecosystem. Don’t just raise
            capital; raise your reputation. Let’s put your growth on center
            stage where it belongs.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link to="/services">
            <button
              className="
                bg-gray-700 text-white px-5 py-2 rounded-lg 
                hover:bg-gray-800 transition
              "
            >
              ← Back to Services
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="
                bg-[#006DFF] text-white px-5 py-2 rounded-lg 
                hover:bg-blue-600 transition
              "
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

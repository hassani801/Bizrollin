import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function Ai_Automation() {
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
          AI Automation
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          Read More
        </p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-[1200px] flex flex-col gap-12">
        {/* Top Text Block */}
        <div className="w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            AI is transforming how businesses operate, and we help you stay
            ahead of the curve. Our AI Automation solutions are designed to
            reduce manual work, enhance customer experiences, and unlock
            data-driven decision-making. From intelligent chatbots that provide
            24/7 support, to advanced analytics that predict customer behavior,
            we build solutions that fit your unique needs.
            <br />
            <br />
            Whether you want to streamline your sales process, personalize
            customer journeys, or integrate AI into existing systems, our team
            ensures smooth implementation and measurable results. With
            automation handling repetitive tasks, your team can focus on growth
            and innovation.
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

        {/* Why Choose Us Section */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            👉 Why Choose Us for AI Automation?
          </h3>

          <ul className="flex flex-col gap-6">
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Tailored Solutions
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Built around your unique business model.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 End-to-End Setup
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                From strategy to deployment, we cover it all.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Secure & Scalable Integrations
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Easy-to-manage AI integrations that grow with your business.
              </p>
            </li>
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Proven Impact
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Enhancing efficiency and customer satisfaction with measurable
                results.
              </p>
            </li>
          </ul>
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

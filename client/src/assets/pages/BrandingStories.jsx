import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function BrandingStories() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 flex flex-col items-center font-[Poppins] ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Top Heading */}
        <div className="w-full max-w-3xl text-center mb-8 sm:mb-12">
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
            "
          >
            Branding Stories
          </h1>
          <p
            className="
              mt-2 text-sm sm:text-base md:text-lg lg:text-xl
            "
          >
            Your Journey, Your Story, Your Brand
          </p>
        </div>

        {/* Intro Text */}
        <div className="w-full max-w-6xl text-left">
          <p
            className="
              text-sm sm:text-base lg:text-lg leading-relaxed
            "
          >
            Every startup starts with a spark — a late-night idea, a stubborn
            belief, or a risky first step. The startups people remember have one
            thing in common: a clear, human story. At Bizrolin we don’t just
            write your story, we shape it, distribute it, and make the world
            feel it.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
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
        <div className="w-full mt-12 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            What We Do
          </h2>

          <ul className="flex flex-col gap-6">
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Founder & Team Storytelling
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Craft stories that bring founders & teams closer to people.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Brand Narratives
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Build a clear and authentic brand voice that resonates.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Creative Assets & Campaigns
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Transform stories into impactful campaigns & visuals.
              </p>
            </li>
          </ul>
        </div>

        {/* Why It Matters Section */}
        <div className="w-full mt-12 text-left max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why It Matters
          </h2>
          <p
            className="
              leading-relaxed text-sm sm:text-base lg:text-lg
            "
          >
            People don’t connect with products. They connect with people,
            journeys, and struggles that feel real. A strong brand story does
            more than attract attention — it creates trust, clarifies purpose,
            and becomes the heartbeat of your company.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full mt-12 flex flex-wrap gap-4">
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

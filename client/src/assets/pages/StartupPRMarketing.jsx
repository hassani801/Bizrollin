import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function StartupPRMarketing() {
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
          Startup PR &amp; Marketing
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          Visibility creates opportunity
        </p>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-[1200px] flex flex-col gap-12">
        {/* Top Text Block */}
        <div className="w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Launching a startup is like planting a seed. But unless it’s seen,
            watered, and nurtured, it stays hidden. PR and marketing are the
            sunlight your startup needs to grow, thrive, and lead.
            <br />
            <br />
            At Bizrolin, we craft strategies that don’t just get you
            noticed—they get you remembered. From carefully placed stories in
            the right media to marketing campaigns that spark action, we put
            your brand exactly where it needs to be: in the spotlight.
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
            What We Do
          </h3>

          <ul className="flex flex-col gap-6">
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Strategic PR Campaigns
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Building narratives that elevate your startup’s visibility.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Media Placements
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Securing coverage in outlets that matter to your audience.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Data-Driven Marketing
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Using insights and analytics to maximize campaign impact.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Influencer &amp; Leader Partnerships
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Collaborating with voices that amplify your credibility.
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
            Invisibility is the enemy of growth. The startups that win are the
            ones people talk about. With smart PR and powerful marketing, you
            don’t just exist—you lead. Don’t just launch. Shine.
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

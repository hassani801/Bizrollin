import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function ContentCreation() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-12 py-12 font-[Poppins] ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Top Section Heading - Centered */}
      <div className="max-w-[700px] mx-auto text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Content Creation
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          Content that speaks, connects, and lasts
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Intro Block */}
        <div className="space-y-6">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Think of your brand’s content as its voice — the words people hear,
            the visuals they see, the emotions they remember. Done right, it’s
            not just communication, it’s a conversation that never ends.
            <br />
            <br />
            At Bizrolin, we craft content that doesn’t just “fill up feeds,” it
            fills minds with trust and hearts with connection. Whether it’s a
            long read blog that builds authority or a 10-second reel that sparks
            curiosity, we ensure your voice is clear, confident, and
            unforgettable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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

        {/* What We Do */}
        <div className="w-full space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            What We Do
          </h2>

          <ul className="flex flex-col gap-6">
            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Thought-Leadership Blogs
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Establish authority and share unique insights with your
                audience.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Social Media Content
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Posts that engage, inform, and grow your community.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Videos &amp; Reels
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Short, impactful videos that tell stories fast and effectively.
              </p>
            </li>

            <li>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                🔹 Newsletters &amp; Emails
              </h4>
              <p
                className={`text-xs sm:text-sm md:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Direct communication that nurtures and converts your audience.
              </p>
            </li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Why It Matters
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Content isn’t about saying more — it’s about saying what matters.
            The right words and visuals don’t just sell; they inspire, they
            convert, they stay.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            With the right content, your startup won’t just be seen — it will be
            remembered.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
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

import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export function CommunityEngagementPackages() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full flex flex-col items-center px-4 py-12 font-[Poppins] ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Heading Section */}
      <div className="max-w-[900px] mx-auto text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
          Community Engagement Packages
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          From customers to community
        </p>
      </div>

      {/* Intro Section */}
      <div className="max-w-[1200px] mx-auto mb-12 text-center sm:text-left">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          The strongest startups aren’t built by sales alone—they’re built by
          people who believe. A loyal community doesn’t just buy your product;
          they champion it, share it, and grow with it.
          <br />
          <br />
          At Bizrolin, we help you turn audiences into advocates. Through
          events, collaborations, and creative campaigns, we create a space
          where your people don’t just follow you—they belong with you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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
     <div className="w-full px-6 pl-15 mb-12">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
    What We Do
  </h3>

  <ul className="flex flex-col gap-6">
    <li>
      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
        🔹 Events &amp; Meetups
      </h4>
      <p
        className={`text-xs sm:text-sm md:text-base ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Create memorable experiences that connect people with your brand.
      </p>
    </li>

    <li>
      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
        🔹 Partnership &amp; Collaborations
      </h4>
      <p
        className={`text-xs sm:text-sm md:text-base ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Join forces with like-minded brands to expand your impact.
      </p>
    </li>

    <li>
      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
        🔹 Interactive Campaigns
      </h4>
      <p
        className={`text-xs sm:text-sm md:text-base ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Engage audiences with campaigns that spark conversations.
      </p>
    </li>

    <li>
      <h4 className="text-base sm:text-lg md:text-xl font-semibold">
        🔹 Loyalty &amp; Referral Programs
      </h4>
      <p
        className={`text-xs sm:text-sm md:text-base ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Reward loyalty and turn your customers into advocates.
      </p>
    </li>
  </ul>
</div>

      {/* Why It Matters Section */}
      <div className=" w-full px-15">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Why It Matters
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          An engaged community is your brand’s strongest weapon. They amplify
          your voice, defend your vision, and fuel your growth—long after the
          ads stop running. Let’s build not just a brand, but a movement.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full px-15 mt-12 flex flex-wrap gap-4">
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
    </section>
  );
}

import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import stories1 from "../imgs/storiespageimgs/stories1.jpg";
import stories2 from "../imgs/storiespageimgs/stories1.jpg";
import stories3 from "../imgs/storiespageimgs/stories1.jpg";

// === SAMPLE DATA ===
const topStories = [
  {
    name: "Harris Gregory",
    title: "Founder & CEO",
    img: stories1,
    date: "September 7, 2025",
    highlight: "Founder with a product-first approach",
    desc: "Harris built two startups from idea to exit and now mentors early-stage founders. He focuses on product-market fit and storytelling that attracts customers and capital.",
  },
  {
    name: "Sarah Lee",
    title: "Marketing Manager",
    img: stories2,
    date: "August 21, 2025",
    highlight: "Scaling brands with human-centered marketing",
    desc: "Sarah helped 20+ startups reach global markets using data-driven growth storytelling.",
  },
  {
    name: "Michael Brown",
    title: "CTO",
    img: stories3,
    date: "July 19, 2025",
    highlight: "Tech innovation for scalable impact",
    desc: "Michael leads AI-driven product teams building ethical and accessible technologies.",
  },
];

const allStories = [
  {
    id: 1,
    title: "The future of AI",
    desc: "A practical guide to production-ready AI tools and what founders must prioritize to ship responsibly.",
    author: "John Doe (CTO)",
    date: "August 8, 2024",
    category: "Tech",
    img: stories3,
  },
  {
    id: 2,
    title: "Leadership lessons",
    desc: "Five daily habits veteran leaders use to scale teams while protecting culture and focus.",
    author: "Michael Lee (Entrepreneur)",
    date: "August 5, 2024",
    category: "Leadership",
    img: stories2,
  },
  {
    id: 3,
    title: "Startup Strategy 101",
    desc: "How early-stage founders can balance speed with sustainability in competitive markets.",
    author: "Ava Johnson (Founder)",
    date: "July 1, 2024",
    category: "Startup",
    img: stories1,
  },
  {
    id: 4,
    title: "Scaling with purpose",
    desc: "Startups that focus on purpose outperform those that chase valuations alone.",
    author: "Noah Kim (CEO)",
    date: "June 20, 2024",
    category: "Strategy",
    img: stories3,
  },
];

export function Stories() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter logic
  const filteredStories =
    selectedTag === "All"
      ? allStories
      : allStories.filter((story) => story.category === selectedTag);

  return (
    <div
      className={`min-h-screen px-4 sm:px-6 py-12 font-poppins ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Our{" "}
          <span className={isDark ? "text-blue-400" : "text-blue-600"}>
            Stories
          </span>
        </h2>

        {/* === Top Slider Section === */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className={`mb-12 ${isDark ? "swiper-dark" : ""}`} 
        >
          {topStories.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image */}
                <div className="w-full md:w-[340px] h-[180px] sm:h-[220px] md:h-[347px] rounded-[8px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center h-full space-y-3 sm:space-y-4 text-center md:text-left">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center">
                    <span className="font-semibold text-lg sm:text-xl md:text-[32px] leading-[100%]">
                      {item.name}
                    </span>
                    <span className="font-normal text-sm sm:text-base md:text-[20px] leading-[100%]">
                      &nbsp;({item.title})
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base md:text-[18px] ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.date}
                  </p>
                  <h4 className="font-semibold text-base sm:text-lg md:text-[22px] leading-[120%]">
                    {item.highlight}
                  </h4>
                  <p
                    className={`text-sm sm:text-base md:text-[18px] leading-relaxed ${
                      isDark ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {item.desc}
                  </p>
                  <button className="w-[140px] sm:w-[160px] h-[44px] sm:h-[50px] bg-blue-500 hover:bg-blue-600 text-white rounded-[8px] mx-auto md:mx-0 font-medium text-xs sm:text-sm md:text-[16px]">
                    Read Story
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === Category Filter === */}
        <div
          className={`w-full flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm md:text-[16px] font-normal border-b pb-4 mb-10 ${
            isDark
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          {["All", "Tech", "Leadership", "Startup", "Strategy"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`transition-colors ${
                selectedTag === tag
                  ? isDark
                    ? "text-blue-400 font-semibold"
                    : "text-blue-600 font-semibold"
                  : "hover:text-blue-500"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* === Stories Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className={`p-4 sm:p-6 flex flex-col h-full rounded-md ${
                isDark ? "bg-gray-900" : "bg-gray-100"
              }`}
            >
              <div className="overflow-hidden w-full h-[160px] sm:h-[220px] md:h-[347px] rounded-md">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mt-3 sm:mt-4 text-center md:text-left">
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  {story.title}
                </h4>
                <p
                  className={`text-xs sm:text-sm md:text-base mb-3 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {story.desc}
                </p>
                <div
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between text-[10px] sm:text-xs md:text-sm gap-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <span>{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-[10px] sm:text-xs md:text-sm font-medium w-fit mx-auto md:mx-0">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

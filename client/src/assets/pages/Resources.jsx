import { useMemo, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { MdTune } from "react-icons/md";
import res1 from "../imgs/resourcespageimgs/res1.png";
import res2 from "../imgs/resourcespageimgs/res2.png";
import res3 from "../imgs/resourcespageimgs/res3.png";

const ALL_RESOURCES = [
  {
    id: "productivity",
    title: "Productivity Hacks",
    size: "250 MB",
    pages: 480,
    desc: "Tips and techniques to boost your productivity.",
    img: res3,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "leadership",
    title: "Guide to Leadership",
    size: "359 MB",
    pages: 515,
    desc: "A practical advice for new, motivated and experienced leaders.",
    img: res2,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "productivity1",
    title: "Productivity Hacks Vol.1",
    size: "250 MB",
    pages: 480,
    desc: "Extra tips to improve workflows and routines.",
    img: res3,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "leadership1",
    title: "Guide to Leadership Vol.1",
    size: "359 MB",
    pages: 515,
    desc: "Advanced leadership techniques and case-studies.",
    img: res2,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "productivity2",
    title: "Productivity Hacks Vol.2",
    size: "250 MB",
    pages: 480,
    desc: "More productivity tricks and deep dives.",
    img: res3,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "leadership2",
    title: "Guide to Leadership Vol.2",
    size: "359 MB",
    pages: 515,
    desc: "Leadership tools, frameworks and exercises.",
    img: res2,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "productivity3",
    title: "Productivity Hacks Vol.3",
    size: "250 MB",
    pages: 480,
    desc: "Newest set of tips to optimize productivity.",
    img: res3,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
  {
    id: "leadership3",
    title: "Guide to Leadership Vol.3",
    size: "359 MB",
    pages: 515,
    desc: "Case-studies for next-level leadership.",
    img: res2,
    pdf: "https://example-files.online-convert.com/document/pdf/example.pdf",
  },
];

export function Resources() {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();

  // 🔽 Dropdown states
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  // 🔽 View More state
  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterOpen(false);
  };

  // 🔽 Filter + search
  const filtered = useMemo(() => {
    return ALL_RESOURCES.filter((r) => {
      const matchQuery = r.title.toLowerCase().includes(query.toLowerCase());
      const matchFilter =
        selectedFilter === "All" ||
        (selectedFilter === "Productivity" && r.id.includes("productivity")) ||
        (selectedFilter === "Leadership" && r.id.includes("leadership"));
      return matchQuery && matchFilter;
    });
  }, [query, selectedFilter]);

  const visibleResources = filtered.slice(0, visibleCount);

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-10 px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-bold mb-8 ${
          theme === "dark" ? "text-blue-500" : "text-blue-700"
        }`}
      >
        Resources
      </h2>

      {/* Featured Resource */}
      <div
        className={`w-full max-w-[1200px] flex flex-col md:flex-row overflow-hidden shadow-lg mb-8  transition-colors duration-300 ${
          theme === "dark" ? "bg-[#111827] " : "bg-white "
        }`}
      >
        <div className="w-full md:w-[340px] h-[200px] md:h-[257px] flex-shrink-0">
          <img
            src={res1}
            alt="Featured Resource"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-center">
          <h3
            className={`text-2xl md:text-3xl font-bold mb-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            StartUp 101
          </h3>
          <p
            className={`mb-5 text-sm md:text-base ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Practical guidance and curated resources for aspiring entrepreneurs
            and leaders to kickstart their journey.
          </p>
          {/* Download + Preview Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://example-files.online-convert.com/document/pdf/example.pdf"
              download
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-white text-center"
            >
              Download PDF
            </a>
            <a
              href="/pdfs/startup_101.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-5 py-2 rounded-lg transition w-full sm:w-auto text-center ${
                theme === "dark"
                  ? "border-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              Preview
            </a>
          </div>
        </div>
      </div>

      {/* Search & Tune Filter */}
      <div className="w-full max-w-[1200px] flex flex-row justify-between items-center gap-4 mb-8 relative">
        <input
          type="text"
          placeholder="🔍 Search Guides, Templates and Articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full md:w-[588px] h-[60px] px-4 rounded-lg text-base shadow-md transition-colors duration-300 ${
            theme === "dark"
              ? "bg-[#111827] text-white placeholder-gray-400"
              : "bg-white text-gray-900 placeholder-gray-500"
          }`}
        />

        {/* Tune Button */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="w-[40px] h-[40px] text-blue-500 rounded-full flex items-center justify-center transition relative"
        >
          <MdTune className="text-3xl" />
        </button>

        {/* Dropdown */}
        {filterOpen && (
          <div
            className={`absolute right-0 top-[60px] w-[200px] rounded-lg shadow-lg z-10 ${
              theme === "dark"
                ? "bg-[#1f2937] text-white"
                : "bg-white text-black"
            }`}
          >
            {["All", "Productivity", "Leadership"].map((opt) => (
              <div
                key={opt}
                onClick={() => handleFilterSelect(opt)}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                  selectedFilter === opt
                    ? "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resources Grid */}
      <div
        className={`w-full ${
          theme === "dark" ? "border-gray-700" : "border-gray-900"
        } border-b p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8`}
      >
        {visibleResources.map((r) => (
          <article
            key={r.id}
            className={`overflow-hidden shadow-lg flex flex-col transition-colors duration-300 ${
              theme === "dark" ? "bg-[#111827]" : "bg-white"
            }`}
          >
            <div className="w-full h-[160px] sm:h-[200px] md:h-[220px]">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`mb-4 text-sm md:text-base ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {r.desc}
                </p>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                {/* Download Button */}
                <a
                  href={r.pdf}
                  download
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition flex-1 sm:flex-none text-white text-sm sm:text-base text-center"
                >
                  Download PDF
                </a>
                <a
                  href={r.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border px-4 py-2 rounded-lg transition flex-1 sm:flex-none text-sm sm:text-base text-center ${
                    theme === "dark"
                      ? "border-blue-600 hover:bg-blue-600 hover:text-white"
                      : "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  Preview
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View More */}
      {visibleCount < filtered.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 6)}
          className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition text-white"
        >
          View More
        </button>
      )}
    </div>
  );
}

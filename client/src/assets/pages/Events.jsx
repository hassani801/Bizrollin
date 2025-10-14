import { MdTune } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Events() {
  const { theme } = useTheme();
  const [searchUpcoming, setSearchUpcoming] = useState("");
  const [searchPast, setSearchPast] = useState("");
  const [filterUpcoming, setFilterUpcoming] = useState("all");
  const [events, setEvents] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // ✅ NEW: view more state
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);
  const [showMorePast, setShowMorePast] = useState(false);

  // ✅ Fetch events
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // ✅ Split into Upcoming & Past
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events.filter((ev) => {
    const evDate = new Date(ev.date);
    evDate.setHours(0, 0, 0, 0);
    return evDate >= today;
  });

  const past = events.filter((ev) => {
    const evDate = new Date(ev.date);
    evDate.setHours(0, 0, 0, 0);
    return evDate < today;
  });

  // ✅ Search filter
  const filterFn = (arr, query) =>
    arr.filter(
      (ev) =>
        ev.title.toLowerCase().includes(query.toLowerCase()) ||
        ev.date.toLowerCase().includes(query.toLowerCase()) ||
        (ev.event || "").toLowerCase().includes(query.toLowerCase()) ||
        ev.body.toLowerCase().includes(query.toLowerCase())
    );

  // ✅ Categories
  const categories = ["all", "Webinar", "Workshop", "Seminar", "Conference"];

  // ✅ Apply filters
  const filteredUpcoming = filterFn(upcoming, searchUpcoming).filter(
    (ev) => filterUpcoming === "all" || ev.event === filterUpcoming
  );
  const filteredPast = filterFn(past, searchPast);

  const handleFilterChange = (filter) => {
    setFilterUpcoming(filter);
    setSelectedFilter(filter);
    setFilterOpen(false);
  };

  // ✅ Limit for view more
  const limit = 4;

  return (
    <div
      className={`font-[Poppins] min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {/* TOP HEADING */}
        <div className="mb-12 w-full flex justify-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our{" "}
            <span
              className={theme === "light" ? "text-blue-600" : "text-blue-400"}
            >
              Events
            </span>
          </h1>
        </div>

        {/* ===== UPCOMING EVENTS ===== */}
        <section className="w-full max-w-[1200px] mx-auto mb-16 relative">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Upcoming Events
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between relative">
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search events"
                value={searchUpcoming}
                onChange={(e) => setSearchUpcoming(e.target.value)}
                className={`w-full sm:w-1/2 border rounded px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base bg-transparent ${
                  theme === "light"
                    ? "border-gray-300 text-black placeholder-gray-500"
                    : "border-gray-700 text-white placeholder-gray-400"
                }`}
              />

              {/* Dropdown Trigger */}
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[34px] text-blue-500 rounded-full flex items-center justify-center transition relative"
              >
                <MdTune className="text-2xl sm:text-3xl" />
              </button>

              {/* Dropdown Menu */}
              {filterOpen && (
                <div
                  className={`absolute top-12 right-0 mt-2 w-48 rounded-lg shadow-lg z-20 p-3 ${
                    theme === "light"
                      ? "bg-white border border-gray-200"
                      : "bg-[#1f2937] border border-gray-700"
                  }`}
                >
                  <h4 className="text-sm font-semibold mb-2">Filter by type:</h4>
                  <ul className="space-y-2 text-sm">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => handleFilterChange(cat)}
                          className={`w-full text-left px-2 py-1 rounded ${
                            filterUpcoming === cat
                              ? "bg-blue-600 text-white"
                              : theme === "light"
                              ? "hover:bg-gray-100"
                              : "hover:bg-gray-700"
                          }`}
                        >
                          {cat === "all" ? "All Events" : cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Render Upcoming Events */}
          {filteredUpcoming.length === 0 ? (
            <p>No upcoming events found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {(showMoreUpcoming
                  ? filteredUpcoming
                  : filteredUpcoming.slice(0, limit)
                ).map((ev, idx) => (
                  <article
                    key={idx}
                    className={`rounded overflow-hidden w-full p-3 sm:p-4 ${
                      theme === "light" ? "bg-white" : "bg-[#111827]"
                    }`}
                  >
                    <div
                      className={`w-full h-[160px] sm:h-[220px] md:h-[300px] lg:h-[360px] overflow-hidden rounded ${
                        theme === "light" ? "bg-gray-200" : "bg-gray-800"
                      }`}
                    >
                      <img
                        src={ev.image || "/fallback.jpg"}
                        alt={ev.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                        {ev.title}
                      </h4>
                      <p
                        className={`text-xs sm:text-sm mb-1 ${
                          theme === "light" ? "text-gray-600" : "text-gray-300"
                        }`}
                      >
                        📅 {ev.date}
                      </p>
                      <p
                        className={`text-xs sm:text-sm mb-2 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {ev.event}
                      </p>
                      <p
                        className={`text-xs sm:text-sm md:text-base mb-3 ${
                          theme === "light" ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
                        {ev.body}
                      </p>
                      <Link to="/joinUs">
                        <button className="bg-blue-600 hover:bg-blue-700 rounded-lg text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 text-white">
                          Register
                        </button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* View More Button */}
              {filteredUpcoming.length > limit && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowMoreUpcoming(!showMoreUpcoming)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {showMoreUpcoming ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* ===== PAST EVENTS ===== */}
        <section className="w-full max-w-[1200px] mx-auto py-8">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              Past Recordings
            </h3>
            <div>
              <input
                type="search"
                placeholder="Search past events"
                value={searchPast}
                onChange={(e) => setSearchPast(e.target.value)}
                className={`w-1/2 border rounded px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base bg-transparent ${
                  theme === "light"
                    ? "border-gray-300 text-black placeholder-gray-500"
                    : "border-gray-700 text-white placeholder-gray-400"
                }`}
              />
            </div>
          </div>

          {filteredPast.length === 0 ? (
            <p>No past events found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {(showMorePast ? filteredPast : filteredPast.slice(0, limit)).map(
                  (p, i) => (
                    <article
                      key={i}
                      className={`rounded overflow-hidden p-3 sm:p-4 ${
                        theme === "light" ? "bg-white" : "bg-[#111827]"
                      }`}
                    >
                      <div
                        className={`relative w-full h-[140px] sm:h-[200px] md:h-[280px] rounded overflow-hidden ${
                          theme === "light" ? "bg-gray-200" : "bg-gray-800"
                        }`}
                      >
                        <img
                          src={p.image || "/fallback.jpg"}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[72px] md:h-[72px] bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d="M8 5v14l11-7L8 5z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                          {p.title}
                        </h4>
                        <p
                          className={`text-xs sm:text-sm mb-1 ${
                            theme === "light" ? "text-gray-600" : "text-gray-300"
                          }`}
                        >
                          {p.date}
                        </p>
                        <p
                          className={`text-xs sm:text-sm mb-2 ${
                            theme === "light" ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {p.event}
                        </p>
                        <p
                          className={`text-xs sm:text-sm md:text-base mb-3 ${
                            theme === "light" ? "text-gray-700" : "text-gray-300"
                          }`}
                        >
                          {p.body}
                        </p>
                      </div>
                    </article>
                  )
                )}
              </div>

              {/* View More Button */}
              {filteredPast.length > limit && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowMorePast(!showMorePast)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {showMorePast ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

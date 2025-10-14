import { useRef, useState } from "react";
import home1 from "../imgs/homePageImgs/home1.png";
import Service1 from "../imgs/servicespageimgs/Service1.png";
import Service2 from "../imgs/servicespageimgs/Service2.png";
import Service3 from "../imgs/servicespageimgs/Service3.jpg";
import Service4 from "../imgs/servicespageimgs/Service4.png";
import Service5 from "../imgs/servicespageimgs/Service5.png";
import Service6 from "../imgs/servicespageimgs/Service6.jpg";
import Service7 from "../imgs/servicespageimgs/Service7.jpg";
import stories1 from "../imgs/storiespageimgs/stories1.jpg";
import map from "../imgs/contactpageimg/map.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaUsers,
  FaRegNewspaper,
  FaGlobe,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const services = [
  { img: Service1, title: "Branding Stories", link: "/services/branding" },
  { img: Service2, title: "Content Creation", link: "/services/content" },
  { img: Service3, title: "Website Development", link: "/services/webdev" },
  {
    img: Service4,
    title: "Startup PR & Marketing",
    link: "/services/marketing",
  },
  { img: Service5, title: "Community Engagement", link: "/services/community" },
  {
    img: Service6,
    title: "Business Automation",
    link: "/services/businessAutomation",
  },
  { img: Service7, title: "Ai Automation", link: "/services/Ai_Automation" },
];

const people = [
  {
    name: "Harris Gregory",
    role: "Founder & CEO",
    title: "Founder with a product-first approach",
    desc: "Harris built two startups from idea to exit and now mentors early-stage founders. He focuses on product-market fit and storytelling that attracts customers and capital.",
  },
  {
    name: "Aisha Khan",
    role: "Head of Content",
    title: "Story-first content lead",
    desc: "Aisha crafts long-form narratives and high-impact social campaigns that keep audiences coming back and sharing.",
  },
  {
    name: "David Lee",
    role: "PR Lead",
    title: "Media & investor relations",
    desc: "David runs targeted outreach and secures high-quality placements in trade and investor outlets.",
  },
  {
    name: "Sara Malik",
    role: "Community Manager",
    title: "Community-first growth",
    desc: "Sara builds engaged communities and runs events that turn users into advocates and customers.",
  },
];

export function Home() {
  const { theme } = useTheme();
  const [peopleIndex, setPeopleIndex] = useState(0);
  const scrollRef = useRef(null);
  const peoplePrev = () =>
    setPeopleIndex((prev) => (prev - 1 + people.length) % people.length);
  const peopleNext = () => setPeopleIndex((prev) => (prev + 1) % people.length);
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+92",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUxcpk-2tPfi1m08DPH8EOu9d-LWQhe4EEGAmqRiV-hfcDUdPr3VBxZmh1dUTuBQin/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phoneCode: "+92",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <>
      <section
        className={`font-[Poppins] ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* ================= HERO SECTION ================= */}
        <div className="w-full text-white footer_bottom_color flex flex-row items-stretch justify-between min-h-[30vh] sm:min-h-[40vh] md:min-h-screen">
          {/* Left Side (Text) */}
          <div className="flex-1 flex flex-col justify-center text-left px-6 sm:px-10 md:px-16 lg:px-24 py-10 pr-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4">
              Discover Stories, Join Communities
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg max-w-md mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We help startups grow with storytelling, PR, and community
              engagement. BizRolin makes your brand shine in the right places.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/stories"
                className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base text-white"
              >
                Explore Stories
              </Link>

              <Link
                to="/joinUs"
                className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white transition px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                Join Communities
              </Link>
            </div>
          </div>

          {/* Right Side (Full-height Image) */}
          <div className="flex-1 flex">
            <img
              src={home1}
              className="w-full h-full object-cover bg-gray-700 rounded-tl-[120px] sm:rounded-tl-[200px] md:rounded-tl-[300px] lg:rounded-tl-[400px]"
              alt="Hero"
            />
          </div>
        </div>

        {/* ================= SERVICES SECTION ================= */}
        <div className="w-full px-6 sm:px-10 md:px-20 lg:px-30 py-12 md:py-20 max-w-[1440px] mx-auto text-left">
          <p className="text-blue-500 font-semibold text-sm sm:text-base uppercase mb-3">
            Our Services
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            We Turn Attention Into Traction
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mb-10 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            From brand storytelling to PR and community growth, we make your
            startup worth noticing.
          </p>

          {/* Cards Container */}
          <div className="relative max-w-[1331px] font-[Poppins] mx-auto">
            <div
              ref={scrollRef}
              className="flex gap-6 sm:gap-8 md:gap-11 scroll-smooth scroll_X"
            >
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 
          w-[220px] h-[260px] sm:w-[260px] sm:h-[300px] md:w-[330px] md:h-[330px]
          rounded-xl overflow-hidden shadow-md flex flex-col bg-cover bg-center"
                  style={{
                    backgroundImage: service.img
                      ? `url(${service.img})`
                      : "none",
                  }}
                >
                  {/* Dark overlay so text is visible */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col flex-1 items-center justify-between px-2 py-6 sm:py-8">
                    <h3
                      className={`text-base sm:text-lg font-semibold text-center ${
                        theme === "dark" ? "text-white" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <a
                      href={service.link}
                      className="bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm px-3 py-2 
              rounded-lg w-[90px] sm:w-[100px] h-[32px] sm:h-[36px] text-white mt-3 
              flex items-center justify-center"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons at Bottom */}
            <div className="flex justify-end text-white px-6 gap-6 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-[2px] bg-blue-500 
        flex items-center justify-center hover:bg-blue-600"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-[2px] bg-blue-500  
        flex items-center justify-center hover:bg-blue-600"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="w-full px-6 md:px-16 lg:px-24 py-16 max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            Why Choose Us
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mb-12 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We empower startups with global reach, unmatched expertise, and
            community-driven growth. Here’s why brands trust BizRolin.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-6xl text-blue-400 mb-4" />
              <p className="text-lg sm:text-xl font-semibold">
                50+ Happy Clients
              </p>
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We’ve helped more than 50 startups build their brand identity
                and scale globally.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaRegNewspaper className="text-6xl text-blue-400 mb-4" />
              <p className="text-lg sm:text-xl font-semibold">
                100+ Projects Delivered
              </p>
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our experience ensures your story is crafted with creativity and
                precision.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaGlobe className="text-6xl text-blue-400 mb-4" />
              <p className="text-lg sm:text-xl font-semibold">Global Reach</p>
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We connect you with audiences across the world, making your
                startup stand out.
              </p>
            </div>
          </div>
        </div>

        {/* ================= MEET THE PEOPLE ================= */}
        <div className="w-full px-6 md:px-16 lg:px-24 py-12 max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Meet the People
          </h2>

          <div className="relative max-w-[1200px] mx-auto">
            {/* ✅ Swiper Container */}
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".people-next",
                prevEl: ".people-prev",
              }}
              className="peopleSwiper"
            >
              {people.map((person, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-6 md:gap-8 overflow-hidden w-full">
                    {/* Header */}
                    <div className="w-full px-2 sm:px-4 md:px-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {person.name}
                      </h3>
                      <p
                        className={`text-sm sm:text-base mb-4 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {person.role}
                      </p>
                    </div>

                    {/* Content Row */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                      {/* Image Box */}
                      <div
                        className={`flex-shrink-0 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[320px] md:h-[320px] 
                  rounded-[8px] flex items-center justify-center ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                      >
                        <FaUsers className="text-4xl sm:text-5xl text-blue-400" />
                      </div>

                      {/* Text Section */}
                      <div className="flex-1 max-w-[1016px] py-6 sm:py-10 flex flex-col justify-between">
                        <p
                          className={`text-sm sm:text-base mb-6 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <strong className="font-semibold">
                            {person.title}
                          </strong>
                          <br />
                          <span className="block mt-2">{person.desc}</span>
                        </p>

                        <div className="flex items-center gap-6">
                          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-sm sm:text-base text-white">
                            Read Story
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              {/* Left arrow */}
              <button className="people-prev w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-blue-500 rounded-md flex items-center justify-center text-white text-lg sm:text-xl hover:bg-blue-600">
                ◀
              </button>

              {/* Dots handled by Swiper pagination automatically */}

              {/* Right arrow */}
              <button className="people-next w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-blue-500 rounded-md flex items-center justify-center text-white text-lg sm:text-xl hover:bg-blue-600">
                ▶
              </button>
            </div>
          </div>
        </div>
        {/* ================= TESTIMONIALS ================= */}
        <div className="w-full px-6 md:px-16 lg:px-24 py-12 max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Testimonials
          </h2>

          <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
            {/* Left image */}
            <div
              className={`w-full sm:w-[220px] sm:h-[240px] md:w-[300px] md:h-[340px] lg:w-[393px] lg:h-[424px] 
        flex items-center justify-center rounded-md overflow-hidden ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
            >
              <img
                src={stories1}
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Quote box */}
            <div
              className={`flex-1 rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-between ${
                theme === "dark" ? "bg-[#071225]" : "bg-gray-100"
              }`}
            >
              <div>
                <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4" />
                <p
                  className={`leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  We needed a coherent story that investors and users would both
                  understand. BizRolin mapped our strengths into a single
                  narrative, produced evergreen content, and helped us run a PR
                  campaign that felt authentic. Worth the investment.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  Aaron Mbatha
                </p>
                <p
                  className={`text-xs sm:text-sm md:text-base ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Founder &amp; CEO, GreenGrid
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] bg-blue-500 rounded-md flex items-center justify-center text-white text-lg sm:text-xl">
                    ◀
                  </button>
                  <button className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] bg-blue-500 rounded-md flex items-center justify-center text-white text-lg sm:text-xl">
                    ▶
                  </button>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:underline text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2"
                >
                  See More{" "}
                  <span className="text-base sm:text-lg md:text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="flex w-full h-5 pt-4 justify-center">
          <h1
            className={`text-xl md:text-2xl font-bold w-[71%] h-full ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Contact Us
          </h1>
        </div>

        <section className="grid md:grid-cols-2 gap-8 px-8 py-10 max-w-5xl pb-20 mx-auto w-full">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none w-full ${
                  theme === "dark"
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                }`}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none w-full ${
                  theme === "dark"
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                }`}
                required
              />
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none w-full sm:w-32 ${
                    theme === "dark"
                      ? "border-gray-600 bg-transparent text-white"
                      : "border-gray-300 bg-white text-black"
                  }`}
                >
                  <option value="+92">+92</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Number"
                  className={`flex-1 p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none ${
                    theme === "dark"
                      ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                      : "border-gray-300 bg-white text-black placeholder-gray-500"
                  }`}
                />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none w-full
    ${
      theme === "dark"
        ? "border-gray-600 bg-black text-white"
        : "border-gray-300 bg-white text-black"
    }`}
                required
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="SEO Services">SEO Services</option>
              </select>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm md:text-base focus:outline-none w-full flex-1 ${
                  theme === "dark"
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                }`}
                required
              />
              <button
                type="submit"
                className="self-end bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-md text-white font-medium text-xs sm:text-sm md:text-base"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Location Image with Link */}
          <div className="rounded-lg overflow-hidden w-full h-full md:h-[25rem]">
            <a
              href="https://www.google.com/maps/place/24.8607,67.0011"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={map}
                alt="Our Location"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

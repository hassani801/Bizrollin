import { useTheme } from "../contexts/ThemeContext";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import map from "../imgs/contactpageimg/map.jpg";
import { useState } from "react";
import { LoadingStage } from "../layout/LoadingStage";

export function Contact() {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby--dODgZUioNgDCO_Zb2mC977jGTBv-vuJXhzrjbn3rnTZEe6aQfBlXDturbvIOTF9/exec",
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`font-[Poppins] min-h-screen py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-44 transition-colors duration-300 
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Loader */}
      <LoadingStage show={loading} />
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Let’s build something great together.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto pb-12 sm:pb-20 w-full">
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

        {/* Get in Touch Card */}
        <div
          className={`w-full rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 ${
            theme === "dark"
              ? "bg-[#006DFF1A] text-white"
              : "bg-[#006DFF1A] text-black"
          }`}
        >
          {/* Heading */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Get in Touch
          </h3>

          {/* Description */}
          <p
            className={`mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Have a question or a project? Tell us a little about it and we’ll
            reply soon.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 sm:gap-5 mb-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <FaWhatsapp className="text-green-500 text-base sm:text-lg md:text-xl mt-0.5" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  SMS / WhatsApp
                </p>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  +92 300 1234567
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <FaEnvelope className="text-blue-400 text-base sm:text-lg md:text-xl mt-0.5" />
              <div>
                <p className="font-medium text-sm sm:text-base">Email</p>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  hello@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <FaMapMarkerAlt className="text-red-500 text-base sm:text-lg md:text-xl mt-0.5" />
              <div>
                <p className="font-medium text-sm sm:text-base">Address</p>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  123 Innovation Street, Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Let's Connect */}
          <p className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Let's Connect
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-pink-600"
                  : "bg-gray-300 hover:bg-pink-600"
              }`}
            >
              <FaInstagram className="text-xs sm:text-sm md:text-base" />
            </a>
            <a
              href="#"
              className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-blue-500"
                  : "bg-gray-300 hover:bg-blue-500"
              }`}
            >
              <FaXTwitter className="text-xs sm:text-sm md:text-base" />
            </a>
            <a
              href="#"
              className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-600"
                  : "bg-gray-300 hover:bg-gray-600"
              }`}
            >
              <FaGithub className="text-xs sm:text-sm md:text-base" />
            </a>
          </div>
        </div>
      </div>
      {/* Map Section (unchanged) */}
      <div className="rounded-lg overflow-hidden w-full h-60 sm:h-72 md:h-[25rem]">
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
  );
}

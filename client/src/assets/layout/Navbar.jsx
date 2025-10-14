import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaUserShield } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import Dark from "../icon/logos/Dark.png";
import light from "../icon/logos/Light.png";
import darkmode from "../icon/logos/darkmode.svg";
import lightmode from "../icon/logos/lightmode.svg";
import { AdminPanel } from "../components/AdminPanel";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`flex items-center justify-between px-6 shadow-md 
    ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={theme === "dark" ? light : Dark}
              alt="logo"
              className="h-16 w-auto sm:h-18 md:h-20 lg:h-22 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[60%] justify-end gap-20">
          <ul className="flex gap-8 items-center font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]">
            <li>
              <Link to="/stories" className="hover:text-blue-500 transition">
                Stories
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="cursor-pointer">Community</span>
              <FaChevronDown
                className={`text-gray-400 text-xs md:text-sm transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
              {showDropdown && (
                <div
                  className={`absolute left-0 top-5 mt-2 w-44 border rounded-lg shadow-lg z-10 
              ${
                theme === "dark"
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
                >
                  <ul className="py-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/joinUs">Join Us</Link>
                    </li>
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/resources">Resources</Link>
                    </li>
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/events">Events</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Side Icons (desktop only) */}
          <div className="flex items-center gap-6">
            {/* Theme Toggle Icon */}
            <button onClick={toggleTheme} className="ml-2">
              <img
                src={theme === "dark" ? darkmode : lightmode}
                alt="toggle theme"
                className="h-6 w-6"
              />
            </button>
            {/* ✅ Admin Access Icon */}
            <button
              onClick={() => setShowAdmin(true)}
              className="hidden md:flex items-center gap-2 hover:text-blue-500 transition text-base sm:text-lg"
            >
              <FaUserShield className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className={`absolute top-16 left-0 w-full flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            <Link to="/stories" className="text-sm sm:text-base md:text-lg">
              Stories
            </Link>
            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="cursor-pointer text-sm sm:text-base md:text-lg">
                Community
              </span>
              <FaChevronDown
                className={`text-gray-400 text-xs md:text-sm transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
              {showDropdown && (
                <div
                  className={`absolute left-0 top-5 mt-2 w-44 border rounded-lg shadow-lg z-10 
              ${
                theme === "dark"
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
                >
                  <ul className="py-2 text-xs sm:text-sm md:text-base">
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/joinUs">Join Us</Link>
                    </li>
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/resources">Resources</Link>
                    </li>
                    <li className="px-4 py-2 cursor-pointer">
                      <Link to="/events">Events</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <Link to="/services" className="text-sm sm:text-base md:text-lg">
              Services
            </Link>
            <Link to="/about" className="text-sm sm:text-base md:text-lg">
              About Us
            </Link>
            <Link to="/contact" className="text-sm sm:text-base md:text-lg">
              Contact Us
            </Link>

            {/* ✅ No Admin Icon in mobile */}
            <button onClick={toggleTheme} className="text-lg">
              <img
                src={theme === "dark" ? lightmode : darkmode}
                alt="toggle theme"
                className="h-6 w-6"
              />
            </button>
          </div>
        )}
      </nav>

      {/* ✅ Admin Popup */}
      <AdminPanel
        theme={theme}
        showAdmin={showAdmin}
        setShowAdmin={setShowAdmin}
      />
    </>
  );
}

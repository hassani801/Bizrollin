import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import icon1 from "../icon/footer_icons/icon1.svg";
import icon2 from "../icon/footer_icons/icon2.svg";
import icon4 from "../icon/footer_icons/icon4.svg";
import icon5 from "../icon/footer_icons/icon5.svg";
import facebook from "../icon/footer_icons/facebook.svg";
import linkdin from "../icon/footer_icons/linkdin.svg";
import insta from "../icon/footer_icons/insta.svg";
import x from "../icon/footer_icons/x.svg";
import light from "../icon/logos/Light.png";
import { Code, Cog, Bot } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`pt-12 footer_bottom_color text-white text-sm md:text-base`}
    >
      {/* Footer Content */}
      <section className="grid md:grid-cols-3 gap-12 px-2 md:px-20 py-8 w-full mx-auto max-w-7xl">
        {/* Logo + Social */}
        <div className="flex flex-col">
          <Link to="/" className="block">
            <img
              src={light}
              alt="logo"
              className="h-15 sm:h-17 md:h-25 object-contain"
            />
          </Link>
          <p className="text-xs md:text-sm leading-relaxed text-gray-500">
            Where ideas become impact
          </p>
          <div className="flex gap-4 mt-5 text-lg md:text-xl">
            <img
              src={facebook}
              className="hover:text-blue-500 cursor-pointer transition-colors"
            />
            <img
              src={x}
              className="hover:text-pink-500 cursor-pointer transition-colors"
            />
            <img
              src={insta}
              className="hover:text-blue-400 cursor-pointer transition-colors"
            />
            <img
              src={linkdin}
              className="hover:text-sky-400 cursor-pointer transition-colors"
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-5">Services</h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <img src={icon1} alt="" className="h-4 w-4" />
              <Link to="/services/branding" className="hover:underline">
                Branding Stories
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={icon2} alt="" className="h-4 w-4" />
              <Link to="/services/content" className="hover:underline">
                Content Creation
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-500" />
              <Link to="/services/webdev" className="hover:underline">
                Website Development
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <Cog className="h-4 w-4 text-blue-500" />
              <Link
                to="/services/businessAutomation"
                className="hover:underline"
              >
                Business Automation
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-blue-500" />
              <Link to="/services/Ai_Automation" className="hover:underline">
                Ai Automation
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={icon4} alt="" className="h-4 w-4" />
              <Link to="/services/marketing" className="hover:underline">
                Startup PR & Marketing
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={icon5} alt="" className="h-4 w-4" />
              <Link to="/services/community" className="hover:underline">
                Community Engagement Packages
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-5">
            Let's Talk
          </h2>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-500" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" /> info@example.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" /> Karachi, Pakistan
            </li>
          </ul>
        </div>
      </section>
      {/* Copyright */}
      <div
        className={`flex w-full justify-center p-6 border-t text-xs md:text-sm
          `}
      >
        <p className="flex items-center gap-2">
          <FaRegCopyright /> 2025 Your Company
        </p>
      </div>
    </footer>
  );
}

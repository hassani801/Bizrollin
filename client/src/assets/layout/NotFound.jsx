import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export function NotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-6 text-center
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold text-blue-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          404
        </motion.h1>

        <p
          className={`text-lg sm:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

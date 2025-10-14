import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function PageLoader({ loading }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center z-[2000] 
            ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Spinner */}
          <motion.div
            className={`w-14 h-14 border-4 border-t-transparent rounded-full 
              ${theme === "dark" ? "border-white" : "border-black"}`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          {/* Page Loading text */}
          <motion.span
            className="ml-4 text-xl font-semibold"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            Loading...
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

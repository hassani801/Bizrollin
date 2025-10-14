import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingStage({ show }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 flex flex-col items-center justify-center z-50
            ${theme === "dark" ? "bg-black/70 text-white" : "bg-white/70 text-black"}
          `}
        >
          {/* Animated Spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className={`w-12 h-12 border-4 border-t-transparent rounded-full mb-6
              ${theme === "dark" ? "border-white" : "border-black"}`}
          />

          {/* Pulsing Text */}
          <motion.p
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-base sm:text-lg font-medium"
          >
            Sending your message...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

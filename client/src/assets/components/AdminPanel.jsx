import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ManageEmployees } from "./ManageEmployees";
import { ManageEvents } from "./ManageEvents";

export function AdminPanel({ theme, showAdmin, setShowAdmin }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [showEmployees, setShowEmployees] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const ADMIN_SECRET_EMAIL = "1234@gmail.com";
  const ADMIN_SECRET_PASSWORD = "1234";

  // ✅ Load login state from localStorage on mount
  useEffect(() => {
    const savedLogin = localStorage.getItem("isAdminLoggedIn");
    if (savedLogin === "true") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // ✅ Handle login
  const handleAdminLogin = () => {
    if (
      adminEmail === ADMIN_SECRET_EMAIL &&
      adminPassword === ADMIN_SECRET_PASSWORD
    ) {
      setIsAdminLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", "true"); 
    } else {
      alert("Wrong Email or Password!");
    }
  };

  // ✅ Handle logout
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn"); 
    setShowAdmin(false);
  };

  if (!showAdmin) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
        <div
          className={`relative rounded-2xl flex gap-3 flex-col shadow-2xl p-6 w-[90%] max-w-md transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          {/* Close Icon */}
          <button
            onClick={() => setShowAdmin(false)}
            className="absolute top-3 right-3 text-xl p-1 rounded-full transition hover:rotate-90
            hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaTimes
              className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            />
          </button>

          {!isAdminLoggedIn ? (
            <>
              {/* Login Header */}
              <h2 className="text-2xl font-bold mb-4 text-center">
                Admin Login
              </h2>

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter admin Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className={`w-full border px-4 py-2 rounded-md mb-4 focus:outline-none transition 
                ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                    : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
                }`}
              />
              {/* Password Input */}
              <input
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className={`w-full border px-4 py-2 rounded-md mb-4 focus:outline-none transition 
                ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                    : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
                }`}
              />

              {/* Login Button */}
              <button
                onClick={handleAdminLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
              >
                Login
              </button>

              {/* Cancel Button */}
              <button
                onClick={() => setShowAdmin(false)}
                className={`mt-3 w-full py-2 rounded-md font-medium transition 
                ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                }`}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {/* Panel Header */}
              <h2 className="text-2xl font-bold mb-4 text-center">
                Admin Panel
              </h2>
              <p
                className={`mb-6 text-center ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Now you can manage your website content 🎉
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowEmployees(true)} // ✅ Open Manage Employees
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
                >
                  Manage Employees
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowEvents(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
                >
                  Manage Events
                </button>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className={`w-full border mt-2 px-4 py-2 rounded-md mb-4 focus:outline-none transition 
                ${
                  theme === "dark"
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-300 bg-gray-50 text-black"
                }`}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* ✅ Employee Popup */}
      <ManageEmployees
        theme={theme}
        showEmployees={showEmployees}
        setShowEmployees={setShowEmployees}
      />
      <ManageEvents
        theme={theme}
        showEvents={showEvents}
        setShowEvents={setShowEvents}
      />
    </>
  );
}

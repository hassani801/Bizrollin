import { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes, FaSearch } from "react-icons/fa";

export function ManageEmployees({ theme, showEmployees, setShowEmployees }) {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: "", role: "", image: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch employees from API
  useEffect(() => {
    if (showEmployees) {
      axios
        .get("http://localhost:5000/api/users")
        .then((res) => setEmployees(res.data))
        .catch((err) => console.error("Error fetching employees:", err));
    }
  }, [showEmployees]);

  // ✅ Add employee
  const handleAddEmployee = async () => {
    if (!newEmployee.name || !newEmployee.role) return;
    try {
      const res = await axios.post("http://localhost:5000/api/users", {
        employee_name: newEmployee.name,
        role: newEmployee.role,
        image: newEmployee.image, // send image link
      });

      setEmployees([...employees, res.data.user]);
      setNewEmployee({ name: "", role: "", image: "" });
    } catch (err) {
      console.error("Error adding employee:", err.response?.data || err.message);
    }
  };

  // ✅ Delete employee
  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      console.error("Error deleting employee:", err.response?.data || err.message);
    }
  };

  // ✅ Filter employees by search
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.employee_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!showEmployees) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110]">
      <div
        className={`rounded-2xl shadow-2xl p-6 w-[95%] sm:w-[90%] max-w-2xl transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black border border-gray-200"
        }`}
      >
        {/* Header with Close */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Employees</h2>
          <button
            onClick={() => setShowEmployees(false)}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div
          className={`flex items-center gap-2 mb-4 border rounded-md px-3 py-2 transition ${
            theme === "dark"
              ? "border-gray-600 bg-gray-800 text-white"
              : "border-gray-300 bg-gray-50 text-black"
          }`}
        >
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 bg-transparent focus:outline-none ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          />
        </div>

        {/* Employee List */}
        <ul className="space-y-3 mb-6 max-h-[200px] overflow-y-auto pr-2">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => (
              <li
                key={emp._id}
                className={`flex justify-between items-center p-3 rounded-md shadow-sm transition 
                ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={emp.image || "https://via.placeholder.com/40"}
                    alt={emp.employee_name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-medium">{emp.employee_name}</p>
                    <p className="text-sm opacity-80">{emp.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteEmployee(emp._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center opacity-70">No employees found</p>
          )}
        </ul>

        {/* Add Employee Form */}
        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            className={`flex-1 border px-3 py-2 rounded-md focus:outline-none transition 
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white"
                  : "border-gray-300 bg-gray-50 text-black"
              }`}
          />
          <input
            type="text"
            placeholder="Role"
            value={newEmployee.role}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, role: e.target.value })
            }
            className={`flex-1 border px-3 py-2 rounded-md focus:outline-none transition 
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white"
                  : "border-gray-300 bg-gray-50 text-black"
              }`}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newEmployee.image}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, image: e.target.value })
            }
            className={`flex-1 border px-3 py-2 rounded-md focus:outline-none transition 
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white"
                  : "border-gray-300 bg-gray-50 text-black"
              }`}
          />
        </div>
        <button
          onClick={handleAddEmployee}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

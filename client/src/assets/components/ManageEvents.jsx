// ManageEvents.jsx
import { useState, useEffect } from "react";
import { FaTimes, FaListUl, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

export function ManageEvents({ theme, showEvents, setShowEvents }) {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("create");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // ✅ Load events from backend
  useEffect(() => {
    if (showEvents) fetchEvents();
  }, [showEvents]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  // ✅ Handle event submission (save to DB)
  const handleSaveEvent = async (e) => {
    e.preventDefault();
    if (!title || !time || !eventName) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const newEvent = {
        title,
        date: time,
        event: eventName,
        body: description,
        image,
      };

      await axios.post("http://localhost:5000/api/posts", newEvent);

      // Refresh events list
      fetchEvents();

      // Clear inputs
      setTitle("");
      setTime("");
      setEventName("");
      setDescription("");
      setImage("");
      // Switch to list view    
      setViewMode("list");
    } catch (err) {
      console.error("Error saving event:", err);
    }
  };

  // ✅ Delete event from DB
  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  if (!showEvents) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
      <div
        className={`relative rounded-2xl shadow-2xl p-6 w-[95%] max-w-2xl h-[90%] overflow-y-auto transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-black border border-gray-200"
          }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setShowEvents(false)}
          className="absolute top-3 right-3 text-xl p-1 rounded-full transition hover:rotate-90
          hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FaTimes
            className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
          />
        </button>

        {/* Header with navigation */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => setViewMode("create")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              viewMode === "create"
                ? "bg-indigo-500 text-white"
                : theme === "dark"
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaPlus /> Create Event
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
              viewMode === "list"
                ? "bg-indigo-500 text-white"
                : theme === "dark"
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaListUl /> View Events
          </button>
        </div>

        {/* Create Event Form */}
        {viewMode === "create" && (
          <form onSubmit={handleSaveEvent} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none transition
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
              }`}
            />
            <input
              type="url"
              placeholder="Event Image Link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none transition
  ${
    theme === "dark"
      ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
      : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
  }`}
            />

            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none transition
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
              }`}
            />

            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none transition
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
              }`}
            />

            <textarea
              rows="4"
              placeholder="Short Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none transition resize-none
              ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500"
                  : "border-gray-300 bg-gray-50 text-black placeholder-gray-500 focus:border-blue-500"
              }`}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md font-medium transition"
            >
              Save Event
            </button>
          </form>
        )}

        {/* Event List */}
        {viewMode === "list" && (
          <div className="flex flex-col gap-4">
            {events.length === 0 ? (
              <p
                className={`text-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                No events created yet.
              </p>
            ) : (
              events.map((event) => (
                <div
                  key={event._id}
                  className={`p-4 rounded-lg flex justify-between items-start shadow-md transition
                  ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-sm">
                      <strong>Time:</strong> {event.date}
                    </p>
                    <p className="text-sm">
                      <strong>Name:</strong> {event.event}
                    </p>
                    <p className="text-sm mt-1">{event.body}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteEvent(event._id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

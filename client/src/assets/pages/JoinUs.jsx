import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import { LoadingStage } from "../layout/LoadingStage";

const contributors = [
  { name: "Jolio Le", role: "Content Writing" },
  { name: "Daniel Ortiz", role: "Graphic Designer" },
  { name: "Amelia Brown", role: "Marketing Specialist" },
  { name: "Liam Smith", role: "UI/UX Designer" },
  { name: "Sophia Lee", role: "Content Strategist" },
  { name: "Ethan Davis", role: "SEO Expert" },
  { name: "Olivia Wilson", role: "Creative Writer" },
  { name: "Noah Martinez", role: "Brand Manager" },
];

export function JoinUs() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
    bio: "",
    portfolio: "",
    discord: "",
    driveLink: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Handle image preview for Drive links
    if (
      name === "driveLink" &&
      value.includes("drive.google.com") &&
      (value.includes("jpg") ||
        value.includes("jpeg") ||
        value.includes("png") ||
        value.includes("gif"))
    ) {
      setPreviewUrl(value);
    } else if (name === "driveLink") {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Validate Drive link
    if (
      !formData.driveLink.includes("drive.google.com") ||
      (!formData.driveLink.includes("sharing") &&
        !formData.driveLink.includes("view") &&
        !formData.driveLink.includes("open"))
    ) {
      alert(
        "⚠️ Please make sure your Google Drive link is set to 'Anyone with the link can view'."
      );
      setLoading(false);
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxtKh1y7krf0dilsLqkwQleegGOiA0aHads-FslM-oOgJbwFlOvD8HOVTE3Dg2aQX3_/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }
      );

      alert("✅ Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        skill: "",
        bio: "",
        portfolio: "",
        discord: "",
        driveLink: "",
      });
      setPreviewUrl(null);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("❌ There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Join Us Section */}
      <section
        className={`font-[Poppins] min-h-screen py-10 px-4 sm:px-8 lg:px-20 transition-colors duration-300 
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <LoadingStage show={loading} />

        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Join <span className="text-blue-600">Us</span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Share your project details with us and we’ll get back to you with a
            tailored proposal.
          </p>
        </div>

        {/* Contact Form + File Upload */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto pb-20 w-full px-2 sm:px-6 md:px-10"
        >
          {/* Left: Form */}
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
            <select
              name="skill"
              required
              value={formData.skill}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-black text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
            >
              <option value="" disabled>
                Primary Skill
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="SEO Services">SEO Services</option>
            </select>

            <textarea
              name="bio"
              rows="4"
              placeholder="Short Bio"
              value={formData.bio}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full flex-1 ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
            <input
              type="url"
              name="portfolio"
              placeholder="Portfolio link"
              value={formData.portfolio}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
            <input
              type="url"
              name="discord"
              placeholder="Discord Link"
              value={formData.discord}
              onChange={handleChange}
              className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-medium text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>

          {/* Right: File Upload */}
          <div className="flex items-center justify-center flex-1">
            <div
              className={`w-full h-[300px] sm:h-[350px] md:h-[500px] bg-[#006DFF1A] border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition overflow-hidden p-4 ${
                theme === "dark"
                  ? "border-gray-600 hover:border-blue-500"
                  : "border-blue-200 hover:border-blue-500"
              }`}
            >
              <a
                href="https://drive.google.com/drive/u/0/my-drive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-center"
              >
                Click here to upload your file to Google Drive
              </a>

              <input
                type="url"
                name="driveLink"
                placeholder="Paste Google Drive file link here"
                required
                value={formData.driveLink}
                onChange={handleChange}
                className={`mt-4 p-2 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                  theme === "dark"
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                    : "border-gray-300 bg-white text-black placeholder-gray-500"
                }`}
              />

              {/* 🛈 Tip for users */}
              <p
                className={`text-xs mt-2 text-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Make sure your file is set to{" "}
                <b>"Anyone with the link can view"</b>.
              </p>

              {formData.driveLink &&
                (previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-4 w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-red-500 text-6xl">📄</span>
                    <p className="mt-2 text-gray-500 text-sm sm:text-base truncate max-w-[200px]">
                      Google Drive File
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </form>
      </section>

      {/* Contributors Section */}
      <section
        className={`w-full px-4 sm:px-8 md:px-12 py-12 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-950 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Top Contributors
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            This Month
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contributors.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-4 rounded-lg shadow transition-colors ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="w-full max-w-[160px] sm:max-w-[200px] aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
              <div className="mt-3">
                <h3 className="text-base sm:text-lg font-semibold">
                  {person.name}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

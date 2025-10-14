import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import { LoadingStage } from "../layout/LoadingStage";

export function SendProposal() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    service: "",
    projectBrief: "",
    budget: "",
    driveLink: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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

  // ✅ Submit Handler with Access Check
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 Check if Drive link is public / shareable
    if (formData.driveLink && formData.driveLink.includes("drive.google.com")) {
      const lowerLink = formData.driveLink.toLowerCase();
      if (
        !lowerLink.includes("sharing") &&
        !lowerLink.includes("view") &&
        !lowerLink.includes("usp=sharing")
      ) {
        alert(
          "⚠️ Please make sure your Google Drive link is set to 'Anyone with the link can view'."
        );
        return;
      }
    }

    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzDBnyMsXREEIfsQPModJ1d36fJI7Nmf0b15mvPETWOlkdrpl1clRYYZJ-wkIE8f-Gm7g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        }
      );

      alert("✅ Proposal sent successfully!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        service: "",
        projectBrief: "",
        budget: "",
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
    <section
      className={`font-[Poppins] min-h-screen py-10 px-4 sm:px-8 lg:px-20 transition-colors duration-300 
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <LoadingStage show={loading} />

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Send <span className="text-blue-600">Proposal</span>
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

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto pb-20 w-full px-2 sm:px-6 md:px-10"
      >
        {/* Left: Inputs */}
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
          <input
            type="text"
            name="company"
            placeholder="Company/Startup Name"
            value={formData.company}
            onChange={handleChange}
            className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
              theme === "dark"
                ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                : "border-gray-300 bg-white text-black placeholder-gray-500"
            }`}
          />
          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
              theme === "dark"
                ? "border-gray-600 bg-black text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          >
            <option value="" disabled>
              Select a Role
            </option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="SEO Services">SEO Services</option>
          </select>

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
              theme === "dark"
                ? "border-gray-600 bg-black text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="SEO Services">SEO Services</option>
          </select>

          <textarea
            name="projectBrief"
            rows="4"
            placeholder="Short Project Brief"
            value={formData.projectBrief}
            onChange={handleChange}
            className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full flex-1 ${
              theme === "dark"
                ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                : "border-gray-300 bg-white text-black placeholder-gray-500"
            }`}
          />

          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className={`p-3 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
              theme === "dark"
                ? "border-gray-600 bg-black text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          >
            <option value="" disabled>
              Select a Budget Range
            </option>
            <option value="1000">$1,000</option>
            <option value="2000">$2,000</option>
            <option value="3000">$3,000</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-medium text-sm sm:text-base"
          >
            Send Proposal
          </button>
        </div>

        {/* Right: Drive Link Upload */}
        <div className="flex items-center justify-center flex-1">
          <div
            className={`w-full h-[300px] sm:h-[350px] md:h-[500px] bg-[#006DFF1A] border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition overflow-hidden p-4 ${
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
              value={formData.driveLink}
              onChange={handleChange}
              className={`mt-4 p-2 rounded-md border text-sm sm:text-base focus:outline-none w-full ${
                theme === "dark"
                  ? "border-gray-600 bg-transparent text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-black placeholder-gray-500"
              }`}
            />
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
  );
}

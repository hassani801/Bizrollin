import Service1 from "../imgs/servicespageimgs/Service1.png";
import Service2 from "../imgs/servicespageimgs/Service2.png";
import Service3 from "../imgs/servicespageimgs/Service3.jpg";
import Service4 from "../imgs/servicespageimgs/Service4.png";
import Service5 from "../imgs/servicespageimgs/Service5.png";
import Service6 from "../imgs/servicespageimgs/Service6.jpg";
import Service7 from "../imgs/servicespageimgs/Service7.jpg";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Branding Stories",
    img: Service1,
    points: [
      "Founder profile: long-form narrative that humanizes your leadership.",
      "Media-ready one-pager and short bios for press outreach.",
      "Visual direction: headshot guidance and image selection.",
      "Story distribution to targeted outlets and newsletters.",
      "Outcome: improved founder credibility and investor/customer interest.",
    ],
    link: "/services/branding",
  },
  {
    title: "Content Creation",
    img: Service2,
    points: [
      "Editorial calendar tailored to your growth goals.",
      "Blog posts, long-form articles, and SEO-driven landing content.",
      "Social assets: captions, carousels, short videos, and repurposed snippets.",
      "Multimedia: podcast or video episode production and show notes.",
      "Outcome: steady audience growth and improved organic discoverability.",
    ],
    link: "/services/content",
  },
  {
    title: "Website Development",
    img: Service3,
    points: [
      "Custom-built websites designed to match your brand identity.",
      "Responsive design: seamless experience across mobile, tablet, and desktop.",
      "SEO-friendly structure for higher visibility in search engines.",
      "User-centric layouts that convert visitors into customers.",
      "Secure, scalable, and optimized for performance.Outcome: A professional online presence that builds trust and drives growth.",
    ],
    link: "/services/webdev",
  },
  {
    title: "Startup PR & Marketing",
    img: Service4,
    points: [
      "Campaign planning: launch strategy, media list, and timeline.",
      "Proactive media outreach and interview coordination.",
      "Partner and influencer activations to extend reach.",
      "Coverage tracking, share/engagement metrics, & impact report.",
      "Measurable visibility increases during product launches & milestones.",
    ],
    link: "/services/marketing",
  },
  {
    title: "Community Engagement Packages",
    img: Service5,
    points: [
      "Community strategy and playbook (onboarding, moderation, retention).",
      "Platform setup and moderation (forums, Slack/Discord, or member portal).",
      "Events and activations: AMAs, webinars, and meetups.",
      "Member growth & retention: welcome flows, challenges, & content hooks.",
      "Outcome: stronger customer loyalty, repeat engagement, & organic referrals.",
    ],
    link: "/services/community",
  },
  {
    title: " Business Automation",
    img: Service6,
    points: [
      "Workflow automation to eliminate repetitive tasks.",
      "CRM & lead management system integration.",
      "Automated notifications, emails, and WhatsApp messages.",
      "Data syncing across apps (Google Sheets, Airtable, CRMs, ERPs).",
      "Custom automation tailored to your business needs.Outcome: Time saved, fewer errors, and a business that runs 24/7 — even when you don’t.",
    ],
    link: "/services/businessAutomation",
  },
  {
    title: " Ai Automation",
    img: Service7,
    points: [
      "AI transforms businesses by reducing manual work and boosting efficiency.",
      "Enhance customer experience with chatbots and predictive analytics.",
      "Streamline sales, personalize journeys, and integrate AI into your systems.",
      "Automation frees your team to focus on growth and innovation.",
      "Why choose us? Tailored solutions, secure integrations, and proven results.",
    ],

    link: "/services/Ai_Automation",
  },
];

export function Services() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 px-4 font-[Poppins] flex justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-[1200px] w-full">
        {/* Page Heading */}
        <div className="w-full flex justify-center mb-16">
          <h2
            className="
              text-center font-bold
              text-[20px] leading-[28px]
              sm:text-[28px] sm:leading-[36px]
              md:text-[36px] md:leading-[48px]
              lg:text-[48px] lg:leading-[64px]
            "
          >
            <span className={theme === "dark" ? "text-white" : "text-black"}>
              Our{" "}
            </span>
            <span className="text-blue-500">Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-6 rounded-lg p-6 shadow-lg w-full max-w-[1100px] 
    h-auto md:h-[400px] 
    ${theme === "dark" ? "bg-gray-900" : "bg-white"}
  `}
            >
              {/* Left Image */}
              <div className="w-full md:w-[40%] h-[180px] md:h-full flex-shrink-0">
                <img
                  src={service.img || "https://via.placeholder.com/320x220"}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Text */}
              <div className="w-full md:w-[60%] flex flex-col justify-between p-4 md:p-6 overflow-hidden">
                <h3
                  className="
                    text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]
                    font-bold mb-3
                  "
                >
                  {service.title}
                </h3>

                <ul
                  className={`list-disc list-inside space-y-2 scroll_Y pr-2 
                    text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] mb-4
                    ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                  `}
                >
                  {service.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

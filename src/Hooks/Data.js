export const NAV_LINKS = [
  "Work",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export const SKILLS_FEATURED = [
  {
    icon: "⚛️",
    name: "React.js",
    desc: "Advanced hooks, performance, architecture",
  },
  { icon: "▲", name: "Next.js", desc: "SSR, ISR, App Router, full-stack" },
  {
    icon: "🔷",
    name: "TypeScript",
    desc: "Strict typing, generics, utility types",
  },
  { icon: "📦", name: "Redux", desc: "Complex state, middleware, RTK" },
  { icon: "🟢", name: "Node.js", desc: "REST APIs, auth, real-time backends" },
  {
    icon: "🔌",
    name: "Socket.IO",
    desc: "Real-time events, rooms, namespaces",
  },
];

export const EXPERIENCE = [
  {
    company: "Alphavima Technologies",
    role: "Associate Software Engineer",
    period: "Jul 2024 – Apr 2026",
    live: false,
    color: "#0a84ff",
    bg: "linear-gradient(135deg,#0a1628,#0d1e40)",
    icon: "🏢",
    highlights: [
      { metric: "+30%", desc: "Asset lookup efficiency" },
      { metric: "~40%", desc: "Faster feature build time" },
      { metric: "1,000+", desc: "Assets managed in real-time" },
    ],
    bullets: [
      "Designed and built a React + TypeScript Asset Availability Tracker with reusable components, grid views, and dynamic filters backed by RESTful APIs — reduced asset lookup time by 30% for enterprise teams managing 1,000+ assets.",
      "Engineered a real-time scheduler using React and REST APIs managing 1,000+ assets with live updates — translated complex Figma wireframes into production-ready code with zero design deviation.",
      "Architected a configurable Kanban board using Redux Toolkit and Context API, reusable across 3+ Dataverse entities — cut feature build time by ~40% by establishing scalable state management patterns.",
      "Connected Twilio WhatsApp API to Dynamics 365 CRM via Node.js RESTful APIs — enabled real-time customer messaging and eliminated a manual communication step requiring tool-switching.",
      "Integrated AI suggestion agents into a CRM chat UI using React and state-managed conversation logs — reduced manual lookup time by ~35% by surfacing automated recommendations inline for enterprise users.",
      "Developed custom PCF Controls and integrated ML models into enterprise workflows using React and Azure — automated 3+ manual business processes within a production CRM environment.",
      "Optimised React app performance using lazy loading, useMemo/useCallback, and code-splitting — cut render time by 25% and improved Core Web Vitals scores across all devices.",
      "Led code reviews and maintained Git branching discipline across Agile sprints — consistently shipped full-stack features on schedule while collaborating with backend engineers, PMs, and QA."
    ],
  },
  {
    company: "Artificial Techligence",
    role: "Full Stack Web Developer Intern",
    period: "Feb 2024 – May 2024",
    live: false,
    color: "#30d158",
    bg: "linear-gradient(135deg,#0a1a14,#0d2818)",
    icon: "🚀",
    highlights: [
      { metric: "750+", desc: "Users secured via JWT" },
      { metric: "+30%", desc: "Response efficiency gained" },
      { metric: "AWS", desc: "Scalable portal deployment" },
    ],
    bullets: [
      "Architected a role-based JWT + OAuth authentication system using Node.js and Express.js — secured data for 750+ users across all roles in a production SaaS environment with zero unauthorised access incidents.",
      "Built a full-stack support ticket system using React frontend and Node.js REST APIs with real-time status tracking — increased team response efficiency by 30% by reducing ticket routing time.",
      "Designed UI components in Figma and implemented them in React with TailwindCSS — delivered pixel-perfect, mobile-first interfaces with consistent design system adherence across the product.",
      "Contributed to the AWS-deployed Career Catalyst Internship Portal using CI/CD pipelines — shipped a production-ready, cloud-deployed portal with scalable frontend and backend architecture."
    ],
  },
];

export const PROJECTS = [
  {
    name: "HasaBoard",
    tagline: "AI-Powered Client Onboarding SaaS.",
    desc: "Architecting a full-stack AI-powered client onboarding platform. Integrated Razorpay & Stripe, automated WhatsApp/email, and leveraged AI to auto-fill forms.",
    emoji: "📋",
    chips: ["React", "Node.js", "PostgreSQL", "DocuSeal", "Stripe", "WhatsApp API"],
    grad: "linear-gradient(135deg,#0a2e1f 0%,#1a2e1f 50%,#0a1411 100%)",
    accent: "#34c759",
    metrics: [
      ["Status", "In Progress"],
      ["Payments", "Stripe/Razorpay"],
      ["Stack", "PERN"],
    ],
  },
  {
    name: "TennChat",
    tagline: "Real-Time Chat Application.",
    desc: "Built a full-stack real-time messaging platform end-to-end with bidirectional communication, JWT auth, role-based controls, and Redux state management.",
    emoji: "💬",
    chips: ["React", "Redux", "TypeScript", "Socket.IO", "Node.js", "MongoDB"],
    grad: "linear-gradient(135deg,#0f1a3a 0%,#1a0f3a 50%,#0f1a3a 100%)",
    accent: "#5ac8fa",
    metrics: [
      ["Real-time", "WebSockets"],
      ["Auth", "JWT+Roles"],
      ["Testing", "Jest+RTL"],
    ],
  },
  {
    name: "AI Article Summarizer",
    tagline: "Any article. Under 8 seconds.",
    desc: "Built an AI-powered article summarizer integrating a third-party NLP REST API. Delivered summaries under 8s with cookie-based caching for efficiency.",
    emoji: "🤖",
    chips: ["React", "TypeScript", "Node.js", "REST API", "Cookie Storage"],
    grad: "linear-gradient(135deg,#0a1a2e 0%,#1a1a2e 50%,#0a1428 100%)",
    accent: "#bf5af2",
    metrics: [
      ["Speed", "<8 sec"],
      ["Efficiency", "+15%"],
      ["Cache", "Cookies"],
    ],
  },
];

export const ALL_SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5 & CSS3",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Redux Toolkit",
  "TailwindCSS",
  "GraphQL",
  "REST APIs",
  "Socket.IO",
  "JWT & OAuth",
  "AWS",
  "Azure",
  "CI/CD",
  "Git & GitHub",
  "Razorpay & Stripe",
  "Twilio WhatsApp API",
  "DocuSeal",
  "Jest & RTL",
  "AI Agents & NLP"
];

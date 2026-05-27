/**
 * Portfolio Static Datasets for Danish Khan
 * Centralized content repository for simple maintenance
 */

export const PERSONAL_DETAILS = {
  name: "Danish Khan",
  role: "Full Stack MERN Developer",
  roles: [
    "Full Stack MERN Developer",
    "UI/UX Designer",
    "Creative Frontend Coder",
    "Problem Solver"
  ],
  bio: "Specializing in crafting interactive modern UIs and high-performance, scalable web environments.",
  aboutDetailed: "Full Stack Developer specializing in building secure, clean, and highly optimized web applications. Focused on data structures, robust authentication flows, and seamless responsive client experiences. Driven by aesthetic excellence and flawless performance.",
  location: "Bhusawal, Maharashtra, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for freelance & full-time roles 🟢",
  email: "danishkhan.jsx@gmail.com",
  github: "DanisheKhan",
  linkedin: "danish-jsx",
  cvLink: "#", // Can be local PDF
  responseTime: "< 24 hours",
  academic: {
    degree: "Bachelor of Technology (B. Tech) in Computer Science",
    institution: "Raisoni Engineering College, Maharashtra",
    expectedDate: "Expected June 2026",
    cgpa: "8.9 / 10.0"
  }
};

export const CORE_STATS = [
  { id: "projects", label: "Projects Launched", value: 3, suffix: "+" },
  { id: "internship", label: "Months Interned", value: 10, suffix: "+" },
  { id: "skills", label: "Core Technologies", value: 15, suffix: "+" },
  { id: "coffee", label: "Coffee Consumed", value: 9999, suffix: " ∞" }
];

export const SKILLS_DATA = {
  frontend: {
    title: "Frontend Architecture",
    description: "Creating highly responsive, smooth, and modern graphical user interfaces.",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js (basic)", level: 65 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Context API", level: 90 }
    ]
  },
  backend: {
    title: "Backend & Systems",
    description: "Designing secure, modular REST APIs and robust database layers.",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "JWT Auth Flow", level: 92 },
      { name: "SQL & MySQL", level: 82 },
      { name: "MongoDB / Mongoose", level: 90 },
      { name: "Appwrite", level: 88 },
      { name: "Supabase", level: 85 }
    ]
  },
  deployment: {
    title: "Deployment & Dev Tools",
    description: "Automating cloud operations and system version control.",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel", level: 95 },
      { name: "Onrender", level: 85 },
      { name: "Cloudinary", level: 90 },
      { name: "Docker (basic)", level: 55 },
      { name: "Postman", level: 90 }
    ]
  }
};

export const PROJECTS_DATA = [
  {
    slug: "madina-perfumes",
    title: "Madina Perfumes",
    subtitle: "Full-stack e-commerce environment featuring authentication, product catalog, cart, admin interface, and secure payment handling.",
    category: "Full-Stack",
    year: "2025",
    role: "Lead Full Stack Developer",
    duration: "4 Months",
    liveUrl: "https://www.madinaperfumes.in",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Vite", "Supabase", "Node.js", "Tailwind CSS", "Framer Motion"],
    meta: {
      number: "01",
      type: "Web App"
    },
    caseStudy: {
      problem: "Traditional boutique perfumeries lack premium digital storefronts that translate physical olfactory sensory values into dynamic online visual environments, resulting in lower conversion rates and fragmented customer onboarding structures.",
      solution: "Engineered a luxury glassmorphism e-commerce hub driven by liquid page loading speeds, high-performance Supabase database structures, secure administrative controls for direct catalog manipulation, and fully optimized image rendering networks.",
      architecture: [
        "Single-Page Application powered by React 19 and Vite HMR structures.",
        "Supabase Auth & Database engine enabling instantaneous data syncing.",
        "GSAP ScrollTrigger integrations driving ambient item floating and parallax scroll dynamics.",
        "Global cart caching system operating in local contexts without latency."
      ],
      benchmarks: {
        performance: "98%",
        accessibility: "95%",
        seo: "100%",
        loadTime: "0.8s"
      }
    }
  },
  {
    slug: "home-share",
    title: "Home Share",
    subtitle: "Full-stack property rentals engine built with robust listing logic, integrated booking flows, secure user sessions, and cloud media asset handling.",
    category: "Full-Stack",
    year: "2024",
    role: "Full Stack Engineer",
    duration: "3 Months",
    liveUrl: "https://homeshare-9joh.onrender.com/listings",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Cloudinary"],
    meta: {
      number: "02",
      type: "Web App"
    },
    caseStudy: {
      problem: "Peer-to-peer real estate listings are frequently bottlenecked by heavy, non-optimized photo assets and cumbersome session controls, causing excessive bounces on mobile networks during rental search sessions.",
      solution: "Developed a responsive listings engine powered by Cloudinary's dynamic media compression pipelines, MongoDB's flexible geospatial queries, and custom Express security policies ensuring reliable multi-party communications.",
      architecture: [
        "MERN Architecture integrating Express routing and custom mongoose queries.",
        "JWT-secured sessions handling state retention natively.",
        "Cloudinary dynamic upload optimization transforming photos in-flight.",
        "Bootstrap grid and layouts establishing full viewport responsive adaptation."
      ],
      benchmarks: {
        performance: "93%",
        accessibility: "92%",
        seo: "95%",
        loadTime: "1.2s"
      }
    }
  },
  {
    slug: "portfolio",
    title: "Premium Creative Portfolio",
    subtitle: "Production-grade developer showcase engineered for liquid layout speeds, performance scoring, and fluid client-side interactive motions.",
    category: "UI/UX & Frontend",
    year: "2026",
    role: "Creative Frontend Designer",
    duration: "2 Months",
    liveUrl: "https://www.itsdanishkhan.me",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis Scroll"],
    meta: {
      number: "03",
      type: "Interactive UI"
    },
    caseStudy: {
      problem: "Traditional portfolios feel static, generic, and fail to evoke emotional engagement, failing to differentiate standard talent in highly competitive creative design markets.",
      solution: "Designed and engineered an Awwwards-inspired immersive showcase that pairs Three.js procedural backgrounds with fine-tuned GSAP ScrollTrigger timelines, implementing fluid Lenis smooth-scrolling physics and instant page transitions.",
      architecture: [
        "Three.js particle canvas generating 3D background grids.",
        "Lenis scroll thread controller synced to GSAP ScrollTrigger timeline hooks.",
        "AnimatePresence layout configurations preserving transitions.",
        "Tailwind v4 theme variables compiled natively for zero rendering overhead."
      ],
      benchmarks: {
        performance: "100%",
        accessibility: "98%",
        seo: "100%",
        loadTime: "0.4s"
      }
    }
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Meet Bros",
    role: "Website & UI/UX Designer & Developer Intern",
    duration: "June 2025 - March 2026 (10 months)",
    bullets: [
      "Built reusable UI architectural foundations to safeguard code scalability and design consistency.",
      "Aggressively tuned asset delivery chains to lower load footprints and expand responsiveness.",
      "Governed code branches and pipeline versions within Git/GitHub environments."
    ],
    tech: ["React.js", "Tailwind CSS", "UI/UX Wireframing", "Git", "Framer Motion"]
  }
];

export const SERVICES_DATA = [
  {
    title: "Full Stack Development",
    icon: "database",
    description: "Constructing robust, secure backends connected to pixel-perfect reactive client views."
  },
  {
    title: "UI/UX Interface Design",
    icon: "layout",
    description: "Designing award-winning dark interfaces emphasizing visual hierarchies and micro-motions."
  },
  {
    title: "Database Systems",
    icon: "server",
    description: "Creating highly efficient relational and document structures optimizing querying pipelines."
  },
  {
    title: "RESTful API Engineering",
    icon: "code",
    description: "Designing scalable endpoint infrastructures featuring fast auth and strict request schemas."
  },
  {
    title: "Performance Diagnostics",
    icon: "zap",
    description: "Auditing application runtime behaviors, media streams, and load paths for ultimate velocity."
  },
  {
    title: "Architecture Consulting",
    icon: "compass",
    description: "Structuring clean repository setups, CI workflows, and scalable component libraries."
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Alex Sterling",
    role: "Senior Engineering Manager, Meet Bros",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "Danish has a rare combination of pure visual aesthetic taste and outstanding technical implementation. During his 10-month internship, he completely redesigned and accelerated our core UI framework."
  },
  {
    name: "Priya Sharma",
    role: "Product Owner, Madina Perfumes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "Danish delivered a full e-commerce suite that exceeded our wildest expectations. Our site loads instantly, the administration flows are effortless, and customers frequently comment on how beautiful the interface is."
  },
  {
    name: "Rohan Das",
    role: "Full Stack Developer & Collaborator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "Working with Danish is incredibly productive. His codebase is exceptionally clean, well-architected, and fully optimized for GSAP motion animations. He is an outstanding engineer."
  }
];

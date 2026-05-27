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
  whatsapp: "https://wa.me/9322990946",
  github: "DanisheKhan",
  linkedin: "danishkhan-jsx",
  cvLink: "#",
  responseTime: "< 24 hours",
  academic: {
    degree: "Bachelor of Technology (B. Tech) in Computer Science",
    institution: "Raisoni Engineering College, Maharashtra",
    expectedDate: "Expected June 2026",
    cgpa: "8.9 / 10.0"
  }
};

export const CORE_STATS = [
  { id: "projects", label: "Projects Launched", value: 7, suffix: "+" },
  { id: "experience", label: "Years Experience", value: 4, suffix: "+" },
  { id: "skills", label: "Core Technologies", value: 20, suffix: "+" },
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
    subtitle: "A comprehensive property listing platform that allows users to browse, search, and filter real estate listings with detailed property information.",
    category: "Full-Stack",
    year: "2024",
    role: "Full Stack Engineer",
    duration: "3 Months",
    liveUrl: "https://homeshare-9joh.onrender.com/listings",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    meta: {
      number: "02",
      type: "Web App"
    },
    caseStudy: {
      problem: "Peer-to-peer real estate listings are frequently bottlenecked by heavy, non-optimized search interfaces and static lists, causing high bounce rates on standard mobile connections.",
      solution: "Engineered a robust, full-stack property rentals and listings aggregator integrating Express routes, custom MongoDB queries, responsive Bootstrap grids, and secure session authentications.",
      architecture: [
        "Developed a full-stack real estate application using Express.js and MongoDB for backend functionality.",
        "Implemented user authentication with sessions and password hashing for secure account management.",
        "Created dynamic listing pages with image galleries, maps integration, and property details.",
        "Built an intuitive interface with filtering options, search functionality, and responsive design for all devices."
      ],
      benchmarks: {
        performance: "94%",
        accessibility: "92%",
        seo: "96%",
        loadTime: "1.1s"
      }
    }
  },
  {
    slug: "mega-blog",
    title: "Mega Blog",
    subtitle: "A full-featured blogging platform that allows users to create, edit, and publish articles with rich text editing capabilities and seamless image management.",
    category: "Full-Stack",
    year: "2025",
    role: "Lead Full Stack Developer",
    duration: "2 Months",
    liveUrl: "https://mega-blog-brown-eta.vercel.app/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Redux Toolkit", "Appwrite", "Tailwind CSS"],
    meta: {
      number: "03",
      type: "Web App"
    },
    caseStudy: {
      problem: "Modern digital publishing tools are often weighed down by heavy backend dependencies and complex administrative dashboards, discouraging lightweight and creative content management.",
      solution: "Constructed a high-fidelity publishing hub utilizing Appwrite's robust serverless architecture and Redux Toolkit state syncs alongside TinyMCE for rich text curation.",
      architecture: [
        "Developed a responsive blog application using React.js for the frontend and Appwrite as a backend service.",
        "Implemented secure user authentication and authorization with Redux Toolkit for state management.",
        "Created a rich text editor with TinyMCE for content creation with image upload functionality.",
        "Built user-friendly post management with CRUD operations, categories, and search functionality."
      ],
      benchmarks: {
        performance: "96%",
        accessibility: "95%",
        seo: "98%",
        loadTime: "0.8s"
      }
    }
  },
  {
    slug: "frontend-showcase",
    title: "Frontend Showcase",
    subtitle: "A modern, responsive website showcasing advanced Tailwind CSS techniques with clean design principles and interactive elements.",
    category: "UI/UX & Frontend",
    year: "2024",
    role: "UI/UX Developer",
    duration: "1 Month",
    liveUrl: "https://danishekhan.github.io/Tailwind-Project/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    meta: {
      number: "04",
      type: "Interactive UI"
    },
    caseStudy: {
      problem: "Static, utility-first interfaces often fall flat due to lacking rich micro-animations, structured visual hierarchy, and cohesive interactive states.",
      solution: "Crafted a beautiful landing page showcase emphasizing modern, highly clean Tailwind layouts, custom transition curves, and fully responsive layouts.",
      architecture: [
        "Developed a fully responsive landing page using Tailwind CSS for utility-first styling approach.",
        "Implemented custom animations and transitions to enhance user experience and engagement.",
        "Created interactive components including navigation menus, cards, and call-to-action sections.",
        "Optimized for performance with proper responsive design practices for all screen sizes."
      ],
      benchmarks: {
        performance: "99%",
        accessibility: "96%",
        seo: "100%",
        loadTime: "0.4s"
      }
    }
  },
  {
    slug: "contact-manager",
    title: "Contact Manager App",
    subtitle: "A full-featured contact management application that allows users to store, organize, and search contacts with intuitive sorting capabilities.",
    category: "Full-Stack",
    year: "2024",
    role: "Frontend & Firebase Developer",
    duration: "1.5 Months",
    liveUrl: "https://contact-app-deployed.vercel.app/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Firebase", "JavaScript", "Tailwind CSS"],
    meta: {
      number: "05",
      type: "Web App"
    },
    caseStudy: {
      problem: "Standard contact book structures often lack real-time synchronization across multiple devices, causing mismatched details and delayed updates.",
      solution: "Implemented a fully synchronized real-time React application utilizing Firebase's Firestore database engines, custom authentication, and advanced keyword search filters.",
      architecture: [
        "Built a responsive React application with Firebase for real-time database functionality.",
        "Implemented user authentication to ensure secure access to personal contact information.",
        "Created an intuitive interface with search, sort, and filter capabilities for efficient contact management.",
        "Developed CRUD operations for contacts with form validation and real-time updates."
      ],
      benchmarks: {
        performance: "95%",
        accessibility: "94%",
        seo: "95%",
        loadTime: "0.9s"
      }
    }
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    subtitle: "An efficient currency conversion tool that provides real-time exchange rates between different currencies with a user-friendly interface.",
    category: "UI/UX & Frontend",
    year: "2024",
    role: "Frontend Developer",
    duration: "1 Month",
    liveUrl: "https://currency-converter-danishkhans-projects.vercel.app/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "JavaScript", "Postman", "Tailwind CSS"],
    meta: {
      number: "06",
      type: "Utility App"
    },
    caseStudy: {
      problem: "Financial computation tools are frequently hindered by slow API queries, outdated exchange rates, and clunky responsive grids.",
      solution: "Built an instantaneous currency utility driven by live rest API exchange streams, custom state selectors, and buttery fluid layout transitions.",
      architecture: [
        "Developed a React application that connects to an external API for accurate, up-to-date currency exchange rates.",
        "Implemented a responsive design with intuitive controls for selecting currencies and entering amounts.",
        "Created visual feedback for conversion results with smooth transitions and animations.",
        "Built with a focus on performance and minimal loading times for quick conversions."
      ],
      benchmarks: {
        performance: "98%",
        accessibility: "97%",
        seo: "98%",
        loadTime: "0.5s"
      }
    }
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    subtitle: "A secure password generation tool that creates strong, randomized passwords with customizable options for length and character types.",
    category: "UI/UX & Frontend",
    year: "2024",
    role: "Utility Developer",
    duration: "0.5 Months",
    liveUrl: "https://password-generator-danishkhans-projects.vercel.app/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    meta: {
      number: "07",
      type: "Utility App"
    },
    caseStudy: {
      problem: "Generating complex, high-security passwords manually is difficult and prone to pattern replication, leaving personal accounts vulnerable.",
      solution: "Created a modern cryptographic password builder utilizing customized randomized strings, dynamic security indicators, and one-click clipboard copying integrations.",
      architecture: [
        "Built a React-based utility that generates cryptographically secure random passwords.",
        "Implemented user options for password length and inclusion of numbers, symbols, and letter case.",
        "Added one-click copy functionality for seamless use across different applications.",
        "Created visual feedback for successful generation and copying actions."
      ],
      benchmarks: {
        performance: "100%",
        accessibility: "98%",
        seo: "95%",
        loadTime: "0.3s"
      }
    }
  },
  {
    slug: "bg-changer",
    title: "Background Color Changer",
    subtitle: "An interactive web application that allows users to dynamically change the background color through pre-defined color buttons.",
    category: "UI/UX & Frontend",
    year: "2024",
    role: "Frontend Developer",
    duration: "0.5 Months",
    liveUrl: "https://bg-changer-seven-gamma.vercel.app/",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "JavaScript", "Vite", "CSS3"],
    meta: {
      number: "08",
      type: "Utility App"
    },
    caseStudy: {
      problem: "Interactive state rendering on web pages can often feel jarring or instant due to lack of smooth CSS interpolation.",
      solution: "Constructed an immersive color-swapping environment emphasizing reactive state hooks, custom HEX transitions, and zero-latency view adjustments.",
      architecture: [
        "Developed a simple yet effective React application demonstrating state management fundamentals.",
        "Implemented a color palette with popular color options for one-click background changes.",
        "Added visual feedback with smooth color transitions between selections.",
        "Created a responsive design that works across all device sizes."
      ],
      benchmarks: {
        performance: "100%",
        accessibility: "99%",
        seo: "98%",
        loadTime: "0.2s"
      }
    }
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Security & Defense Projects",
    role: "Software Developer",
    duration: "2021 - 2023",
    bullets: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization."
    ],
    tech: ["C++", "MapsUI", "WPF", "Windows Forms", "XML / SVG"]
  },
  {
    company: "Car Manufacture",
    role: "Back-End Developer",
    duration: "2023 - 2024",
    bullets: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control.",
      "Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "Ensured data privacy for customers and partners through industry-compliant protocols.",
      "Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities."
    ],
    tech: ["Node.js", "APIs", "ISO 26262", "OTA Updates", "Cloud Systems"]
  },
  {
    company: "Self-Employed",
    role: "Freelance Developer",
    duration: "2025 - Present",
    bullets: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies."
    ],
    tech: ["Three.js", "React.js", "Vite", "WebAPI", "GSAP"]
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
    name: "Jack",
    role: "Product Reviewer",
    image: "https://robohash.org/jack",
    quote: "I've never seen anything like this before. It's amazing. I love it."
  },
  {
    name: "Jill",
    role: "UI Engineer",
    image: "https://robohash.org/jill",
    quote: "I don't know what to say. I'm speechless. This is amazing."
  },
  {
    name: "John",
    role: "Creative Director",
    image: "https://robohash.org/john",
    quote: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "Alice",
    role: "Project Manager",
    image: "https://robohash.org/alice",
    quote: "This is hands down the best thing I've experienced. Highly recommend!"
  },
  {
    name: "Bob",
    role: "Lead Architect",
    image: "https://robohash.org/bob",
    quote: "Incredible work! The attention to detail is phenomenal."
  },
  {
    name: "Charlie",
    role: "Engineering Manager",
    image: "https://robohash.org/charlie",
    quote: "This exceeded all my expectations. Absolutely stunning!"
  },
  {
    name: "Dave",
    role: "Developer",
    image: "https://robohash.org/dave",
    quote: "Simply breathtaking. The best decision I've made in a while."
  },
  {
    name: "Eve",
    role: "QA Lead",
    image: "https://robohash.org/eve",
    quote: "So glad I found this. It has changed the game for me."
  }
];

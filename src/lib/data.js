/**
 * Portfolio Static Datasets for Danish Khan
 * Centralized content repository for simple maintenance
 */

export const PERSONAL_DETAILS = {
  name: "Danish Khan",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "UI/UX Designer Intern"
  ],
  bio: "Results-driven Full Stack Developer specializing in the MERN stack for building scalable, responsive, and secure web applications.",
  aboutDetailed: "Results-driven Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) for building scalable, responsive, and secure web applications. Proficient in architecting RESTful APIs, implementing robust authentication systems, and utilizing Data Structures & Algorithms (DSA) to write clean, optimized code. Experienced in modern frontend styling frameworks like Tailwind CSS and version control workflows.",
  location: "Bhusawal, Jalgaon, Maharashtra, 425201",
  timezone: "IST (UTC+5:30)",
  availability: "Available for freelance & full-time roles 🟢",
  email: "danishkhan.jsx@gmail.com",
  whatsapp: "https://wa.me/919322990946",
  github: "DanisheKhan",
  linkedin: "danish-jsx",
  cvLink: "#",
  responseTime: "< 24 hours",
  academic: {
    degree: "Bachelor of Technology (B. Tech) in Computer Science",
    institution: "Raisoni Engineering College, Maharashtra",
    expectedDate: "June 2026",
    cgpa: "7.79 / 10"
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
      { name: "HTML / CSS", level: 98 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "Redux Toolkit", level: 85 },
      { name: "React Router DOM", level: 90 },
      { name: "Axios", level: 85 },
      { name: "Context API", level: 90 }
    ]
  },
  backend: {
    title: "Backend & Systems",
    description: "Designing secure, modular REST APIs and robust database layers.",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "SQL & MySQL", level: 85 },
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "Appwrite", level: 88 },
      { name: "RESTful APIs", level: 95 },
      { name: "JWT Authentication", level: 92 },
      { name: "Supabase", level: 85 }
    ]
  },
  deployment: {
    title: "Deployment & Tools",
    description: "Automating cloud operations and system version control.",
    items: [
      { name: "Vercel & Render", level: 90 },
      { name: "Cloudinary", level: 90 },
      { name: "Docker (basic)", level: 55 },
      { name: "GitHub Pages", level: 85 },
      { name: "Git & GitHub", level: 92 },
      { name: "Thunder Client", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Chrome DevTools", level: 90 }
    ]
  }
};

export const PROJECTS_DATA = [
  {
    slug: "madina-perfumes",
    title: "Madina Perfumes (E-Commerce Platform)",
    subtitle: "Architected a full-stack platform with user authentication, product catalogs, intuitive cart workflows, secure payment gateway integration, and a robust admin dashboard.",
    category: "Full-Stack",
    year: "2025",
    role: "Lead Full Stack Developer",
    duration: "4 Months",
    liveUrl: "https://www.madinaperfumes.in",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Vite", "Supabase", "Node.js", "Tailwind CSS"],
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
    title: "Home Share (Property Rental Web App)",
    subtitle: "Built a features-rich web app enabling secure user authentication, property listings, interactive bookings, and integrated Cloudinary for high-performance media storage.",
    category: "Full-Stack",
    year: "2024",
    role: "Full Stack Engineer",
    duration: "3 Months",
    liveUrl: "https://homeshare-9joh.onrender.com/listings",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
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
    slug: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Created a high-performance portfolio leveraging mobile-first design and optimized asset delivery using Vite for fast loading metrics.",
    category: "Full-Stack",
    year: "2025",
    role: "Lead Full Stack Developer",
    duration: "2 Months",
    liveUrl: "https://danishkhan.jsx",
    githubUrl: "https://github.com/DanisheKhan",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    meta: {
      number: "03",
      type: "Web App"
    },
    caseStudy: {
      problem: "Creating an engaging portfolio requires balancing complex animations, robust styling, and extreme performance.",
      solution: "Constructed a high-fidelity publishing hub utilizing React.js and Framer motion to create fluid interactions and a memorable experience.",
      architecture: [
        "Developed a responsive portfolio application using React.js for the frontend.",
        "Implemented smooth scrolling and page transitions.",
        "Created rich animated sections with GSAP and Framer motion.",
        "Built user-friendly component structure."
      ],
      benchmarks: {
        performance: "100%",
        accessibility: "100%",
        seo: "100%",
        loadTime: "0.2s"
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
    company: "Meet Bros",
    role: "Full Stack Developer & UI/UX Designer Intern (Remote)",
    duration: "June 2025 - March 2026",
    bullets: [
      "Designed, developed, and launched multiple commercial and production-level web applications, including Vegeta Star Film, Dynameet, and HarryOm.",
      "Utilized a full-stack engineering approach (React.js, Node.js, Express.js, Tailwind CSS) to build robust, interactive user interfaces and structured database architectures.",
      "Engineered scalable, reusable UI components and optimized web performance metrics, successfully accelerating loading times across production platforms.",
      "Managed version control and team-based integrations leveraging Git and GitHub workflows for seamless deployment and feature iteration."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Git", "GitHub"]
  },
  {
    company: "Madina Perfumes",
    role: "Freelance Full Stack Developer",
    duration: "2026",
    bullets: [
      "Architected a full-stack e-commerce platform with user authentication, product catalogs, intuitive cart workflows, secure payment gateway integration, and a robust admin dashboard.",
      "Engineered a luxury glassmorphism e-commerce hub driven by high-performance Supabase database structures and fully optimized image rendering networks."
    ],
    link: "https://www.madinaperfumes.in",
    tech: ["React.js", "Vite", "Supabase", "Node.js", "Tailwind CSS", "Razorpay", "Cloudinary"]
  },
  {
    company: "Independent Projects",
    role: "Ongoing Full Stack Development",
    duration: "Present",
    bullets: [
      "Continuously building and iterating on scalable web applications leveraging modern frontend frameworks and robust backends.",
      "Exploring new system designs, real-time synchronization techniques, and advanced interactive UI components."
    ],
    tech: ["React Native", "ImageKit", "Razorpay", "Supabase", "SQL"]
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

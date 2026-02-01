import { PersonalInfo, Project, Experience, StackCategory, BlogPost } from "./types";

/* ================================
   PERSONAL INFO (UPDATED)
================================ */

export const personalInfo: PersonalInfo = {
    name: "Narendra Choudhary",
    title: "Front-End Enthusiast + Full-Stack Developer",

    bio: `Full Stack Developer with 2+ years of experience building scalable SaaS platforms, automation-driven solutions, 
  and high-performance web applications. Skilled in React, Next.js, Node.js, TypeScript, and modern backend frameworks 
  like NestJS. Passionate about crafting clean UI experiences, optimizing systems, and delivering impactful products.`,

    email: "narendradeveloper02@gmail.com",
    location: "Mumbai, Maharashtra, India",

    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Narend9324",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/narendra-choudhary02",
            icon: "linkedin",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: "twitter",
        },
    ],
};

/* ================================
   PROJECTS (UPDATED)
================================ */

export const projects: Project[] = [
    {
        id: "1",
        title: "Swiss Porter — Luggage Transfer & Delivery Platform",
        link: "https://swissporters.com",
        timeline: "2025",
        technologies: [
            "React",
            "NestJS",
            "Tailwind CSS",
            "Zustand",
            "TanStack Query",
            "Google Maps API",
            "PostgreSQL",
            "AWS",
        ],
        description:
            "Built a Switzerland-based luggage transfer platform from the ground up, enabling travelers to seamlessly book, track, and manage luggage deliveries. Developed customer, partner, and admin dashboards with real-time commission tracking, secure payments, and role-based access control.",

        highlights: [
            "Developed full booking flow with real-time pricing, delivery scheduling, and luggage management",
            "Built customer, partner, and admin panels with role-based authentication and commission monitoring",
            "Integrated secure payment workflows and automated operational processes, reducing manual work by 40%",
            "Optimized backend performance with database query improvements and caching, boosting speed by 30%",
            "Deployed scalable infrastructure on AWS to ensure reliability during high-traffic booking periods",
            "Designed a conversion-focused landing page that increased partner onboarding and user sign-ups",
            "Implemented Google Maps Autocomplete, route customization, and location-based service validation",
        ],
    },

    {
        id: "2",
        title: "NADO AI — Intelligent Support & Automation Assistant",
        timeline: "2025",
        technologies: [
            "Next.js",
            "TypeScript",
            "OpenAI API",
            "Node.js",
            "AI-driven Workflows",
        ],
        description:
            "An AI-powered support assistant created as an extension of the HPA platform, built to provide automated responses to customer queries, streamline client support, and deliver intelligent recommendations using OpenAI.",
        highlights: [
            "Developed an AI assistant that interprets and responds to customer inquiries using OpenAI",
            "Built a conversational UI using Next.js and TypeScript for seamless support interaction",
            "Connected NADO AI with HPA backend services to fetch user data, context, and deliver accurate responses",
            "Optimized AI interaction performance for real-time query turnaround and support insights",
            "Reduced human support effort by enabling automatic resolution for common questions and tasks",
        ],
    },

    {
        id: "3",
        title: "Algoris — High-Performance Marketing Landing Page",
        link: "https://algoris.co/",
        timeline: "2024",
        technologies: [
            "Gatsby",
            "Tailwind CSS",
            "Strapi CMS",
            "UI/UX Design",
            "Animations",
        ],
        description:
            "Developed a high-performance, responsive landing page for Algoris using Gatsby, Tailwind CSS, and Strapi CMS. The platform was designed to maximize conversions, improve engagement, and provide seamless content management for marketing teams.",

        highlights: [
            "Built a fast, SEO-friendly landing page with Gatsby for optimal performance and scalability",
            "Integrated Strapi CMS for dynamic content updates and smooth marketing workflows",
            "Improved user engagement by 30% through responsive UI enhancements and UX optimization",
            "Implemented interactive components using Gatsby state management",
            "Added smooth custom animations for a modern, engaging browsing experience",
            "Ensured cross-browser compatibility and consistent performance across all devices",
        ],
    }

];

/* ================================
   EXPERIENCE (UPDATED)
================================ */

export const experiences: Experience[] = [
    {
        id: "1",
        company: "Kryptoninc®",
        role: "Software Engineer / Full Stack Developer",
        timeline: "Jan 2024 - Present",
        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "NestJS",
            "TypeScript",
            "PostgreSQL",
            "GCP",
        ],
        description:
            "Developing and scaling SaaS platforms and automation-driven solutions focused on integration and e-commerce systems.",
        responsibilities: [
            "Building full-stack applications with React + Next.js",
            "Developing scalable backend services using Node.js & NestJS",
            "Designing automation workflows for e-commerce integrations",
            "Collaborating with teams to deliver high-impact SaaS features",
        ],
        achievements: [
            "Completed 1+ year milestone with consistent performance",
            "Contributed to scaling SaaS infrastructure and automation systems",
            "Recognized for strong ownership and problem-solving mindset",
        ],
    },

    {
        id: "2",
        company: "Algoris",
        role: "Software Engineer (Full Stack Developer)",
        timeline: "Apr 2023 - Jan 2025",
        technologies: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React",
            "MongoDB",
            "GraphQL",
            "REST APIs",
            "Docker",
            "Git",
            "Jest",
            "Playwright",
        ],
        description:
            "Worked on building and scaling modern web applications using the MERN stack, focusing on backend API development, third-party integrations, automation workflows, and ensuring high-quality delivery through testing and customer-focused engineering support.",

        responsibilities: [
            "Developed and maintained scalable MERN-based web applications for production environments",
            "Designed and implemented RESTful APIs and GraphQL services to enable seamless platform communication",
            "Integrated third-party APIs to automate workflows and extend core product functionality",
            "Built and maintained automated testing suites using Jest and Playwright to ensure reliability and performance",
            "Collaborated with cross-functional teams to deliver features aligned with business and customer needs",
            "Supported customers as a Customer Success Engineer, resolving technical issues and improving satisfaction",
        ],

        achievements: [
            "Improved platform stability through rigorous automated testing and QA workflows",
            "Enhanced backend communication with optimized API architecture and integrations",
            "Recognized for strong problem-solving skills and customer-oriented engineering mindset",
        ],
    },

    {
        id: "3",
        company: "The Sparks Foundation",
        role: "Web Developer Intern",
        timeline: "Oct 2021",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        description:
            "Web development internship focused on responsive applications and industry best practices.",
        responsibilities: [
            "Built responsive web pages and frontend components",
            "Learned real-world development workflows and collaboration",
        ],
        achievements: [
            "Successfully completed internship program",
            "Built multiple hands-on web development projects",
        ],
    },
];

/* ================================
   TECH STACK (UPDATED)
================================ */

export const stackCategories: StackCategory[] = [
    {
        category: "Frontend",
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Zustand",
            "UI/UX Design",
        ],
    },

    {
        category: "Backend",
        technologies: [
            "Node.js",
            "Express",
            "NestJS",
            "REST APIs",
            "Authentication (JWT)",
        ],
    },

    {
        category: "Databases",
        technologies: ["PostgreSQL", "MongoDB", "SQL"],
    },

    {
        category: "Tools & DevOps",
        technologies: ["Git", "Google Cloud Platform (GCP)", "CI/CD", "Automation"],
    },

    {
        category: "Specializations",
        technologies: [
            "SaaS Scaling",
            "E-commerce Integration",
            "SEO Optimization",
            "3D Rendering (WebGL)",
        ],
    },
];

/* ================================
   BLOG POSTS (UNCHANGED)
================================ */

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Building Modern Web Applications with Next.js",
        excerpt:
            "Learn how to leverage Next.js App Router for building performant and scalable web applications.",
        date: "2024-01-15",
        readTime: "5 min read",
        tags: ["Next.js", "React", "Web Development"],
        slug: "building-modern-web-apps-nextjs",
    },
];

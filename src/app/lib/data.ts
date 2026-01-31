import { PersonalInfo, Project, Experience, StackCategory, BlogPost } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Narendra Choudhary',
    title: 'Full Stack Developer | Software Engineer',
    bio: 'Full Stack Engineer with over 2 years of experience in building and scaling SaaS platforms and automation-driven solutions. Specializing in integration and e-commerce automation with modern web technologies including React, Next.js, Node.js, and TypeScript.',
    email: 'narendradeveloper02@gmail.com', // Update manually
    location: 'Mumbai, Maharashtra, India',
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/Narend9324',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/narendra-choudhary02',
            icon: 'linkedin',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/yourusername', // Update manually
            icon: 'twitter',
        },
    ],
};

export const projects: Project[] = [
    {
        id: '1',
        title: 'Anterior - 3D Model Visualization',
        link: 'https://github.com/Narend9324/Anterior',
        timeline: '2024',
        technologies: ['JavaScript', '3D Rendering', 'WebGL'],
        description: 'A professional project for 3D Models visualization and interaction, enabling users to view and interact with complex 3D models in the browser.',
        highlights: [
            'Implemented interactive 3D model rendering',
            'Built intuitive controls for model manipulation',
            'Optimized performance for smooth interactions',
        ],
    },
    {
        id: '2',
        title: 'NextJs Authentication System',
        link: 'https://github.com/Narend9324/NextJs-Authentication',
        timeline: '2024',
        technologies: ['Next.js', 'TypeScript', 'Authentication', 'JWT'],
        description: 'A robust authentication system built from scratch with comprehensive signup/login functionality and secure session management.',
        highlights: [
            'Implemented secure JWT-based authentication',
            'Built user registration and login flows',
            'Created protected routes and middleware',
        ],
    },
    {
        id: '3',
        title: 'Travel App',
        link: 'https://github.com/Narend9324/Travel-app',
        timeline: '2024',
        technologies: ['TypeScript', 'React', 'Tailwind CSS'],
        description: 'A modern travel application with a focus on high-quality UI/UX, helping users discover and plan their travel destinations.',
        highlights: [
            'Designed beautiful, responsive UI with Tailwind CSS',
            'Implemented smooth animations and transitions',
            'Built with TypeScript for type safety',
        ],
    },
    {
        id: '4',
        title: 'Weather App',
        timeline: '2023',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
        description: 'A real-time weather information application using third-party APIs to provide accurate weather forecasts.',
        highlights: [
            'Integrated weather API for real-time data',
            'Built responsive design for all devices',
            'Implemented location-based weather search',
        ],
    },
];

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Kryptoninc®',
        role: 'Software Engineer / Full Stack Developer',
        timeline: 'Jan 2024 - Present',
        technologies: ['Node.js', 'Express', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'GCP'],
        description: 'Developing and scaling SaaS platforms and automation-driven solutions with a focus on integration and e-commerce automation.',
        responsibilities: [
            'Building and maintaining full-stack web applications',
            'Developing automation solutions for e-commerce platforms',
            'Implementing scalable SaaS platform features',
            'Working with modern tech stack including React, Next.js, and Node.js',
        ],
        achievements: [
            'Successfully completed 1 year milestone in January 2025',
            'Contributed to scaling SaaS platform infrastructure',
            'Implemented automation-driven solutions for clients',
            'Recognized for consistency and strong problem-solving mindset',
        ],
    },
    {
        id: '2',
        company: 'The Sparks Foundation',
        role: 'Web Developer (Intern)',
        timeline: 'Oct 2021',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        description: 'Web Development internship focusing on building responsive web applications and learning industry best practices.',
        responsibilities: [
            'Developed responsive web applications',
            'Implemented modern UI/UX designs',
            'Collaborated with team on project deliverables',
        ],
        achievements: [
            'Successfully completed internship program',
            'Built multiple web development projects',
            'Gained hands-on experience with modern web technologies',
        ],
    },
];

export const stackCategories: StackCategory[] = [
    {
        category: 'Frontend',
        technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Python', 'Go'],
    },
    {
        category: 'Tools & DevOps',
        technologies: ['Git', 'Google Cloud Platform (GCP)', 'SaaS Scaling', 'Automation', 'CI/CD'],
    },
    {
        category: 'Specializations',
        technologies: ['E-commerce Integration', 'SEO', 'UI/UX Design', '3D Rendering', 'WebGL'],
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building Modern Web Applications with Next.js',
        excerpt: 'Learn how to leverage Next.js App Router for building performant and scalable web applications.',
        date: '2024-01-15',
        readTime: '5 min read',
        tags: ['Next.js', 'React', 'Web Development'],
        slug: 'building-modern-web-apps-nextjs',
    },
    {
        id: '2',
        title: 'TypeScript Best Practices for React Developers',
        excerpt: 'Discover essential TypeScript patterns and practices that will improve your React development workflow.',
        date: '2024-01-10',
        readTime: '7 min read',
        tags: ['TypeScript', 'React', 'Best Practices'],
        slug: 'typescript-best-practices-react',
    },
    {
        id: '3',
        title: 'Mastering Tailwind CSS: Tips and Tricks',
        excerpt: 'Unlock the full potential of Tailwind CSS with these advanced tips and customization techniques.',
        date: '2024-01-05',
        readTime: '6 min read',
        tags: ['Tailwind CSS', 'CSS', 'Design'],
        slug: 'mastering-tailwind-css',
    },
];

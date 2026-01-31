export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface Project {
    id: string;
    title: string;
    link?: string;
    timeline: string;
    technologies: string[];
    description: string;
    highlights?: string[];
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    timeline: string;
    technologies: string[];
    description: string;
    responsibilities?: string[];
    achievements?: string[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    email: string;
    location?: string;
    profileImage?: string;
    socialLinks: SocialLink[];
}

export interface StackCategory {
    category: string;
    technologies: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
}
